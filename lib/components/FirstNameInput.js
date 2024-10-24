"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
// src/components/FirstNameInput.js

var FirstNameInput = function FirstNameInput(_ref) {
  var value = _ref.value,
    onChange = _ref.onChange;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "mb-4"
  }, /*#__PURE__*/_react["default"].createElement("label", {
    htmlFor: "firstName",
    className: "block text-sm font-medium text-gray-700"
  }, "First Name"), /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    id: "firstName",
    value: value,
    onChange: onChange,
    className: "mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
  }));
};
var _default = exports["default"] = FirstNameInput;