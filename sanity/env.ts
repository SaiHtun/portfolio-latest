export const api_version =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-03-07";

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  "Missing environment variable: NEXT_PUBLIC_SANITY_DATASET"
);

export const project_id = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  "Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID"
);

// export const sanity_cdn_url = assertValue(
//   process.env.SANITY_CDN_URL,
//   "Missing environment variable: SANITY_CDN_URL"
// );

// export const sanity_endpoint_url = assertValue(
//   process.env.SANITY_ENDPOINT_URL,
//   "Missing environment variable: SANITY_CDN_URL"
// );

export const useCdn = false;

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage);
  }

  return v;
}
