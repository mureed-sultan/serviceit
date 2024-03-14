// howItWorks.ts
import { SchemaType } from '@sanity/types';

const howItWorks: SchemaType = {
  name: 'howItWorks',
  title: 'How It Works',
  type: 'object',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
  ],
};

export default howItWorks;
