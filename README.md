# input-slider
Slider input for [Sanity IO](https://sanity.io).

## Usage
In your sanity project's root folder, run the following command:
```shell
sanity install input-slider
```

Use the following example schema as a reference:
```js
export default {
    name: 'example',
    type: 'object',

    title: 'Example number slider',

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

## Labels
If you wish to use labels for your slider, 
add the `labels` property to the options:
```js
export default {
    name: 'example',
    type: 'object',

    title: 'Example number slider',

    fields: [
        {
            name: 'rating',
            type: 'number',

            options: {
                range: {
                    min: 0, // Minimum value
                    max: 10, // Maximum value
                    step: 0.5 // Slider interval
                },

                labels: [
                    { value: 0, title: 'Very bad' },
                    { value: 2.5, title: 'Bad' },
                    { value: 5, title: 'Ok' },
                    { value: 7.5, title: 'Good' },
                    { value: 0, title: 'Very good' }
                ]
            }
        }
    ]
}
