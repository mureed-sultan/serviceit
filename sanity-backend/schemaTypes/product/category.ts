// category.ts

import { SchemaType } from '@sanity/types';

const category: SchemaType = {
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true, // Enable hotspot for image cropping
      },
    },   
     {
      name: 'imageicon',
      title: 'Image Icon',
      type: 'image',
      options: {
        hotspot: true, // Enable hotspot for image cropping
      },
    },
    {
      name: 'parentCategory',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'category' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      parentCategoryTitle: 'parentCategory.title',
    },
    prepare(selection: any) {
      const { title, parentCategoryTitle } = selection;
      return {
        title: title,
        subtitle: parentCategoryTitle ? `Category: ${parentCategoryTitle}` : 'No Category',
      };
    },
  },
};

export default category;
