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

  const initSitemap = [
    {
      url: BASE_URL,
      lastModified: projects![0]._updatedAt,
      changeFrequency: "monthly",
    },
  ];

  const projectsSitemap = projects!.map((project) => ({
    url: `${BASE_URL}/projects/${project.name}`,
    lastModified: project._updatedAt,
    changeFrequency: "monthly",
  }));

  return initSitemap.concat(projectsSitemap) as MetadataRoute.Sitemap;
}
