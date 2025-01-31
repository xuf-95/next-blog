import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from '../env'

export const client = createClient({
  apiVersion: '2023-08-01',
  // apiVersion,
  dataset,
  projectId,
  // perspective: 'published',  
  useCdn: true, // 强制启用 CDN
})
