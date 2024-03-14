import React from "react";
import { getProjects, getProjectDetail } from "~/query/get-projects";
import GithubIcon from "~/components/ui/icons/github-icon";
import { Globe } from "lucide-react";
import Link from "next/link";
import MainIconWrapper from "~/components/ui/icons/main-icon-wrapper";
import PortableContent from "~/components/portable-content";
import ProjectVideo from "~/components/ui/project-video";

type TProps = {
  params: {
    project: string;
  };
};

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects?.map((p) => ({
    project: p.name,
  }));
}

export default async function Page({ params }: TProps) {
  const { description, githubUrl, infoRaw, project, websiteUrl } =
    await getProjectDetail(params.project)!;

  return (
    <div className="w-full min-h-screen">
      <div className="space-y-10 mb-20">
        <div>
          <h1 className="font-mono font-bold">{project.name}</h1>
          <p className="text-shadow-gray">{project.intro}</p>
        </div>
        <div className="space-y-4 ">
          <p className="text-shadow-gray">{description}</p>
          <div className="flex gap-2">
            <Link href={githubUrl} className="inline-block">
              <GithubIcon />
            </Link>

            {websiteUrl && (
              <Link href={websiteUrl} className="inline-block">
                <MainIconWrapper twClasses="bg-transparent dark:bg-transparent">
                  <Globe size={20} />
                </MainIconWrapper>
              </Link>
            )}
          </div>
        </div>
      </div>
      <ProjectVideo
        bucketName="saihtunbkt"
        filePath="portfolio/projects/timesync.mp4"
      />
      <PortableContent infoRaw={infoRaw} />
    </div>
  );
}
