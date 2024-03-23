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
    ],
  };
  