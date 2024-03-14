import Image from "next/image";
import { getPlaiceholder } from "plaiceholder";

async function getImage(src: string) {
  const buffer = await fetch(src).then(async (res) =>
    Buffer.from(await res.arrayBuffer())
  );

  return await getPlaiceholder(buffer);
}

type TProps = { src: string };

export default async function BlurPlaceholder({ src }: TProps) {
  const { base64 } = await getImage(src);

  return (
    <Image
      className="w-full aspect-video rounded-md"
      width={0}
      height={0}
      src={src}
      priority
      alt="placeholder image while loading a video"
      placeholder="blur"
      blurDataURL={base64}
    />
  );
}
