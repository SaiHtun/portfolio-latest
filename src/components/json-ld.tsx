import { WithContext, Thing, Person, SoftwareApplication } from "schema-dts";
import { TProjectDetail } from "~/query/get-projects";

type TProps = {
  jsonLd: WithContext<Thing>;
};

export default function JsonLd({ jsonLd }: TProps) {
  return (
    <>
      <script
        async
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}

const home_jsonld: WithContext<Person> = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sai Htun",
  jobTitle: "Software Engineer",
  description:
    "Sai is a creative Software Engineer with experience delivering high-quality web solutions and visually compelling user interfaces.",
  disambiguatingDescription:
    "His expertise lies in React.js and TypeScript, but his capabilities transcend boundaries.",
  url: "https://saihtun.xyz",
  email: "saihtun1430@gmail.com",
  sameAs: [
    "https://www.linkedin.com/in/sai-htun-b20a0611a/",
    "https://github.com/SaiHtun",
    "https://twitter.com/saithesamuraii",
  ],
};

export function HomeJsonLd() {
  return <JsonLd jsonLd={home_jsonld} />;
}

type TProjectJsonLdProps = {
  projectDetails: TProjectDetail;
};

export function ProjectJsonLd({ projectDetails }: TProjectJsonLdProps) {
  const { project, description, image } = projectDetails;

  const project_jsonld: WithContext<SoftwareApplication> = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: project.name,
    description: description,
    applicationCategory: "Web Applications",
    image: [image.asset.url],
    disambiguatingDescription: project.intro,
    url: `https://saihtun.xyz/project/${project.name}`,
    keywords: project.topics.join(", "),
    author: {
      "@type": "Person",
      name: "Sai Htun",
    },
    publisher: {
      "@type": "Organization",
      name: "Sai is cooking!",
      url: "https://saihtun.xyz",
    },
  };

  return <JsonLd jsonLd={project_jsonld} />;
}
