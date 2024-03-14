import { assertValue } from "~/lib/utils/assert-value";

const { AWS_REGION, AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, BUCKET_NAME } =
  process.env;

// aws envs;
export const region = assertValue(AWS_REGION, "No aws region provided.");
export const accessKeyId = assertValue(
  AWS_ACCESS_KEY_ID,
  "No aws accessKeyId provided."
);
export const secretAccessKey = assertValue(
  AWS_SECRET_ACCESS_KEY,
  "No aws secretAccessKey provided."
);

export const bucketName = assertValue(
  BUCKET_NAME,
  "No S3 bucketName provided."
);
