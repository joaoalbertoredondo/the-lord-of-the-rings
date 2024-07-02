export default {
  name: 'races',
  type: 'document',
  title: 'Races',
  fields: [
    {
      name: 'name',
      title: 'Race Name',
      type: 'string',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Race Slug',
      options: {
        source: 'name',
      },
    },
    {
      name: 'image',
      type: 'array',
      title: 'Race Image',
      of: [{type: 'image'}],
    },
  ],
}
