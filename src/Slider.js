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
 *     parent: { _type: string };
 *     type: {
 *         name: string;
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
const Slider = (props, ref) => {
    const { type, value, level, parent } = props;
    const { min, max, step } = type.options.range;

    const [maxHeight, setMaxHeight] = useState(0);
    const [mounted, setMounted] = useState(false);
    
    let v = clamp(
        Number(value ?? type.initialValue ?? min),
        min,
        max
    );

    const title = `${type.title}: ${v}`;

    useEffect(() => {
        if ([min, max, step].filter(p => typeof p !== 'number').length) throw new Error(`${parent._type}: missing parameters`);
        if (min >= max) throw new Error(`${parent._type}: min cannot be greater or equal to max`);
        if (step <= 0) throw new Error(`${parent._type}: step must be greater than 0`);
        
        setMounted(true);

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

    return <div ref={ref} style={{ marginBottom: `${maxHeight}px` }}>
        <FormField
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
                value={v}
                label=""
                onChange={handleChange}
            />

            {type.options.labels?.length && <div className={styles.labels}>
                {type.options.labels.map((label, i) => {
                    const range = max-min;
                    const percentFromCenter = ((range / 2 - (max - label.value)) / (range || 1)) * 100;

                    if (!mounted && (percentFromCenter > 50 || percentFromCenter < -50)) {
                        console.warn(`${parent._type}: Label ${label.title} has a value outside of the slider range: ${label.value}`);
                        return null;
                    }

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