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
    if (type.name === 'number') return Slider;
}