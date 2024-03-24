// product.ts
import { SchemaType } from '@sanity/types';

const product: SchemaType = {
  name: 'product',
  title: 'Services',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'slug (write in kabab case e.g. title-of-item)',
      type: 'string',
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'reference', 
      to: [{ type: 'category' }], 
      validation: Rule => Rule.required(), 
      options: {
        list: 'grid', 
        },
    },
    
    {
      name: 'location',
      title: 'Location',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (Rule: { required: () => { (): any; new(): any; min: { (arg0: number): { (): any; new(): any; error: { (arg0: string): any; new(): any; }; }; new(): any; }; }; }) => Rule.required().min(1).error('At least one text is required'),
    },
    {
      name: 'avaibleServices',
      title: 'Available Servoces in Package',
      type: 'array',
      of: [{ type: 'string' }],
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
      name: 'homepagelayout',
      title: 'Home Page View layout',
      type: 'string',
      options: {
        list: [
          { title: 'Featured', value: 'feature' },
          { title: 'Best Selling', value: 'bestselling' },
        ],
      },
    },
    {
      name: 'paymentType',
      title: 'Payment Type',
      type: 'string',
      options: {
        list: [
          { title: 'Per Hour', value: 'Per Hour' },
          { title: 'Per Month', value: 'Per Month' },
          { title: 'Per Unit', value: 'Per Unit' },
        ],
      },
    },
    {
      name: 'price', 
      title: 'Price',
      type: 'number', 
      validation: (Rule: any) => Rule.required().min(0), // Assuming price cannot be negative
    },    
    {
      name: 'rating', 
      title: 'Rating',
      type: 'number', 
      validation: (Rule: { min: (arg0: number) => { (): any; new(): any; max: { (arg0: number): any; new(): any; }; }; }) => Rule.min(0).max(5)
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
    },    {
      name: 'images2',
      title: 'Images2',
      type: 'image',
      options: {
        hotspot: true, // Enable hotspot for image cropping
      },
    },    {
      name: 'images3',
      title: 'Images3',
      type: 'image',
      options: {
        hotspot: true, // Enable hotspot for image cropping
      },
    },
    {
      name: 'additionalServices',
      title: 'Additional Services',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
            { name: 'price', title: 'Price', type: 'number', validation: Rule => Rule.required().min(0) }
          ]
        }
      ]
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
