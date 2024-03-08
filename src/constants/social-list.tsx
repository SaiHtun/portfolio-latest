import MainIconWrapper from "components/ui/icons/main-icon-wrapper";
import { GitBranchPlus, Mail, Linkedin } from "lucide-react";
import Link from "next/link";
import GithubIcon from "~/components/ui/icons/github-icon";

export const socialList: React.ReactNode[] = [
  <Link href="https://github.com/SaiHtun" key="1">
    <MainIconWrapper twClasses="bg-transparent dark:bg-transparent">
      <GithubIcon />
    </MainIconWrapper>
  </Link>,

  <Link href="mailto:saihtun1430@gmail.com" key="2">
    <MainIconWrapper twClasses="bg-transparent dark:bg-transparent">
      <Mail size="20px" />
    </MainIconWrapper>
  </Link>,

  <Link href="https://www.linkedin.com/in/sai-htun-b20a0611a/" key="3">
    <MainIconWrapper twClasses="bg-transparent dark:bg-transparent">
      <Linkedin size="20px" />
    </MainIconWrapper>
  </Link>,
];
