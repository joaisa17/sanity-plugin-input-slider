// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    {
      name: 'test',
      type: 'document',

      title: 'Test',

      fields: [
        {
          name: 'title',
          type: 'string',

          readonly: true,

          title: 'Title',
          description: 'Placeholder',
          initialValue: 'Test'
        },
        {
          name: 'withoutLabels',
          type: 'number',

          title: 'Number',
          description: 'Test input',

          options: {
            range: {
              min: 10,
              max: 100,
              step: 2.5
            }
          }
        },
        {
          name: 'noSlider',
          type: 'number',

          title: 'Not a slider'
        },
        {
          name: 'score',
          type: 'number',

          title: 'Score',
          description: 'On a scale of 1-10, how useful is this feature?',

          options: {
            range: {
              min: 0,
              max: 10,
              step: 0.5
            },

            labels: ['More useless', 'Very useless', 'Ok', 'Useful', 'Very useful']
            .map((l, i, a) => ({
              title: l,
              value: (10 / (a.length - 1)) * i
            }))
          }
        },
        {
          name: 'last',
          type: 'string',

          readonly: true,
          initialValue: 'End of document',

          title: 'Last'
        }
      ]
    }
  ]),
})
