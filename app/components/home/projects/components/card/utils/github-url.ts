import {githubLink} from "@/lib/constants/constants";

export const githubShortcut = (projectName: string): string => {
  return githubLink.profile + `/${projectName}`;
}