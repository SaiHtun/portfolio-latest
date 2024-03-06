import AppleCompanyIcon from "~/components/ui/icons/apple-company-icon";
import TextInitialIcon from "~/components/ui/icons/text-initial-icon";

export type TExperience = {
  id: string;
  company: string;
  position: string;
  timeline: string;
  companyIcon: React.ReactNode;
  descriptions: string[];
  techStack: string[];
};

export const experienceList: TExperience[] = [
  {
    id: "1",
    company: "Apple Inc",
    position: "Software Engineer Intern",
    timeline: "2023",
    companyIcon: <AppleCompanyIcon />,
    descriptions: [
      "Engineered new features in React and Ruby on Rails for an internal web service ( Signal ) that visualizes ticket status with data from a ticket tracking system API ( Radar ).",
      "Developed a graph data visualization to have a birds eye view of the tickets relationship for “Signal” using d3.js. Also, eventually end up export that graph component as a WebView and embed into “Radar” in UAT development.",
      "Enhanced web application performance by implementing client-side caching which eliminates unnecessary network requests, resulting in significantly faster page load times and a smoother user experience.",
      "Consistently delivered high-quality features with confidence by implementing a robust testing strategy, achieving a minimum test coverage of 80% and above.",
      "Drove timely project completion and fostered a collaborative environment by proactively identifying and addressing engineering challenges at all stages of development.",
    ],
    techStack: [
      "React.js",
      "TypeScript",
      "Ruby",
      "Ruby on Rails",
      "PostgreSQL",
      "docker",
    ],
  },
  {
    id: "2",
    company: "Freelance",
    position: "Fullstack Developer, Designer",
    timeline: "2021 - 2022",
    companyIcon: <TextInitialIcon text="Freelance" />,
    descriptions: [
      "Worked collaboratively with clients to uncover their unique business needs and delivered tailor-made web solutions that exceeded expectations and drove business growth.",
      "Ensure all code and design were well-documented and adhered to industry best practices that enable users to maintain and extend the system effectively.",
    ],
    techStack: [
      "React.js",
      "TypeScript",
      "Node.js",
      "NoSQL",
      "Firebase",
      "CMS",
      "AWS",
      "Figma",
    ],
  },
];
