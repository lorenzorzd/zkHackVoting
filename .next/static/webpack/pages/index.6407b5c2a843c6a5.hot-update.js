"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"injected\": function() { return /* binding */ injected; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var _Users_antoniocastro_Development_BlockchainVoting_zkHackVoting_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_antoniocastro_Development_BlockchainVoting_zkHackVoting_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_antoniocastro_Development_BlockchainVoting_zkHackVoting_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @web3-react/core */ \"./node_modules/@web3-react/core/dist/core.esm.js\");\n/* harmony import */ var _web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @web3-react/injected-connector */ \"./node_modules/@web3-react/injected-connector/dist/injected-connector.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _build_contracts_Voting_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../build/contracts/Voting.json */ \"./build/contracts/Voting.json\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n//import { abi } from \"../constants/abi\";\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _s = $RefreshSig$();\nvar injected = new _web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_5__.InjectedConnector();\nfunction Home() {\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false), hasMetamask = ref[0], setHasMetamask = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(0), numOfCandidates = ref1[0], setNumOfCandidates = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)([]), candidateNames = ref2[0], setCandidateNames = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(null), contractABI = ref3[0], setContractABI = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(null), contractAdress = ref4[0], setContractAdress = ref4[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(function() {\n        setContractAdress(_build_contracts_Voting_json__WEBPACK_IMPORTED_MODULE_7__.networks[5777].address);\n        setContractABI(_build_contracts_Voting_json__WEBPACK_IMPORTED_MODULE_7__.abi);\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(function() {\n        if (typeof window.ethereum !== \"undefined\") {\n            setHasMetamask(true);\n        }\n    });\n    var ref5 = (0,_web3_react_core__WEBPACK_IMPORTED_MODULE_4__.useWeb3React)(), active = ref5.active, activate = ref5.activate, chainId = ref5.chainId, account = ref5.account, provider = ref5.library;\n    function connect() {\n        return _connect.apply(this, arguments);\n    }\n    function _connect() {\n        _connect = _asyncToGenerator(_Users_antoniocastro_Development_BlockchainVoting_zkHackVoting_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            return _Users_antoniocastro_Development_BlockchainVoting_zkHackVoting_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        if (!(typeof window.ethereum !== \"undefined\")) {\n                            _ctx.next = 10;\n                            break;\n                        }\n                        _ctx.prev = 1;\n                        _ctx.next = 4;\n                        return activate(injected);\n                    case 4:\n                        setHasMetamask(true);\n                        _ctx.next = 10;\n                        break;\n                    case 7:\n                        _ctx.prev = 7;\n                        _ctx.t0 = _ctx[\"catch\"](1);\n                        console.log(_ctx.t0);\n                    case 10:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    1,\n                    7\n                ]\n            ]);\n        }));\n        return _connect.apply(this, arguments);\n    }\n    function execute() {\n        return _execute.apply(this, arguments);\n    }\n    function _execute() {\n        _execute = //CONTRACT FUNCIONS\n        //\n        //\n        _asyncToGenerator(_Users_antoniocastro_Development_BlockchainVoting_zkHackVoting_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var signer, contract, data, names, i, name;\n            return _Users_antoniocastro_Development_BlockchainVoting_zkHackVoting_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        if (!active) {\n                            _ctx.next = 26;\n                            break;\n                        }\n                        signer = provider.getSigner();\n                        contract = new ethers__WEBPACK_IMPORTED_MODULE_8__.ethers.Contract(contractAdress, contractABI, signer);\n                        _ctx.prev = 3;\n                        _ctx.next = 6;\n                        return contract.getNumofCandidates();\n                    case 6:\n                        data = _ctx.sent;\n                        setNumOfCandidates(data.toString());\n                        names = [];\n                        i = 1;\n                    case 10:\n                        if (!(i <= data)) {\n                            _ctx.next = 18;\n                            break;\n                        }\n                        _ctx.next = 13;\n                        return contract.getCandidateName(i);\n                    case 13:\n                        name = _ctx.sent;\n                        names.push(name);\n                    case 15:\n                        i++;\n                        _ctx.next = 10;\n                        break;\n                    case 18:\n                        setCandidateNames(names);\n                        _ctx.next = 24;\n                        break;\n                    case 21:\n                        _ctx.prev = 21;\n                        _ctx.t0 = _ctx[\"catch\"](3);\n                        console.log(_ctx.t0);\n                    case 24:\n                        _ctx.next = 27;\n                        break;\n                    case 26:\n                        {\n                            console.log(\"Please install MetaMask\");\n                        }\n                    case 27:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    3,\n                    21\n                ]\n            ]);\n        }));\n        return _execute.apply(this, arguments);\n    }\n    {}\n    var voteForCandidate = function() {\n        var _ref = _asyncToGenerator(_Users_antoniocastro_Development_BlockchainVoting_zkHackVoting_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(candidateIndex) {\n            var requestData, response, responseData;\n            return _Users_antoniocastro_Development_BlockchainVoting_zkHackVoting_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        requestData = {\n                            candidateIndex: candidateIndex\n                        };\n                        _ctx.prev = 1;\n                        _ctx.next = 4;\n                        return fetch('http://127.0.0.1:8000', {\n                            method: 'POST',\n                            headers: {\n                                'Content-Type': 'application/json'\n                            },\n                            body: JSON.stringify(\"SAs\")\n                        });\n                    case 4:\n                        response = _ctx.sent;\n                        if (!response.ok) {\n                            _ctx.next = 12;\n                            break;\n                        }\n                        _ctx.next = 8;\n                        return response.json();\n                    case 8:\n                        responseData = _ctx.sent;\n                        console.log('Response:', responseData);\n                        _ctx.next = 13;\n                        break;\n                    case 12:\n                        {\n                            // Handle error here\n                            console.error('Error:', response.statusText);\n                        // Handle error UI feedback if needed\n                        }\n                    case 13:\n                        _ctx.next = 18;\n                        break;\n                    case 15:\n                        _ctx.prev = 15;\n                        _ctx.t0 = _ctx[\"catch\"](1);\n                        console.error('Error:', _ctx.t0);\n                    case 18:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    1,\n                    15\n                ]\n            ]);\n        }));\n        return function voteForCandidate(candidateIndex) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"flex flex-col items-center justify-center h-screen\",\n        children: [\n            hasMetamask ? active ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                className: \"\",\n                children: [\n                    \"Connected to Address: \",\n                    account\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/antoniocastro/Development/BlockchainVoting/zkHackVoting/pages/index.js\",\n                lineNumber: 143,\n                columnNumber: 11\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"flex flex-col items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                        className: \"text-3xl font-bold underl ine items-center\",\n                        children: \"Connect To metamask\"\n                    }, void 0, false, {\n                        fileName: \"/Users/antoniocastro/Development/BlockchainVoting/zkHackVoting/pages/index.js\",\n                        lineNumber: 146,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                        onClick: function() {\n                            return connect();\n                        },\n                        className: \"group rounded-2xl h-12 w-48 bg-green-500 font-bold text-lg text-white relative overflow-hidden\",\n                        children: [\n                            \"Connect\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: \"absolute duration-300 inset-0 w-full h-full transition-all scale-0 group-hover:scale-100 group-hover:bg-white/30 rounded-2xl\"\n                            }, void 0, false, {\n                                fileName: \"/Users/antoniocastro/Development/BlockchainVoting/zkHackVoting/pages/index.js\",\n                                lineNumber: 149,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/antoniocastro/Development/BlockchainVoting/zkHackVoting/pages/index.js\",\n                        lineNumber: 147,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/antoniocastro/Development/BlockchainVoting/zkHackVoting/pages/index.js\",\n                lineNumber: 145,\n                columnNumber: 11\n            }, this) : \"Please install metamask\",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"flex flex-col items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                        onClick: function() {\n                            return execute();\n                        },\n                        children: \"View Elections\"\n                    }, void 0, false, {\n                        fileName: \"/Users/antoniocastro/Development/BlockchainVoting/zkHackVoting/pages/index.js\",\n                        lineNumber: 161,\n                        columnNumber: 9\n                    }, this),\n                    candidateNames.map(function(name, index) {\n                        /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                            onClick: function() {\n                                return voteForCandidate(index + 1);\n                            },\n                            children: name\n                        }, index, false, {\n                            fileName: \"/Users/antoniocastro/Development/BlockchainVoting/zkHackVoting/pages/index.js\",\n                            lineNumber: 163,\n                            columnNumber: 11\n                        }, _this);\n                    })\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/antoniocastro/Development/BlockchainVoting/zkHackVoting/pages/index.js\",\n                lineNumber: 160,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/antoniocastro/Development/BlockchainVoting/zkHackVoting/pages/index.js\",\n        lineNumber: 139,\n        columnNumber: 5\n    }, this));\n};\n_s(Home, \"WoGo4teSQ3scsMBnLCW6sLIKRB0=\", false, function() {\n    return [\n        _web3_react_core__WEBPACK_IMPORTED_MODULE_4__.useWeb3React\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUM0QixLQUFLLENBQUMsQ0FBUTs7Ozs7Ozs7Ozs7UUFHMUIsQ0FBQzt3QkE1QktiLGdCQUFnQixDQUFVQyxjQUFjOzs7O0lBK0I5QyxNQUFNLDZFQUNIYyxDQUFHO1FBQUNDLFNBQVMsRUFBQyxDQUFvRDs7WUFFaEVyRCxXQUFXLEdBQ1ZlLE1BQU0sK0VBQ0h1QyxDQUFDO2dCQUFDRCxTQUFTLEVBQUMsQ0FBRTs7b0JBQUMsQ0FBc0I7b0JBQUNuQyxPQUFPOzs7Ozs7bUdBRTdDa0MsQ0FBRztnQkFBQ0MsU0FBUyxFQUFDLENBQTRCOztnR0FDeENFLENBQUU7d0JBQUNGLFNBQVMsRUFBQyxDQUE0QztrQ0FBQyxDQUFtQjs7Ozs7O2dHQUM3RUcsQ0FBTTt3QkFBQ0MsT0FBTyxFQUFFLFFBQVE7NEJBQUZwQyxNQUFNLENBQU5BLE9BQU87O3dCQUFJZ0MsU0FBUyxFQUFDLENBQWdHOzs0QkFBQyxDQUUzSTt3R0FBQ0QsQ0FBRztnQ0FBQ0MsU0FBUyxFQUFDLENBQThIOzs7Ozs7Ozs7Ozs7Ozs7Ozt1QkFNbkosQ0FBeUI7d0ZBSzFCRCxDQUFHO2dCQUFDQyxTQUFTLEVBQUMsQ0FBNEI7O2dHQUN4Q0csQ0FBTTt3QkFBQ0MsT0FBTyxFQUFFLFFBQVE7NEJBQUZqQyxNQUFNLENBQU5BLE9BQU87O2tDQUFJLENBQWM7Ozs7OztvQkFDL0NwQixjQUFjLENBQUNzRCxHQUFHLENBQUMsUUFBUSxDQUFQNUIsSUFBSSxFQUFFNkIsS0FBSztzQ0FDOUIsTUFBTSwrREFBTEgsQ0FBTTs0QkFBYUMsT0FBTyxFQUFFLFFBQVE7Z0NBQUZwQixNQUFNLENBQU5BLGdCQUFnQixDQUFDc0IsS0FBSyxHQUFHLENBQUM7O3NDQUFJN0IsSUFBSTsyQkFBeEQ2QixLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRNUIsQ0FBQztHQTdKdUI1RCxJQUFJOztRQXlCdEJQLDBEQUFZOzs7S0F6Qk1PLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjtcbmltcG9ydCB7IHVzZVdlYjNSZWFjdCB9IGZyb20gXCJAd2ViMy1yZWFjdC9jb3JlXCI7XG5pbXBvcnQgeyBJbmplY3RlZENvbm5lY3RvciB9IGZyb20gXCJAd2ViMy1yZWFjdC9pbmplY3RlZC1jb25uZWN0b3JcIjtcbi8vaW1wb3J0IHsgYWJpIH0gZnJvbSBcIi4uL2NvbnN0YW50cy9hYmlcIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGV0aGVycyB9IGZyb20gXCJldGhlcnNcIjtcbmltcG9ydCBWb3RpbmcgZnJvbSBcIi4uL2J1aWxkL2NvbnRyYWN0cy9Wb3RpbmcuanNvblwiXG5cbmV4cG9ydCBjb25zdCBpbmplY3RlZCA9IG5ldyBJbmplY3RlZENvbm5lY3RvcigpO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtoYXNNZXRhbWFzaywgc2V0SGFzTWV0YW1hc2tdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbbnVtT2ZDYW5kaWRhdGVzLCBzZXROdW1PZkNhbmRpZGF0ZXNdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtjYW5kaWRhdGVOYW1lcywgc2V0Q2FuZGlkYXRlTmFtZXNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbY29udHJhY3RBQkksIHNldENvbnRyYWN0QUJJXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbY29udHJhY3RBZHJlc3MsIHNldENvbnRyYWN0QWRyZXNzXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0Q29udHJhY3RBZHJlc3MoVm90aW5nLm5ldHdvcmtzWzU3NzddLmFkZHJlc3MpXG4gICAgc2V0Q29udHJhY3RBQkkoVm90aW5nLmFiaSk7XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh0eXBlb2Ygd2luZG93LmV0aGVyZXVtICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICBzZXRIYXNNZXRhbWFzayh0cnVlKTtcbiAgICB9IFxuICB9KTtcbiAgXG5cbiAgY29uc3Qge1xuICAgIGFjdGl2ZSxcbiAgICBhY3RpdmF0ZSxcbiAgICBjaGFpbklkLFxuICAgIGFjY291bnQsXG4gICAgbGlicmFyeTogcHJvdmlkZXIsXG4gIH0gPSB1c2VXZWIzUmVhY3QoKTtcblxuICBhc3luYyBmdW5jdGlvbiBjb25uZWN0KCkge1xuICAgIGlmICh0eXBlb2Ygd2luZG93LmV0aGVyZXVtICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICB0cnkge1xuICAgICAgICBhd2FpdCBhY3RpdmF0ZShpbmplY3RlZCk7XG4gICAgICAgIHNldEhhc01ldGFtYXNrKHRydWUpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvL0NPTlRSQUNUIEZVTkNJT05TXG4gIC8vXG4gIC8vXG4gIGFzeW5jIGZ1bmN0aW9uIGV4ZWN1dGUoKSB7XG4gICAgaWYgKGFjdGl2ZSkge1xuICAgICAgY29uc3Qgc2lnbmVyID0gcHJvdmlkZXIuZ2V0U2lnbmVyKCk7XG4gICAgICAgICAgICBjb25zdCBjb250cmFjdCA9IG5ldyBldGhlcnMuQ29udHJhY3QoY29udHJhY3RBZHJlc3MsIGNvbnRyYWN0QUJJLCBzaWduZXIpO1xuICAgICAgdHJ5IHtcblxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgY29udHJhY3QuZ2V0TnVtb2ZDYW5kaWRhdGVzKCk7XG4gICAgICAgIHNldE51bU9mQ2FuZGlkYXRlcyhkYXRhLnRvU3RyaW5nKCkpO1xuXG4gICAgICAgIC8vIFJldHJpZXZlIG5hbWVzIG9mIGVhY2ggY2FuZGlkYXRlIGFuZCB1cGRhdGUgc3RhdGVcbiAgICAgICAgY29uc3QgbmFtZXMgPSBbXTtcbiAgICAgICAgZm9yKGxldCBpID0gMTsgaSA8PSBkYXRhOyBpKyspIHtcbiAgICAgICAgICBjb25zdCBuYW1lID0gYXdhaXQgY29udHJhY3QuZ2V0Q2FuZGlkYXRlTmFtZShpKTtcbiAgICAgICAgICBuYW1lcy5wdXNoKG5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIHNldENhbmRpZGF0ZU5hbWVzKG5hbWVzKTtcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiUGxlYXNlIGluc3RhbGwgTWV0YU1hc2tcIik7XG4gICAgfVxuICB9XG5cbiAgey8qKlxuICAgIGFzeW5jIGZ1bmN0aW9uIHZvdGVGb3JDYW5kaWRhdGUoY2FuZGlkYXRlSWQpIHtcbiAgICAvLyBUaGlzIGZ1bmN0aW9uIHdvdWxkIGNvbnRhaW4gdGhlIGxvZ2ljIGZvciB2b3RpbmcgZm9yIGEgc3BlY2lmaWMgY2FuZGlkYXRlXG4gICAgLy8gY2FuZGlkYXRlSWQgaXMgdGhlIGlkIG9mIHRoZSBjYW5kaWRhdGUgdG8gdm90ZSBmb3JcbiAgICBpZiAoYWN0aXZlKSB7XG4gICAgICBjb25zdCBzaWduZXIgPSBwcm92aWRlci5nZXRTaWduZXIoKTtcbiAgICAgIGNvbnN0IGNvbnRyYWN0ID0gbmV3IGV0aGVycy5Db250cmFjdChjb250cmFjdEFkcmVzcywgY29udHJhY3RBQkksIHNpZ25lcik7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBDYWxsIHRoZSB2b3RlIGZ1bmN0aW9uIGluIHRoZSBzbWFydCBjb250cmFjdFxuICAgICAgICBjb25zdCB0cmFuc2FjdGlvbiA9IGF3YWl0IGNvbnRyYWN0LnZvdGUoY2FuZGlkYXRlSWQpO1xuICAgICAgICBhd2FpdCB0cmFuc2FjdGlvbi53YWl0KCk7IC8vIFdhaXQgZm9yIHRoZSB0cmFuc2FjdGlvbiB0byBiZSBtaW5lZFxuICAgICAgICBjb25zb2xlLmxvZyhcIlZvdGUgc3VjY2Vzc2Z1bFwiKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coXCJQbGVhc2UgaW5zdGFsbCBNZXRhTWFza1wiKTtcbiAgICB9XG5cblxuICB9XG5cbiovfVxuICBcblxuICBjb25zdCB2b3RlRm9yQ2FuZGlkYXRlID0gYXN5bmMgKGNhbmRpZGF0ZUluZGV4KSA9PiB7XG4gICAgY29uc3QgcmVxdWVzdERhdGEgPSB7XG4gICAgICBjYW5kaWRhdGVJbmRleDogY2FuZGlkYXRlSW5kZXgsXG4gICAgfTtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwOi8vMTI3LjAuMC4xOjgwMDAnLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoXCJTQXNcIiksXG4gICAgICB9KTtcblxuICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgIC8vIFRoZSByZXF1ZXN0IHdhcyBzdWNjZXNzZnVsXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgY29uc29sZS5sb2coJ1Jlc3BvbnNlOicsIHJlc3BvbnNlRGF0YSk7XG4gICAgICAgIC8vIEhhbmRsZSBhbnkgVUkgdXBkYXRlcyBvciBmZWVkYmFjayBoZXJlXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBIYW5kbGUgZXJyb3IgaGVyZVxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvcjonLCByZXNwb25zZS5zdGF0dXNUZXh0KTtcbiAgICAgICAgLy8gSGFuZGxlIGVycm9yIFVJIGZlZWRiYWNrIGlmIG5lZWRlZFxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvcjonLCBlcnJvcik7XG4gICAgICAvLyBIYW5kbGUgZXJyb3IgVUkgZmVlZGJhY2sgaWYgbmVlZGVkXG4gICAgfVxuICB9O1xuXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGgtc2NyZWVuXCI+XG5cbiAgICAgIHtoYXNNZXRhbWFzayA/IChcbiAgICAgICAgYWN0aXZlID8gKFxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIlwiPkNvbm5lY3RlZCB0byBBZGRyZXNzOiB7YWNjb3VudH08L3A+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtYm9sZCB1bmRlcmwgaW5lIGl0ZW1zLWNlbnRlclwiPkNvbm5lY3QgVG8gbWV0YW1hc2s8L2gxPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBjb25uZWN0KCl9IGNsYXNzTmFtZT1cImdyb3VwIHJvdW5kZWQtMnhsIGgtMTIgdy00OCBiZy1ncmVlbi01MDAgZm9udC1ib2xkIHRleHQtbGcgdGV4dC13aGl0ZSByZWxhdGl2ZSBvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgICAgICAgICAgQ29ubmVjdFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGR1cmF0aW9uLTMwMCBpbnNldC0wIHctZnVsbCBoLWZ1bGwgdHJhbnNpdGlvbi1hbGwgc2NhbGUtMCBncm91cC1ob3ZlcjpzY2FsZS0xMDAgZ3JvdXAtaG92ZXI6Ymctd2hpdGUvMzAgcm91bmRlZC0yeGxcIj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICAgICkgOiAoXG4gICAgICAgIFwiUGxlYXNlIGluc3RhbGwgbWV0YW1hc2tcIlxuICAgICAgKX1cbiAgXG4gICAgIFxuICAgICBcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXJcIj4gXG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gZXhlY3V0ZSgpfT5WaWV3IEVsZWN0aW9uczwvYnV0dG9uPiBcbiAgICAgICAge2NhbmRpZGF0ZU5hbWVzLm1hcCgobmFtZSwgaW5kZXgpID0+IChcbiAgICAgICAgICA8YnV0dG9uIGtleT17aW5kZXh9IG9uQ2xpY2s9eygpID0+IHZvdGVGb3JDYW5kaWRhdGUoaW5kZXggKyAxKX0+e25hbWV9PC9idXR0b24+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG5cblxuXG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiSGVhZCIsIkltYWdlIiwic3R5bGVzIiwidXNlV2ViM1JlYWN0IiwiSW5qZWN0ZWRDb25uZWN0b3IiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImV0aGVycyIsIlZvdGluZyIsImluamVjdGVkIiwiSG9tZSIsImhhc01ldGFtYXNrIiwic2V0SGFzTWV0YW1hc2siLCJudW1PZkNhbmRpZGF0ZXMiLCJzZXROdW1PZkNhbmRpZGF0ZXMiLCJjYW5kaWRhdGVOYW1lcyIsInNldENhbmRpZGF0ZU5hbWVzIiwiY29udHJhY3RBQkkiLCJzZXRDb250cmFjdEFCSSIsImNvbnRyYWN0QWRyZXNzIiwic2V0Q29udHJhY3RBZHJlc3MiLCJuZXR3b3JrcyIsImFkZHJlc3MiLCJhYmkiLCJ3aW5kb3ciLCJldGhlcmV1bSIsImFjdGl2ZSIsImFjdGl2YXRlIiwiY2hhaW5JZCIsImFjY291bnQiLCJwcm92aWRlciIsImxpYnJhcnkiLCJjb25uZWN0IiwiY29uc29sZSIsImxvZyIsImV4ZWN1dGUiLCJzaWduZXIiLCJjb250cmFjdCIsImRhdGEiLCJuYW1lcyIsImkiLCJuYW1lIiwiZ2V0U2lnbmVyIiwiQ29udHJhY3QiLCJnZXROdW1vZkNhbmRpZGF0ZXMiLCJ0b1N0cmluZyIsImdldENhbmRpZGF0ZU5hbWUiLCJwdXNoIiwidm90ZUZvckNhbmRpZGF0ZSIsImNhbmRpZGF0ZUluZGV4IiwicmVxdWVzdERhdGEiLCJyZXNwb25zZSIsInJlc3BvbnNlRGF0YSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5Iiwib2siLCJqc29uIiwiZXJyb3IiLCJzdGF0dXNUZXh0IiwiZGl2IiwiY2xhc3NOYW1lIiwicCIsImgxIiwiYnV0dG9uIiwib25DbGljayIsIm1hcCIsImluZGV4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});