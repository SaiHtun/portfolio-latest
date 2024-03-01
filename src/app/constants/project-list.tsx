import MainIconWrapper from "~/ui/icons/main-icon-wrapper";
import { Clock4 } from "lucide-react";
import HandrawIcon from "~/components/ui/icons/handraw-icon";
import TextInitalIcon from "~/components/ui/icons/text-initial-icon";

export type TProject = {
  id: number;
  name: string;
  intro: string;
  topics: string[];
  projectIcon: React.ReactNode;
};

export const projectList: TProject[] = [
  {
    id: 1,
    name: "Timesync",
    intro: "global timezones coordinator",
    topics: ["web"],
    projectIcon: (
      <MainIconWrapper>
        <Clock4 />
      </MainIconWrapper>
    ),
  },
  {
    id: 2,
    name: "Paint Board",
    intro: "darwing with finger gestures",
    topics: ["opencv", "ml/ai"],
    projectIcon: (
      <HandrawIcon stroke="black" strokeWidth="0.3" twClasses="w-6 h-6" />
    ),
  },
  {
    id: 3,
    name: "Jsapi",
    intro: "learning JavaScript without leaving terminal",
    topics: ["cli"],
    projectIcon: <TextInitalIcon text="jsapi" />,
  },
];
