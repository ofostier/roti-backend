module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+e2C":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__("AX/R");
} else {}


/***/ }),

/***/ "+uV0":
/***/ (function(module, exports) {

module.exports = require("react-focus-lock");

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("1TCz");


/***/ }),

/***/ "0+Lj":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("T0aG")["default"];

function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];

  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }

  return (hint === "string" ? String : Number)(input);
}

module.exports = _toPrimitive;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "1HsI":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__("v22Q");
} else {}


/***/ }),

/***/ "1JUl":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var _extends = __webpack_require__("97Jx");
var _objectWithoutProperties = __webpack_require__("m3Bd");
var core = __webpack_require__("R7Bz");

const loadingSizeValues = ['large', 'medium', 'small'];
const loadingToneValues = ['active', 'passive', 'positive', 'warning', 'negative', 'help'];
// TODO: Should this be a box, to support margin etc?
const LoadingDots = _ref => {
  let {
    label,
    tone: toneKey,
    size: sizeKey = 'medium'
  } = _ref,
      props = _objectWithoutProperties(_ref, ["label", "tone", "size"]);

  const {
    controlSizes,
    tones
  } = core.useTheme();
  const size = controlSizes[sizeKey];
  const tone = toneKey ? tones[toneKey] : null;
  const color = tone ? tone.fill[0] : 'currentColor';
  return core.jsx("div", _extends({
    "aria-live": "polite",
    "aria-label": label,
    css: {
      color,
      display: 'inline-flex',
      fontSize: size.indicatorFontSize
    }
  }, props), core.jsx(Dot, {
    delay: 0
  }), core.jsx(Dot, {
    delay: 160
  }), core.jsx(Dot, {
    delay: 320
  }));
};
const fadeAnimation = core.keyframes({
  '0%, 80%, 100%': {
    opacity: 0
  },
  '40%': {
    opacity: 1
  }
});

const Dot = ({
  delay
}) => {
  return core.jsx("div", {
    css: {
      animation: `${fadeAnimation} 1s ease-in-out infinite`,
      animationDelay: `${delay}ms`,
      backgroundColor: 'currentColor',
      borderRadius: '50%',
      display: 'block',
      height: '1em',
      width: '1em',
      '&:not(:first-of-type)': {
        marginLeft: '1em'
      }
    }
  });
};

exports.LoadingDots = LoadingDots;
exports.loadingSizeValues = loadingSizeValues;
exports.loadingToneValues = loadingToneValues;


/***/ }),

/***/ "1KLz":
/***/ (function(module, exports) {

module.exports = require("@keystone-next/keystone/admin-ui/router");

/***/ }),

/***/ "1TCz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _keystone_next_keystone_internal_do_not_use_will_break_in_patch_admin_ui_pages_App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Yhav");
/* harmony import */ var _keystone_next_keystone_internal_do_not_use_will_break_in_patch_admin_ui_pages_App__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_keystone_next_keystone_internal_do_not_use_will_break_in_patch_admin_ui_pages_App__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_keystone_next_fields_types_integer_views__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("iftL");
/* harmony import */ var _node_modules_keystone_next_fields_types_integer_views__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_keystone_next_fields_types_integer_views__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_keystone_next_fields_types_text_views__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("C2X/");
/* harmony import */ var _node_modules_keystone_next_fields_types_text_views__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_keystone_next_fields_types_text_views__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_keystone_next_fields_types_password_views__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("+e2C");
/* harmony import */ var _node_modules_keystone_next_fields_types_password_views__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_keystone_next_fields_types_password_views__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_keystone_next_fields_types_relationship_views__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("pHRq");
/* harmony import */ var _node_modules_keystone_next_fields_types_relationship_views__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_keystone_next_fields_types_relationship_views__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_keystone_next_fields_types_select_views__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("nO9N");
/* harmony import */ var _node_modules_keystone_next_fields_types_select_views__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_keystone_next_fields_types_select_views__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_keystone_next_fields_types_timestamp_views__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("HFNi");
/* harmony import */ var _node_modules_keystone_next_fields_types_timestamp_views__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_node_modules_keystone_next_fields_types_timestamp_views__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _node_modules_keystone_next_fields_types_checkbox_views__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("YfCI");
/* harmony import */ var _node_modules_keystone_next_fields_types_checkbox_views__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_node_modules_keystone_next_fields_types_checkbox_views__WEBPACK_IMPORTED_MODULE_7__);








var adminConfig = {};
/* harmony default export */ __webpack_exports__["default"] = (Object(_keystone_next_keystone_internal_do_not_use_will_break_in_patch_admin_ui_pages_App__WEBPACK_IMPORTED_MODULE_0__["getApp"])({
  lazyMetadataQuery: {
    kind: 'Document',
    definitions: [{
      kind: 'OperationDefinition',
      operation: 'query',
      selectionSet: {
        kind: 'SelectionSet',
        selections: [{
          kind: 'Field',
          name: {
            kind: 'Name',
            value: 'keystone',
            loc: {
              start: 22,
              end: 30
            }
          },
          arguments: [],
          directives: [],
          selectionSet: {
            kind: 'SelectionSet',
            selections: [{
              kind: 'Field',
              name: {
                kind: 'Name',
                value: 'adminMeta',
                loc: {
                  start: 39,
                  end: 48
                }
              },
              arguments: [],
              directives: [],
              selectionSet: {
                kind: 'SelectionSet',
                selections: [{
                  kind: 'Field',
                  name: {
                    kind: 'Name',
                    value: 'lists',
                    loc: {
                      start: 59,
                      end: 64
                    }
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [{
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'key',
                        loc: {
                          start: 77,
                          end: 80
                        }
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 77,
                        end: 80
                      }
                    }, {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'isHidden',
                        loc: {
                          start: 91,
                          end: 99
                        }
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 91,
                        end: 99
                      }
                    }, {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'fields',
                        loc: {
                          start: 110,
                          end: 116
                        }
                      },
                      arguments: [],
                      directives: [],
                      selectionSet: {
                        kind: 'SelectionSet',
                        selections: [{
                          kind: 'Field',
                          name: {
                            kind: 'Name',
                            value: 'path',
                            loc: {
                              start: 131,
                              end: 135
                            }
                          },
                          arguments: [],
                          directives: [],
                          loc: {
                            start: 131,
                            end: 135
                          }
                        }, {
                          kind: 'Field',
                          name: {
                            kind: 'Name',
                            value: 'createView',
                            loc: {
                              start: 148,
                              end: 158
                            }
                          },
                          arguments: [],
                          directives: [],
                          selectionSet: {
                            kind: 'SelectionSet',
                            selections: [{
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'fieldMode',
                                loc: {
                                  start: 175,
                                  end: 184
                                }
                              },
                              arguments: [],
                              directives: [],
                              loc: {
                                start: 175,
                                end: 184
                              }
                            }],
                            loc: {
                              start: 159,
                              end: 198
                            }
                          },
                          loc: {
                            start: 148,
                            end: 198
                          }
                        }],
                        loc: {
                          start: 117,
                          end: 210
                        }
                      },
                      loc: {
                        start: 110,
                        end: 210
                      }
                    }],
                    loc: {
                      start: 65,
                      end: 220
                    }
                  },
                  loc: {
                    start: 59,
                    end: 220
                  }
                }],
                loc: {
                  start: 49,
                  end: 228
                }
              },
              loc: {
                start: 39,
                end: 228
              }
            }],
            loc: {
              start: 31,
              end: 234
            }
          },
          loc: {
            start: 22,
            end: 234
          }
        }, {
          kind: 'Field',
          name: {
            kind: 'Name',
            value: 'authenticatedItem'
          },
          selectionSet: {
            kind: 'SelectionSet',
            selections: [{
              kind: 'InlineFragment',
              typeCondition: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'User'
                }
              },
              selectionSet: {
                kind: 'SelectionSet',
                selections: [{
                  kind: 'Field',
                  name: {
                    kind: 'Name',
                    value: 'id'
                  }
                }, {
                  kind: 'Field',
                  name: {
                    kind: 'Name',
                    value: 'name'
                  }
                }]
              }
            }]
          }
        }]
      }
    }]
  },
  fieldViews: [_node_modules_keystone_next_fields_types_integer_views__WEBPACK_IMPORTED_MODULE_1__, _node_modules_keystone_next_fields_types_text_views__WEBPACK_IMPORTED_MODULE_2__, _node_modules_keystone_next_fields_types_password_views__WEBPACK_IMPORTED_MODULE_3__, _node_modules_keystone_next_fields_types_relationship_views__WEBPACK_IMPORTED_MODULE_4__, _node_modules_keystone_next_fields_types_select_views__WEBPACK_IMPORTED_MODULE_5__, _node_modules_keystone_next_fields_types_timestamp_views__WEBPACK_IMPORTED_MODULE_6__, _node_modules_keystone_next_fields_types_checkbox_views__WEBPACK_IMPORTED_MODULE_7__],
  adminMetaHash: 'alkb4j',
  adminConfig: adminConfig
}));

/***/ }),

/***/ "1sfB":
/***/ (function(module, exports) {

module.exports = require("@keystone-next/keystone/admin-ui/context");

/***/ }),

/***/ "2ZNb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var React = __webpack_require__("cDcd");
var Icon = __webpack_require__("zdI/");
__webpack_require__("97Jx");
__webpack_require__("m3Bd");
__webpack_require__("R7Bz");

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () {
            return e[k];
          }
        });
      }
    });
  }
  n['default'] = e;
  return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/_interopNamespace(React);

const EyeIcon = Icon.createIcon( /*#__PURE__*/React__namespace.createElement(React__namespace.Fragment, null, /*#__PURE__*/React__namespace.createElement("path", {
  d: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
}), /*#__PURE__*/React__namespace.createElement("circle", {
  cx: 12,
  cy: 12,
  r: 3
})), 'EyeIcon');

exports.EyeIcon = EyeIcon;


/***/ }),

/***/ "2aKI":
/***/ (function(module, exports) {

module.exports = require("react-remove-scroll");

/***/ }),

/***/ "48aI":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__("Bk0a");
} else {}


/***/ }),

/***/ "5owK":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var _objectSpread = __webpack_require__("yiKp");
var core = __webpack_require__("R7Bz");
var react = __webpack_require__("cDcd");
var weakMemoize = __webpack_require__("sUZ5");
var graphql = __webpack_require__("T7Fc");
var isDeepEqual = __webpack_require__("YwNs");

function _interopDefault (e) { return e && e.__esModule ? e : { 'default': e }; }

var weakMemoize__default = /*#__PURE__*/_interopDefault(weakMemoize);
var isDeepEqual__default = /*#__PURE__*/_interopDefault(isDeepEqual);

function dataGetterWithNoErrors(data, path) {
  return {
    data,
    path,

    get(field) {
      var _data$field;

      return dataGetterWithNoErrors((_data$field = data === null || data === void 0 ? void 0 : data[field]) !== null && _data$field !== void 0 ? _data$field : null, path.concat(field));
    }

  };
}

function dataGetterWithErrors(data, errors, path) {
  return {
    data,
    errors,
    path,

    get(field) {
      var _data$field2;

      const newPath = path.concat(field);
      const newItem = (_data$field2 = data === null || data === void 0 ? void 0 : data[field]) !== null && _data$field2 !== void 0 ? _data$field2 : null;
      let errorsForField = errors.filter(error => {
        if (error.path === undefined) {
          return true;
        }

        const errorPath = error.path;
        return newPath.every((value, index) => errorPath[index] === undefined || errorPath[index] === value);
      });

      if (errorsForField.length) {
        return dataGetterWithErrors(newItem, errors, newPath);
      }

      return dataGetterWithNoErrors(newItem, newPath);
    }

  };
}

function makeDataGetter(data, errors) {
  if (errors !== null && errors !== void 0 && errors.length) {
    return dataGetterWithErrors(data, errors, []);
  }

  return dataGetterWithNoErrors(data, []);
}

const RenderField = /*#__PURE__*/react.memo(function RenderField({
  field,
  value,
  autoFocus,
  forceValidation,
  onChange
}) {
  return core.jsx(field.views.Field, {
    field: field.controller,
    onChange: react.useMemo(() => {
      if (onChange === undefined) return undefined;
      return value => {
        onChange(val => _objectSpread(_objectSpread({}, val), {}, {
          [field.controller.path]: {
            kind: 'value',
            value
          }
        }));
      };
    }, [onChange, field.controller.path]),
    value: value,
    autoFocus: autoFocus,
    forceValidation: forceValidation
  });
});
function Fields({
  fields,
  value,
  fieldModes,
  forceValidation,
  invalidFields,
  onChange
}) {
  const renderedFields = Object.keys(fields).filter(fieldPath => fieldModes === null || fieldModes[fieldPath] !== 'hidden').map((fieldPath, index) => {
    const field = fields[fieldPath];
    const val = value[fieldPath];
    const fieldMode = fieldModes === null ? 'edit' : fieldModes[fieldPath];

    if (val.kind === 'error') {
      return core.jsx("div", null, field.label, ": ", core.jsx("span", {
        css: {
          color: 'red'
        }
      }, val.errors[0].message));
    }

    return core.jsx(RenderField, {
      key: fieldPath,
      field: field,
      value: val.value,
      forceValidation: forceValidation && invalidFields.has(fieldPath),
      onChange: fieldMode === 'edit' ? onChange : undefined,
      autoFocus: index === 0
    });
  });
  return core.jsx(core.Stack, {
    gap: "xlarge"
  }, renderedFields, renderedFields.length === 0 && 'There are no fields that you can read or edit');
}

function extractRootFields(selectedFields, selectionSet) {
  selectionSet.selections.forEach(selection => {
    if (selection.kind === 'Field' && selection.name.value !== 'someFieldBecauseGraphQLRequiresAtLeastOneSelection') {
      selectedFields.add(selection.alias ? selection.alias.value : selection.name.value);
    }

    if (selection.kind === 'InlineFragment') {
      extractRootFields(selectedFields, selection.selectionSet);
    } // FragmentSpread will never happen for the use cases of getRootFieldsFromSelection

  });
}

const getRootGraphQLFieldsFromFieldController = weakMemoize__default['default'](controller => {
  const ast = graphql.parse(`fragment X on Y {
  someFieldBecauseGraphQLRequiresAtLeastOneSelection
  ${controller.graphqlSelection}
  }`);
  const selectedFields = new Set();
  const fragmentNode = ast.definitions[0];
  extractRootFields(selectedFields, fragmentNode.selectionSet);
  return [...selectedFields];
});

function deserializeValue(fields, itemGetter) {
  const value = {};
  Object.keys(fields).forEach(fieldKey => {
    const field = fields[fieldKey];
    const itemForField = {};
    const errors = new Set();

    for (const graphqlField of getRootGraphQLFieldsFromFieldController(field.controller)) {
      const fieldGetter = itemGetter.get(graphqlField);

      if (fieldGetter.errors) {
        fieldGetter.errors.forEach(error => {
          errors.add(error);
        });
      }

      itemForField[graphqlField] = fieldGetter.data;
    }

    if (errors.size) {
      value[fieldKey] = {
        kind: 'error',
        errors: [...errors]
      };
    } else {
      value[fieldKey] = {
        kind: 'value',
        value: field.controller.deserialize(itemForField)
      };
    }
  });
  return value;
}
function serializeValueToObjByFieldKey(fields, value) {
  const obj = {};
  Object.keys(fields).map(fieldKey => {
    const val = value[fieldKey];

    if (val.kind === 'value') {
      obj[fieldKey] = fields[fieldKey].controller.serialize(val.value);
    }
  });
  return obj;
}

