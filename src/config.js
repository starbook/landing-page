import logo from "./assets/images/logo.png";
import starbookPic from "./assets/images/main-body.png";
import appleBadge from "./assets/images/App_Store_Badge.svg";
import { faGithubSquare, faFacebookSquare, faInstagramSquare, faLinkedin, faTwitterSquare, } from "@fortawesome/free-brands-svg-icons";

export const navBar = {
  logo: logo,
  title: "StarBook",
  link:
    "https://apps.apple.com/us/app/starbook-journal-ai-diary/id1552418289?itsct=apps_box&itscg=30200",
};

export const mainBody = {
  title: "StarBook",
  description: " A digital diary and mood tracking app that helps you in keeping track of your mood and productivity throughout the month/year.",
  bgImage: starbookPic,
  icons: [
    {
      image: appleBadge,
      link: 'https://apps.apple.com/us/app/starbook-journal-ai-diary/id1552418289?itsct=apps_box&itscg=30200'
    },
  ],
};

export const footer = {
  supportList: [
    {
      text: "Source Code",
      link: "https://github.com/hashirshoaeb/star_book",
    },
    {
      text: "Report Bug",
      link: "https://github.com/hashirshoaeb/star_book/issues/new?template=bug_report.md",
    },
    {
      text: "Request feature",
      link: "https://github.com/hashirshoaeb/star_book/issues/new?template=feature_request.md"
    },
    {
      text: "Contribute to open source",
      link: "https://github.com/hashirshoaeb/star_book/blob/master/CONTRIBUTING.md",
    },
  ],
  termsPolicyLink: "https://github.com/hashirshoaeb/star_book/blob/master/PRIVACY%26POLICY.md",
  aboutDeveloper: "I'm Hashir, developer of this app. Feel free to connect with me.",
  socialIcons: [
    {
      icon: faGithubSquare,
      link: "https://www.github.com/hashirshoaeb/",
    },
    {
      icon: faTwitterSquare,
      link: "https://www.twitter.com/hashirshoaeb/",
    },
    {
      icon: faLinkedin,
      link: "https://www.linkedin.com/in/hashirshoaeb/",
    },
    {
      icon: faInstagramSquare,
      link: "https://www.instagram.com/hashirshoaeb/",
    },
  ],
};
