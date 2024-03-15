import { getPlaiceholder } from "plaiceholder";

export async function getBase64Img(src: string) {
  const buffer = await fetch(src).then(async (res) =>
    Buffer.from(await res.arrayBuffer())
  );

  return await getPlaiceholder(buffer);
}
