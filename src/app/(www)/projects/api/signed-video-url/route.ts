import { NextRequest, NextResponse } from "next/server";
import { accessKeyId, secretAccessKey, region } from "~/app-env";
import { S3Service } from "~/lib/services/s3-service";

type TReqBody = {
  bucketName: string;
  filePath: string;
};

export async function POST(request: NextRequest, response: NextResponse) {
  const { bucketName, filePath } = (await request.json()) as TReqBody;
  const s3 = new S3Service(region, accessKeyId, secretAccessKey);
  const signedUrl = await s3.getVideoUrl(bucketName, filePath);

  const data = await fetch(signedUrl!);
  if (!data.ok) {
    return new Response("Failed to fetch the video url..", { status: 403 });
  }

  const res = Response.json({ videoUrl: data.url });

  res.headers.set("Content-type", "video/mp4");

  return res;
}
