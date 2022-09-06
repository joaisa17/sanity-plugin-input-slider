'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = resolveInput;

var _Slider = require('./Slider');

var _Slider2 = _interopRequireDefault(_Slider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
  if (type.name === 'number') return _Slider2.default;
}