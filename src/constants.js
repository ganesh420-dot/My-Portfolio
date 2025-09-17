// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import reduxLogo from "./assets/tech_logo/redux.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
import springbootLogo from "./assets/tech_logo/springboot.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import firebaseLogo from "./assets/tech_logo/firebase.png";
import cLogo from "./assets/tech_logo/c.png";
import javaLogo from "./assets/tech_logo/java.png";
import pythonLogo from "./assets/tech_logo/python.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import mcLogo from "./assets/tech_logo/mc.png";
import vercelLogo from "./assets/tech_logo/vercel.png";

// Experience Section Logo's
// import webverseLogo from "./assets/company_logo/webverse_logo.png";
// import agcLogo from "./assets/company_logo/agc_logo.png";
// import newtonschoolLogo from "./assets/company_logo/newtonschool_logo.png";

// Education Section Logo's
import soalogo from "./assets/education_logo/SOA-PNG.png";
import nistlogo from "./assets/education_logo/nist_logo.png";

// Project Section Logo's
import studyNotion from "./assets/work_logo/Study-Notion.png";
import urlShortener from "./assets/work_logo/Url-Shortener.png";
import netflixGPT from "./assets/work_logo/Netflix-GPT.png";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Redux", logo: reduxLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node JS", logo: nodejsLogo },
      { name: "Springboot", logo: springbootLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "Firebase", logo: firebaseLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C", logo: cLogo },
      { name: "Java", logo: javaLogo },
      { name: "Python", logo: pythonLogo },
      { name: "JavaScript", logo: javascriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Compass", logo: mcLogo },
      { name: "Vercel", logo: vercelLogo },
    ],
  },
];

export const experiences = [
  // {
  //   id: 0,
  //   img: webverseLogo,
  //   role: "Fullstack Developer",
  //   company: "Webverse Digital",
  //   date: "April 2024 - Present",
  //   desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
  //   skills: [
  //     "HTML",
  //     "CSS",
  //     "JavaScript",
  //     "React JS",
  //     "TypeScript",
  //     "Node JS",
  //     "Tailwind CSS",
  //     "MongoDb",
  //     "Redux",
  //     " Next Js",
  //   ],
  // },
  // {
  //   id: 1,
  //   img: agcLogo,
  //   role: "Fullstack Engineer",
  //   company: "Agumentik Group of Companies",
  //   date: "July 2023 - March 2024",
  //   desc: "Contributed to innovative projects as a Fullstack Engineer, leading both frontend and backend development using technologies such as HTML, CSS, JavaScript, PHP, SQL, Bootstrap, and ReactJS. Worked closely with the team to deliver responsive, high-performance web applications and improve user experience through seamless integration of various technologies.",
  //   skills: [
  //     "ReactJS",
  //     "Redux",
  //     "JavaScript",
  //     "Tailwind CSS",
  //     "HTML",
  //     "CSS",
  //     "SQL",
  //   ],
  // },
  // {
  //   id: 2,
  //   img: newtonschoolLogo,
  //   role: "Frontend Intern",
  //   company: "Newton School",
  //   date: "September 2021 - August 2022",
  //   desc: "Worked as a Frontend Developer Intern, designing and implementing scalable UI components and responsive websites using HTML, CSS, JavaScript, Bootstrap, and Material UI. Collaborated with the design team to translate wireframes and prototypes from Figma into interactive, user-friendly web pages.",
  //   skills: ["HTML", "CSS", "Javascript", "Bootstrap", "Figma", "Material UI"],
  // },
];

export const education = [
  {
    id: 0,
    img: soalogo,
    school: "SOA University, Bhubaneswar",
    date: "Nov 2021 - June 2025",
    grade: "9.08 CGPA",
    desc: "I have completed my Bachelor of Technology (B.Tech) in Computer Science and Engineering from SOA University. During my studies, I built a solid foundation in programming, software development, and computer science principles, including Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. This rigorous curriculum has equipped me with the technical expertise and problem-solving abilities to develop efficient, scalable, and modern software solutions.",
    degree: "B.Tech – Computer Science and Engineering",
  },
  {
    id: 1,
    img: nistlogo,
    school: "NIST, Balasore",
    date: "2019 - 2021",
    grade: "84.17%",
    desc: "I completed my Higher Secondary education in Physics, Chemistry, Mathematics, and Biology from NIST College, Balasore, under the State Board of Odisha (CHSE). This laid a strong foundation in analytical thinking, problem-solving, and scientific principles, which prepared me for advanced studies in computer science and engineering.",
    degree: "Higher Secondary - CHSE (PCM & Biology)",
  },
];

