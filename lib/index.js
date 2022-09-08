"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = resolveInput;

var _Slider = _interopRequireDefault(require("./Slider"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * @param {{
 *     name: string;
 *     options?: {
 *         range?: {
 *             min: number;
 *             max: number;
 *             step: number;
 *         }
 *     }
 * }} type 
 */
function resolveInput(type) {
  var _type$options;

  var range = (_type$options = type.options) === null || _type$options === void 0 ? void 0 : _type$options.range;

  if (type.name === 'number' && range) {
    var missingParams = [];
    if (typeof range.min !== 'number') missingParams.push('min');
    if (typeof range.max !== 'number') missingParams.push('max');
    if (typeof range.step !== 'number') missingParams.push('step');
    if (missingParams.length) throw new Error("".concat(type.name, ": options.range missing the following parameters: ").concat(missingParams.join(', ')));
    if (range.min >= range.max) throw new Error("".concat(type.name, ": min cannot be greater or equal to max"));
    if (range.step <= 0) throw new Error("".concat(type.name, ": step has to be greater than 0"));
    return _Slider["default"];
  }

  return false;
}