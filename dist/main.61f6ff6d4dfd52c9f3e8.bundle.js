(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./app/actions/action-types.js":
/*!*************************************!*\
  !*** ./app/actions/action-types.js ***!
  \*************************************/
/*! exports provided: FETCH_SOURCE, FETCH_SOURCE_SUCCESS, FETCH_SOURCE_ERROR */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FETCH_SOURCE\", function() { return FETCH_SOURCE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FETCH_SOURCE_SUCCESS\", function() { return FETCH_SOURCE_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FETCH_SOURCE_ERROR\", function() { return FETCH_SOURCE_ERROR; });\nconst FETCH_SOURCE = 'FETCH_SOURCE';\nconst FETCH_SOURCE_SUCCESS = 'FETCH_SOURCE_SUCCESS';\nconst FETCH_SOURCE_ERROR = 'FETCH_SOURCE_ERROR';\n\n//# sourceURL=webpack:///./app/actions/action-types.js?");

/***/ }),

/***/ "./app/actions/source.js":
/*!*******************************!*\
  !*** ./app/actions/source.js ***!
  \*******************************/
/*! exports provided: beginFetchSource, fetchSourceSuccess, fetchSourceError, fetchSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"beginFetchSource\", function() { return beginFetchSource; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchSourceSuccess\", function() { return fetchSourceSuccess; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchSourceError\", function() { return fetchSourceError; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchSource\", function() { return fetchSource; });\n/* harmony import */ var _action_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action-types */ \"./app/actions/action-types.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ \"./app/config/index.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction beginFetchSource(webapp, slot) {\n  return {\n    type: _action_types__WEBPACK_IMPORTED_MODULE_0__[\"FETCH_SOURCE\"],\n    webapp,\n    slot\n  };\n}\nfunction fetchSourceSuccess(webapp, slot, data) {\n  return {\n    type: _action_types__WEBPACK_IMPORTED_MODULE_0__[\"FETCH_SOURCE_SUCCESS\"],\n    sourceData: data,\n    service: webapp,\n    slot\n  };\n}\nfunction fetchSourceError(webapp, slot, error) {\n  return {\n    type: _action_types__WEBPACK_IMPORTED_MODULE_0__[\"FETCH_SOURCE_ERROR\"],\n    service: webapp,\n    slot,\n    error\n  };\n}\nfunction fetchSource(webapp, slot) {\n  return async dispatch => {\n    dispatch(beginFetchSource());\n\n    try {\n      const {\n        data\n      } = await axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`${_config__WEBPACK_IMPORTED_MODULE_2__[\"ROUTE\"]}/webapp/${webapp}/slot/${slot}/source`);\n      dispatch(fetchSourceSuccess(webapp, slot, data));\n    } catch (err) {\n      dispatch(fetchSourceError(webapp, slot, err));\n    }\n  };\n}\n\n//# sourceURL=webpack:///./app/actions/source.js?");

/***/ }),

/***/ "./app/components/App.js":
/*!*******************************!*\
  !*** ./app/components/App.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header */ \"./app/components/Header.js\");\n/* harmony import */ var _Table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Table */ \"./app/components/Table.js\");\n/* harmony import */ var _actions_source__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions/source */ \"./app/actions/source.js\");\n\n\n\n\n\n\n\nclass App extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  render() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"container\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Table__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null));\n  }\n\n}\n\nfunction mapDispatchToProps(dispatch) {\n  return {\n    sourceActions: Object(redux__WEBPACK_IMPORTED_MODULE_1__[\"bindActionCreators\"])(_actions_source__WEBPACK_IMPORTED_MODULE_5__, dispatch)\n  };\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(null, mapDispatchToProps)(App));\n\n//# sourceURL=webpack:///./app/components/App.js?");

/***/ }),

/***/ "./app/components/Header.js":
/*!**********************************!*\
  !*** ./app/components/Header.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst Header = () => {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", {\n    style: styles.headerStyle\n  }, \"Dazboard\");\n};\n\nconst styles = {\n  headerStyle: {\n    textAlign: 'center',\n    fontWeight: 'bold',\n    fontSize: '32px'\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\n\n//# sourceURL=webpack:///./app/components/Header.js?");

/***/ }),

