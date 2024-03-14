"use client";

import Video from "next-video";
import { useVideoUrl } from "~/lib/hooks/use-video-url";
import SpinnerPlaceholder from "./spinner-placeholder";

export type TProps = {
  bucketName: string;
  filePath: string;
};

export default function ProjectVideo({ bucketName, filePath }: TProps) {
  const { data, isError, isLoading } = useVideoUrl(bucketName, filePath);

  if (isError) return <div>Error..</div>;
  console.log("D::", data?.videoUrl);

  return (
    <div className="w-full aspect-video p-2 border border-shadow-gray/60 dark:border-neutral-800 rounded-md grid place-items-center">
      {isLoading && <SpinnerPlaceholder />}
      {/* <Video src={data?.videoUrl} /> */}
      {/* Todo::: <video /> works but not <Video /> url appending to "https://localhost:3000/api/video */}
    </div>
  );
}
