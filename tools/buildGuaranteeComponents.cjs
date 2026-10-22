/* Compile the backported AGPL-3.0 Ceres 5.0.86 guarantee styles. */
const fs = require("node:fs");
const path = require("node:path");
const sass = require("sass");
const root = path.resolve(__dirname, "..");
const scss = fs.readFileSync(path.join(root, "resources/scss/guarantees.scss"), "utf8");
const css = sass.compileString(scss, {style: "compressed"}).css;
fs.writeFileSync(path.join(root, "resources/css/waldorf-guarantees.css"), "/* Ceres 5.0.86 guarantee styles, AGPL-3.0. */\n" + css + "\n");
console.log("Built guarantee styles. Rebuild the theme JavaScript for client and SSR components.");
