import logogradient from "./assets/logo.svg";
import logo from "./assets/logo2.svg";

import profile from "./assets/png.webp";

import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import tailwind from "./assets/techstack/tailwind.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import postman from "./assets/techstack/postman.png";
import figma from "./assets/techstack/figma.png";
import express from "./assets/techstack/express.png";
import demo from "./assets/projects/demo.MP4";

import Qurra from "./assets/projects/qurra.png";
import FitMe from "./assets/projects/FitMe.png";
import NationalGame from "./assets/projects/NationalGame.png";
import ChattingProject from "./assets/projects/ChattingProject.png";
import Youtube from "./assets/projects/Youtube.png";
import X from "./assets/projects/X.png";
import Tuwaiq from "./assets/projects/Tuwaiq.png";
import PM from "./assets/projects/PM.png";

export const logos = {
  logogradient: logogradient,
  logo: logo,
};

export const personalDetails = {
  name: "Lama AlAjmah",
  tagline: "I code to turn ideas into reality 💡",
  img: profile,
  about: `As a Front-end Web Developer with a Bachelor's degree in Computer Science, I have a solid foundation in both theoretical knowledge and practical skills. I am committed to continuous learning, with certifications from Cisco, IBM, and Tuwaiq Academy. My experience in entrepreneurship has helped me develop an innovative approach to problem-solving and project execution.

Additionally, I have a strong understanding of UI/UX design principles, allowing me to create functional, user-centric, and visually appealing interfaces. I am ready to contribute to various projects and provide innovative solutions that enhance user experience and performance in different digital domains..`,
};

export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/lama-abdullah-679834277",
  github: "https://github.com/ilamaalajmah",
  gmail: "mailto:ilamaabdullah77@gmail.com",
};

export const workDetails = [
  {
    Position: "Intern",
    Company: `Tuwaiq Academy`,
    Location: "Riyadh , Saudi Arabia",
    Duration: "Aug 2024 - Oct 2024",
  },
  {
    Position: "Project Manager",
    Company: `Mofradah Company`,
    Location: "Riyadh , Saudi Arabia",
    Duration: "Mar 2023 - Nov 2023",
  },
  {
    Position: "Quality Specialist",
    Company: `Google Developer Student Club`,
    Location: "AlBaha , Saudi Arabia",
    Type: "",
    Duration: "Jan 2022 - Jan 2023",
  },
];

export const eduDetails = [
  {
    Position: "Bachelor’s degree in Computer Science",
    Company: "AlBaha University",
    Location: "AlBaha , Saudi Arabia",
    Duration: "Aug 2020 - Dec 2023",
  },
];

export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  tailwind: tailwind,
  bootstrap: bootstrap,
  vscode: vscode,
  postman: postman,
  git: git,
  github: github,
  figma: figma,
  express: express,
};

export const projectDetails = [
  {
    title: "Qurra Project",
    image: Qurra,
    description: `focuses on using AI to classify written content for children and
teenagers, By employing artificial intelligence we can assess the complexity of the context and assign it a rating from 1 to 4 `,
    techstack: "mysql,VS,jupyter notebook",
    previewLink: demo,
    // githubLink: "",
  },
  {
    title: "FitMe Project",
    image: FitMe,
    description: `AI-powered platform that offers personalized outfit and color suggestions based on
skin tone, body shape, and size`,
    techstack: "Using React,Tailwind CSS, Express.js, MongoDB and Figma",
    previewLink: "https://fitme-front-end.onrender.com/",
    githubLink: "https://github.com/AbdallahLearn/FitMe.git",
  },
  {
    title: "National Day Game",
    image: NationalGame,
    description: `This is sample project description random things are here in description This is sample
project lorem ipsum generator for dummy content`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://ilamaalajmah.github.io/",
    // githubLink: "",
  },
  {
    title: "Chat Application Project",
    image: ChattingProject,
    description: ` A React-based chat application
     that allows users to send and receive
messages in real time `,
    techstack: "React and Tailwind CSS",
    previewLink: "https://react-chatting-project.netlify.app/",
    githubLink: "https://github.com/ilamaalajmah/React-Chatting-Project.git",
  },
  {
    title: "Clone Youtube Project",
    image: Youtube,
    description: `I developed an app similar to YouTube, allowing users to watch videos, search, like, and comment. It features an easy-to-use interface with options to upload videos, organize channels, and receive notifications for new updates.`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://lama-youtube-project.netlify.app/",
    githubLink: "https://github.com/ilamaalajmah/Youtube-Project.git",
  },
  {
    title: "Clone X Project",
    image: X,
    description: `A clone of the X app, replicating its main features, user interface, and overall functionality`,
    techstack: "React and Tailwind CSS",
    previewLink: "https://clone-x-project.netlify.app/",
    githubLink: "https://github.com/ilamaalajmah/Clone-X.git",
  },
  {
    title: "Project Managment",
    image: PM,
    description: `The website allows users to register creative ideas, followed by approval from the site manager to ensure quality and consistency.`,
    techstack: "React,Tailwind CSS and nodejs",
    previewLink: "https://idea-g8tj.onrender.com/",
    githubLink: "https://github.com/AbdallahLearn/PM-React.git",
  },

  {
    title: "Clone Tuwaiq Academy",
    image: Tuwaiq,
    description: `A simulated version of the Tuwaiq Academy website, replicating its main features, design, and overall functionality.`,
    techstack: "HTML and CSS",
    githubLink: "https://github.com/ilamaalajmah/TuwaiqAcademyProject.git",
    previewLink: "https://ilamaalajmah.github.io/TuwaiqAcademyProject/",
  },
];

export const contactDetails = {
  email: "ilamaabdullah77@gmail.com",
  phone: "‪+966 50 821 6998‬",
};
