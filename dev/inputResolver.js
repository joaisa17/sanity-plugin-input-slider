import Slider from '../src/Slider';

export default function resolveInput(type) {
    if (type.name === 'number' && type.options?.range)
        return Slider;
}