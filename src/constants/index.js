import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  threejs,
  memories,
  codeplayer,
  crypto,
  letstream,
  techolution,
  guardians,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "JavaScript Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Associate Full Stack Developer",
    company_name: "Techolution",
    icon: techolution,
    iconBg: "#383E56",
    date: "July 2024 - Present",
    points: [
      "Built reusable MUI components with advanced UX features like skeleton loaders and auto-complete selects.",
      "Integrated GraphQL APIs using React-Query for state management and implemented patient CRUD workflow.",
      "Streamlined project setup with NX, Storybook, and Vitest, improving scalability, testing, and documentation.",
    ],
  },
  {
    title: "Software Development Engineer - I",
    company_name: "Guardians EMS Private Limited",
    icon: guardians,
    iconBg: "#383E56",
    date: "August 2023 - June 2024",
    points: [
      "Enhanced SOS web app with mobile optimization, Google Maps integration, and real-time ambulance tracking.",
      "Automated response metrics via a dashboard, saving 4–5 hours weekly and improving decision-making.",
      'Developed "e-buddy," a React Native healthcare app with OTP authentication and real-time location tracking.',
      "Designed robust API and EMS dashboard tests using k6 and Playwright.",
    ],
  },
  {
    title: "Frontend Web Application Intern",
    company_name: "Letstream Ventures Private Limited",
    icon: letstream,
    iconBg: "#383E56",
    date: "May 2022 - July 2022",
    points: [
      "Built client management and email/file organization with approval workflows for an Ionic app.",
      "Optimized mobile interfaces with Ionic, highlighting UI/UX expertise.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Crypto Tracker",
    description:
      "The Crypto Tracker web app, made with React JS and MaterialUI, utilizes the Coin Gecko API to display real-time cryptocurrency prices and market data. Its user-friendly interface and responsive design make it a valuable tool for crypto investors and enthusiasts.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "RestAPI",
        color: "green-text-gradient",
      },
      {
        name: "MaterialUI",
        color: "pink-text-gradient",
      },
    ],
    image: crypto,
    source_code_link: "https://github.com/ashish-sng/crypto-tracker",
  },
  {
    name: "Memories",
    description:
      "Your MERN stack project is a visually appealing picture posting platform that uses Material-UI for design, JWT and Google authentication for user security. It enables users to upload photos, add tags, and write messages, making it a valuable tool for sharing memories and building a community.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "materialui",
        color: "pink-text-gradient",
      },
      {
        name: "Nodejs",
        color: "blue-text-gradient",
      },
    ],
    image: memories,
    source_code_link: "https://github.com/ashish-sng/memories",
  },
  {
    name: "Code Player",
    description:
      "This code editor for HTML, CSS, and JavaScript comes with a real-time output screen using jQuery. It's a valuable tool for web developers who want to test their code as they work. The user-friendly interface and real-time feedback make it an efficient and time-saving tool.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "jQuery",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: codeplayer,
    source_code_link: "https://github.com/ashish-sng/code-player",
  },
];

export { services, technologies, experiences, testimonials, projects };
