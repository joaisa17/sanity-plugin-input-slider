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
    return Math.max(
        Math.min(
            num,
            max
        ),
        min
    )
};

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
    const { type, value, level } = props;
    const { min, max, step } = type.options.range;

    const [maxHeight, setMaxHeight] = useState(0);
    
    let v = clamp(
        Number(value ?? type.initialValue ?? min),
        min,
        max
    );

    const title = `${type.title}: ${v}`;

    useEffect(() => {
        if (value && (value < min || value > max)) {
            props.onChange(PatchEvent.from(
                set(clamp(type.initialValue ?? min, min, max))
            ));
        }
    }, [value, min, max]);

    const handleChange = e => {
        const value = Number(e.target.value);

        props.onChange(PatchEvent.from(
            set(value)
        ));
    }

    return <div style={{ marginBottom: `${maxHeight}px` }}>
        <FormField
            label={title}
            level={level}
            description={type.description}
        >
            <input
                className={styles.slider}
                style={type.options.style}
                type="range"
                min={min ?? 0}
                max={max ?? 100}
                step={step ?? 1}
                value={v}
                onChange={handleChange}
            />

            {type.options.labels?.length && <div className={styles.labels}>
                {type.options.labels.map((label, i) => {
                    const percentFromCenter = ((max / 2 - (max - label.value)) / (max || 1)) * 100;

                    return <div
                        className={combine(styles.label, percentFromCenter === 0 && styles.center)}
                        key={i}
                        style={{
                            left: `${50 + percentFromCenter}%`
                        }}
                    >        
                        <div className={styles['label-title']} ref={e => e?.clientHeight > maxHeight && setMaxHeight(e.clientHeight)}>{label.title}</div>
                    </div>
                })}    
            </div>}
        </FormField>
    </div>
};

export default forwardRef(Slider);