function useChangedFieldsAndDataForUpdate(fields, itemGetter, value) {
  const serializedValuesFromItem = react.useMemo(() => {
    const value = deserializeValue(fields, itemGetter);
    return serializeValueToObjByFieldKey(fields, value);
  }, [fields, itemGetter]);
  const serializedFieldValues = react.useMemo(() => {
    return serializeValueToObjByFieldKey(fields, value);
  }, [value, fields]);
  return react.useMemo(() => {
    let changedFields = new Set();
    Object.keys(serializedFieldValues).forEach(fieldKey => {
      let isEqual = isDeepEqual__default['default'](serializedFieldValues[fieldKey], serializedValuesFromItem[fieldKey]);

      if (!isEqual) {
        changedFields.add(fieldKey);
      }
    });
    const dataForUpdate = {};
    changedFields.forEach(fieldKey => {
      Object.assign(dataForUpdate, serializedFieldValues[fieldKey]);
    });
    return {
      changedFields: changedFields,
      dataForUpdate
    };
  }, [serializedFieldValues, serializedValuesFromItem]);
}

function useInvalidFields(fields, value) {
  return react.useMemo(() => {
    const invalidFields = new Set();
    Object.keys(value).forEach(fieldPath => {
      const val = value[fieldPath];

      if (val.kind === 'value') {
        const validateFn = fields[fieldPath].controller.validate;

        if (validateFn) {
          const result = validateFn(val.value);

          if (result === false) {
            invalidFields.add(fieldPath);
          }
        }
      }
    });
    return invalidFields;
  }, [fields, value]);
}

exports.Fields = Fields;
exports.deserializeValue = deserializeValue;
exports.getRootGraphQLFieldsFromFieldController = getRootGraphQLFieldsFromFieldController;
exports.makeDataGetter = makeDataGetter;
exports.serializeValueToObjByFieldKey = serializeValueToObjByFieldKey;
exports.useChangedFieldsAndDataForUpdate = useChangedFieldsAndDataForUpdate;
exports.useInvalidFields = useInvalidFields;


/***/ }),

/***/ "7LAw":
/***/ (function(module, exports) {

module.exports = require("@keystone-next/keystone/admin-ui/components");

/***/ }),

/***/ "84ct":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__("hlDs");
} else {}


/***/ }),

/***/ "97Jx":
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  module.exports["default"] = module.exports, module.exports.__esModule = true;
  return _extends.apply(this, arguments);
}

module.exports = _extends;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "9BML":
/***/ (function(module, exports) {

module.exports = require("date-fns");

/***/ }),

/***/ "9gFk":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__("csEr");
} else {}


/***/ }),

/***/ "A6DC":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__("NAji");
} else {}


/***/ }),

/***/ "AX/R":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var _objectSpread = __webpack_require__("yiKp");
var React = __webpack_require__("cDcd");
var components = __webpack_require__("7LAw");
var button = __webpack_require__("ztEK");
var core = __webpack_require__("R7Bz");
var fields = __webpack_require__("t8AJ");
var EyeIcon = __webpack_require__("v0ll");
var EyeOffIcon = __webpack_require__("9gFk");
var XIcon = __webpack_require__("suMH");
var segmentedControl = __webpack_require__("HJcx");

const Field = ({
  field,
  value,
  onChange,
  forceValidation,
  autoFocus
}) => {
  const [showInputValue, setShowInputValue] = React.useState(false);
  const [touchedFirstInput, setTouchedFirstInput] = React.useState(false);
  const [touchedSecondInput, setTouchedSecondInput] = React.useState(false);
  const shouldShowValidation = forceValidation || touchedFirstInput && touchedSecondInput;
  const validation = shouldShowValidation && value.kind === 'editing' ? value.value === value.confirm ? value.value.length >= field.minLength ? undefined : `The password must be at least ${field.minLength} characters long` : 'The passwords do not match' : undefined;
  const inputType = showInputValue ? 'text' : 'password';
  return core.jsx(fields.FieldContainer, {
    as: "fieldset"
  }, core.jsx(fields.FieldLabel, {
    as: "legend"
  }, field.label), onChange === undefined ? value.isSet ? 'Password is set' : 'Password is not set' : value.kind === 'initial' ? core.jsx(button.Button, {
    autoFocus: autoFocus,
    onClick: () => {
      onChange({
        kind: 'editing',
        confirm: '',
        value: '',
        isSet: value.isSet
      });
    }
  }, value.isSet ? 'Change Password' : 'Set Password') : core.jsx(core.Stack, {
    gap: "small"
  }, core.jsx("div", {
    css: {
      display: 'flex'
    }
  }, core.jsx(core.VisuallyHidden, {
    as: "label",
    htmlFor: `${field.path}-new-password`
  }, "New Password"), core.jsx(fields.TextInput, {
    id: `${field.path}-new-password`,
    autoFocus: true,
    invalid: validation !== undefined,
    type: inputType,
    value: value.value,
    placeholder: "New Password",
    onChange: event => {
      onChange(_objectSpread(_objectSpread({}, value), {}, {
        value: event.target.value
      }));
    },
    onBlur: () => {
      setTouchedFirstInput(true);
    }
  }), core.jsx(Spacer, null), core.jsx(core.VisuallyHidden, {
    as: "label",
    htmlFor: `${field.path}-confirm-password`
  }, "Confirm Password"), core.jsx(fields.TextInput, {
    id: `${field.path}-confirm-password`,
    invalid: validation !== undefined,
    type: inputType,
    value: value.confirm,
    placeholder: "Confirm Password",
    onChange: event => {
      onChange(_objectSpread(_objectSpread({}, value), {}, {
        confirm: event.target.value
      }));
    },
    onBlur: () => {
      setTouchedSecondInput(true);
    }
  }), core.jsx(Spacer, null), core.jsx(button.Button, {
    onClick: () => {
      setShowInputValue(!showInputValue);
    }
  }, core.jsx(core.VisuallyHidden, null, showInputValue ? 'Hide Text' : 'Show Text'), showInputValue ? core.jsx(EyeOffIcon.EyeOffIcon, null) : core.jsx(EyeIcon.EyeIcon, null)), core.jsx(Spacer, null), core.jsx(button.Button, {
    onClick: () => {
      onChange({
        kind: 'initial',
        isSet: value.isSet
      });
    }
  }, core.jsx(core.VisuallyHidden, null, "Cancel"), core.jsx(XIcon.XIcon, null))), validation && core.jsx(core.Text, {
    color: "red600",
    size: "small"
  }, validation)));
};
const Cell = ({
  item,
  field
}) => {
  return core.jsx(components.CellContainer, null, item[`${field.path}_is_set`] ? 'Is set' : 'Is not set');
};
const CardValue = ({
  item,
  field
}) => {
  return core.jsx(fields.FieldContainer, null, core.jsx(fields.FieldLabel, null, field.label), item[`${field.path}_is_set`] ? 'Is set' : 'Is not set');
};
const controller = config => {
  return {
    path: config.path,
    label: config.label,
    graphqlSelection: `${config.path}_is_set`,
    minLength: config.fieldMeta.minLength,
    defaultValue: {
      kind: 'initial',
      isSet: null
    },

    validate(state) {
      return state.kind === 'initial' || state.value === state.confirm && state.value.length >= config.fieldMeta.minLength;
    },

    deserialize: data => ({
      kind: 'initial',
      isSet: data[`${config.path}_is_set`]
    }),
    serialize: value => {
      if (value.kind === 'initial') return {};
      return {
        [config.path]: value.value
      };
    },
    filter: {
      Filter(props) {
        return core.jsx(segmentedControl.SegmentedControl, {
          selectedIndex: Number(props.value),
          onChange: value => {
            props.onChange(!!value);
          },
          segments: ['Is Not Set', 'Is Set']
        });
      },

      graphql: ({
        type,
        value
      }) => {
        return {
          [`${config.path}_${type}`]: value
        };
      },

      Label({
        value
      }) {
        return value ? 'is set' : 'is not set';
      },

      types: {
        is_set: {
          label: 'Is Set',
          initialValue: true
        }
      }
    }
  };
};

const Spacer = () => {
  const {
    spacing
  } = core.useTheme();
  return core.jsx("div", {
    css: {
      width: spacing.small,
      flexShrink: 0
    }
  });
};

exports.CardValue = CardValue;
exports.Cell = Cell;
exports.Field = Field;
exports.controller = controller;


/***/ }),

/***/ "Bk0a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var _objectWithoutProperties = __webpack_require__("m3Bd");
var _extends = __webpack_require__("97Jx");
var react = __webpack_require__("cDcd");
var core = __webpack_require__("R7Bz");
var AlertOctagonIcon = __webpack_require__("cX5z");
var AlertTriangleIcon = __webpack_require__("1HsI");
var CheckCircleIcon = __webpack_require__("YE3l");
var InfoIcon = __webpack_require__("RCXq");
var XIcon = __webpack_require__("suMH");

function notInContext() {
  throw new Error('This component must be used inside a <ToastProvider> component.');
}

const ToastContext = /*#__PURE__*/react.createContext({
  addToast: notInContext,
  removeToast: notInContext
});
const useToasts = () => react.useContext(ToastContext);

// Provider
// ------------------------------
const ToastProvider = ({
  children
}) => {
  const [toastStack, setToastStack] = react.useState([]);
  const context = react.useMemo(() => ({
    addToast: options => {
      setToastStack(currentStack => {
        // only allow unique IDs in the toast stack
        if (currentStack.some(toast => toast.id === options.id)) {
          console.error(`You cannot add more than one toast with the same id ("${options.id}").`);
          return currentStack;
        } // populate defaults and update state


        let toast = populateDefaults(options);
        return [...currentStack, toast];
      });
    },
    removeToast: id => {
      setToastStack(currentStack => currentStack.filter(t => t.id !== id));
    }
  }), []);
  return core.jsx(ToastContext.Provider, {
    value: context
  }, children, core.jsx(ToastContainer, null, toastStack.map(props => {
    const {
      id,
      message,
      preserve,
      title,
      tone
    } = props;

    const onDismiss = () => context.removeToast(id);

    return core.jsx(ToastElement, {
      key: id,
      message: message,
      preserve: preserve,
      onDismiss: onDismiss,
      title: title,
      tone: tone
    });
  })));
}; // Utils
// ------------------------------

let idCount = -1;

let genId = () => ++idCount;

function populateDefaults(props) {
  return {
    title: props.title,
    message: props.message,
    preserve: Boolean(props.preserve),
    id: props.id || String(genId()),
    tone: props.tone || 'help'
  };
} // Styled Components
// ------------------------------
// Container


const ToastContainer = props => {
  const {
    elevation,
    spacing
  } = core.useTheme();
  return core.jsx(core.Portal, null, core.jsx("div", _extends({
    css: {
      position: 'fixed',
      right: spacing.medium,
      bottom: spacing.medium,
      zIndex: elevation.e500
    }
  }, props)));
}; // Element


const AUTO_DISMISS_DURATION = 6000;
const slideInFrames = core.keyframes({
  from: {
    transform: 'translateY(100%)'
  },
  to: {
    transform: 'translateY(0)'
  }
});
const ToastElement = /*#__PURE__*/react.forwardRef((props, ref) => {
  const {
    message,
    onDismiss,
    preserve,
    title,
    tone
  } = props,
        rest = _objectWithoutProperties(props, ["message", "onDismiss", "preserve", "title", "tone"]);

  const {
    radii,
    shadow,
    spacing,
    typography,
    sizing,
    tones
  } = core.useTheme(); // auto-dismiss functionality

  react.useEffect(() => {
    if (!preserve) {
      const timer = setTimeout(onDismiss, AUTO_DISMISS_DURATION);
      return () => clearTimeout(timer);
    } // this is not like other components because the consumer cannot update the props once they `addToast()`
    // we intentionally only want this to be run when the toast element mounts/unmounts
    // eslint-disable-next-line react-hooks/exhaustive-deps

  }, []);
  const iconElement = {
    positive: core.jsx(CheckCircleIcon.CheckCircleIcon, null),
    negative: core.jsx(AlertOctagonIcon.AlertOctagonIcon, null),
    warning: core.jsx(AlertTriangleIcon.AlertTriangleIcon, null),
    help: core.jsx(InfoIcon.InfoIcon, null)
  }[tone];
  const backgroundColor = {
    positive: tones.positive.fill[0],
    negative: tones.negative.fill[0],
    warning: tones.warning.fill[0],
    help: tones.help.fill[0]
  }[tone];
  const foregroundColor = {
    positive: tones.positive.fillForeground[0],
    negative: tones.negative.fillForeground[0],
    warning: tones.warning.fillForeground[0],
    help: tones.help.fillForeground[0]
  }[tone];
  return core.jsx("div", _extends({
    ref: ref,
    css: {
      alignItems: 'center',
      animation: `${slideInFrames} 150ms cubic-bezier(0.2, 0, 0, 1)`,
      background: backgroundColor,
      borderRadius: radii.medium,
      boxShadow: shadow.s300,
      color: foregroundColor,
      display: 'flex',
      fontSize: typography.fontSize.small,
      lineHeight: 1,
      margin: spacing.medium,
      width: 380,
      // less than desirable magic number, but not sure if this needs to be in theme...
      maxWidth: '100%',
      padding: spacing.large
    }
  }, rest), iconElement, core.jsx("div", {
    css: {
      flex: 1,
      paddingLeft: spacing.large,
      paddingRight: spacing.large
    }
  }, core.jsx("h3", {
    css: {
      color: foregroundColor,
      fontSize: typography.fontSize.medium,
      fontWeight: typography.fontWeight.bold,
      margin: 0
    }
  }, title), message && core.jsx("div", {
    css: {
      color: foregroundColor,
      lineHeight: typography.leading.base,
      marginTop: spacing.small
    }
  }, message)), core.jsx("button", {
    onClick: onDismiss,
    css: {
      alignItems: 'center',
      background: 0,
      border: 0,
      borderRadius: '50%',
      color: foregroundColor,
      cursor: 'pointer',
      display: 'flex',
      height: sizing.medium,
      justifyContent: 'center',
      outline: 0,
      padding: 0,
      width: sizing.medium,
      ':hover, &.focus-visible': {
        backgroundColor: 'rgba(0, 0, 0, 0.1)'
      },
      ':active': {
        backgroundColor: 'rgba(0, 0, 0, 0.2)'
      }
    }
  }, core.jsx(XIcon.XIcon, {
    size: "small"
  })));
});

exports.ToastProvider = ToastProvider;
exports.useToasts = useToasts;


/***/ }),

/***/ "C2X/":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__("U/TK");
} else {}


/***/ }),

/***/ "CSOn":
/***/ (function(module, exports) {

module.exports = require("react-transition-group");

/***/ }),

/***/ "DPqI":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var React = __webpack_require__("cDcd");
var Icon = __webpack_require__("zdI/");
__webpack_require__("97Jx");
__webpack_require__("m3Bd");
__webpack_require__("R7Bz");

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () {
            return e[k];
          }
        });
      }
    });
  }
  n['default'] = e;
  return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/_interopNamespace(React);

const CheckCircleIcon = Icon.createIcon( /*#__PURE__*/React__namespace.createElement(React__namespace.Fragment, null, /*#__PURE__*/React__namespace.createElement("path", {
  d: "M22 11.08V12a10 10 0 1 1-5.93-9.14"
}), /*#__PURE__*/React__namespace.createElement("polyline", {
  points: "22 4 12 14.01 9 11.01"
})), 'CheckCircleIcon');

exports.CheckCircleIcon = CheckCircleIcon;


/***/ }),

/***/ "HFNi":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__("bkq9");
} else {}


/***/ }),

/***/ "HJcx":
/***/ (function(module, exports) {

module.exports = require("@keystone-ui/segmented-control");

/***/ }),

