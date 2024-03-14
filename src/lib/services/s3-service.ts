import {
  S3Client,
  type GetObjectCommandInput,
  GetObjectCommand,
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

export class S3Service {
  s3: S3Client;

  constructor(region: string, accessKeyId: string, secretAccessKey: string) {
    this.s3 = new S3Client({
      region,
      credentials: {
        accessKeyId,
        secretAccessKey,
      },
    });
  }

  async getVideoUrl(bucketName: string, key: string) {
    const input: GetObjectCommandInput = {
      Bucket: bucketName,
      Key: key,
      ResponseContentType: "video/mp4",
    };

    try {
      // get secure singedUrl, and it would expire in a minute
      const cmd = new GetObjectCommand(input);
      const signedUrl = await getSignedUrl(this.s3, cmd, {
        expiresIn: 60 * 60,
      });

      const res = await fetch(signedUrl, {
        headers: {
          "Content-type": "video/mp4",
        },
        cache: "no-store",
      });

      if (!res.ok) {
        throw new Error(
          `Failed to fetch :: ${signedUrl} \n Bucket :: ${bucketName} \n Key :: ${key}`
        );
      }

      return res.url;
    } catch (e) {
      if (e instanceof Error) {
        console.error(e.message);
      }
    }
  }
}
