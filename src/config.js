import logo from "./assets/images/logo.png";
import starbookPic from "./assets/images/main-body.png";
import appleBadge from "./assets/images/App_Store_Badge.svg";

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
    icons:[
      {
        image: appleBadge, 
        link: 'https://apps.apple.com/us/app/starbook-journal-ai-diary/id1552418289?itsct=apps_box&itscg=30200'
      },
    ],
};

export const footer = {
  hashir: "https://github.com/hashirshoaeb",
  bugReport: "",
  contribute: "",
  sourceCode: "",
  privaryPolicy: "",
  icons: [
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/hashirshoaeb/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/hashirshoaeb/",
    },
    {
      image: "fa-twitter",
      url: "https://www.twitter.com/hashirshoaeb/",
    },
  ],
};
