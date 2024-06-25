import {title} from 'process'

export default {
  name: 'characters',
  type: 'document',
  title: 'Characters',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name of the Character',
    },
    {
      name: 'images',
      type: 'array',
      title: 'Character Images',
      of: [{type: 'image'}],
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description of the Character',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Character Slug',
      options: {
        source: 'name',
      },
    },
    {
      name: 'weapons',
      type: 'string',
      title: 'Weapons',
    },
    {
      name: 'race',
      type: 'reference',
      title: 'Race',
      to: [
        {
          type: 'races',
        },
      ],
    },
  ],
}