/***/ "Hfjo":
/***/ (function(module, exports) {

module.exports = require("apply-ref");

/***/ }),

/***/ "Hxl9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var core = __webpack_require__("R7Bz");
var fields = __webpack_require__("t8AJ");
var components = __webpack_require__("7LAw");

/* @jsx jsx */
const Field = ({
  field,
  value,
  onChange,
  autoFocus
}) => core.jsx(fields.FieldContainer, null, core.jsx(fields.FieldLabel, {
  htmlFor: field.path
}, field.label), onChange ? core.jsx(fields.TextInput, {
  id: field.path,
  autoFocus: autoFocus,
  type: "number",
  onChange: event => {
    onChange(event.target.value.replace(/[^\d-]/g, ''));
  },
  value: value
}) : value);
const Cell = ({
  item,
  field,
  linkTo
}) => {
  let value = item[field.path] + '';
  return linkTo ? core.jsx(components.CellLink, linkTo, value) : core.jsx(components.CellContainer, null, value);
};
Cell.supportsLinkTo = true;
const CardValue = ({
  item,
  field
}) => {
  return core.jsx(fields.FieldContainer, null, core.jsx(fields.FieldLabel, null, field.label), item[field.path]);
};
const controller = config => {
  return {
    path: config.path,
    label: config.label,
    graphqlSelection: config.path,
    defaultValue: '',
    deserialize: data => {
      const value = data[config.path];
      return typeof value === 'number' ? value + '' : '';
    },
    serialize: value => ({
      [config.path]: value === '' ? null : parseInt(value, 10)
    }),
    filter: {
      Filter(props) {
        return core.jsx(fields.TextInput, {
          type: "number",
          onChange: event => {
            props.onChange(event.target.value.replace(/[^\d,\s-]/g, ''));
          },
          value: props.value,
          autoFocus: props.autoFocus
        });
      },

      graphql: ({
        type,
        value
      }) => {
        const key = type === 'is' ? config.path : `${config.path}_${type}`;
        const valueWithoutWhitespace = value.replace(/\s/g, '');
        return {
          [key]: ['in', 'not_in'].includes(type) ? valueWithoutWhitespace.split(',').map(i => parseInt(i)) : parseInt(valueWithoutWhitespace)
        };
      },

      Label({
        label,
        value,
        type
      }) {
        let renderedValue = value;

        if (['in', 'not_in'].includes(type)) {
          renderedValue = value.split(',').map(value => value.trim()).join(', ');
        }

        return `${label.toLowerCase()}: ${renderedValue}`;
      },

      types: {
        is: {
          label: 'Is exactly',
          initialValue: ''
        },
        not: {
          label: 'Is not exactly',
          initialValue: ''
        },
        gt: {
          label: 'Is greater than',
          initialValue: ''
        },
        lt: {
          label: 'Is less than',
          initialValue: ''
        },
        gte: {
          label: 'Is greater than or equal to',
          initialValue: ''
        },
        lte: {
          label: 'Is less than or equal to',
          initialValue: ''
        },
        in: {
          label: 'Is one of',
          initialValue: ''
        },
        not_in: {
          label: 'Is not one of',
          initialValue: ''
        }
      }
    }
  };
};

exports.CardValue = CardValue;
exports.Cell = Cell;
exports.Field = Field;
exports.controller = controller;


/***/ }),

/***/ "JGhi":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__("himr");
} else {}


/***/ }),

/***/ "JRBK":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("T0aG")["default"];

var toPrimitive = __webpack_require__("0+Lj");

function _toPropertyKey(arg) {
  var key = toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}

module.exports = _toPropertyKey;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "JhG3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var React = __webpack_require__("cDcd");
var Icon = __webpack_require__("zdI/");
__webpack_require__("97Jx");
__webpack_require__("m3Bd");
__webpack_require__("R7Bz");

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () {
            return e[k];
          }
        });
      }
    });
  }
  n['default'] = e;
  return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/_interopNamespace(React);

const XIcon = Icon.createIcon( /*#__PURE__*/React__namespace.createElement(React__namespace.Fragment, null, /*#__PURE__*/React__namespace.createElement("line", {
  x1: 18,
  y1: 6,
  x2: 6,
  y2: 18
}), /*#__PURE__*/React__namespace.createElement("line", {
  x1: 6,
  y1: 6,
  x2: 18,
  y2: 18
})), 'XIcon');

exports.XIcon = XIcon;


/***/ }),

/***/ "KEM+":
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "L1u/":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var React = __webpack_require__("cDcd");
var Icon = __webpack_require__("zdI/");
__webpack_require__("97Jx");
__webpack_require__("m3Bd");
__webpack_require__("R7Bz");

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () {
            return e[k];
          }
        });
      }
    });
  }
  n['default'] = e;
  return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/_interopNamespace(React);

const AlertOctagonIcon = Icon.createIcon( /*#__PURE__*/React__namespace.createElement(React__namespace.Fragment, null, /*#__PURE__*/React__namespace.createElement("polygon", {
  points: "7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"
}), /*#__PURE__*/React__namespace.createElement("line", {
  x1: 12,
  y1: 8,
  x2: 12,
  y2: 12
}), /*#__PURE__*/React__namespace.createElement("line", {
  x1: 12,
  y1: 16,
  x2: 12.01,
  y2: 16
})), 'AlertOctagonIcon');

exports.AlertOctagonIcon = AlertOctagonIcon;


/***/ }),

/***/ "LdEA":
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "MGOM":
/***/ (function(module, exports) {

module.exports = require("intersection-observer");

/***/ }),

/***/ "NAji":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var _objectSpread = __webpack_require__("yiKp");
var _objectWithoutProperties = __webpack_require__("m3Bd");
var _extends = __webpack_require__("97Jx");
var react = __webpack_require__("cDcd");
var applyRef = __webpack_require__("Hfjo");
var core = __webpack_require__("R7Bz");
var popover = __webpack_require__("84ct");

const Tooltip = ({
  children,
  content,
  hideOnClick = true,
  placement = 'top',
  weight = 'bold'
}) => {
  const {
    spacing
  } = core.useTheme();
  const isBold = weight === 'bold';
  const {
    isOpen,
    setOpen,
    trigger,
    dialog,
    arrow
  } = popover.usePopover({
    placement,
    modifiers: [{
      name: 'offset',
      options: {
        offset: [0, isBold ? spacing.small : spacing.xsmall]
      }
    }]
  });
  const tooltipId = core.useId();
  const showTooltip = react.useCallback(() => setOpen(true), []);
  const hideTooltip = react.useCallback(() => setOpen(false), []);
  const internalRef = react.useRef(null); // avoid overriding the consumer's `onClick` handler

  react.useEffect(() => {
    const triggerEl = internalRef.current;

    if (hideOnClick && triggerEl) {
      triggerEl.addEventListener('click', hideTooltip);
      return () => triggerEl.removeEventListener('click', hideTooltip);
    }
  }, [isOpen]);
  return core.jsx(react.Fragment, null, react.useMemo(() => children({
    onMouseEnter: showTooltip,
    onMouseLeave: hideTooltip,
    onFocus: showTooltip,
    onBlur: hideTooltip,
    'aria-describedby': tooltipId,
    ref: applyRef.applyRefs(trigger.ref, internalRef)
  }), [children, showTooltip, hideTooltip, tooltipId, trigger.ref, internalRef]), core.jsx(TooltipElement, _extends({
    id: tooltipId,
    isVisible: isOpen,
    weight: weight,
    ref: dialog.ref
  }, dialog.props, {
    arrow: weight === 'bold' ? arrow : undefined
  }), content));
}; // Styled Component
// ------------------------------

const TooltipElement = /*#__PURE__*/react.memo( /*#__PURE__*/react.forwardRef((_ref, consumerRef) => {
  let {
    isVisible,
    children,
    arrow,
    weight
  } = _ref,
      props = _objectWithoutProperties(_ref, ["isVisible", "children", "arrow", "weight"]);

  const isBold = weight === 'bold';
  const {
    elevation,
    radii,
    colors,
    spacing,
    typography
  } = core.useTheme();
  const arrowStyles = useArrowStyles();
  return core.jsx(core.Portal, null, core.jsx("div", _extends({
    role: "tooltip",
    "aria-hidden": !isVisible,
    ref: consumerRef,
    css: _objectSpread({
      backgroundColor: colors.foregroundMuted,
      borderRadius: radii.xsmall,
      color: colors.background,
      fontSize: isBold ? typography.fontSize.small : typography.fontSize.xsmall,
      fontWeight: typography.fontWeight.medium,
      lineHeight: typography.leading.tight,
      maxWidth: 320,
      // less than desirable magic number, but not sure if this needs to be in theme...
      opacity: isVisible ? isBold ? 1 : 0.9 : 0,
      padding: isBold ? `${spacing.small}px ${spacing.medium}px` : `${spacing.xsmall}px ${spacing.small}px`,
      pointerEvents: isVisible ? undefined : 'none',
      zIndex: elevation.e500
    }, arrowStyles)
  }, props), children, arrow && core.jsx("div", _extends({
    "data-popper-arrow": true,
    ref: arrow.ref,
    className: "tooltipArrow"
  }, arrow.props))));
}));

const useArrowStyles = () => {
  const {
    colors
  } = core.useTheme();
  return {
    '.tooltipArrow': {
      position: 'absolute',
      overflow: 'hidden',
      pointerEvents: 'none',
      height: '20px',
      width: '20px',
      '&::after': {
        content: 'close-quote',
        position: 'absolute',
        width: '10px',
        height: '10px',
        backgroundColor: colors.foregroundMuted,
        transform: 'translateX(-50%) translateY(-50%) rotate(45deg)'
      }
    },
    "&[data-popper-placement^='left'] > .tooltipArrow": {
      left: '100%',
      '&::after': {
        top: '50%',
        left: '0'
      }
    },
    "&[data-popper-placement^='right'] > .tooltipArrow": {
      right: '100%',
      '&::after': {
        top: '50%',
        left: '100%'
      }
    },
    "&[data-popper-placement^='top'] > .tooltipArrow": {
      top: '100%',
      '&::after': {
        top: 0,
        bottom: '-50%',
        left: '50%'
      }
    },
    "&[data-popper-placement^='bottom'] > .tooltipArrow": {
      bottom: '100%',
      right: 'unset',
      '&::after': {
        bottom: '-50%',
        left: '50%'
      }
    }
  };
};

exports.Tooltip = Tooltip;


/***/ }),

/***/ "Q0j7":
/***/ (function(module, exports) {

module.exports = require("focus-trap");

/***/ }),

/***/ "R7Bz":
/***/ (function(module, exports) {

module.exports = require("@keystone-ui/core");

/***/ }),

/***/ "RCXq":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__("YtHV");
} else {}


/***/ }),

/***/ "RtS8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__("1JUl");
} else {}


/***/ }),

/***/ "Rz46":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var React = __webpack_require__("cDcd");
var components = __webpack_require__("7LAw");
var core = __webpack_require__("R7Bz");
var fields = __webpack_require__("t8AJ");
var segmentedControl = __webpack_require__("HJcx");

/* @jsx jsx */
const Field = ({
  field,
  value,
  onChange,
  autoFocus
}) => core.jsx(fields.FieldContainer, {
  as: field.displayMode === 'select' ? 'div' : 'fieldset'
}, field.displayMode === 'select' ? core.jsx(React.Fragment, null, core.jsx(fields.FieldLabel, {
  htmlFor: field.path
}, field.label), core.jsx(fields.Select, {
  id: field.path,
  isClearable: true,
  autoFocus: autoFocus,
  options: field.options,
  isDisabled: onChange === undefined,
  onChange: value => {
    onChange === null || onChange === void 0 ? void 0 : onChange(value);
  },
  value: value,
  portalMenu: true
})) : core.jsx(React.Fragment, null, core.jsx(fields.FieldLabel, {
  as: "legend"
}, field.label), core.jsx(segmentedControl.SegmentedControl, {
  segments: field.options.map(x => x.label),
  selectedIndex: value ? field.options.findIndex(x => x.value === value.value) : undefined,
  onChange: index => {
    onChange === null || onChange === void 0 ? void 0 : onChange(field.options[index]);
  }
})));
const Cell = ({
  item,
  field,
  linkTo
}) => {
  var _field$options$find;

  let value = item[field.path] + '';
  const label = (_field$options$find = field.options.find(x => x.value === value)) === null || _field$options$find === void 0 ? void 0 : _field$options$find.label;
  return linkTo ? core.jsx(components.CellLink, linkTo, label) : core.jsx(components.CellContainer, null, label);
};
Cell.supportsLinkTo = true;
const CardValue = ({
  item,
  field
}) => {
  var _field$options$find2;

  const label = (_field$options$find2 = field.options.find(x => x.value === item[field.path])) === null || _field$options$find2 === void 0 ? void 0 : _field$options$find2.label;
  return core.jsx(fields.FieldContainer, null, core.jsx(fields.FieldLabel, null, field.label), label);
};
const controller = config => {
  const optionsWithStringValues = config.fieldMeta.options.map(x => ({
    label: x.label,
    value: x.value.toString()
  })); // Transform from string value to dataType appropriate value

  const t = v => v === null ? null : config.fieldMeta.dataType === 'integer' ? parseInt(v) : v;

  return {
    path: config.path,
    label: config.label,
    graphqlSelection: config.path,
    defaultValue: null,
    dataType: config.fieldMeta.dataType,
    displayMode: config.fieldMeta.displayMode,
    options: optionsWithStringValues,
    deserialize: data => {
      for (const option of config.fieldMeta.options) {
        if (option.value === data[config.path]) {
          return {
            label: option.label,
            value: option.value.toString()
          };
        }
      }

      return null;
    },
    serialize: value => {
      var _value$value;

      return {
        [config.path]: t((_value$value = value === null || value === void 0 ? void 0 : value.value) !== null && _value$value !== void 0 ? _value$value : null)
      };
    },
    filter: {
      Filter(props) {
        return core.jsx(fields.MultiSelect, {
          onChange: props.onChange,
          options: optionsWithStringValues,
          value: props.value,
          autoFocus: true
        });
      },

      graphql: ({
        type,
        value: options
      }) => {
        const inverted = type === 'not_matches';

        if (!options.length) {
          return {
            [`${config.path}${inverted ? '_not' : ''}`]: null
          };
        }

        const isMulti = options.length > 1;
        let key = config.path;

        if (isMulti && inverted) {
          key = `${config.path}_not_in`;
        } else if (isMulti) {
          key = `${config.path}_in`;
        } else if (inverted) {
          key = `${config.path}_not`;
        }

        const value = isMulti ? options.map(x => t(x.value)) : t(options[0].value);
        return {
          [key]: value
        };
      },

      Label({
        type,
        value
      }) {
        if (!value.length) {
          return type === 'not_matches' ? `is set` : `has no value`;
        }

        if (value.length > 1) {
          const values = value.map(i => i.label).join(', ');
          return type === 'not_matches' ? `is not in [${values}]` : `is in [${values}]`;
        }

        const optionLabel = value[0].label;
        return type === 'not_matches' ? `is not ${optionLabel}` : `is ${optionLabel}`;
      },

      types: {
        matches: {
          label: 'Matches',
          initialValue: []
        },
        not_matches: {
          label: 'Does not match',
          initialValue: []
        }
      }
    }
  };
};

exports.CardValue = CardValue;
exports.Cell = Cell;
exports.Field = Field;
exports.controller = controller;


/***/ }),

/***/ "T0aG":
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  }

  return _typeof(obj);
}

module.exports = _typeof;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "T7Fc":
/***/ (function(module, exports) {

module.exports = require("graphql");

/***/ }),

