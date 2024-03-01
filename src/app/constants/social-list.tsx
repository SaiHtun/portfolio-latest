import MainIconWrapper from "~/ui/icons/main-icon-wrapper";
import { GitBranchPlus, Mail, Linkedin } from "lucide-react";
import Link from "next/link";

const tw =
  "bg-transparent dark:bg-transparent hover:bg-neutral-100 hover:dark:bg-neutral-700/80 transition-all";

export const socialList: React.ReactNode[] = [
  <Link href="https://github.com/SaiHtun" key="1">
    <MainIconWrapper twClasses={tw}>
      <GitBranchPlus size="20px" />
    </MainIconWrapper>
  </Link>,

  <Link href="mailto:saihtun1430@gmail.com" key="2">
    <MainIconWrapper twClasses={tw}>
      <Mail size="20px" />
    </MainIconWrapper>
  </Link>,

  <Link href="https://www.linkedin.com/in/sai-htun-b20a0611a/" key="3">
    <MainIconWrapper twClasses={tw}>
      <Linkedin size="20px" />
    </MainIconWrapper>
  </Link>,
];
