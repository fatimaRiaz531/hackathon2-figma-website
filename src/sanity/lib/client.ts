import { createClient } from 'next-sanity';

export const client = createClient({
  projectId: 'gowa4lf0', // Replace with your actual project ID
  dataset: 'production', // Replace with your dataset name
  useCdn: true, // Enable CDN for faster responses in production
  apiVersion: '2025-01-13', // Use a valid and current API version
  token:
    'skZIqUn2fVJG0OPmZVYOm6VlnbX6iG6TAzyHPkRhkrPsYJTOw73sPghufJTaYf2pFFiTUF5ZmAkARIj7aDE9kbnMkVHnV4FDzvmtXpG4FzcZwatOlfrE4Ua7ozTj9kBnQAL5UNlDfGPtfqKIdn2jj3Cm2fqwCF0ocWwWlNIFzEhbtCd6fmfc', // Ensure this environment variable is set
});
