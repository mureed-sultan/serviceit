// schema.js

export default {
  name: 'order',
  title: 'Order',
  type: 'document',
  fields: [
    {
      name: 'username',
      title: 'Username',
      type: 'string',
    },
    {
      name: 'email',
      title: 'Email Address',
      type: 'string',
      validation: (Rule) => Rule.email('Enter a valid email address'),
    },
    {
      name: 'titleOfWork',
      title: 'Title of Work',
      type: 'string',
    },
    {
      name: 'workingDate',
      title: 'Working Date',
      type: 'date',
    },
    {
      name: 'hoursNeeded',
      title: 'Hours Needed',
      type: 'string',
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
    },
    {
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Pending', value: 'pending' },
          { title: 'In Progress', value: 'inprogress' },
          { title: 'Complete', value: 'complete' },
        ],
      },
      validation: Rule => Rule.required(),
      defaultValue: 'pending' 

    },
    {
      name: 'approved',
      title: 'Approved',
      type: 'boolean',
      description: 'Check if the order is approved',
    },
    {
      name: 'professionalsNeeded',
      title: 'Professionals Needed',
      type: 'number',
      description: 'Specify how many professionals are needed for the work',
    },
    {
      name: 'totalHoursNeeded',
      title: 'Total Hours Needed',
      type: 'number',
      description: 'Specify the total hours needed for the work',
    },
  ],
};
