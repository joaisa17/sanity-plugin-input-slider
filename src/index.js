import Slider from './Slider';

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
export default function resolveInput(type) {
    const range = type.options?.range;

    if (type.name === 'number' && range) {
        const missingParams = [];

        if (typeof range.min !== 'number') missingParams.push('min');
        if (typeof range.max !== 'number') missingParams.push('max');
        if (typeof range.step !== 'number') missingParams.push('step');

        if (missingParams.length) throw new Error(`${type.name}: options.range missing the following parameters: ${missingParams.join(', ')}`)
        if (range.min >= range.max) throw new Error(`${type.name}: min cannot be greater or equal to max`);
        if (range.step <= 0) throw new Error(`${type.name}: step has to be greater than 0`);

        return Slider;
    }

    return false;
}