"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _default2 = _interopRequireDefault(require("part:@sanity/components/formfields/default"));

var _PatchEvent = _interopRequireWildcard(require("@sanity/form-builder/PatchEvent"));

var _Slider = _interopRequireDefault(require("./Slider.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * @param {number} num
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
function clamp(num, min, max) {
  return Math.max(Math.min(num, max), min);
}

;
/**
 * @param  {...any} classes 
 * @returns {string}
 */

function combine() {
  for (var _len = arguments.length, classes = new Array(_len), _key = 0; _key < _len; _key++) {
    classes[_key] = arguments[_key];
  }

  return classes.filter(function (c) {
    return typeof c === 'string';
  }).join(' ');
}
/**
 * @type {React.FC<{
 *     level: number;
 *     value?: number;
 *     onChange(value: number): void;
 *     type: {
 *         title?: string;
 *         description?: string;
 *         initialValue?: number;
 *         options: {
 *             style?: React.CSSProperties;
 *             labels?: { value: number, title: string }[];
 *             range: {
 *                 min: number;
 *                 max: number;
 *                 step: number;
 *             }
 *         };
 *     };
 * }>}
 */


var Slider = function Slider(props) {
  var _ref, _type$options$labels;

  var type = props.type,
      value = props.value,
      level = props.level;
  var _type$options$range = type.options.range,
      min = _type$options$range.min,
      max = _type$options$range.max,
      step = _type$options$range.step;

  var _useState = (0, _react.useState)(0),
      _useState2 = _slicedToArray(_useState, 2),
      maxHeight = _useState2[0],
      setMaxHeight = _useState2[1];

  var v = clamp(Number((_ref = value !== null && value !== void 0 ? value : type.initialValue) !== null && _ref !== void 0 ? _ref : min), min, max);
  var title = "".concat(type.title, ": ").concat(v);
  (0, _react.useEffect)(function () {
    if (value && (value < min || value > max)) {
      var _type$initialValue;

      props.onChange(_PatchEvent["default"].from((0, _PatchEvent.set)(clamp((_type$initialValue = type.initialValue) !== null && _type$initialValue !== void 0 ? _type$initialValue : min, min, max))));
    }
  }, [value, min, max]);

  var handleChange = function handleChange(e) {
    var value = Number(e.target.value);
    props.onChange(_PatchEvent["default"].from((0, _PatchEvent.set)(value)));
  };

  return /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      marginBottom: "".concat(maxHeight, "px")
    }
  }, /*#__PURE__*/_react["default"].createElement(_default2["default"], {
    label: title,
    level: level,
    description: type.description
  }, /*#__PURE__*/_react["default"].createElement("input", {
    className: _Slider["default"].slider,
    style: type.options.style,
    type: "range",
    min: min,
    max: max,
    step: step,
    value: v,
    onChange: handleChange
  }), ((_type$options$labels = type.options.labels) === null || _type$options$labels === void 0 ? void 0 : _type$options$labels.length) && /*#__PURE__*/_react["default"].createElement("div", {
    className: _Slider["default"].labels
  }, type.options.labels.map(function (label, i) {
    var range = max - min;
    var percentFromCenter = (range / 2 - (range - label.value)) / (range || 1) * 100;
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: combine(_Slider["default"].label, percentFromCenter === 0 && _Slider["default"].center),
      key: i,
      style: {
        left: "".concat(50 + percentFromCenter, "%")
      }
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: _Slider["default"]['label-title'],
      ref: function ref(e) {
        return (e === null || e === void 0 ? void 0 : e.clientHeight) > maxHeight && setMaxHeight(e.clientHeight);
      }
    }, label.title));
  }))));
};

var _default = /*#__PURE__*/(0, _react.forwardRef)(Slider);

exports["default"] = _default;