import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'trlq3kgb',
  dataset: 'production',
  apiVersion: 'v1',
  token:
    'token_id',
  useCdn: false,
})