/***/ "U/TK":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var components = __webpack_require__("7LAw");
var core = __webpack_require__("R7Bz");
var fields = __webpack_require__("t8AJ");

/* @jsx jsx */
const Field = ({
  field,
  value,
  onChange,
  autoFocus
}) => core.jsx(fields.FieldContainer, null, core.jsx(fields.FieldLabel, {
  htmlFor: field.path
}, field.label), onChange ? field.displayMode === 'textarea' ? core.jsx(fields.TextArea, {
  id: field.path,
  autoFocus: autoFocus,
  onChange: event => onChange(event.target.value),
  value: value
}) : core.jsx(fields.TextInput, {
  id: field.path,
  autoFocus: autoFocus,
  onChange: event => onChange(event.target.value),
  value: value
}) : value);
const Cell = ({
  item,
  field,
  linkTo
}) => {
  let value = item[field.path] + '';
  return linkTo ? core.jsx(components.CellLink, linkTo, value) : core.jsx(components.CellContainer, null, value);
};
Cell.supportsLinkTo = true;
const CardValue = ({
  item,
  field
}) => {
  return core.jsx(fields.FieldContainer, null, core.jsx(fields.FieldLabel, null, field.label), item[field.path]);
};
const controller = config => {
  return {
    path: config.path,
    label: config.label,
    graphqlSelection: config.path,
    defaultValue: '',
    displayMode: config.fieldMeta.displayMode,
    deserialize: data => {
      const value = data[config.path];
      return typeof value === 'string' ? value : '';
    },
    serialize: value => ({
      [config.path]: value
    }),
    filter: {
      Filter(props) {
        return core.jsx(fields.TextInput, {
          onChange: event => {
            props.onChange(event.target.value);
          },
          value: props.value,
          autoFocus: true
        });
      },

      graphql: ({
        type,
        value
      }) => {
        const key = type === 'is_i' ? `${config.path}_i` : `${config.path}_${type}`;
        return {
          [key]: value
        };
      },

      Label({
        label,
        value
      }) {
        return `${label.toLowerCase()}: "${value}"`;
      },

      // FIXME: Not all of these options will work with prisma_sqlite
      types: {
        contains_i: {
          label: 'Contains',
          initialValue: ''
        },
        not_contains_i: {
          label: 'Does not contain',
          initialValue: ''
        },
        is_i: {
          label: 'Is exactly',
          initialValue: ''
        },
        not_i: {
          label: 'Is not exactly',
          initialValue: ''
        },
        starts_with_i: {
          label: 'Starts with',
          initialValue: ''
        },
        not_starts_with_i: {
          label: 'Does not start with',
          initialValue: ''
        },
        ends_with_i: {
          label: 'Ends with',
          initialValue: ''
        },
        not_ends_with_i: {
          label: 'Does not end with',
          initialValue: ''
        }
      }
    }
  };
};

exports.CardValue = CardValue;
exports.Cell = Cell;
exports.Field = Field;
exports.controller = controller;


/***/ }),

/***/ "VJ+x":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var _toPropertyKey = __webpack_require__("JRBK");
var _objectWithoutProperties = __webpack_require__("m3Bd");
__webpack_require__("MGOM");
var React = __webpack_require__("cDcd");
var apollo = __webpack_require__("hXkO");
var core = __webpack_require__("R7Bz");
var fields = __webpack_require__("t8AJ");

function useIntersectionObserver(cb, ref) {
  React.useEffect(() => {
    let observer = new IntersectionObserver(cb, {});
    let node = ref.current;

    if (node !== null) {
      observer.observe(node);
      return () => observer.unobserve(node);
    }
  });
}

const initialItemsToLoad = 10;
const subsequentItemsToLoad = 50;
const idField = '____id____';
const labelField = '____label____';
const RelationshipSelect = ({
  autoFocus,
  controlShouldRenderValue,
  isDisabled,
  isLoading,
  list,
  placeholder,
  state,
  extraSelection = ''
}) => {
  var _data$items;

  const [search, setSearch] = React.useState('');
  const QUERY = apollo.gql`
    query RelationshipSelect($search: String!, $first: Int!, $skip: Int!) {
      items: ${list.gqlNames.listQueryName}(search: $search, first: $first, skip: $skip) {
        ${idField}: id
        ${labelField}: ${list.labelField}
        ${extraSelection}
      }

      meta: ${list.gqlNames.listQueryMetaName}(search: $search) {
        count
      }
    }
  `;
  const {
    data,
    error,
    loading,
    fetchMore
  } = apollo.useQuery(QUERY, {
    fetchPolicy: 'network-only',
    variables: {
      search,
      first: initialItemsToLoad,
      skip: 0
    }
  });
  const count = (data === null || data === void 0 ? void 0 : data.meta.count) || 0;
  const relationshipSelectComponents = React.useMemo(() => ({
    MenuList: _ref => {
      let {
        children
      } = _ref,
          props = _objectWithoutProperties(_ref, ["children"]);

      const loadingRef = React.useRef(null);
      const QUERY = apollo.gql`
            query RelationshipSelectMore($search: String!, $first: Int!, $skip: Int!) {
              items: ${list.gqlNames.listQueryName}(search: $search, first: $first, skip: $skip) {
                ${labelField}: ${list.labelField}
                ${idField}: id
                ${extraSelection}
              }
            }
          `;
      useIntersectionObserver(([{
        isIntersecting
      }]) => {
        if (!props.selectProps.isLoading && isIntersecting && props.options.length < count) {
          fetchMore({
            query: QUERY,
            variables: {
              search,
              first: subsequentItemsToLoad,
              skip: props.options.length
            },
            updateQuery: (prev, {
              fetchMoreResult
            }) => {
              if (!fetchMoreResult) return prev;
              return {
                meta: prev.meta,
                items: [...prev.items, ...fetchMoreResult.items]
              };
            }
          });
        }
      }, loadingRef);
      return core.jsx(fields.selectComponents.MenuList, props, children, core.jsx("div", {
        css: {
          textAlign: 'center'
        },
        ref: loadingRef
      }, props.options.length < count && core.jsx("span", {
        css: {
          padding: 8
        }
      }, "Loading...")));
    }
  }), [count, list.gqlNames.listQueryName]); // TODO: better error UI
  // TODO: Handle permission errors
  // (ie; user has permission to read this relationship field, but
  // not the related list, or some items on the list)

  if (error) {
    return core.jsx("span", null, "Error");
  }

  const options = (data === null || data === void 0 ? void 0 : (_data$items = data.items) === null || _data$items === void 0 ? void 0 : _data$items.map(_ref2 => {
    let {
      [idField]: value,
      [labelField]: label
    } = _ref2,
        data = _objectWithoutProperties(_ref2, [idField, labelField].map(_toPropertyKey));

    return {
      value,
      label: label || value,
      data
    };
  })) || [];

  if (state.kind === 'one') {
    return core.jsx(fields.Select // this is necessary because react-select passes a second argument to onInputChange
    // and useState setters log a warning if a second argument is passed
    , {
      onInputChange: val => setSearch(val),
      isLoading: loading || isLoading,
      autoFocus: autoFocus,
      components: relationshipSelectComponents,
      portalMenu: true,
      value: state.value ? {
        value: state.value.id,
        label: state.value.label,
        // @ts-ignore
        data: state.value.data
      } : null,
      options: options,
      onChange: value => {
        state.onChange(value ? {
          id: value.value,
          label: value.label,
          data: value.data
        } : null);
      },
      placeholder: placeholder,
      controlShouldRenderValue: controlShouldRenderValue,
      isClearable: controlShouldRenderValue,
      isDisabled: isDisabled
    });
  }

  return core.jsx(fields.MultiSelect // this is necessary because react-select passes a second argument to onInputChange
  // and useState setters log a warning if a second argument is passed
  , {
    onInputChange: val => setSearch(val),
    isLoading: loading || isLoading,
    autoFocus: autoFocus,
    components: relationshipSelectComponents,
    portalMenu: true,
    value: state.value.map(value => ({
      value: value.id,
      label: value.label,
      data: value.data
    })),
    options: options,
    onChange: value => {
      state.onChange(value.map(x => ({
        id: x.value,
        label: x.label,
        data: x.data
      })));
    },
    placeholder: placeholder,
    controlShouldRenderValue: controlShouldRenderValue,
    isClearable: controlShouldRenderValue,
    isDisabled: isDisabled
  });
};

exports.RelationshipSelect = RelationshipSelect;


/***/ }),

/***/ "YE3l":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__("DPqI");
} else {}


/***/ }),

/***/ "YfCI":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__("wBJt");
} else {}


/***/ }),

/***/ "Yhav":
/***/ (function(module, exports) {

module.exports = require("@keystone-next/keystone/___internal-do-not-use-will-break-in-patch/admin-ui/pages/App");

/***/ }),

/***/ "YtHV":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var React = __webpack_require__("cDcd");
var Icon = __webpack_require__("zdI/");
__webpack_require__("97Jx");
__webpack_require__("m3Bd");
__webpack_require__("R7Bz");

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () {
            return e[k];
          }
        });
      }
    });
  }
  n['default'] = e;
  return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/_interopNamespace(React);

const InfoIcon = Icon.createIcon( /*#__PURE__*/React__namespace.createElement(React__namespace.Fragment, null, /*#__PURE__*/React__namespace.createElement("circle", {
  cx: 12,
  cy: 12,
  r: 10
}), /*#__PURE__*/React__namespace.createElement("line", {
  x1: 12,
  y1: 16,
  x2: 12,
  y2: 12
}), /*#__PURE__*/React__namespace.createElement("line", {
  x1: 12,
  y1: 8,
  x2: 12.01,
  y2: 8
})), 'InfoIcon');

exports.InfoIcon = InfoIcon;


/***/ }),

/***/ "YwNs":
/***/ (function(module, exports) {

module.exports = require("fast-deep-equal");

/***/ }),

/***/ "bkq9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var _objectSpread = __webpack_require__("yiKp");
var React = __webpack_require__("cDcd");
var components = __webpack_require__("7LAw");
var core = __webpack_require__("R7Bz");
var fields = __webpack_require__("t8AJ");
var dateFns = __webpack_require__("9BML");

const getTime = timeValue => {
  if (!timeValue) return [0, 0];
  return timeValue.split(':').map(n => Number(n));
};

function isValidDate(date) {
  if (!date) return false;
  return Boolean(dateFns.parseISO(date).toISOString());
}
function isValidTime(time) {
  if (!time) {
    return false;
  }

  return dateFns.isValid(dateFns.parse(time, 'HH:mm', new Date()));
}
function isValidISO(value) {
  try {
    // toISOString converts our string into zulu time
    // instead of checking for the timestamp to be specifically in zulu time
    // we relax the validation here a little, to just be a valid ISO string.
    return Boolean(dateFns.parseISO(constructTimestamp(value)).toISOString());
  } catch (err) {
    return false;
  }
}
function constructTimestamp({
  dateValue,
  timeValue
}) {
  let formattedDate = new Date(dateValue);
  const [hours, minutes] = getTime(timeValue);
  formattedDate.setHours(hours);
  formattedDate.setMinutes(minutes);
  return dateFns.formatISO(formattedDate);
}
function deconstructTimestamp(value) {
  return {
    dateValue: value,
    timeValue: resolveInitialTimeValue(value)
  };
}
function formatOutput(value) {
  if (!value) return '';
  const date = new Date(value);
  return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
}
function resolveInitialTimeValue(value, defaultValue) {
  const date = value || defaultValue;
  if (!date) return '';
  return new Date(date).toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  });
}

const TimePicker = ({
  autoFocus,
  onBlur,
  disabled,
  onChange,
  format = '24hr',
  value
}) => {
  return core.jsx(fields.TextInput, {
    autoFocus: autoFocus,
    maxLength: format === '24hr' ? 5 : 7,
    disabled: disabled,
    onChange: onChange,
    onBlur: onBlur,
    placeholder: format === '24hr' ? '00:00' : '00:00am',
    value: value
  });
};

const Field = ({
  field,
  value,
  onChange,
  forceValidation
}) => {
  const [touchedFirstInput, setTouchedFirstInput] = React.useState(false);
  const [touchedSecondInput, setTouchedSecondInput] = React.useState(false);
  const showValidation = touchedFirstInput && touchedSecondInput || forceValidation;

  const showDateError = dateValue => {
    if (!dateValue) {
      return core.jsx("div", {
        css: {
          color: 'red'
        }
      }, "Please select a date value.");
    }

    return !isValidDate(dateValue) && core.jsx("div", {
      css: {
        color: 'red'
      }
    }, "Incorrect date value");
  };

  const showTimeError = timeValue => {
    if (!timeValue) {
      return core.jsx("div", {
        css: {
          color: 'red'
        }
      }, "Please select a time value.");
    }

    return !isValidTime(timeValue) && core.jsx("div", {
      css: {
        color: 'red'
      }
    }, "Time must be in the form HH:mm");
  };

  return core.jsx(fields.FieldContainer, null, core.jsx(fields.FieldLabel, null, field.label), onChange ? core.jsx(core.Stack, null, core.jsx(core.Inline, {
    gap: "small"
  }, core.jsx(core.Stack, null, core.jsx(fields.DatePicker, {
    onUpdate: date => {
      onChange(_objectSpread(_objectSpread({}, value), {}, {
        dateValue: date || ''
      }));
    },
    onClear: () => {
      onChange(_objectSpread(_objectSpread({}, value), {}, {
        dateValue: ''
      }));
    },
    onBlur: () => setTouchedFirstInput(true),
    value: value.dateValue
  }), showValidation && showDateError(value.dateValue)), core.jsx(core.Stack, null, core.jsx(TimePicker, {
    onBlur: () => setTouchedSecondInput(true),
    disabled: onChange === undefined,
    format: "24hr",
    onChange: event => onChange(_objectSpread(_objectSpread({}, value), {}, {
      timeValue: event.target.value
    })),
    value: value.timeValue || ''
  }), showValidation && showTimeError(value.timeValue)))) : isValidISO(value) ? formatOutput(constructTimestamp(value)) : '');
};
const Cell = ({
  item,
  field,
  linkTo
}) => {
  let value = item[field.path];
  return linkTo ? core.jsx(components.CellLink, linkTo, formatOutput(value)) : core.jsx(components.CellContainer, null, formatOutput(value));
};
Cell.supportsLinkTo = true;
const CardValue = ({
  item,
  field
}) => {
  return core.jsx(fields.FieldContainer, null, core.jsx(fields.FieldLabel, null, field.label), item[field.path]);
};
const controller = config => {
  return {
    path: config.path,
    label: config.label,
    graphqlSelection: config.path,
    defaultValue: {
      dateValue: '',
      timeValue: ''
    },
    deserialize: data => {
      const value = data[config.path];

      if (value) {
        return deconstructTimestamp(value);
      }

      return {
        dateValue: '',
        timeValue: ''
      };
    },
    serialize: ({
      dateValue,
      timeValue
    }) => {
      if (dateValue && timeValue && isValidISO({
        dateValue,
        timeValue
      })) {
        let formattedDate = constructTimestamp({
          dateValue,
          timeValue
        });
        return {
          [config.path]: formattedDate
        };
      }

      return {
        [config.path]: null
      };
    },

    validate({
      dateValue,
      timeValue
    }) {
      if (!dateValue && !timeValue) return true;
      if (!dateValue) return false;
      if (!timeValue) return false;
      return isValidISO({
        dateValue,
        timeValue
      });
    }

  };
};

exports.CardValue = CardValue;
exports.Cell = Cell;
exports.Field = Field;
exports.controller = controller;


/***/ }),

