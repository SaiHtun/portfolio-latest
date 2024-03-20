import MainIconWrapper from "components/ui/icons/main-icon-wrapper";
import { Clock4 } from "lucide-react";
import HandrawIcon from "components/ui/icons/handraw-icon";
import TextInitalIcon from "components/ui/icons/text-initial-icon";
import InstagramIcon from "components/ui/icons/instagram-icon";
import { TypedObject } from "sanity";

export type TProject = {
  _id: number;
  name: string;
  intro: string;
  slug: {
    current: string;
  };
  topics: { name: string }[];
  projectIcon: React.ReactNode;
};

export type TProjectDetail = {
  _id: number;
  project: TProject;
  description: string;
  image: {
    asset: {
      url: string;
    };
  };
  videoUrl: string;
  githubUrl: string;
  websiteUrl: string;
  infoRaw: TypedObject;
};

async function fetchData(
  gqlQueryBody: { [key: string]: unknown },
  cacheTags: string[] = []
) {
  const headers = {
    "content-type": "application/json",
    Authorization: `bearer ${process.env.SANITY_SECRET_TOKEN}`,
  };

  try {
    const res = await fetch(process.env.SANITY_CDN_URL!, {
      method: "POST",
      headers,
      body: JSON.stringify(gqlQueryBody),
      next: {
        tags: cacheTags,
      },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch..");
    }

    const d = await res.json();
    return d.data;
  } catch (error) {
    console.error(error);
  }
}

export async function getProjects(): Promise<TProject[]> {
  const projectsQuery = {
    query: `query {
      allProject {
        _id
        name
        intro
        slug {
          current
        }
        topics {
          name
        }
      }
    }`,
  };

  const data = await fetchData(projectsQuery, ["projects"]);
  return data.allProject;
}

export async function getProjectDetail(
  projectName: string
): Promise<TProjectDetail> {
  const projectDetailQuery = {
    query: `
      query($projectName: String!) {
        allProjectDetail(where: { project: { name: { eq: $projectName} }}) {
          project {
            name
            intro
          }
          description
          image {
            asset {
              url
            }
          }
          videoUrl
          githubUrl
          websiteUrl
          infoRaw
        }
      }
    `,
    variables: { projectName },
  };

  const data = await fetchData(projectDetailQuery, ["projectDetail"]);
  return await data.allProjectDetail[0];
}

export const projectIcons = {
  timesync: (
    <MainIconWrapper>
      <Clock4 />
    </MainIconWrapper>
  ),
  "paint-board": <HandrawIcon />,
  jsapi: <TextInitalIcon text="jsapi" />,
  outstagramm: (
    <MainIconWrapper>
      <InstagramIcon />
    </MainIconWrapper>
  ),
};

export async function getProjecstWithIcon() {
  const projects = await getProjects();
  return projects?.map((p) => ({
    ...p,
    projectIcon:
      projectIcons[p.name.toLowerCase() as keyof typeof projectIcons],
  }));
}