/***/ "./app/components/Table.js":
/*!*********************************!*\
  !*** ./app/components/Table.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-html-parser */ \"./node_modules/react-html-parser/lib/index.js\");\n/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_html_parser__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _TableCell__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TableCell */ \"./app/components/TableCell.js\");\n/* harmony import */ var _actions_source__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions/source */ \"./app/actions/source.js\");\n\n\n\n\n\n\n\nclass Table extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor(...args) {\n    var _temp;\n\n    return _temp = super(...args), this.handleFetchSourceData = (service, slot) => {\n      // this.props.sourceActions.fetchSource(service, slot);\n      console.log('fetchSource');\n    }, _temp;\n  }\n\n  render() {\n    const s = this.props.source;\n    const rows = [];\n    const firstRow = [];\n    firstRow.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"th\", null, \"service\"));\n    const tableHeads = [react_html_parser__WEBPACK_IMPORTED_MODULE_3___default()('<th>service</th>')];\n    let firstRound = true;\n\n    for (let service in s) {\n      const cells = [];\n      if (typeof s[service] !== 'object') continue;\n\n      for (let slot in s[service]) {\n        cells.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TableCell__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n          key: slot,\n          service: service,\n          handleFetchSourceData: this.handleFetchSourceData,\n          slot: slot,\n          sourceData: s[service][slot]\n        }));\n        if (firstRound) tableHeads.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"th\", {\n          key: slot\n        }, slot));\n      }\n\n      rows.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tr\", {\n        key: service\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, service), cells));\n      firstRound = false;\n    }\n\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"table\", {\n      className: \"table table-hover\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"thead\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tr\", {\n      style: styles.titleStyle\n    }, tableHeads)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tbody\", null, rows)));\n  }\n\n}\n\nconst styles = {\n  titleStyle: {\n    // backgroundColor: '#DCDCDC',\n    // textAlign: 'center',\n    fontWeight: 'bold',\n    fontSize: '16px'\n  }\n};\n\nfunction mapStateToProps(state) {\n  return {\n    source: state.source\n  };\n}\n\nfunction mapDispatchToProps(dispatch) {\n  return {\n    sourceActions: Object(redux__WEBPACK_IMPORTED_MODULE_1__[\"bindActionCreators\"])(_actions_source__WEBPACK_IMPORTED_MODULE_5__, dispatch)\n  };\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(mapStateToProps, mapDispatchToProps)(Table));\n\n//# sourceURL=webpack:///./app/components/Table.js?");

/***/ }),

