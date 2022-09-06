'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _default = require('part:@sanity/components/formfields/default');

var _default2 = _interopRequireDefault(_default);

var _PatchEvent = require('@sanity/form-builder/PatchEvent');

var _PatchEvent2 = _interopRequireDefault(_PatchEvent);

var _Slider = require('./Slider.css');

var _Slider2 = _interopRequireDefault(_Slider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @type {React.FC<{
 *     level: number;
 *     value: number;
 *     onChange(value: number): void;
 *     onFocus(nextPath: string): void;
 *     type: {
 *         title?: string;
 *         description?: string;
 *         options: {
 *             style?: React.CSSProperties;
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
    var type = props.type,
        value = props.value,
        level = props.level;

    var title = type.title + ': ' + value;

    var _type$options$range = type.options.range,
        min = _type$options$range.min,
        max = _type$options$range.max,
        step = _type$options$range.step;


    var handleChange = function handleChange(e) {
        var value = e.target.value;
        var patch = !value ? (0, _PatchEvent.unset)() : (0, _PatchEvent.set)(Number(value));

        props.onChange(_PatchEvent2.default.from(patch));
    };

    return _react2.default.createElement(
        _default2.default,
        {
            label: title,
            level: level,
            description: type.description
        },
        _react2.default.createElement('input', {
            className: _Slider2.default.slider,
            style: type.options.style,
            type: 'range',
            min: min,
            max: max,
            step: step,
            value: value || '',
            onChange: handleChange
        })
    );
};

exports.default = (0, _react.forwardRef)(Slider);