import { createClient } from 'next-sanity';

const client = createClient({
    projectId: 'gowa4lf0',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2025-01-13',
    token:
      'skZIqUn2fVJG0OPmZVYOm6VlnbX6iG6TAzyHPkRhkrPsYJTOw73sPghufJTaYf2pFFiTUF5ZmAkARIj7aDE9kbnMkVHnV4FDzvmtXpG4FzcZwatOlfrE4Ua7ozTj9kBnQAL5UNlDfGPtfqKIdn2jj3Cm2fqwCF0ocWwWlNIFzEhbtCd6fmfc',
  });
  
// Fetch data from Sanity
export async function sanityFetch<T = unknown>({
  query,
  params = {},
}: {
  query: string;
  params?: Record<string, T>;
}): Promise<T> {
  return await client.fetch<T>(query, params);
}
