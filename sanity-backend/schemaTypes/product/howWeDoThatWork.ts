// howWeDoThatWork.ts
import { SchemaType } from '@sanity/types';

const howWeDoThatWork: SchemaType = {
  name: 'howWeDoThatWork',
  title: 'How We Do That Work',
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

export default howWeDoThatWork;