/***/ "./app/components/TableCell.js":
/*!*************************************!*\
  !*** ./app/components/TableCell.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst customStyles = {\n  content: {\n    top: '50%',\n    left: '50%',\n    right: '25%',\n    bottom: '25%',\n    marginRight: '-50%',\n    transform: 'translate(-50%, -50%)'\n  }\n};\n\nclass TableCell extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor(...args) {\n    var _temp;\n\n    return _temp = super(...args), this.state = {\n      modalIsOpen: false\n    }, this.openModal = () => {\n      this.setState({\n        modalIsOpen: true\n      });\n    }, this.closeModal = () => {\n      this.setState({\n        modalIsOpen: false\n      });\n    }, this.setButtonStyle = data => {\n      let buttonStyle = {\n        backgroundColor: '#D58A2A',\n        border: 'none',\n        color: 'white',\n        width: '100px',\n        height: '30px',\n        textAlign: 'center',\n        textDecoration: 'none',\n        display: 'inline-block',\n        fontSize: '14px',\n        borderRadius: '5px'\n      }; // Set different colors based on branches\n\n      if (data && data.properties) {\n        if (data.properties.branch === 'master' || data.properties.branch === 'qa' || data.properties.branch === 'qa2' || data.properties.branch === 'integration') {\n          buttonStyle.backgroundColor = '#4CAF50';\n        } else if (data.properties.repoUrl === 'VSTSRM') {\n          buttonStyle.backgroundColor = '#3340C1';\n        }\n      }\n\n      return buttonStyle;\n    }, _temp;\n  }\n\n  componentDidMount() {\n    const {\n      service,\n      handleFetchSourceData,\n      slot\n    } = this.props;\n    handleFetchSourceData(service, slot);\n  }\n\n  render() {\n    const {\n      service,\n      sourceData,\n      error\n    } = this.props;\n    let display;\n\n    if (error) {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"error\"));\n    }\n\n    if (sourceData === null || !sourceData || !sourceData.properties) {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, \"...\");\n    }\n\n    if (!sourceData.properties.branch) {\n      display = sourceData.properties.repoUrl;\n    } else {\n      display = sourceData.properties.branch;\n    }\n\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", {\n      style: styles.cellStyle\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n      style: this.setButtonStyle(sourceData),\n      onClick: this.openModal\n    }, display));\n  }\n\n}\n\nconst styles = {\n  cellStyle: {\n    // height: '6px',\n    paddingTop: '1px',\n    paddingBottom: '1px'\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (TableCell);\n\n//# sourceURL=webpack:///./app/components/TableCell.js?");

/***/ }),

/***/ "./app/config/index.js":
/*!*****************************!*\
  !*** ./app/config/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(process) {module.exports = {\n  PORT: process.env.PORT || 8080,\n  ROUTE: 'https://currencyDazboardService.azurewebsites.net',\n  NODE_ENV: \"development\"\n};\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/process/browser.js */ \"./node_modules/process/browser.js\")))\n\n//# sourceURL=webpack:///./app/config/index.js?");

/***/ }),

/***/ "./app/dummyData/index.js":
/*!********************************!*\
  !*** ./app/dummyData/index.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\n  abandonService: {\n    qa: null,\n    qa2: null,\n    staging: null,\n    integration: null\n  },\n  currencyapi: {\n    qa: null,\n    qa2: null,\n    staging: null,\n    integration: null\n  },\n  currencyBackoffice: {\n    qa: null,\n    qa2: null,\n    staging: null,\n    integration: null\n  },\n  currencyCreditBureau: {\n    qa: null,\n    qa2: null,\n    staging: null,\n    integration: null\n  },\n  currencyEmailService: {\n    qa: null,\n    qa2: null,\n    staging: null,\n    integration: null\n  },\n  currencyFileService: {\n    qa: null,\n    qa2: null,\n    staging: null,\n    integration: null\n  },\n  currencyFraudService: {\n    qa: null,\n    qa2: null,\n    staging: null,\n    integration: null\n  },\n  currencyLenderService: {\n    qa: null,\n    qa2: null,\n    staging: null,\n    integration: null\n  },\n  currencyMarketingApi: {\n    qa: null,\n    qa2: null,\n    staging: null,\n    integration: null\n  },\n  currencyMarketoService: {\n    qa: null,\n    qa2: null,\n    staging: null,\n    integration: null\n  },\n  currencyRateService: {\n    qa: null,\n    qa2: null,\n    staging: null,\n    integration: null\n  },\n  currencySalesforce: {\n    qa: null,\n    qa2: null,\n    staging: null,\n    integration: null\n  },\n  currencyScoringApi: {\n    qa: null,\n    qa2: null,\n    staging: null,\n    integration: null\n  },\n  currencySimpleApi: {\n    qa: null,\n    qa2: null,\n    staging: null,\n    integration: null\n  },\n  currencyStipService: {\n    qa: null,\n    qa2: null,\n    staging: null,\n    integration: null\n  },\n  currencySubscriptionApi: {\n    qa: null,\n    qa2: null,\n    staging: null,\n    integration: null\n  },\n  currencyVendorService: {\n    qa: null,\n    qa2: null,\n    staging: null,\n    integration: null\n  },\n  envertomanagementapp: {\n    qa: null,\n    qa2: null,\n    staging: null,\n    integration: null\n  },\n  expressConsolidated: {\n    qa: null,\n    qa2: null,\n    staging: null,\n    integration: null\n  },\n  expressServiceCore: {\n    qa: null,\n    qa2: null,\n    staging: null,\n    integration: null\n  }\n};\n\n//# sourceURL=webpack:///./app/dummyData/index.js?");

/***/ }),

