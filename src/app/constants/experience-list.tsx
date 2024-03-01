import AppleCompanyIcon from "~/components/ui/icons/apple-company-icon";
import TextInitialIcon from "~/components/ui/icons/text-initial-icon";

export type TExperience = {
  id: number;
  company: string;
  position: string;
  timeline: string;
  companyIcon: React.ReactNode;
};

export const experienceList: TExperience[] = [
  {
    id: 1,
    company: "Apple Inc",
    position: "Software Engineer Intern",
    timeline: "2023",
    companyIcon: <AppleCompanyIcon />,
  },
  {
    id: 2,
    company: "Apple Inc",
    position: "Sales Specialist",
    timeline: "2021 - Now",
    companyIcon: <AppleCompanyIcon />,
  },
  {
    id: 3,
    company: "Freelance Web Developer",
    position: "Fullstack Developer, Designer",
    timeline: "2021 - 2022",
    companyIcon: <TextInitialIcon text="Freelance" />,
  },
];
