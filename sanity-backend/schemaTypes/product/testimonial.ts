// testimonial.ts
import { SchemaType } from '@sanity/types';

const testimonial: SchemaType = {
  name: 'testimonial',
  title: 'Testimonial',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
    },
  ],
};

export default testimonial;