/***/ "./app/reducers/index.js":
/*!*******************************!*\
  !*** ./app/reducers/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n/* harmony import */ var _source__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./source */ \"./app/reducers/source.js\");\n\n // RENAME ACCORDINGLY\n\nconst rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"combineReducers\"])({\n  source: _source__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (rootReducer);\n\n//# sourceURL=webpack:///./app/reducers/index.js?");

/***/ }),

/***/ "./app/reducers/source.js":
/*!********************************!*\
  !*** ./app/reducers/source.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return source; });\n/* harmony import */ var _actions_action_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/action-types */ \"./app/actions/action-types.js\");\n\n\nconst initialState = __webpack_require__(/*! ../dummyData */ \"./app/dummyData/index.js\");\n\nfunction source(state = initialState, action) {\n  const {\n    service,\n    slot,\n    sourceData,\n    error\n  } = action;\n\n  switch (action.type) {\n    case _actions_action_types__WEBPACK_IMPORTED_MODULE_0__[\"FETCH_SOURCE_SUCCESS\"]:\n      return { ...state,\n        [service]: { ...state[service],\n          [slot]: sourceData\n        }\n      };\n\n    case _actions_action_types__WEBPACK_IMPORTED_MODULE_0__[\"FETCH_SOURCE_ERROR\"]:\n      return { ...state,\n        [service]: { ...state[service],\n          [slot]: { ...state[service][slot],\n            error\n          }\n        }\n      };\n\n    default:\n      return state;\n  }\n}\n;\n\n//# sourceURL=webpack:///./app/reducers/source.js?");

/***/ }),

/***/ "./app/renderers/dom.js":
/*!******************************!*\
  !*** ./app/renderers/dom.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/es/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store */ \"./app/store/index.js\");\n/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/App */ \"./app/components/App.js\");\n\n\n\n\n\n\nconst store = Object(_store__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\nreact_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"Provider\"], {\n  store: store\n}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"BrowserRouter\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_App__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null))), document.getElementById('root'));\n\n//# sourceURL=webpack:///./app/renderers/dom.js?");

/***/ }),

/***/ "./app/store/index.js":
/*!****************************!*\
  !*** ./app/store/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return configureStore; });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ \"./node_modules/redux-thunk/es/index.js\");\n/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-logger */ \"./node_modules/redux-logger/dist/redux-logger.js\");\n/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_logger__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var redux_immutable_state_invariant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-immutable-state-invariant */ \"./node_modules/redux-immutable-state-invariant/dist/index.js\");\n/* harmony import */ var redux_immutable_state_invariant__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_immutable_state_invariant__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config */ \"./app/config/index.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers */ \"./app/reducers/index.js\");\n\n\n\n\n\n\nconst middleware = [redux_thunk__WEBPACK_IMPORTED_MODULE_1__[\"default\"]];\nif (_config__WEBPACK_IMPORTED_MODULE_4__[\"NODE_ENV\"] === 'development') middleware.push(redux_immutable_state_invariant__WEBPACK_IMPORTED_MODULE_3___default()(), redux_logger__WEBPACK_IMPORTED_MODULE_2___default.a);\nfunction configureStore(initialState) {\n  return Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(_reducers__WEBPACK_IMPORTED_MODULE_5__[\"default\"], initialState, Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"applyMiddleware\"])(...middleware));\n}\n\n//# sourceURL=webpack:///./app/store/index.js?");

/***/ }),

/***/ 0:
/*!*********************************!*\
  !*** readable-stream (ignored) ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///readable-stream_(ignored)?");

/***/ })

},[["./app/renderers/dom.js","manifest","vendors~main"]]]);