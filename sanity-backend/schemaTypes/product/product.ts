// product.ts
import { SchemaType } from '@sanity/types';

const product: SchemaType = {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [
        { type: 'reference', to: [{ type: 'category' }] } 
      ],
    },
    {
      name: 'shortDescription',
      title: 'Short Description',
      type: 'text',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      title: 'How It Works',
      name: 'howItWorksTitle',
      type: 'string',
    },
    {
      title: 'How It Works Description',
      name: 'howItWorksDescription',
      type: 'text',
    },
    {
      title: 'How It Works',
      name: 'howItWorks',
      type: 'array', 
      of: [{ type: 'howItWorks' }], 
    },
    {
      title: 'How We Do That Work',
      name: 'howWeDoThatWorkTitle',
      type: 'string', 
    },
    {
      title: 'How We Do That Work Description',
      name: 'howWeDoThatWorkDescription',
      type: 'text', 
    },
    {
      name: 'howWeDoThatWork',
      title: 'How We Do That Work',
      type: 'array',
      of: [{ type: 'howWeDoThatWork' }], 
    },
    {
      title: 'Testimonials',
      name: 'testimonialsTitle',
      type: 'string', 
    },
    {
      title: 'Testimonials Description',
      name: 'testimonialsDescription',
      type: 'text',
    },
    {
      name: 'testimonials',
      title: 'Testimonials',
      type: 'array',
      of: [{ type: 'testimonial' }] 
    },
    {
      name: 'images',
      title: 'Images',
      type: 'image',
      options: {
        hotspot: true, // Enable hotspot for image cropping
      },
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'images', 
    },
  },
};

export default product;
