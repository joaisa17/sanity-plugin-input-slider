# input-slider
Slider input for [Sanity IO](https://sanity.io).

## Usage
In your sanity project's root folder, run the following command:
```shell
sanity install input-slider
```

In your document/object field, use the following example as a reference:
```js
export default {
    name: 'example',
    type: 'object',

    title: 'Example object',

    fields: [
        {
            name: 'fieldName',
            type: 'number',

            options: {
                range: {
                    min: 0, // Minimum value
                    max: 100, // Maximum value
                    step: 1 // Slider interval
                }
            }
        }
    ]
}
```

In the future, support for predefined steps may be added.