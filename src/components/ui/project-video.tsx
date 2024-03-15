import { region, accessKeyId, secretAccessKey } from "app-env";
import { S3Service } from "~/lib/services/s3-service";

export type TProps = {
  bucketName: string;
  filePath: string;
  posterPath: string;
};

export default async function ProjectVideo({
  bucketName,
  filePath,
  posterPath,
}: TProps) {
  const s3 = new S3Service(region, accessKeyId, secretAccessKey);
  const url = await s3.getVideoUrl(bucketName, filePath);

  return (
    <video
      className="w-full aspect-video object-cover rounded-md"
      controls
      loop
      autoPlay
      muted
      playsInline
      poster={posterPath}
    >
      <source src={url} type="video/mp4" />
    </video>
  );
}
