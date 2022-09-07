import React, { useEffect, useState, forwardRef } from 'react';
import FormField from 'part:@sanity/components/formfields/default';
import PatchEvent, { set } from '@sanity/form-builder/PatchEvent';
import styles from './Slider.css';
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

function combine(...classes) {
  return classes.filter(c => typeof c === 'string').join(' ');
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


const Slider = props => {
  var _ref;

  const {
    type,
    value,
    level
  } = props;
  const {
    min,
    max,
    step
  } = type.options.range;
  const [maxHeight, setMaxHeight] = useState(0);
  let v = clamp(Number((_ref = value !== null && value !== void 0 ? value : type.initialValue) !== null && _ref !== void 0 ? _ref : min), min, max);
  const title = `${type.title}: ${v}`;
  useEffect(() => {
    if (value && (value < min || value > max)) {
      var _type$initialValue;

      props.onChange(PatchEvent.from(set(clamp((_type$initialValue = type.initialValue) !== null && _type$initialValue !== void 0 ? _type$initialValue : min, min, max))));
    }
  }, [value, min, max]);

  const handleChange = e => {
    const value = Number(e.target.value);
    props.onChange(PatchEvent.from(set(value)));
  };

  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: `${maxHeight}px`
    }
  }, /*#__PURE__*/React.createElement(FormField, {
    label: title,
    level: level,
    description: type.description
  }, /*#__PURE__*/React.createElement("input", {
    className: styles.slider,
    style: type.options.style,
    type: "range",
    min: min !== null && min !== void 0 ? min : 0,
    max: max !== null && max !== void 0 ? max : 100,
    step: step !== null && step !== void 0 ? step : 1,
    value: v,
    onChange: handleChange
  }), type.options.labels?.length && /*#__PURE__*/React.createElement("div", {
    className: styles.labels
  }, type.options.labels.map((label, i) => {
    const percentFromCenter = (max / 2 - (max - label.value)) / (max || 1) * 100;
    return /*#__PURE__*/React.createElement("div", {
      className: combine(styles.label, percentFromCenter === 0 && styles.center),
      key: i,
      style: {
        left: `${50 + percentFromCenter}%`
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: styles['label-title'],
      ref: e => e?.clientHeight > maxHeight && setMaxHeight(e.clientHeight)
    }, label.title));
  }))));
};

export default /*#__PURE__*/forwardRef(Slider);