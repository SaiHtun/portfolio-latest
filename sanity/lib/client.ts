// ./src/utils/sanity/client.ts
import { createClient } from "next-sanity";
import { project_id, dataset, api_version } from "../env";

export const client = createClient({
  projectId: project_id,
  dataset,
  apiVersion: api_version, // https://www.sanity.io/docs/api-versioning
  useCdn: true, // if you're using ISR or only static generation at build time then you can set this to `false` to guarantee no stale content
});
