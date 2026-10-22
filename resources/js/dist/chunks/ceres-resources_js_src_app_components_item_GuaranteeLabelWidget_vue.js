"use strict";
(self["webpackChunkWaldorfshop8"] = self["webpackChunkWaldorfshop8"] || []).push([["resources_js_src_app_components_item_GuaranteeLabelWidget_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/item/GuaranteeLabelWidget.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/item/GuaranteeLabelWidget.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "guarantee-label-widget",
  props: {
    collapseId: String,
    customClass: {
      type: String,
      default: ""
    },
    spacingClasses: {
      type: String,
      default: ""
    },
    inlineSpacings: {
      type: String,
      default: ""
    },
    badgeAltText: {
      type: String,
      default: ""
    }
  },
  inject: {
    itemId: {
      default: null
    }
  },
  computed: {
    currentVariation() {
      return this.$store.getters[`${this.itemId}/currentItemVariation`];
    },
    brandValue() {
      var _this$currentVariatio;
      return ((_this$currentVariatio = this.currentVariation) === null || _this$currentVariatio === void 0 || (_this$currentVariatio = _this$currentVariatio.item) === null || _this$currentVariatio === void 0 || (_this$currentVariatio = _this$currentVariatio.manufacturer) === null || _this$currentVariatio === void 0 ? void 0 : _this$currentVariatio.externalName) || "";
    },
    modelValue() {
      var _this$currentVariatio2;
      return ((_this$currentVariatio2 = this.currentVariation) === null || _this$currentVariatio2 === void 0 || (_this$currentVariatio2 = _this$currentVariatio2.variation) === null || _this$currentVariatio2 === void 0 ? void 0 : _this$currentVariatio2.model) || "";
    },
    durabilityYears() {
      var _this$currentVariatio3;
      return ((_this$currentVariatio3 = this.currentVariation) === null || _this$currentVariatio3 === void 0 || (_this$currentVariatio3 = _this$currentVariatio3.variation) === null || _this$currentVariatio3 === void 0 ? void 0 : _this$currentVariatio3.durabilityYears) || "";
    },
    isVisible() {
      return this.brandValue.length > 0 && this.modelValue.length > 0 && String(this.durabilityYears).length > 0;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/item/GuaranteeLabelWidget.vue?vue&type=template&id=bb2189ec":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/item/GuaranteeLabelWidget.vue?vue&type=template&id=bb2189ec ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* binding */ render; },
/* harmony export */   staticRenderFns: function() { return /* binding */ staticRenderFns; }
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.isVisible ? _c("div", {
    class: ["widget", "widget-guarantee-label", _vm.customClass, _vm.spacingClasses],
    style: _vm.inlineSpacings
  }, [_c("button", {
    staticClass: "guarantee-badge-toggle btn-collapse p-0 border-0 bg-transparent collapsed",
    attrs: {
      type: "button",
      "data-toggle": "collapse",
      "data-target": "#" + _vm.collapseId,
      "aria-expanded": "false",
      "aria-controls": _vm.collapseId,
      "aria-label": _vm.badgeAltText
    }
  }, [_c("guarantee-badge", {
    attrs: {
      guarantee: _vm.durabilityYears
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "collapse guarantee-label-collapse",
    attrs: {
      id: _vm.collapseId
    }
  }, [_c("guarantee-label-full", {
    attrs: {
      guarantee: _vm.durabilityYears,
      brand: _vm.brandValue,
      model: _vm.modelValue
    }
  })], 1)]) : _vm._e();
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/src/app/components/item/GuaranteeLabelWidget.vue":
/*!***********************************************************************!*\
  !*** ./resources/js/src/app/components/item/GuaranteeLabelWidget.vue ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GuaranteeLabelWidget_vue_vue_type_template_id_bb2189ec__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GuaranteeLabelWidget.vue?vue&type=template&id=bb2189ec */ "./resources/js/src/app/components/item/GuaranteeLabelWidget.vue?vue&type=template&id=bb2189ec");
/* harmony import */ var _GuaranteeLabelWidget_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GuaranteeLabelWidget.vue?vue&type=script&lang=js */ "./resources/js/src/app/components/item/GuaranteeLabelWidget.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _GuaranteeLabelWidget_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _GuaranteeLabelWidget_vue_vue_type_template_id_bb2189ec__WEBPACK_IMPORTED_MODULE_0__.render,
  _GuaranteeLabelWidget_vue_vue_type_template_id_bb2189ec__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/app/components/item/GuaranteeLabelWidget.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/app/components/item/GuaranteeLabelWidget.vue?vue&type=script&lang=js":
/*!***********************************************************************************************!*\
  !*** ./resources/js/src/app/components/item/GuaranteeLabelWidget.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_GuaranteeLabelWidget_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GuaranteeLabelWidget.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/item/GuaranteeLabelWidget.vue?vue&type=script&lang=js");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_GuaranteeLabelWidget_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/app/components/item/GuaranteeLabelWidget.vue?vue&type=template&id=bb2189ec":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/src/app/components/item/GuaranteeLabelWidget.vue?vue&type=template&id=bb2189ec ***!
  \*****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GuaranteeLabelWidget_vue_vue_type_template_id_bb2189ec__WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   staticRenderFns: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GuaranteeLabelWidget_vue_vue_type_template_id_bb2189ec__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GuaranteeLabelWidget_vue_vue_type_template_id_bb2189ec__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GuaranteeLabelWidget.vue?vue&type=template&id=bb2189ec */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/app/components/item/GuaranteeLabelWidget.vue?vue&type=template&id=bb2189ec");


/***/ })

}]);
//# sourceMappingURL=ceres-resources_js_src_app_components_item_GuaranteeLabelWidget_vue.js.map