/***/ "bxXX":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var _objectSpread = __webpack_require__("yiKp");
var _extends = __webpack_require__("97Jx");
var React = __webpack_require__("cDcd");
var components = __webpack_require__("7LAw");
var context = __webpack_require__("1sfB");
var router = __webpack_require__("1KLz");
var button = __webpack_require__("ztEK");
var core = __webpack_require__("R7Bz");
var fields = __webpack_require__("t8AJ");
var modals = __webpack_require__("JGhi");
var _objectWithoutProperties = __webpack_require__("m3Bd");
var tooltip = __webpack_require__("A6DC");
var loading = __webpack_require__("RtS8");
var adminUiUtils = __webpack_require__("ioIi");
var apollo = __webpack_require__("hXkO");
var types_relationship_views_RelationshipSelect_dist_fields = __webpack_require__("VJ+x");
var toast = __webpack_require__("48aI");
var isDeepEqual = __webpack_require__("YwNs");
__webpack_require__("JRBK");
__webpack_require__("MGOM");

function _interopDefault (e) { return e && e.__esModule ? e : { 'default': e }; }

var isDeepEqual__default = /*#__PURE__*/_interopDefault(isDeepEqual);

function useItemState({
  selectedFields,
  localList,
  id,
  field
}) {
  const {
    data,
    error,
    loading
  } = apollo.useQuery(apollo.gql`query($id: ID!) {
  item: ${localList.key}(where: {id: $id}) {
    id
    relationship: ${field.path} {
      ${selectedFields}
    }
  }
}`, {
    variables: {
      id
    },
    errorPolicy: 'all'
  });
  const {
    itemsArrFromData,
    relationshipGetter
  } = React.useMemo(() => {
    const dataGetter = adminUiUtils.makeDataGetter(data, error === null || error === void 0 ? void 0 : error.graphQLErrors);
    const relationshipGetter = dataGetter.get('item').get('relationship');
    const isMany = Array.isArray(relationshipGetter.data);
    const itemsArrFromData = (isMany ? relationshipGetter.data.map((_, i) => relationshipGetter.get(i)) : [relationshipGetter]).filter(x => {
      var _x$data;

      return ((_x$data = x.data) === null || _x$data === void 0 ? void 0 : _x$data.id) != null;
    });
    return {
      relationshipGetter,
      itemsArrFromData
    };
  }, [data, error]);
  let [{
    items,
    itemsArrFromData: itemsArrFromDataState
  }, setItemsState] = React.useState({
    itemsArrFromData: [],
    items: {}
  });

  if (itemsArrFromDataState !== itemsArrFromData) {
    let newItems = {};
    itemsArrFromData.forEach(item => {
      var _items$item$data$id, _item$errors, _initialItemInState$e;

      const initialItemInState = (_items$item$data$id = items[item.data.id]) === null || _items$item$data$id === void 0 ? void 0 : _items$item$data$id.fromInitialQuery;

      if ((items[item.data.id] && initialItemInState || !items[item.data.id]) && (!initialItemInState || item.data !== initialItemInState.data || ((_item$errors = item.errors) === null || _item$errors === void 0 ? void 0 : _item$errors.length) !== ((_initialItemInState$e = initialItemInState.errors) === null || _initialItemInState$e === void 0 ? void 0 : _initialItemInState$e.length) || (item.errors || []).some((err, i) => {
        var _initialItemInState$e2;

        return err !== ((_initialItemInState$e2 = initialItemInState.errors) === null || _initialItemInState$e2 === void 0 ? void 0 : _initialItemInState$e2[i]);
      }))) {
        newItems[item.data.id] = {
          current: item,
          fromInitialQuery: item
        };
      } else {
        newItems[item.data.id] = items[item.data.id];
      }
    });
    items = newItems;
    setItemsState({
      items: newItems,
      itemsArrFromData
    });
  }

  return {
    items: React.useMemo(() => {
      const itemsToReturn = {};
      Object.keys(items).forEach(id => {
        itemsToReturn[id] = items[id].current;
      });
      return itemsToReturn;
    }, [items]),
    setItems: React.useCallback(items => {
      setItemsState(state => {
        let itemsForState = {};
        Object.keys(items).forEach(id => {
          var _state$items$id;

          if (items[id] === ((_state$items$id = state.items[id]) === null || _state$items$id === void 0 ? void 0 : _state$items$id.current)) {
            itemsForState[id] = state.items[id];
          } else {
            var _state$items$id2;

            itemsForState[id] = {
              current: items[id],
              fromInitialQuery: (_state$items$id2 = state.items[id]) === null || _state$items$id2 === void 0 ? void 0 : _state$items$id2.fromInitialQuery
            };
          }
        });
        return {
          itemsArrFromData: state.itemsArrFromData,
          items: itemsForState
        };
      });
    }, [setItemsState]),
    state: (() => {
      if (loading) {
        return {
          kind: 'loading'
        };
      }

      if (error !== null && error !== void 0 && error.networkError) {
        return {
          kind: 'error',
          message: error.networkError.message
        };
      }

      if (field.many && !relationshipGetter.data) {
        var _relationshipGetter$e;

        return {
          kind: 'error',
          message: ((_relationshipGetter$e = relationshipGetter.errors) === null || _relationshipGetter$e === void 0 ? void 0 : _relationshipGetter$e[0].message) || ''
        };
      }

      return {
        kind: 'loaded'
      };
    })()
  };
}
function useFieldsObj(list, fields) {
  return React.useMemo(() => {
    const editFields = {};
    fields === null || fields === void 0 ? void 0 : fields.forEach(fieldPath => {
      editFields[fieldPath] = list.fields[fieldPath];
    });
    return editFields;
  }, [fields, list.fields]);
}

function InlineEdit({
  fields,
  list,
  selectedFields,
  itemGetter,
  onCancel,
  onSave
}) {
  var _itemGetter$errors;

  const fieldsObj = useFieldsObj(list, fields);
  const [update, {
    loading,
    error
  }] = apollo.useMutation(apollo.gql`mutation ($data: ${list.gqlNames.updateInputName}!, $id: ID!) {
          item: ${list.gqlNames.updateMutationName}(id: $id, data: $data) {
            ${selectedFields}
          }
        }`, {
    errorPolicy: 'all'
  });
  const [state, setValue] = React.useState(() => {
    const value = adminUiUtils.deserializeValue(fieldsObj, itemGetter);
    return {
      value,
      item: itemGetter.data
    };
  });

  if (state.item !== itemGetter.data && (_itemGetter$errors = itemGetter.errors) !== null && _itemGetter$errors !== void 0 && _itemGetter$errors.every(x => {
    var _x$path;

    return ((_x$path = x.path) === null || _x$path === void 0 ? void 0 : _x$path.length) !== 1;
  })) {
    const value = adminUiUtils.deserializeValue(fieldsObj, itemGetter);
    setValue({
      value,
      item: itemGetter.data
    });
  }

  const {
    changedFields,
    dataForUpdate
  } = adminUiUtils.useChangedFieldsAndDataForUpdate(fieldsObj, itemGetter, state.value);
  const invalidFields = adminUiUtils.useInvalidFields(fieldsObj, state.value);
  const [forceValidation, setForceValidation] = React.useState(false);
  const toasts = toast.useToasts();
  const saveButtonProps = {
    isLoading: loading,
    weight: 'bold',
    size: 'small',
    tone: 'active',
    onClick: () => {
      const newForceValidation = invalidFields.size !== 0;
      setForceValidation(newForceValidation);
      if (newForceValidation) return;
      update({
        variables: {
          data: dataForUpdate,
          id: itemGetter.get('id').data
        }
      }).then(({
        data,
        errors
      }) => {
        // we're checking for path.length === 1 because errors with a path larger than 1 will be field level errors
        // which are handled seperately and do not indicate a failure to update the item
        const error = errors === null || errors === void 0 ? void 0 : errors.find(x => {
          var _x$path2;

          return ((_x$path2 = x.path) === null || _x$path2 === void 0 ? void 0 : _x$path2.length) === 1;
        });

        if (error) {
          toasts.addToast({
            title: 'Failed to update item',
            tone: 'negative',
            message: error.message
          });
        } else {
          toasts.addToast({
            title: data.item[list.labelField] || data.item.id,
            tone: 'positive',
            message: 'Saved successfully'
          });
          onSave(adminUiUtils.makeDataGetter(data, errors).get('item'));
        }
      }).catch(err => {
        toasts.addToast({
          title: 'Failed to update item',
          tone: 'negative',
          message: err.message
        });
      });
    },
    children: 'Save'
  };
  return core.jsx(core.Stack, {
    gap: "xlarge"
  }, error && core.jsx(components.GraphQLErrorNotice, {
    networkError: error === null || error === void 0 ? void 0 : error.networkError // we're checking for path.length === 1 because errors with a path larger than 1 will be field level errors
    // which are handled seperately and do not indicate a failure to update the item
    ,
    errors: error === null || error === void 0 ? void 0 : error.graphQLErrors.filter(x => {
      var _x$path3;

      return ((_x$path3 = x.path) === null || _x$path3 === void 0 ? void 0 : _x$path3.length) === 1;
    })
  }), core.jsx(adminUiUtils.Fields, {
    fieldModes: null,
    fields: fieldsObj,
    forceValidation: forceValidation,
    invalidFields: invalidFields,
    onChange: React.useCallback(value => {
      setValue(state => ({
        item: state.item,
        value: value(state.value)
      }));
    }, [setValue]),
    value: state.value
  }), core.jsx(core.Stack, {
    across: true,
    gap: "small"
  }, changedFields.size ? core.jsx(button.Button, saveButtonProps) : core.jsx(tooltip.Tooltip, {
    content: "No fields have been modified so you cannot save changes"
  }, props => core.jsx(button.Button, _extends({}, props, saveButtonProps, {
    // making onClick undefined instead of making the button disabled so the button can be focussed so keyboard users can see the tooltip
    onClick: undefined
  }))), core.jsx(button.Button, {
    size: "small",
    weight: "none",
    onClick: onCancel
  }, "Cancel")));
}

/* @jsx jsx */
function InlineCreate({
  list,
  onCancel,
  onCreate,
  fields: fieldPaths,
  selectedFields
}) {
  const toasts = toast.useToasts();
  const fields = useFieldsObj(list, fieldPaths);
  const [createItem, {
    loading,
    error
  }] = apollo.useMutation(apollo.gql`mutation($data: ${list.gqlNames.createInputName}!) {
      item: ${list.gqlNames.createMutationName}(data: $data) {
        ${selectedFields}
    }
  }`);
  const [value, setValue] = React.useState(() => {
    const value = {};
    Object.keys(fields).forEach(fieldPath => {
      value[fieldPath] = {
        kind: 'value',
        value: fields[fieldPath].controller.defaultValue
      };
    });
    return value;
  });
  const invalidFields = adminUiUtils.useInvalidFields(fields, value);
  const [forceValidation, setForceValidation] = React.useState(false);

  const onCreateClick = () => {
    const newForceValidation = invalidFields.size !== 0;
    setForceValidation(newForceValidation);
    if (newForceValidation) return;
    const data = {};
    const allSerializedValues = adminUiUtils.serializeValueToObjByFieldKey(fields, value);
    Object.keys(allSerializedValues).forEach(fieldPath => {
      const {
        controller
      } = fields[fieldPath];
      const serialized = allSerializedValues[fieldPath];

      if (!isDeepEqual__default['default'](serialized, controller.serialize(controller.defaultValue))) {
        Object.assign(data, serialized);
      }
    });
    createItem({
      variables: {
        data
      }
    }).then(({
      data,
      errors
    }) => {
      // we're checking for path.length === 1 because errors with a path larger than 1 will be field level errors
      // which are handled seperately and do not indicate a failure to update the item
      const error = errors === null || errors === void 0 ? void 0 : errors.find(x => {
        var _x$path;

        return ((_x$path = x.path) === null || _x$path === void 0 ? void 0 : _x$path.length) === 1;
      });

      if (error) {
        toasts.addToast({
          title: 'Failed to create item',
          tone: 'negative',
          message: error.message
        });
      } else {
        toasts.addToast({
          title: data.item[list.labelField] || data.item.id,
          tone: 'positive',
          message: 'Saved successfully'
        });
        onCreate(adminUiUtils.makeDataGetter(data, errors).get('item'));
      }
    }).catch(err => {
      toasts.addToast({
        title: 'Failed to update item',
        tone: 'negative',
        message: err.message
      });
    });
  };

  return core.jsx(core.Stack, {
    gap: "xlarge"
  }, error && core.jsx(components.GraphQLErrorNotice, {
    networkError: error === null || error === void 0 ? void 0 : error.networkError,
    errors: error === null || error === void 0 ? void 0 : error.graphQLErrors
  }), core.jsx(adminUiUtils.Fields, {
    fieldModes: null,
    fields: fields,
    forceValidation: forceValidation,
    invalidFields: invalidFields,
    onChange: setValue,
    value: value
  }), core.jsx(core.Stack, {
    gap: "small",
    across: true
  }, core.jsx(button.Button, {
    isLoading: loading,
    size: "small",
    tone: "positive",
    weight: "bold",
    onClick: onCreateClick
  }, "Create ", list.singular), core.jsx(button.Button, {
    size: "small",
    weight: "none",
    onClick: onCancel
  }, "Cancel")));
}

const CardContainer = _ref => {
  let {
    mode = 'view'
  } = _ref,
      props = _objectWithoutProperties(_ref, ["mode"]);

  const {
    tones
  } = core.useTheme();
  const tone = tones[mode === 'edit' ? 'active' : mode === 'create' ? 'positive' : 'passive'];
  return core.jsx(core.Box, _extends({
    paddingLeft: "xlarge",
    css: {
      position: 'relative',
      ':before': {
        content: '" "',
        backgroundColor: tone.border,
        borderRadius: 4,
        width: 4,
        position: 'absolute',
        left: 0,
        top: 0,
        bottom: 0,
        zIndex: 1
      }
    }
  }, props));
};

