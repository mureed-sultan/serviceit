// users.js
export default {
    name: 'adminUser',
    title: 'Admin Users',
    type: 'document',
    fields: [
      {
        name: 'username',
        title: 'Username',
        type: 'string',
      },
      {
        name: 'profilepicture',
        title: 'Profile Picture',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'password',
        title: 'Password',
        type: 'string',
      }
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
  