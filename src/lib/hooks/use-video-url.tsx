import useSWR from "swr";

function fetcher({
  url,
  args,
}: {
  url: string;
  args: { bucketName: string; filePath: string };
}) {
  const { bucketName, filePath } = args;
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-type": "video/mp4",
    },
    body: JSON.stringify({ bucketName, filePath }),
  }).then((res) => res.json());
}

export function useVideoUrl(bucketName: string, filePath: string) {
  const { data, error, isLoading } = useSWR(
    {
      url: "http://localhost:3000/projects/api/signed-video-url",
      args: { bucketName, filePath },
    },
    fetcher
  );

  return {
    data,
    isLoading,
    isError: error,
  };
}