function Cards({
  localList,
  field,
  foreignList,
  id,
  value,
  onChange,
  forceValidation
}) {
  var _field$display$inline;

  let selectedFields = [...new Set([...field.display.cardFields, ...(((_field$display$inline = field.display.inlineEdit) === null || _field$display$inline === void 0 ? void 0 : _field$display$inline.fields) || [])])].map(fieldPath => {
    return foreignList.fields[fieldPath].controller.graphqlSelection;
  }).join('\n');

  if (!field.display.cardFields.includes('id')) {
    selectedFields += '\nid';
  }

  if (!field.display.cardFields.includes(foreignList.labelField) && foreignList.labelField !== 'id') {
    selectedFields += `\n${foreignList.labelField}`;
  }

  const {
    items,
    setItems,
    state: itemsState
  } = useItemState({
    selectedFields,
    localList,
    id,
    field
  });
  const client = apollo.useApolloClient();
  const [isLoadingLazyItems, setIsLoadingLazyItems] = React.useState(false);
  const [showConnectItems, setShowConnectItems] = React.useState(false);
  const [hideConnectItemsLabel, setHideConnectItemsLabel] = React.useState('Cancel');
  const isMountedRef = React.useRef(false);
  React.useEffect(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  });

  if (itemsState.kind === 'loading') {
    return core.jsx("div", null, core.jsx(loading.LoadingDots, {
      label: `Loading items for ${field.label} field`
    }));
  }

  if (itemsState.kind === 'error') {
    return core.jsx("span", {
      css: {
        color: 'red'
      }
    }, itemsState.message);
  }

  return core.jsx(core.Stack, {
    gap: "xlarge"
  }, [...value.currentIds].map(id => {
    const itemGetter = items[id];
    return value.itemsBeingEdited.has(id) && onChange !== undefined ? core.jsx(CardContainer, {
      mode: "edit",
      key: id
    }, core.jsx(InlineEdit, {
      list: foreignList,
      fields: field.display.inlineEdit.fields,
      onSave: newItemGetter => {
        setItems(_objectSpread(_objectSpread({}, items), {}, {
          [id]: newItemGetter
        }));
        const itemsBeingEdited = new Set(value.itemsBeingEdited);
        itemsBeingEdited.delete(id);
        onChange(_objectSpread(_objectSpread({}, value), {}, {
          itemsBeingEdited
        }));
      },
      selectedFields: selectedFields,
      itemGetter: itemGetter,
      onCancel: () => {
        const itemsBeingEdited = new Set(value.itemsBeingEdited);
        itemsBeingEdited.delete(id);
        onChange(_objectSpread(_objectSpread({}, value), {}, {
          itemsBeingEdited
        }));
      }
    })) : core.jsx(CardContainer, {
      mode: "view",
      key: id
    }, core.jsx(core.Stack, {
      gap: "xlarge"
    }, field.display.cardFields.map(fieldPath => {
      const field = foreignList.fields[fieldPath];
      const itemForField = {};

      for (const graphqlField of adminUiUtils.getRootGraphQLFieldsFromFieldController(field.controller)) {
        const fieldGetter = itemGetter.get(graphqlField);

        if (fieldGetter.errors) {
          const errorMessage = fieldGetter.errors[0].message;
          return core.jsx(fields.FieldContainer, null, core.jsx(fields.FieldLabel, null, field.label), errorMessage);
        }

        itemForField[graphqlField] = fieldGetter.data;
      }

      return core.jsx(field.views.CardValue, {
        key: fieldPath,
        field: field.controller,
        item: itemForField
      });
    })), core.jsx(core.Stack, {
      across: true,
      gap: "small",
      marginTop: "xlarge"
    }, field.display.inlineEdit && onChange !== undefined && core.jsx(button.Button, {
      size: "small",
      disabled: onChange === undefined,
      onClick: () => {
        onChange(_objectSpread(_objectSpread({}, value), {}, {
          itemsBeingEdited: new Set([...value.itemsBeingEdited, id])
        }));
      },
      tone: "active"
    }, "Edit"), field.display.removeMode === 'disconnect' && onChange !== undefined && core.jsx(tooltip.Tooltip, {
      content: "This item will not be deleted. It will only be removed from this field."
    }, props => core.jsx(button.Button, _extends({
      size: "small",
      disabled: onChange === undefined,
      onClick: () => {
        const currentIds = new Set(value.currentIds);
        currentIds.delete(id);
        onChange(_objectSpread(_objectSpread({}, value), {}, {
          currentIds
        }));
      }
    }, props, {
      tone: "negative"
    }), "Remove")), field.display.linkToItem && core.jsx(button.Button, {
      size: "small",
      weight: "link",
      tone: "active",
      css: {
        textDecoration: 'none'
      },
      as: router.Link,
      href: `/${foreignList.path}/${id}`
    }, "View ", foreignList.singular, " details")));
  }), onChange === undefined ? null : field.display.inlineConnect && showConnectItems ? core.jsx(CardContainer, {
    mode: "edit"
  }, core.jsx(core.Stack, {
    gap: "small",
    marginY: "medium",
    across: true
  }, core.jsx(types_relationship_views_RelationshipSelect_dist_fields.RelationshipSelect, {
    autoFocus: true,
    controlShouldRenderValue: isLoadingLazyItems,
    isDisabled: onChange === undefined,
    list: foreignList,
    isLoading: isLoadingLazyItems,
    placeholder: `Select a ${foreignList.singular}`,
    state: {
      kind: 'many',

      async onChange(options) {
        // TODO: maybe use the extraSelection prop on RelationshipSelect here
        const itemsToFetchAndConnect = [];
        options.forEach(item => {
          if (!value.currentIds.has(item.id)) {
            itemsToFetchAndConnect.push(item.id);
          }
        });

        if (itemsToFetchAndConnect.length) {
          try {
            const {
              data,
              errors
            } = await client.query({
              query: apollo.gql`query ($ids: [ID!]!) {
                      items: ${foreignList.gqlNames.listQueryName}(where: {id_in:$ids}) {
                        ${selectedFields}
                      }
                    }`,
              variables: {
                ids: itemsToFetchAndConnect
              }
            });

            if (isMountedRef.current) {
              const dataGetters = adminUiUtils.makeDataGetter(data, errors);
              const itemsDataGetter = dataGetters.get('items');

              let newItems = _objectSpread({}, items);

              let newCurrentIds = field.many ? new Set(value.currentIds) : new Set();

              if (Array.isArray(itemsDataGetter.data)) {
                itemsDataGetter.data.forEach((item, i) => {
                  if ((item === null || item === void 0 ? void 0 : item.id) != null) {
                    newCurrentIds.add(item.id);
                    newItems[item.id] = itemsDataGetter.get(i);
                  }
                });
              }

              if (newCurrentIds.size) {
                setItems(newItems);
                onChange(_objectSpread(_objectSpread({}, value), {}, {
                  currentIds: newCurrentIds
                }));
                setHideConnectItemsLabel('Done');
              }
            }
          } finally {
            if (isMountedRef.current) {
              setIsLoadingLazyItems(false);
            }
          }
        }
      },

      value: (() => {
        let options = [];
        Object.keys(items).forEach(id => {
          if (value.currentIds.has(id)) {
            options.push({
              id,
              label: id
            });
          }
        });
        return options;
      })()
    }
  }), core.jsx(button.Button, {
    onClick: () => setShowConnectItems(false)
  }, hideConnectItemsLabel))) : value.itemBeingCreated ? core.jsx(CardContainer, {
    mode: "create"
  }, core.jsx(InlineCreate, {
    selectedFields: selectedFields,
    fields: field.display.inlineCreate.fields,
    list: foreignList,
    onCancel: () => {
      onChange(_objectSpread(_objectSpread({}, value), {}, {
        itemBeingCreated: false
      }));
    },
    onCreate: itemGetter => {
      const id = itemGetter.data.id;
      setItems(_objectSpread(_objectSpread({}, items), {}, {
        [id]: itemGetter
      }));
      onChange(_objectSpread(_objectSpread({}, value), {}, {
        itemBeingCreated: false,
        currentIds: field.many ? new Set([...value.currentIds, id]) : new Set([id])
      }));
    }
  })) : field.display.inlineCreate || field.display.inlineConnect ? core.jsx(CardContainer, {
    mode: "create"
  }, core.jsx(core.Stack, {
    gap: "small",
    marginTop: "medium",
    across: true
  }, field.display.inlineCreate && core.jsx(button.Button, {
    size: "small",
    disabled: onChange === undefined,
    tone: "positive",
    onClick: () => {
      onChange(_objectSpread(_objectSpread({}, value), {}, {
        itemBeingCreated: true
      }));
    }
  }, "Create ", foreignList.singular), field.display.inlineConnect && core.jsx(button.Button, {
    size: "small",
    weight: "none",
    tone: "passive",
    onClick: () => {
      setShowConnectItems(true);
      setHideConnectItemsLabel('Cancel');
    }
  }, "Link existing ", foreignList.singular))) : null, forceValidation && core.jsx(core.Text, {
    color: "red600",
    size: "small"
  }, "You must finish creating and editing any related ", foreignList.label.toLowerCase(), " before saving the ", localList.singular.toLowerCase()));
}

function LinkToRelatedItems({
  value,
  list
}) {
  var _value$value;

  const commonProps = {
    size: 'small',
    tone: 'active',
    weight: 'link'
  };

  if (value.kind === 'many') {
    return core.jsx(button.Button, _extends({}, commonProps, {
      as: router.Link // What happens when there are 10,000 ids? The URL would be too
      // big, so we arbitrarily limit it to the first 100
      // TODO: we should be able to filter by this, no?
      ,
      href: `/${list.path}?!id_in="${value.value.slice(0, 100).map(({
        id
      }) => id).join(',')}"`
    }), "View related ", list.plural);
  }

  return core.jsx(button.Button, _extends({}, commonProps, {
    as: router.Link,
    href: `/${list.path}/${(_value$value = value.value) === null || _value$value === void 0 ? void 0 : _value$value.id}`
  }), "View ", list.singular, " details");
}

const RelationshipLinkButton = ({
  href,
  children
}) => core.jsx(button.Button, {
  css: {
    padding: 0,
    height: 'auto'
  },
  weight: "link",
  tone: "active",
  as: router.Link,
  href: href
}, children);

const RelationshipDisplay = ({
  list,
  value
}) => {
  if (value.kind === 'many') {
    if (value.value.length) {
      return core.jsx(core.Inline, {
        gap: "small"
      }, value.value.map(i => core.jsx(RelationshipLinkButton, {
        href: `/${list.path}/${i.id}`
      }, i.label)));
    } else {
      return core.jsx("div", null, "(No ", list.plural, ")");
    }
  } else {
    if (value.value) {
      return core.jsx(RelationshipLinkButton, {
        href: `/${list.path}/${value.value.id}`
      }, value.value.label);
    } else {
      return core.jsx("div", null, "(No ", list.singular, ")");
    }
  }
};

const Field = ({
  field,
  autoFocus,
  value,
  onChange,
  forceValidation
}) => {
  const keystone = context.useKeystone();
  const foreignList = context.useList(field.refListKey);
  const localList = context.useList(field.listKey);
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  if (value.kind === 'cards-view') {
    return core.jsx(core.Stack, {
      as: "fieldset",
      gap: "medium"
    }, core.jsx(fields.FieldLegend, null, field.label), core.jsx(Cards, {
      forceValidation: forceValidation,
      field: field,
      id: value.id,
      value: value,
      onChange: onChange,
      foreignList: foreignList,
      localList: localList
    }));
  }

  if (value.kind === 'count') {
    return core.jsx(core.Stack, {
      as: "fieldset",
      gap: "medium"
    }, core.jsx(fields.FieldLegend, null, field.label), core.jsx("div", null, value.count === 1 ? `There is 1 ${foreignList.singular} ` : `There are ${value.count} ${foreignList.plural} `, "linked to this ", localList.singular));
  }

  return core.jsx(fields.FieldContainer, null, core.jsx(fields.FieldLabel, {
    as: "legend"
  }, field.label), onChange ? core.jsx(React.Fragment, null, core.jsx(core.Stack, {
    gap: "medium"
  }, core.jsx(types_relationship_views_RelationshipSelect_dist_fields.RelationshipSelect, {
    controlShouldRenderValue: true,
    autoFocus: autoFocus,
    isDisabled: onChange === undefined,
    list: foreignList,
    state: value.kind === 'many' ? {
      kind: 'many',
      value: value.value,

      onChange(newItems) {
        onChange(_objectSpread(_objectSpread({}, value), {}, {
          value: newItems
        }));
      }

    } : {
      kind: 'one',
      value: value.value,

      onChange(newVal) {
        if (value.kind === 'one') {
          onChange(_objectSpread(_objectSpread({}, value), {}, {
            value: newVal
          }));
        }
      }

    }
  }), core.jsx(core.Stack, {
    across: true,
    gap: "small"
  }, !field.hideCreate && core.jsx(button.Button, {
    size: "small",
    disabled: isDrawerOpen,
    onClick: () => {
      setIsDrawerOpen(true);
    }
  }, "Create related ", foreignList.singular), keystone.authenticatedItem.state === 'authenticated' && keystone.authenticatedItem.listKey === field.refListKey && core.jsx(button.Button, {
    size: "small",
    isDisabled: onChange === undefined,
    onClick: () => {
      if (keystone.authenticatedItem.state === 'authenticated') {
        const val = {
          label: keystone.authenticatedItem.label,
          id: keystone.authenticatedItem.id
        };

        if (value.kind === 'many') {
          onChange(_objectSpread(_objectSpread({}, value), {}, {
            value: [...value.value, val]
          }));
        } else {
          onChange(_objectSpread(_objectSpread({}, value), {}, {
            value: val
          }));
        }
      }
    }
  }, value.kind === 'many' ? 'Add ' : 'Set as ', keystone.authenticatedItem.label), !!(value.kind === 'many' ? value.value.length : value.kind === 'one' && value.value) && core.jsx(LinkToRelatedItems, {
    list: foreignList,
    value: value
  }))), core.jsx(modals.DrawerController, {
    isOpen: isDrawerOpen
  }, core.jsx(components.CreateItemDrawer, {
    listKey: foreignList.key,
    onClose: () => {
      setIsDrawerOpen(false);
    },
    onCreate: val => {
      setIsDrawerOpen(false);

      if (value.kind === 'many') {
        onChange(_objectSpread(_objectSpread({}, value), {}, {
          value: [...value.value, val]
        }));
      } else if (value.kind === 'one') {
        onChange(_objectSpread(_objectSpread({}, value), {}, {
          value: val
        }));
      }
    }
  }))) : core.jsx(RelationshipDisplay, {
    value: value,
    list: foreignList
  }));
};
const Cell = ({
  field,
  item
}) => {
  const list = context.useList(field.refListKey);
  const {
    colors
  } = core.useTheme();

  if (field.display.mode === 'count') {
    var _item$$count, _item$;

    const count = (_item$$count = (_item$ = item[`_${field.path}Meta`]) === null || _item$ === void 0 ? void 0 : _item$.count) !== null && _item$$count !== void 0 ? _item$$count : 0;
    return core.jsx(components.CellContainer, null, count, " ", count === 1 ? list.singular : list.plural);
  }

  const data = item[field.path];
  const items = (Array.isArray(data) ? data : [data]).filter(item => item);
  const displayItems = items.length < 5 ? items : items.slice(0, 3);
  const overflow = items.length < 5 ? 0 : items.length - 3;
  const styles = {
    color: colors.foreground,
    textDecoration: 'none',
    ':hover': {
      textDecoration: 'underline'
    }
  };
  return core.jsx(components.CellContainer, null, displayItems.map((item, index) => core.jsx(React.Fragment, {
    key: item.id
  }, !!index ? ', ' : '', core.jsx(router.Link, {
    href: `/${list.path}/[id]`,
    as: `/${list.path}/${item.id}`,
    css: styles
  }, item.label || item.id))), overflow ? `, and ${overflow} more` : null);
};
const CardValue = ({
  field,
  item
}) => {
  const list = context.useList(field.refListKey);
  const data = item[field.path];
  return core.jsx(fields.FieldContainer, null, core.jsx(fields.FieldLabel, null, field.label), (Array.isArray(data) ? data : [data]).filter(item => item).map((item, index) => core.jsx(React.Fragment, {
    key: item.id
  }, !!index ? ', ' : '', core.jsx(router.Link, {
    href: `/${list.path}/[id]`,
    as: `/${list.path}/${item.id}`
  }, item.label || item.id))));
};
const controller = config => {
  return {
    many: config.fieldMeta.many,
    listKey: config.listKey,
    path: config.path,
    label: config.label,
    display: config.fieldMeta.displayMode === 'cards' ? {
      mode: 'cards',
      cardFields: config.fieldMeta.cardFields,
      inlineCreate: config.fieldMeta.inlineCreate,
      inlineEdit: config.fieldMeta.inlineEdit,
      linkToItem: config.fieldMeta.linkToItem,
      removeMode: config.fieldMeta.removeMode,
      inlineConnect: config.fieldMeta.inlineConnect
    } : config.fieldMeta.displayMode === 'count' ? {
      mode: 'count'
    } : {
      mode: 'select',
      refLabelField: config.fieldMeta.refLabelField
    },
    refListKey: config.fieldMeta.refListKey,
    graphqlSelection: config.fieldMeta.displayMode === 'cards' ? // TODO: namespace this stuff at the Keystone level
    `${config.path}__id: id
           ${config.path} {
            id
           }` : config.fieldMeta.displayMode === 'count' ? `_${config.path}Meta {count}` : `${config.path} {
             id
             label: ${config.fieldMeta.refLabelField}
           }`,
    hideCreate: config.fieldMeta.hideCreate,
    defaultValue: config.fieldMeta.many ? {
      kind: 'many',
      initialValue: [],
      value: []
    } : {
      kind: 'one',
      value: null,
      initialValue: null
    },
    deserialize: data => {
      if (config.fieldMeta.displayMode === 'count') {
        var _data$$count, _data$;

        return {
          kind: 'count',
          count: (_data$$count = (_data$ = data[`_${config.path}Meta`]) === null || _data$ === void 0 ? void 0 : _data$.count) !== null && _data$$count !== void 0 ? _data$$count : 0
        };
      }

      if (config.fieldMeta.displayMode === 'cards') {
        const initialIds = new Set((Array.isArray(data[config.path]) ? data[config.path] : data[config.path] ? [data[config.path]] : []).map(x => x.id));
        return {
          kind: 'cards-view',
          id: data[`${config.path}__id`],
          itemsBeingEdited: new Set(),
          itemBeingCreated: false,
          initialIds,
          currentIds: initialIds
        };
      }

      if (config.fieldMeta.many) {
        let value = (data[config.path] || []).map(x => ({
          id: x.id,
          label: x.label || x.id
        }));
        return {
          kind: 'many',
          initialValue: value,
          value
        };
      }

      let value = data[config.path];

      if (value) {
        value = {
          id: value.id,
          label: value.label || value.id
        };
      }

      return {
        kind: 'one',
        value,
        initialValue: value
      };
    },

    validate(value) {
      return value.kind !== 'cards-view' || value.itemsBeingEdited.size === 0 && !value.itemBeingCreated;
    },

    serialize: state => {
      if (state.kind === 'many') {
        const newAllIds = new Set(state.value.map(x => x.id));
        const initialIds = new Set(state.initialValue.map(x => x.id));
        let disconnect = state.initialValue.filter(x => !newAllIds.has(x.id)).map(x => ({
          id: x.id
        }));
        let connect = state.value.filter(x => !initialIds.has(x.id)).map(x => ({
          id: x.id
        }));

        if (disconnect.length || connect.length) {
          let output = {};

          if (disconnect.length) {
            output.disconnect = disconnect;
          }

          if (connect.length) {
            output.connect = connect;
          }

          return {
            [config.path]: output
          };
        }
      } else if (state.kind === 'one') {
        var _state$initialValue;

        if (state.initialValue && !state.value) {
          return {
            [config.path]: {
              disconnect: {
                id: state.initialValue.id
              }
            }
          };
        } else if (state.value && state.value.id !== ((_state$initialValue = state.initialValue) === null || _state$initialValue === void 0 ? void 0 : _state$initialValue.id)) {
          return {
            [config.path]: {
              connect: {
                id: state.value.id
              }
            }
          };
        }
      } else if (state.kind === 'cards-view') {
        let disconnect = [...state.initialIds].filter(id => !state.currentIds.has(id)).map(id => ({
          id
        }));
        let connect = [...state.currentIds].filter(id => !state.initialIds.has(id)).map(id => ({
          id
        }));

        if (config.fieldMeta.many) {
          if (disconnect.length || connect.length) {
            return {
              [config.path]: {
                connect: connect.length ? connect : undefined,
                disconnect: disconnect.length ? disconnect : undefined
              }
            };
          }
        } else if (connect.length) {
          return {
            [config.path]: {
              connect: connect[0]
            }
          };
        } else if (disconnect.length) {
          return {
            [config.path]: {
              disconnect: disconnect[0]
            }
          };
        }
      }

      return {};
    }
  };
};

