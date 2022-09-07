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

          title: 'Title',
          description: 'Placeholder',
          initialValue: 'Test'
        },
        {
          name: 'number',
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
          name: 'number2',
          type: 'number',

          title: 'Number 2',
          description: 'Test input 2',

          options: {
            range: {
              min: 40,
              max: 200,
              step: 10
            }
          }
        },
        {
          name: 'rating',
          type: 'number',

          title: 'Rating',
          description: 'On a scale of 1-10, how useful is this feature?',

          options: {
            range: {
              min: 0,
              max: 20,
              step: 1
            },

            labels: [
              { value: 0, title: 'More useless' },
              { value: 3, title: 'Very useless' },
              { value: 5, title: 'Normalized' },
              { value: 6, title: 'Test' },
              { value: 10, title: 'Very useful' }
            ]
          }
        },
        {
          name: 'last',
          type: 'string',

          title: 'Last'
        }
      ]
    }
  ]),
})
