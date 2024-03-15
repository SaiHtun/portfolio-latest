import Image from "next/image";

type TProps = { src: string };

export default function BlurPlaceholder({ src }: TProps) {
  return (
    <Image
      className="w-full aspect-video rounded-md"
      width={0}
      height={0}
      src={src}
      priority
      alt="placeholder image while loading a video"
    />
  );
}
