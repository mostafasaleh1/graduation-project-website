import {
  people01,
  people02,
  people03,
  github,
} from "../assets";

export const navLinks = [
  {
    id: "/graduation-project-website/",
    title: "Home",
  },
  {
    id: "/graduation-project-website/about",
    title: "Documentation",
  },
  {
    id: "/graduation-project-website/contributers",
    title: "Our Team",
  },
  {
    id: "/graduation-project-website/sharescreen",
    title: "View Cam",
  },
];

export const feedback = [
  {
    id: "feedback-1",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, mollitia vel unde cumque illo sint?",
    name: "Person",
    title: "Job",
    img: people01,
  },
  {
    id: "feedback-2",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, mollitia vel unde cumque illo sint?",
    name: "Person",
    title: "Job",
    img: people02,
  },
  {
    id: "feedback-3",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, mollitia vel unde cumque illo sint?",
    name: "Person",
    title: "Job",
    img: people03,
  },
];

export const footerLinks = [
  {
    title: "Documentation",
    links: [
      {
        name: "Project Book",
        link: "/graduation-project-website/about",
      },
      {
        name: "Project Presentation",
        link: "/graduation-project-website/about",
      },
    ],
  },
  {
    title: "Our Team",
    links: [
      {
        name: "About our Team",
        link: "/graduation-project-website/contributers",
      },
    ],
  },
  {
    title: "Useful Links",
    links: [
      {
        name: "Source Code",
        link: "https://github.com/0xDigimon/Intelligent-Mobile-Robot-IMR",
      },
      {
        name: "View Cam",
        link: "/graduation-project-website/sharescreen",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: github,
    link: "https://github.com/0xDigimon/Intelligent-Mobile-Robot-IMR",
  },
];
