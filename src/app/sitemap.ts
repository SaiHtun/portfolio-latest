import { MetadataRoute } from "next";
import { BASE_URL } from "~/constants/index";
import { getProjects } from "~/query/get-projects";

type TProjectResponse = {
  name: string;
  _updatedAt: string;
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const queryBody = `
    query {
      allProject {
        name
        _updatedAt
      }
    }
  `;
  const projects = await getProjects<TProjectResponse[]>(queryBody);

  return projects!.map((project) => {
    return {
      url: `${BASE_URL}/projects/${project.name}`,
      lastModified: project._updatedAt,
      changeFrequency: "monthly",
    };
  });
}
