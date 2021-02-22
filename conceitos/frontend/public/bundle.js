"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _reactDom = require("react-dom");

var _App = _interopRequireDefault(require("./App"));

//JSX: HTML dentro do Javascript ( Javascript XML )
(0, _reactDom.render)( /*#__PURE__*/_react["default"].createElement(_App["default"], null), document.getElementById('app'));