export const projects = [
  {
    id: 0,
    title: "Study Notion",
    description:
      "A full-stack MERN-based EdTech platform that enables students to sign up, purchase courses, and access learning content, while instructors can create and manage courses with customizable pricing. The application includes secure authentication, role-based access, and database integration to handle users, courses, and transactions—delivering a complete e-learning experience.",
    image: studyNotion,
    tags: [
      "HTML",
      "Tailwind CSS",
      "JavaScript",
      "React JS",
      "Node.js",
      "Express.js",
      "Mongo DB",
      "JWT",
      "Cloudinary",
    ],
    github: "https://github.com/ganesh420-dot/Study-Notion",
    webapp: "https://study-notion-sable-chi.vercel.app/",
  },
  {
    id: 1,
    title: "URL Shortener",
    description:
      "A full-stack URL Shortener application built with Spring Boot (backend) and React (frontend). It provides secure authentication and authorization using JWT and Spring Security, efficient data persistence with Spring Data JPA and PostgreSQL, and containerized deployment using Docker. The frontend is developed with React, Vite, Tailwind CSS, and enhanced with Material UI for a modern UI/UX. Features include creating, managing, and tracking shortened URLs with seamless API integration via Axios and React Query, along with form handling using React Hook Form. The project is deployed on Netlify (frontend), Render (backend), and Neon Tech (database), ensuring a fully production-ready experience.",
    image: urlShortener,
    tags: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Material UI",
      "Spring Boot",
      "Spring Security",
      "Spring Data JPA",
      "PostgreSQL",
      "JWT",
      "Lombok",
      "Maven",
      "Axios",
      "React Query",
      "React Hook Form",
      "Docker",
      "Render",
      "Neon Tech",
      "Netlify",
    ],
    github: "https://github.com/ganesh420-dot/url-shortener-project-main",
    webapp: "https://coruscating-kheer-2f5d19.netlify.app/",
  },
  {
    id: 2,
    title: "Netflix GPT",
    description:
      "A Netflix-inspired movie streaming web app that fetches and displays real-time data from TMDB (The Movie Database) API. Integrated with OpenAI GPT to provide intelligent, personalized movie recommendations based on user queries. Features include secure authentication, dynamic routing, responsive UI, and search functionality, delivering an immersive Netflix-like experience.",
    image: netflixGPT,
    tags: [
      "JavaScript",
      "React JS",
      "Redux",
      "TMDB API",
      "Tailwind CSS",
      "Firebase",
      "CSS",
      "OpenAI GPT",
    ],
    github: "https://github.com/ganesh420-dot/netflix-gpt",
    webapp: "https://netflix-gpt-snowy-beta.vercel.app/",
  },
  // {
  //   id: 2,
  //   title: "Movie Recommendation App",
  //   description:
  //     "A React-based web application that provides movie recommendations based on different criteria, such as genres, user preferences, and popular trends. The intuitive design and smooth experience make it a go-to app for movie enthusiasts.",
  //   image: movierecLogo,
  //   tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
  //   github: "https://github.com/codingmastr/Movie-Recommendation-App",
  //   webapp: "https://movie-recommendation-app-jet.vercel.app/",
  // },
  // {
  //   id: 3,
  //   title: "Email Validator NPM Package",
  //   description:
  //     "An efficient and customizable NPM package for validating email addresses. Built using React.js and Node.js, it provides robust validation features to help developers ensure that email inputs meet required formats and standards.",
  //   image: npmLogo,
  //   tags: ["React JS", "Node.js", "NPM", "Validation"],
  //   github: "https://github.com/codingmastr/cmtk-email-validator",
  //   webapp: "https://www.npmjs.com/package/cmtk-email-validator",
  // },
  // {
  //   id: 4,
  //   title: "Task Reminder Chrome Extension Tool",
  //   description:
  //     "A productivity-boosting Chrome extension designed to help users manage and remember their daily tasks. Built using JavaScript, it offers a simple interface with reminders and task notifications to keep users on track.",
  //   image: taskremLogo,
  //   tags: ["JavaScript", "Chrome Extension", "HTML", "CSS"],
  //   github: "https://github.com/codingmastr/Task-Reminder-Tool",
  //   webapp: "chrome://extensions/?id=kngheeibjnnidhfoomkpnbeghackheci",
  // },
  // {
  //   id: 5,
  //   title: "Webverse Digital",
  //   description:
  //     "The official website for Webverse Digital, a creative digital marketing agency. Built using HTML, CSS, and JavaScript, it features visually appealing animations and a clean design to showcase the agency's services.",
  //   image: webverLogo,
  //   tags: ["HTML", "CSS", "JavaScript", "Framer Motion"],
  //   github: "https://github.com/codingmastr/Webverse-Digital",
  //   webapp: "https://webversedigital.com/",
  // },
  // {
  //   id: 6,
  //   title: "Coding Master",
  //   description:
  //     "An ed-tech platform where users can access tech and coding-related blogs, notes, interview questions, e-books, and premium content with payment integration. Built with full-stack technologies for a seamless learning experience.",
  //   image: cmLogo,
  //   tags: ["React JS", "Node.js", "MongoDB", "Express", "Payment Integration"],
  //   github: "https://codingmasterweb.in/",
  //   webapp: "https://codingmasterweb.in/",
  // },
  // {
  //   id: 7,
  //   title: "Image Search App",
  //   description:
  //     "A React.js-based image search application that allows users to search and download high-quality images from the web. Built using external APIs to ensure a vast library of results for various queries.",
  //   image: imagesearchLogo,
  //   tags: ["React JS", "API", "Search Feature", "CSS", "Javascript"],
  //   github: "https://github.com/codingmastr/Image-Search-App",
  //   webapp: "https://imagsearch.netlify.app/",
  // },
  // {
  //   id: 8,
  //   title: "Image Background Remover",
  //   description:
  //     "An efficient background removal app built with React.js and API integration. Users can upload any image, remove the background, and download the transparent version for further use.",
  //   image: removebgLogo,
  //   tags: ["React JS", "API", "Image Processing", "HTML", "CSS", "Javascript"],
  //   github: "https://github.com/codingmastr/Image-Background-Remover",
  //   webapp: "https://removeyourbg.netlify.app/",
  // },
];
