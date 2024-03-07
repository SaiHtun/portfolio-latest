import MainIconWrapper from "components/ui/icons/main-icon-wrapper";
import { Clock4 } from "lucide-react";
import HandrawIcon from "components/ui/icons/handraw-icon";
import TextInitalIcon from "components/ui/icons/text-initial-icon";
import InstagramIcon from "components/ui/icons/instagram-icon";

export type TProject = {
  id: number;
  name: string;
  intro: string;
  url: string;
  topics: string[];
  projectIcon: React.ReactNode;
};

export const projectList: TProject[] = [
  {
    id: 1,
    name: "Timesync",
    intro: "global timezones coordinator",
    topics: ["React.js", "web"],
    url: "/projects/timesync",
    projectIcon: (
      <MainIconWrapper>
        <Clock4 />
      </MainIconWrapper>
    ),
  },
  {
    id: 2,
    name: "Outstagramm",
    intro: "Instagram clone",
    topics: ["React.js", "Firebase", "web"],
    url: "/projects/outstagramm",
    projectIcon: (
      <MainIconWrapper>
        <InstagramIcon />
      </MainIconWrapper>
    ),
  },
  {
    id: 3,
    name: "Paint Board",
    intro: "darwing with finger gestures",
    url: "/projects/paint-board",
    topics: ["opencv", "ml/ai"],
    projectIcon: <HandrawIcon />,
  },
  {
    id: 4,
    name: "Jsapi",
    intro: "learning JavaScript without leaving terminal",
    url: "/projects/jsapi",
    topics: ["Node.js", "cli"],
    projectIcon: <TextInitalIcon text="jsapi" />,
  },
];
