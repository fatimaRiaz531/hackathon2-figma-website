export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-01-19'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)
export const token = assertValue(
  'skZIqUn2fVJG0OPmZVYOm6VlnbX6iG6TAzyHPkRhkrPsYJTOw73sPghufJTaYf2pFFiTUF5ZmAkARIj7aDE9kbnMkVHnV4FDzvmtXpG4FzcZwatOlfrE4Ua7ozTj9kBnQAL5UNlDfGPtfqKIdn2jj3Cm2fqwCF0ocWwWlNIFzEhbtCd6fmfc',
  'Missing environment variable:NEXT_SANITY_TOKEN'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
