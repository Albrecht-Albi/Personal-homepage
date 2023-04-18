import { styleIcon } from "./styled";
import { ReactComponent as GitHubIcon } from "./icons/Github.svg";
import { ReactComponent as LinkedInIcon } from "./icons/LinkedIN.svg";
import { ReactComponent as FacebookIcon } from "./icons/Facebook.svg";

export const socialIcons = [
  {
    name: "GitHub",
    url: "https://github.com/Albrecht-Albi",
    Icon: styleIcon(GitHubIcon),
  },
  {
    name: "LinkedIN",
    url: "https://pl.linkedin.com/in/albrecht-barton-41b922102",
    Icon: styleIcon(LinkedInIcon),
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/albi.albrecht.940/",
    Icon: styleIcon(FacebookIcon),
  }
]