exports.CardValue = CardValue;
exports.Cell = Cell;
exports.Field = Field;
exports.controller = controller;


/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cX5z":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__("L1u/");
} else {}


/***/ }),

/***/ "csEr":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var React = __webpack_require__("cDcd");
var Icon = __webpack_require__("zdI/");
__webpack_require__("97Jx");
__webpack_require__("m3Bd");
__webpack_require__("R7Bz");

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () {
            return e[k];
          }
        });
      }
    });
  }
  n['default'] = e;
  return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/_interopNamespace(React);

const EyeOffIcon = Icon.createIcon( /*#__PURE__*/React__namespace.createElement(React__namespace.Fragment, null, /*#__PURE__*/React__namespace.createElement("path", {
  d: "M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"
}), /*#__PURE__*/React__namespace.createElement("line", {
  x1: 1,
  y1: 1,
  x2: 23,
  y2: 23
})), 'EyeOffIcon');

exports.EyeOffIcon = EyeOffIcon;


/***/ }),

/***/ "hXkO":
/***/ (function(module, exports) {

module.exports = require("@keystone-next/keystone/admin-ui/apollo");

/***/ }),

/***/ "himr":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var button = __webpack_require__("ztEK");
var core = __webpack_require__("R7Bz");
var _extends = __webpack_require__("97Jx");
var _objectSpread = __webpack_require__("yiKp");
var _objectWithoutProperties = __webpack_require__("m3Bd");
var React = __webpack_require__("cDcd");
var FocusLock = __webpack_require__("+uV0");
var reactRemoveScroll = __webpack_require__("2aKI");
var reactTransitionGroup = __webpack_require__("CSOn");

function _interopDefault (e) { return e && e.__esModule ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefault(React);
var FocusLock__default = /*#__PURE__*/_interopDefault(FocusLock);

const fadeInAnim = core.keyframes({
  from: {
    opacity: 0
  }
});
const easing$2 = 'cubic-bezier(0.2, 0, 0, 1)';
const Blanket = /*#__PURE__*/React.forwardRef((props, ref) => {
  const theme = core.useTheme();
  return core.jsx("div", _extends({
    ref: ref,
    css: {
      animation: `${fadeInAnim} 320ms ${easing$2}`,
      backgroundColor: 'rgba(0, 0, 0, 0.3)',
      // TODO get this from the theme
      bottom: 0,
      left: 0,
      position: 'fixed',
      right: 0,
      top: 0,
      zIndex: theme.elevation.e400
    }
  }, props));
});

const ModalContext = /*#__PURE__*/React__default['default'].createContext(null);
const DrawerProvider = ({
  children
}) => {
  let [drawerStack, setDrawerStack] = React.useState([]);
  const pushToDrawerStack = React.useCallback(key => {
    setDrawerStack(stack => [...stack, key]);
  }, []);
  const popFromDrawerStack = React.useCallback(() => {
    setDrawerStack(stack => {
      let less = stack.slice(0, -1);
      return less;
    });
  }, []);
  const context = {
    drawerStack,
    pushToDrawerStack,
    popFromDrawerStack
  };
  return /*#__PURE__*/React__default['default'].createElement(ModalContext.Provider, {
    value: context
  }, children);
}; // Utils
// ------------------------------

const useDrawerManager = uniqueKey => {
  const modalState = React__default['default'].useContext(ModalContext);

  if (modalState === null) {
    throw new Error('This component must have a <DrawerProvider/> ancestor in the same React tree.');
  } // keep the stack in sync on mount/unmount


  React.useEffect(() => {
    modalState.pushToDrawerStack(uniqueKey);
    return () => {
      modalState.popFromDrawerStack();
    }; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // the last key in the array is the "top" modal visually, so the depth is the inverse index
  // be careful not to mutate the stack

  let depth = modalState.drawerStack.slice().reverse().indexOf(uniqueKey); // if it's not in the stack already,
  // we know that it should be the last drawer in the stack but the effect hasn't happened yet
  // so we need to make the depth 0 so the depth is correct even though the effect hasn't happened yet

  return depth === -1 ? 0 : depth;
};

const DrawerControllerContext = /*#__PURE__*/React__default['default'].createContext(null);
const DrawerControllerContextProvider = DrawerControllerContext.Provider;
const useDrawerControllerContext = () => {
  let context = React.useContext(DrawerControllerContext);

  if (!context) {
    throw new Error('Drawers must be wrapped in a <DrawerController>. You should generally do this outside of the component that renders the <Drawer> or <TabbedDrawer>.');
  }

  return context;
};
const DrawerController = ({
  isOpen,
  children
}) => {
  return /*#__PURE__*/React__default['default'].createElement(reactTransitionGroup.Transition, {
    appear: true,
    mountOnEnter: true,
    unmountOnExit: true,
    in: isOpen,
    timeout: 150
  }, transitionState => /*#__PURE__*/React__default['default'].createElement(DrawerControllerContextProvider, {
    value: transitionState
  }, children));
};

const DRAWER_WIDTHS = {
  narrow: 580,
  wide: 740
};
const easing$1 = 'cubic-bezier(0.2, 0, 0, 1)';
const blanketTransition = {
  entering: {
    opacity: 0
  },
  entered: {
    opacity: 1
  },
  exiting: {
    opacity: 0
  },
  exited: {
    opacity: 0
  }
};
const DrawerBase = _ref => {
  let {
    children,
    initialFocusRef,
    onClose,
    onSubmit,
    width = 'narrow',
    transitionState
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children", "initialFocusRef", "onClose", "onSubmit", "width", "transitionState"]);

  const theme = core.useTheme();
  const containerRef = React.useRef(null);
  const id = core.useId();
  const uniqueKey = core.makeId('drawer', id); // sync drawer state

  let drawerDepth = useDrawerManager(uniqueKey);

  const onKeyDown = event => {
    if (event.key === 'Escape' && !event.defaultPrevented) {
      event.preventDefault();
      onClose();
    }
  };

  const activateFocusLock = React.useCallback(() => {
    if (initialFocusRef && initialFocusRef.current) {
      initialFocusRef.current.focus();
    }
  }, [initialFocusRef]);
  const dialogTransition = getDialogTransition(drawerDepth);
  let Tag = 'div';

  if (onSubmit) {
    Tag = 'form';
    let oldOnSubmit = onSubmit; // @ts-ignore

    onSubmit = event => {
      if (!event.defaultPrevented) {
        event.preventDefault();
        oldOnSubmit();
      }
    };
  }

  return core.jsx(core.Portal, null, core.jsx(React.Fragment, null, core.jsx(Blanket, {
    onClick: onClose,
    style: _objectSpread(_objectSpread({
      transition: `opacity 150ms linear`
    }, blanketTransition[transitionState]), {}, {
      zIndex: theme.elevation.e400
    })
  }), core.jsx(FocusLock__default['default'], {
    autoFocus: true,
    returnFocus: true,
    onActivation: activateFocusLock
  }, core.jsx(reactRemoveScroll.RemoveScroll, {
    enabled: true
  }, core.jsx(Tag, _extends({
    onSubmit: onSubmit,
    "aria-modal": "true",
    role: "dialog",
    ref: containerRef,
    tabIndex: -1,
    onKeyDown: onKeyDown,
    style: dialogTransition[transitionState],
    css: {
      backgroundColor: theme.colors.background,
      bottom: 0,
      boxShadow: theme.shadow.s400,
      outline: 0,
      position: 'fixed',
      right: 0,
      top: 0,
      transition: `transform 150ms ${easing$1}`,
      width: DRAWER_WIDTHS[width],
      zIndex: theme.elevation.e400,
      // flex layout must be applied here so content will grow/shrink properly
      display: 'flex',
      flexDirection: 'column'
    }
  }, props), core.jsx(DrawerControllerContextProvider, {
    value: null
  }, children))))));
}; // Utils
// ------------------------------

function getDialogTransition(depth) {
  let scaleInc = 0.05;
  let transformValue = `scale(${1 - scaleInc * depth}) translateX(-${depth * 40}px)`;
  return {
    entering: {
      transform: 'translateX(100%)'
    },
    entered: {
      transform: transformValue
    },
    exiting: {
      transform: 'translateX(100%)'
    },
    exited: {
      transform: 'translateX(100%)'
    }
  };
}

/** @jsx jsx */
const Drawer = ({
  actions,
  children,
  title,
  id,
  initialFocusRef,
  width = 'narrow'
}) => {
  const transitionState = useDrawerControllerContext();
  const {
    cancel,
    confirm
  } = actions;
  const {
    colors,
    spacing
  } = core.useTheme();
  const safeClose = actions.confirm.loading ? () => {} : actions.cancel.action;
  const instanceId = core.useId(id);
  const headingId = core.makeId(instanceId, 'heading');
  return core.jsx(DrawerBase, {
    transitionState: transitionState,
    "aria-labelledby": headingId,
    initialFocusRef: initialFocusRef,
    onSubmit: actions.confirm.action,
    onClose: safeClose,
    width: width
  }, core.jsx("div", {
    css: {
      alignItems: 'center',
      borderBottom: `1px solid ${colors.border}`,
      boxSizing: 'border-box',
      display: 'flex',
      flexShrink: 0,
      height: 80,
      padding: `${spacing.large}px ${spacing.xlarge}px`
    }
  }, core.jsx(core.Heading, {
    id: headingId,
    type: "h3"
  }, title)), core.jsx("div", {
    css: {
      overflowY: 'auto',
      padding: `0 ${spacing.xlarge}px`
    }
  }, children), core.jsx(core.Divider, {
    marginX: "xlarge"
  }), core.jsx(core.Stack, {
    padding: "xlarge",
    across: true,
    gap: "small"
  }, core.jsx(button.Button, {
    tone: "active",
    weight: "bold",
    type: "submit",
    isLoading: confirm.loading
  }, confirm.label), core.jsx(button.Button, {
    onClick: safeClose,
    disabled: confirm.loading,
    weight: "none",
    tone: "passive"
  }, cancel.label)));
};

const slideInAnim = core.keyframes({
  from: {
    transform: 'translateY(20%)',
    opacity: 0
  }
});
const easing = 'cubic-bezier(0.2, 0, 0, 1)';
const DialogBase = _ref => {
  let {
    children,
    isOpen,
    onClose,
    width
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children", "isOpen", "onClose", "width"]);

  const theme = core.useTheme();

  const onKeyDown = event => {
    if (event.key === 'Escape' && !event.defaultPrevented) {
      event.preventDefault(); // Avoid potential drawer close

      onClose();
    }
  };

  return isOpen ? core.jsx(core.Portal, null, core.jsx(React.Fragment, null, core.jsx(Blanket, {
    onClick: onClose
  }), core.jsx(FocusLock__default['default'], {
    autoFocus: true,
    returnFocus: true
  }, core.jsx(reactRemoveScroll.RemoveScroll, {
    enabled: true
  }, core.jsx("div", _extends({
    "aria-modal": "true",
    role: "dialog",
    tabIndex: -1,
    onKeyDown: onKeyDown,
    css: {
      animation: `${slideInAnim} 320ms ${easing}`,
      backgroundColor: theme.colors.background,
      borderRadius: theme.radii.large,
      boxShadow: theme.shadow.s400,
      margin: theme.spacing.small,
      position: 'fixed',
      marginLeft: -(width / 2),
      left: '50%',
      top: 64,
      transition: `transform 150ms ${easing}`,
      width: width,
      zIndex: theme.elevation.e400
    }
  }, props), children))))) : null;
};

/** @jsx jsx */
const AlertDialog = ({
  actions,
  isOpen,
  children,
  title,
  id,
  tone = 'active'
}) => {
  const {
    cancel,
    confirm
  } = actions;
  const theme = core.useTheme();
  const instanceId = core.useId(id);
  const headingId = core.makeId('heading', instanceId);

  const onClose = () => {
    if (actions.cancel) {
      actions.cancel.action();
    } else {
      actions.confirm.action();
    }
  };

  return core.jsx(DialogBase, {
    isOpen: isOpen,
    onClose: onClose,
    width: 440,
    "aria-labelledby": headingId
  }, core.jsx("div", {
    css: {
      padding: theme.spacing.xlarge
    }
  }, core.jsx(core.Heading, {
    id: headingId,
    type: "h4"
  }, title), core.jsx(core.Box, {
    marginY: "large"
  }, children), core.jsx("div", {
    css: {
      display: 'flex',
      justifyContent: 'flex-end'
    }
  }, cancel && core.jsx(button.Button, {
    disabled: confirm.loading,
    key: cancel.label,
    onClick: cancel.action,
    weight: "none",
    tone: "passive"
  }, cancel.label), core.jsx(button.Button, {
    css: {
      marginLeft: theme.spacing.medium
    },
    key: confirm.label,
    isLoading: confirm.loading,
    onClick: confirm.action,
    tone: tone
  }, confirm.label))));
};

exports.AlertDialog = AlertDialog;
exports.DRAWER_WIDTHS = DRAWER_WIDTHS;
exports.Drawer = Drawer;
exports.DrawerController = DrawerController;
exports.DrawerProvider = DrawerProvider;


/***/ }),

/***/ "hlDs":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var _extends = __webpack_require__("97Jx");
var _objectWithoutProperties = __webpack_require__("m3Bd");
var _objectSpread = __webpack_require__("yiKp");
var react = __webpack_require__("cDcd");
var focusTrapModule = __webpack_require__("Q0j7");
var reactPopper = __webpack_require__("pYII");
var core = __webpack_require__("R7Bz");

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () {
            return e[k];
          }
        });
      }
    });
  }
  n['default'] = e;
  return Object.freeze(n);
}

