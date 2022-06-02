import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'trlq3kgb',
  dataset: 'production',
  apiVersion: 'v1',
  token:
    'skljy3PAOEbf5cMCeCedHeTZgEMwMTSvz8Mr1fTyR1ULzlNPfdRzeo1DcEKY1ItcEld3xx3PTW0VHuSdYj2nFpMSgn12FLDB6uTbjFwARVwmvh6HQpInzbTMD3VWCyKt0Hroyk28ZARbkbhyoq9LLNraSGIAG6lpOeuCc8iPyoOlhUAevojD',
  useCdn: false,
})