import React, { Suspense } from "react";
import {
  getProjects,
  getProjectDetail,
  TProject,
  TProjectDetail,
} from "~/query/get-projects";
import GithubIcon from "~/components/ui/icons/github-icon";
import { Globe } from "lucide-react";
import Link from "next/link";
import MainIconWrapper from "~/components/ui/icons/main-icon-wrapper";
import PortableContent from "~/components/portable-content";
import ProjectVideo from "~/components/ui/project-video";
import BlurPlaceholder from "~/components/ui/blur-placeholder";
import { getBase64Img } from "~/lib/utils/get-base64-img";
import type { Metadata, ResolvingMetadata } from "next";
import { capitalizeFirstLetter } from "~/lib/utils";
import { ProjectJsonLd } from "~/components/json-ld";

type TProps = {
  params: {
    project: string;
  };
};

export async function generateStaticParams() {
  const projects = await getProjects<TProject[]>();
  return projects!.map((p) => ({
    project: p.name,
  }));
}

export async function generateMetadata(
  { params }: TProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  try {
    const projectDetails = await getProjectDetail<TProjectDetail>(
      params.project
    );

    if (!projectDetails) throw new Error("failed to fetch project detail.");

    const { description, project, image } = projectDetails;
    const previousImage = (await parent).openGraph?.images || [];
    const sharedProjectInfo = {
      title: `${project.name} | ${project.intro}`,
      description,
    };
    return {
      ...sharedProjectInfo,
      openGraph: {
        ...sharedProjectInfo,
        images: [image.asset.url, ...previousImage],
        url: `https://saihtun.xyz/project/${project.name}`,
      },
      twitter: {
        ...sharedProjectInfo,
        images: [image.asset.url, ...previousImage],
        card: "summary_large_image",
      },
    };
  } catch (error) {
    return {
      title: `Project name | intro`,
      description: (error as Error).message,
    };
  }
}

export default async function Page({ params }: TProps) {
  const projectDetails = await getProjectDetail<TProjectDetail>(params.project);

  if (!projectDetails) return <div>No project details..</div>;

  const {
    description,
    githubUrl,
    infoRaw,
    project,
    websiteUrl,
    image,
    videoUrl,
  } = projectDetails;

  const { base64 } = await getBase64Img(image.asset.url);

  return (
    <section className="w-full min-h-screen">
      <div className="space-y-10 mb-20">
        <div>
          <h1 className="font-mono font-bold">
            {capitalizeFirstLetter(project.name)}
          </h1>
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
      <div className="rounded-md border border-shadow-gray/20 dark:border-zinc-600 p-2 max-sm:p-1">
        <Suspense fallback={<BlurPlaceholder src={base64} />}>
          <ProjectVideo
            posterPath={image.asset.url}
            bucketName="saihtunbkt"
            filePath={videoUrl}
          />
        </Suspense>
      </div>
      <PortableContent infoRaw={infoRaw} />
      <ProjectJsonLd projectDetails={projectDetails} />
    </section>
  );
}