var focusTrapModule__namespace = /*#__PURE__*/_interopNamespace(focusTrapModule);

const useControlledPopover = ({
  isOpen,
  onClose
}, popperOptions = {}, popoverOptions = {
  handleClose: 'both'
}) => {
  const [anchorElement, setAnchorElement] = react.useState(null);
  const [popoverElement, setPopoverElement] = react.useState();
  const [arrowElement, setArrowElement] = react.useState();
  const {
    styles,
    attributes,
    update
  } = reactPopper.usePopper(anchorElement, popoverElement, _objectSpread(_objectSpread({}, popperOptions), {}, {
    modifiers: [...(popperOptions.modifiers || []), {
      name: 'arrow',
      options: {
        element: arrowElement
      }
    }, {
      name: 'eventListeners',
      options: {
        scroll: isOpen,
        resize: isOpen
      }
    }]
  })); // update popper when it opens to get the latest placement
  // useful for prerendered popovers in modals etc.

  react.useEffect(() => {
    if (update && isOpen) {
      update();
    }
  }, [isOpen, update]); // close on click outside

  useClickOutside({
    handler: () => onClose(),
    elements: [anchorElement, popoverElement],
    listenWhen: ['both', 'mouse'].includes(popoverOptions.handleClose) && isOpen
  }); // close on esc press

  useKeyPress({
    targetKey: 'Escape',
    downHandler: react.useCallback(event => {
      event.preventDefault(); // Avoid potential close of modal

      onClose();
    }, [onClose]),
    listenWhen: ['both', 'keyboard'].includes(popoverOptions.handleClose) && isOpen
  });
  return {
    trigger: react.useMemo(() => ({
      ref: setAnchorElement,
      props: {
        'aria-haspopup': true,
        'aria-expanded': isOpen
      }
    }), [isOpen]),
    dialog: react.useMemo(() => ({
      ref: setPopoverElement,
      props: _objectSpread({
        style: styles.popper
      }, attributes.popper)
    }), [styles.popper, attributes.popper]),
    arrow: react.useMemo(() => ({
      ref: setArrowElement,
      props: {
        style: styles.arrow
      }
    }), [styles.arrow])
  };
};
const usePopover = (popperOptions = {}, popoverOptions = {
  handleClose: 'both'
}) => {
  const [isOpen, setOpen] = react.useState(false);
  return _objectSpread({
    isOpen,
    setOpen
  }, useControlledPopover({
    isOpen,
    onClose: react.useCallback(() => setOpen(false), [])
  }, popperOptions, popoverOptions));
}; // Component
// ------------------------------

const Popover = _ref => {
  let {
    placement = 'bottom',
    triggerRenderer
  } = _ref,
      props = _objectWithoutProperties(_ref, ["placement", "triggerRenderer"]);

  const {
    isOpen,
    setOpen,
    trigger,
    dialog,
    arrow
  } = usePopover({
    placement,
    modifiers: [{
      name: 'offset',
      options: {
        offset: [0, 8]
      }
    }]
  });
  return core.jsx(react.Fragment, null, triggerRenderer({
    isOpen,
    triggerProps: _objectSpread(_objectSpread({
      ref: trigger.ref
    }, trigger.props), {}, {
      onClick: () => setOpen(true)
    })
  }), core.jsx(PopoverDialog, _extends({
    isVisible: isOpen,
    arrow: arrow,
    ref: dialog.ref
  }, dialog.props, props)));
}; // Dialog
// ------------------------------

const PopoverDialog = /*#__PURE__*/react.forwardRef((_ref2, consumerRef) => {
  let {
    isVisible,
    children,
    arrow
  } = _ref2,
      props = _objectWithoutProperties(_ref2, ["isVisible", "children", "arrow"]);

  const {
    elevation,
    radii,
    shadow,
    colors
  } = core.useTheme();
  const focusTrapRef = react.useRef(null);
  const focusTrap = react.useRef(null);
  react.useEffect(() => {
    if (focusTrapRef !== null && focusTrapRef !== void 0 && focusTrapRef.current) {
      focusTrap.current = focusTrapModule__namespace.createFocusTrap(focusTrapRef.current);
    }
  }, [focusTrapRef]);
  react.useEffect(() => {
    if (focusTrap !== null && focusTrap !== void 0 && focusTrap.current) {
      if (isVisible) {
        focusTrap.current.activate();
      } else {
        focusTrap.current.deactivate();
      }
    }
  }, [isVisible, focusTrap]);
  return core.jsx(core.Portal, null, core.jsx("div", _extends({
    ref: consumerRef,
    css: _objectSpread({
      background: colors.background,
      borderRadius: radii.medium,
      boxShadow: shadow.s300,
      opacity: isVisible ? 1 : 0,
      pointerEvents: isVisible ? undefined : 'none',
      zIndex: elevation.e500
    }, useArrowStyles())
  }, props), core.jsx("div", {
    ref: focusTrapRef
  }, isVisible && core.jsx(react.Fragment, null, core.jsx("div", _extends({
    "data-popper-arrow": true,
    ref: arrow.ref,
    className: "tooltipArrow"
  }, arrow.props)), children))));
}); // TODO: maybe we should add an invisible blanket and have a regular react event listener on that instead of this?
// NOTE: mouse event handler defined here rather than imported from react becase
// the event listener will return a native event, not a synthetic event

const useClickOutside = ({
  handler,
  elements,
  listenWhen
}) => {
  react.useEffect(() => {
    if (listenWhen) {
      let handleMouseDown = event => {
        // bail on mouse down "inside" any of the provided elements
        if (elements.some(el => el && el.contains(event.target))) {
          return;
        }

        handler(event);
      };

      document.addEventListener('mousedown', handleMouseDown);
      return () => {
        document.removeEventListener('mousedown', handleMouseDown);
      };
    }
  }, [handler, elements, listenWhen]);
};

const useKeyPress = ({
  targetKey,
  targetElement,
  downHandler,
  upHandler,
  listenWhen
}) => {
  // Keep track of whether the target key is pressed
  const [keyPressed, setKeyPressed] = react.useState(false); // add event listeners

  react.useEffect(() => {
    let target = targetElement || document.body;

    let onDown = event => {
      if (event.key === targetKey) {
        setKeyPressed(true);

        if (typeof downHandler === 'function') {
          downHandler(event);
        }
      }
    };

    let onUp = event => {
      if (event.key === targetKey) {
        setKeyPressed(false);

        if (typeof upHandler === 'function') {
          upHandler(event);
        }
      }
    };

    if (listenWhen) {
      target.addEventListener('keydown', onDown);
      target.addEventListener('keyup', onUp); // Remove event listeners on cleanup

      return () => {
        target.removeEventListener('keydown', onDown);
        target.removeEventListener('keyup', onUp);
      };
    }
  }, [listenWhen, targetKey, downHandler, upHandler, targetElement]);
  return keyPressed;
};

const useArrowStyles = () => {
  const theme = core.useTheme();
  const size = 16;
  return {
    '& [data-popper-arrow]': {
      position: 'absolute',
      overflow: 'hidden',
      pointerEvents: 'none',
      height: size * 2,
      width: size * 2,
      '&::after': {
        content: '""',
        position: 'absolute',
        background: theme.colors.background,
        width: size,
        height: size,
        transform: 'translateX(-50%) translateY(-50%) rotate(45deg)',
        boxShadow: theme.shadow.s200
      }
    },
    "&[data-popper-placement^='left'] > [data-popper-arrow]": {
      left: '100%',
      '&::after': {
        top: '50%',
        left: '0'
      }
    },
    "&[data-popper-placement^='right'] > [data-popper-arrow]": {
      right: '100%',
      '&::after': {
        top: '50%',
        left: '100%'
      }
    },
    "&[data-popper-placement^='top'] > [data-popper-arrow]": {
      top: '100%',
      '&::after': {
        top: 0,
        bottom: '-50%',
        left: '50%'
      }
    },
    "&[data-popper-placement^='bottom'] > [data-popper-arrow]": {
      bottom: '100%',
      right: 'unset',
      '&::after': {
        bottom: '-50%',
        left: '50%'
      }
    }
  };
};

exports.Popover = Popover;
exports.PopoverDialog = PopoverDialog;
exports.useControlledPopover = useControlledPopover;
exports.usePopover = usePopover;


/***/ }),

/***/ "iftL":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__("Hxl9");
} else {}


/***/ }),

/***/ "ioIi":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__("5owK");
} else {}


/***/ }),

/***/ "m3Bd":
/***/ (function(module, exports, __webpack_require__) {

var objectWithoutPropertiesLoose = __webpack_require__("LdEA");

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

module.exports = _objectWithoutProperties;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "nO9N":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__("Rz46");
} else {}


/***/ }),

/***/ "pHRq":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__("bxXX");
} else {}


/***/ }),

/***/ "pYII":
/***/ (function(module, exports) {

module.exports = require("react-popper");

/***/ }),

/***/ "sUZ5":
/***/ (function(module, exports) {

module.exports = require("@emotion/weak-memoize");

/***/ }),

/***/ "suMH":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__("JhG3");
} else {}


/***/ }),

/***/ "t8AJ":
/***/ (function(module, exports) {

module.exports = require("@keystone-ui/fields");

/***/ }),

/***/ "v0ll":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__("2ZNb");
} else {}


/***/ }),

/***/ "v22Q":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var React = __webpack_require__("cDcd");
var Icon = __webpack_require__("zdI/");
__webpack_require__("97Jx");
__webpack_require__("m3Bd");
__webpack_require__("R7Bz");

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () {
            return e[k];
          }
        });
      }
    });
  }
  n['default'] = e;
  return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/_interopNamespace(React);

const AlertTriangleIcon = Icon.createIcon( /*#__PURE__*/React__namespace.createElement(React__namespace.Fragment, null, /*#__PURE__*/React__namespace.createElement("path", {
  d: "M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
}), /*#__PURE__*/React__namespace.createElement("line", {
  x1: 12,
  y1: 9,
  x2: 12,
  y2: 13
}), /*#__PURE__*/React__namespace.createElement("line", {
  x1: 12,
  y1: 17,
  x2: 12.01,
  y2: 17
})), 'AlertTriangleIcon');

exports.AlertTriangleIcon = AlertTriangleIcon;


/***/ }),

/***/ "wBJt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var components = __webpack_require__("7LAw");
var core = __webpack_require__("R7Bz");
var fields = __webpack_require__("t8AJ");

/* @jsx jsx */
const Field = ({
  field,
  value,
  onChange,
  autoFocus
}) => {
  const {
    fields: fields$1,
    typography
  } = core.useTheme();
  return core.jsx(fields.FieldContainer, null, core.jsx(fields.Checkbox, {
    autoFocus: autoFocus,
    disabled: onChange === undefined,
    onChange: event => {
      onChange === null || onChange === void 0 ? void 0 : onChange(event.target.checked);
    },
    checked: value
  }, core.jsx("span", {
    css: {
      fontWeight: typography.fontWeight.semibold,
      color: fields$1.labelColor
    }
  }, field.label)));
};
const Cell = ({
  item,
  field
}) => {
  const value = !!item[field.path];
  return core.jsx(components.CellContainer, null, core.jsx(fields.Checkbox, {
    disabled: true,
    checked: value,
    size: "small"
  }, core.jsx("span", {
    css: {}
  }, value ? 'True' : 'False')));
};
const CardValue = ({
  item,
  field
}) => {
  return core.jsx(fields.FieldContainer, null, core.jsx(fields.FieldLabel, null, field.label), item[field.path] + '');
};
const controller = config => {
  return {
    path: config.path,
    label: config.label,
    graphqlSelection: config.path,
    defaultValue: false,

    deserialize(item) {
      const value = item[config.path];
      return typeof value === 'boolean' ? value : false;
    },

    serialize(value) {
      return {
        [config.path]: value
      };
    },

    filter: {
      Filter() {
        return null;
      },

      graphql({
        type,
        value
      }) {
        const key = type === 'is' ? `${config.path}` : `${config.path}_${type}`;
        return {
          [key]: value
        };
      },

      Label({
        label
      }) {
        return label.toLowerCase();
      },

      types: {
        is: {
          label: 'is',
          initialValue: true
        },
        not: {
          label: 'is not',
          initialValue: true
        }
      }
    }
  };
};

exports.CardValue = CardValue;
exports.Cell = Cell;
exports.Field = Field;
exports.controller = controller;


/***/ }),

/***/ "yiKp":
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__("KEM+");

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

module.exports = _objectSpread2;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "zdI/":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = __webpack_require__("97Jx");
var _objectWithoutProperties = __webpack_require__("m3Bd");
var React = __webpack_require__("cDcd");
var core = __webpack_require__("R7Bz");

// TODO: Move to theme?
const sizeMap = {
  small: 16,
  smallish: 20,
  medium: 24,
  largish: 28,
  large: 32
};
const createIcon = (children, name) => {
  let Icon = /*#__PURE__*/React.forwardRef((_ref, ref) => {
    let {
      size = 'medium',
      color
    } = _ref,
        props = _objectWithoutProperties(_ref, ["size", "color"]);

    const resolvedSize = typeof size === 'number' ? size : core.mapResponsiveProp(size, sizeMap);
    return core.jsx("svg", _extends({
      "aria-hidden": "true",
      focusable: "false",
      css: {
        verticalAlign: 'text-bottom',
        // removes whitespace inside buttons
        fill: 'none',
        stroke: color || 'currentColor',
        strokeLinejoin: 'round',
        strokeLinecap: 'round',
        strokeWidth: 2
      },
      height: `${resolvedSize}px`,
      width: `${resolvedSize}px`,
      ref: ref,
      role: "img",
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }, props), children);
  });
  Icon.displayName = name;
  return Icon;
};

exports.createIcon = createIcon;


/***/ }),

/***/ "ztEK":
/***/ (function(module, exports) {

module.exports = require("@keystone-ui/button");

/***/ })

/******/ });