/* eslint-disable no-unused-vars */

import "./Footer.css";
import twitterIcon from "img/ic_twitter.svg";
import discordIcon from "img/ic_discord.svg";
import telegramIcon from "img/ic_telegram.svg";
import githubIcon from "img/ic_github.svg";

type SocialLink = {
  link: string;
  name: string;
  icon: string;
};

export const SOCIAL_LINKS: SocialLink[] = [
  { link: "https://discord.com/invite/ymN38YefH9", name: "Discord", icon: discordIcon },
  { link: "https://github.com/utx-io", name: "Github", icon: githubIcon },
  { link: "https://t.me/UTX_IO", name: "Telegram", icon: telegramIcon },
  { link: "https://twitter.com/UTX_IO", name: "Twitter", icon: twitterIcon },
];
