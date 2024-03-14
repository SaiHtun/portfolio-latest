import Image from "next/image";
import { getPlaiceholder } from "plaiceholder";

async function getImage(src: string) {
  const buffer = await fetch(src).then(async (res) =>
    Buffer.from(await res.arrayBuffer())
  );

  const plaiceholder = await getPlaiceholder(buffer);

  return {
    ...plaiceholder,
    imgSrc: src,
  };
}

type TProps = { src: string };

export default async function BlurPlaceholder({ src }: TProps) {
  const { base64, imgSrc } = await getImage(src);

  return (
    <Image
      className="w-full aspect-video rounded-md"
      width={0}
      height={0}
      src={imgSrc}
      alt="placeholder image while loading a video"
      placeholder="blur"
      blurDataURL={base64}
    />
  );
}
