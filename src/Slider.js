import React, { forwardRef } from 'react';

import FormField from 'part:@sanity/components/formfields/default';
import PatchEvent, {set, unset} from '@sanity/form-builder/PatchEvent';

import styles from './Slider.css';

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
const Slider = props => {
    const { type, value, level } = props;
    const title = `${type.title}: ${value}`;

    const {min, max, step} = type.options.range;

    const handleChange = e => {
        const value = e.target.value;
        const patch = !value? unset() : set(Number(value));

        props.onChange(PatchEvent.from(patch));
    }

    return <FormField
        label={title}
        level={level}
        description={type.description}
    >
        <input
            className={styles.slider}
            style={type.options.style}
            type="range"
            min={min}
            max={max}
            step={step}
            value={value || ''}
            onChange={handleChange}
        />
    </FormField>
}

export default forwardRef(Slider);