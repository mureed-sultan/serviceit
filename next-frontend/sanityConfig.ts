import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'ailgv3xs',
  dataset: 'production',
  token: 'skaahulp7Z98I69gOEcyv2mdFEvYtavJOo3g9xieM1sKRoAxHX7faNpOsAl6Q1ODbztetcUfnuAqZkbYJ5T8ZA8rYpwdJ251L6wWHCcqnzDnyhgCpNkdKKwnI3NawASIU8BkeEwcAyrNl1yGFenVnPLYuYeFTIsiUy3Lw9X3Q43tdC19TnHr', 
  apiVersion: '2022-03-07',
  useCdn: true, 
});

export default client;
