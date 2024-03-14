// users.js
export default {
    name: 'user',
    title: 'User',
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
      },
      {
        name: 'password',
        title: 'Password',
        type: 'string',
      },
    ],
    permissions: [
      {
        role: 'user',
        create: true,
        update: true,
        delete: true,
      }
    ]
  };
  