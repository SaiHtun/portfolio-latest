import createImageUrlBuilder from "@sanity/image-url";
import type { Image } from "sanity";

import { dataset, project_id } from "../env";

const imageBuilder = createImageUrlBuilder({
  projectId: project_id || "",
  dataset: dataset || "",
});

export const urlForImage = (source: Image) => {
  return imageBuilder?.image(source).auto("format").fit("max").url();
};
