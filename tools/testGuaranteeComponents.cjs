const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const compiler = require("vue-template-compiler");
const Vue = require("vue");
const registered = {};
for (const name of ["GuaranteeBadge", "GuaranteeLabelFull", "GuaranteeLabelWidget"])
{
    const source = fs.readFileSync(path.join(__dirname, "../resources/js/src/app/components/item", name + ".vue"), "utf8");
    const parsed = compiler.parseComponent(source);
    const compiled = compiler.compile(parsed.template.content);
    assert.deepEqual(compiled.errors, []);
    const context = {};
    vm.runInNewContext(parsed.script.content.replace("export default", "var component ="), context);
    const component = context.component;
    component.render = new Function(compiled.render);
    component.staticRenderFns = compiled.staticRenderFns.map(fn => new Function(fn));
    registered[component.name] = component;
}
assert.deepEqual(Object.keys(registered), ["guarantee-badge", "guarantee-label-full", "guarantee-label-widget"]);
for (const entry of ["app.js", "base.js"])
{
    const source = fs.readFileSync(path.join(__dirname, "../resources/js/src", entry), "utf8");
    for (const name of Object.keys(registered)) assert.ok(source.includes('Vue.component("' + name + '"'));
}
const state = Vue.observable({variation: {item: {manufacturer: {externalName: "Hersteller A"}}, variation: {model: "Modell A", durabilityYears: 5}}});
const parent = new Vue({provide: {itemId: "item-test"}});
const widget = new (Vue.extend(registered["guarantee-label-widget"]))({parent});
widget.$store = {getters: {get "item-test/currentItemVariation"() { return state.variation; }}};
assert.equal(widget.isVisible, true);
assert.equal(widget.brandValue, "Hersteller A");
assert.equal(widget.modelValue, "Modell A");
assert.equal(widget.durabilityYears, 5);
state.variation = {item: {manufacturer: {externalName: "Hersteller B"}}, variation: {model: "Modell B", durabilityYears: 10}};
assert.equal(widget.brandValue, "Hersteller B");
assert.equal(widget.modelValue, "Modell B");
assert.equal(widget.durabilityYears, 10);
state.variation = {item: {manufacturer: {externalName: ""}}, variation: {model: "", durabilityYears: ""}};
assert.equal(widget.isVisible, false);
for (const component of Object.values(registered))
{
    assert.equal(typeof component.render, "function");
    assert.ok(Array.isArray(component.staticRenderFns));
}
console.log("Guarantee component registration, render functions, visibility and reactive variant changes passed.");
