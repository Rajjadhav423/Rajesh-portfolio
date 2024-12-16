
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  cpp,
  java,
  python,
  express,
  sql,
  machine,
  Calories,
  studyNotion,
  solar,
  thermo,
  collab,
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
    title: "React Developer",
    icon: reactjs,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Machine Learning Developer",
    icon: creator,
  },
  {
    title: "Physics and Mathematics Tutor",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "cpp",
    icon: cpp,
  },

  {
    name: "python",
    icon: python,
  },
  {
    name: "java",
    icon: java,
  },
  {
    name: "HTML",
    icon: html,
  },
  {
    name: "CSS",
    icon: css,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "express",
    icon: express,
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
    name: "sql",
    icon: sql,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Research Intern",
    company_name: "BITS Pilani Goa Campus",
    icon: machine,
    iconBg: "#E6DEDD",
    date: "Nov 2024 - Present",
    points: [
      "Collaborated with a research team to predict lignin dissolution in natural solvents using machine learning models.",
      "Designed and implemented predictive models using Python libraries such as Scikit-learn and Pandas.",
      "Analyzed thermodynamic property data to improve the accuracy of predictions.",
    ],
  },
  {
    title: "Tutor",
    company_name: "Saraswati Coaching Institute",
    icon: backend,
    iconBg: "#383E56",
    date: "Aug 2020 - Mar 2021",
    points: [
      "Taught Physics and Mathematics to Class XI students in a fully sponsored classroom training program.",
      "Assisted senior faculties in setting question papers and organizing quizzes.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Rajesh's exceptional coding skills and dedication were evident throughout our project. His contributions significantly improved our results.",
    name: "Dr. Sampatrao Manjare",
    designation: "Professor",
    company: "BITS Pilani Goa Campus",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    testimonial:
      "Rajesh's collaborative efforts and problem-solving mindset made our team stronger and our project successful.",
    name: "Team Member",
    designation: "Collaborator",
    company: "Dual Axis Solar Tracking Project",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    testimonial:
      "Rajesh's ability to explain complex concepts clearly makes him a valuable team member and mentor.",
    name: "Student",
    designation: "Mentee",
    company: "Saraswati Coaching Institute",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
];




const projects = [
  {
    name: "Dual Axis Solar Tracking System",
    description:
      "Implemented an Arduino-based dual-axis solar tracker to maximize energy output. Used servo motors for precise solar panel rotation, achieving optimal electricity generation. Collaborated with a team of four to design and develop the system.",
    tags: [
      {
        name: "arduino",
        color: "blue-text-gradient",
      },
      {
        name: "servo motors",
        color: "green-text-gradient",
      },
    ],
    image: solar,
    source_code_link: "",
  },
  {
    name: "StudyNotion",
    description:
      "Developed a fully functional Ed-Tech platform with a React.js frontend and backend APIs using Node.js and MongoDB. Implemented a rating system to enhance engagement and content quality.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: studyNotion,
    source_code_link: "https://github.com/Rajjadhav423",
  },

  {
    name: "Real-Time Collaborative Code Editor",
    description:
      "Developed a seamless user experience with React.js and CodeMirror, offering syntax highlighting and live code editing. Designed a robust backend with Node.js and Express.js and real-time synchronization using Socket.IO.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "socket.io",
        color: "pink-text-gradient",
      },
    ],
    image: collab,
    source_code_link: "https://github.com/Rajjadhav423",
  },

  {
    name: "Calorie Burn Prediction",
    description:
      "Developed a machine learning model to predict calorie burn using Python, achieving 85% accuracy through regression techniques.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "machine learning",
        color: "green-text-gradient",
      },
    ],
    image: Calories,
    source_code_link: "https://github.com/Rajjadhav423",
  },
  {
    name: "ThermoPrediction - Predicting Thermodynamic Properties of Seawater",
    description:
      "Collaborated with a scholar from BITS Pilani Goa to develop machine learning models for predicting thermodynamic properties of seawater. Designed regression models and applied data preprocessing techniques to achieve high accuracy in property prediction.",
    tags: [
      {
        name: "machine learning",
        color: "blue-text-gradient",
      },
      {
        name: "data analysis",
        color: "green-text-gradient",
      },
      {
        name: "python",
        color: "pink-text-gradient",
      },
    ],
    image: thermo, // Replace with your image variable or path
    source_code_link: "https://github.com/Rajjadhav423", // Update if specific repo link is available
  },
];

export { services, technologies, experiences, testimonials, projects };
