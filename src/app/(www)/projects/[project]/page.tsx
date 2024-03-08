import React from "react";
import Image from "next/image";
import {
  getProjects,
  getProjectDetail,
  TProjectDetail,
} from "~/query/get-projects";
import GithubIcon from "~/components/ui/icons/github-icon";
import { Globe } from "lucide-react";
import Link from "next/link";
import MainIconWrapper from "~/components/ui/icons/main-icon-wrapper";

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

function BodyContent({ infoRaw }: { infoRaw: TProjectDetail["infoRaw"] }) {
  const childs = infoRaw.flatMap((r) => r.children);
  return (
    <div className="my-20 text-sm">
      {childs.map((c, index) => {
        return c.marks.length > 0 ? (
          <h2 key={index} className="font-semibold my-8">
            {c.text}
          </h2>
        ) : (
          <div className="text-shadow-gray space-y-2">
            {c.text.split("\n").map((sentence, index) => {
              return <p key={index}>{sentence}</p>;
            })}
          </div>
        );
      })}
    </div>
  );
}

export default async function Page({ params }: TProps) {
  const { description, githubUrl, image, infoRaw, project, websiteUrl } =
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

      <Image
        src={image.asset.url}
        width={0}
        height={0}
        sizes="100vw"
        alt="timesync website screenshot"
        className="rounded-md w-full object-contain"
        priority
      />

      <BodyContent infoRaw={infoRaw} />
    </div>
  );
}