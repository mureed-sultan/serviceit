import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'ailgv3xs',
  dataset: 'production',
  apiVersion: '2022-03-07', 
  useCdn: false, 
  token:'skujc83oq2SMavb9WmO5qct88sP34Izj7ws8neFGJDyQlRHxQvalvbYPbQitTO0qGXPVCyN9IZ1muAqL4PNzkFSbhRTnmngAfDZwbjHbz9MW904S8NtJYLOZjeWG8gHy6uvVM1V5CIjJtbaJaCjg9PAOeKgsCvMcniLIjCrVd8b5GZ0JJ6BA'
});

export default client;