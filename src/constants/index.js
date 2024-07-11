const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const Bio = {
  firstName: "Aditya",
  lastName: "Mishra",
  roles: ["Front-End Developer", "AI/ML Engineer", "Programmer"],
  description:
    "I am a front-end developer with expertise in HTML, CSS, JavaScript, and ReactJS, focused on creating visually appealing and user-friendly interfaces. Currently, I am also exploring AI/ML technologies, with plans to integrate them into web development in the future. I have hands-on experience with Arduino and a proven track record in event organization, demonstrating strong teamwork and leadership skills.",
  tagLine: "Let's create something useful in a better way",
  city: "New Delhi",
  state: "Delhi",
  country: "India",
  resume: "", // will upload google word and paste the link
  github: "AdityaNath0777",
  linkedin: "aditya-mishra-0777am",
  mail: "adityanath0777@gmail.com",
  insta: "", // will make another one
  twitter: "", // new twitter on the way
};

const experience = [
  {
    role: "Vice Chaiperson",
    duration: {
      start: "May 2024",
      end: "present",
    },
    skills: [
      "HTML5",
      "Bootstrap",
      "CSS",
      "JavaScript",
      "GitHub",
      "Git",
      "Leadership",
    ],
    company: "BVP-ISTE",
    desc: "commited to manage the college society. oragnize valuable events",
  },
  {
    role: "Generative AI",
    duration: {
      start: "Oct, 2023",
      end: "Apr, 2023",
    },
    skills: [
      "python",
      "transformers",
      "stable diffusion",
      "text-to-image generation",
    ],
    company: "BVCOE, New Delhi",
    desc: "Conducted research on various text-to-image generation models, exploring their potential impact and applications across different fields.",
  },
  {
    role: "Tech Head",
    duration: {
      start: "Oct 2023",
      end: "May 2024",
    },
    skills: [
      "HTML5",
      "Bootstrap",
      "CSS",
      "JavaScript",
      "GitHub",
      "Git",
      "Leadership",
    ],
    company: "NIDUS BVP",
    desc: "Led a 6-member team to develop a responsive website for the college society.",
  },
  {
    role: "Softech Head",
    duration: {
      start: "Oct 2023",
      end: "May 2024",
    },
    skills: [
      "HTML5",
      "Bootstrap",
      "CSS",
      "JavaScript",
      "ReactJS",
      "AI/ML",
      "GitHub",
      "Git",
      "Leadership",
    ],
    company: "BVP-ISTE",
    desc: "Successfully organized a 5-day online AI/ML Bootcamp with a team of 8. Developed and led the team for a website for the hackathon Hack The Crisis 3.0 oraganized by BVP-ISTE",
  },
];

const skills = [
  {
    name: "HTML5",
    img: "",
  },
  {
    name: "CSS",
    img: "",
  },
  {
    name: "JavaScript",
    img: "",
  },
  {
    name: "ReactJS",
    img: "",
  },
  {
    name: "Tailwind CSS",
    img: "",
  },
  {
    name: "Bootstrap",
    img: "",
  },
  {
    name: "git",
    img: ""
  },
  {
    name: "github",
    img: ""
  },
  {
    name: "C/C++",
    img: "",
  },
  {
    name: "Python",
    img: "",
  },
  {
    name: "numpy",
    img: "",
  },
  {
    name: "pandas",
    img: "",
  },
  {
    name: "matplotlib",
    img: "",
  },
  {
    name: "tensorflow",
    img: "",
  },
];

const myProjects = [
  {
    name: "Redux Toolkit Todo",
    duration: {
      start: "July, 2024",
      end: "July, 2024",
    },
    tags: ["React JS", "Vite", "redux", "redux-toolkit", "tailwind CSS"],
    desc: "Developed a to-do web app using Vite and ReactJS, leveraging Redux Toolkit for state management. The web app allows users to add, remove, and update tasks efficiently.",
  },
  {
    name: "GammaSignal Predictor",
    duration: {
      start: "Feb 2024",
      end: "Feb 2024",
    },
    tags: [
      "colab",
      "python",
      "numpy",
      "pandas",
      "matplotlib",
      "machine learning",
      "ML classification",
    ],
    desc: "A GammaSignal Predictor, utilizing a dataset to distinguish between gamma particles (signal) and hadrons (background). Employed various models to assess accuracy, enhancing the precision of particle classification in high-energy physics research.",
  },
  {
    name: "Todo Context Local",
    duration: {
      start: "Feb 2024",
      end: "Feb 2024",
    },
    tags: ["React Js", "Vite", "Tailwind CSS"],
    desc: "Built a React Todo app with the context API and client-side local storage persistence using the Vite framework.",
  },
  {
    name: "MedUnited",
    duration: {
      start: "July 2023",
      end: "July 2023",
    },
    tags: ["HTML", "CSS", "JavaScript", "tailwind CSS", "fetch API"],
    desc: "Developed MedUnited: a healthcare platform prototype with real-time hospital searches, facility data display, and an integrated online medicine shop, enhancing accessibility and convenience for users.",
  },
  {
    name: "Spotify Clone",
    duration: {
      start: "Feb 2023",
      end: "Mar 2023",
    },
    tags: ["HTML", "CSS", "JavaScript"],
    desc: "Developed a responsive Spotify clone webpage using HTML, CSS, and JavaScript, mirroring the latest UI.",
  },
];

const top3WebDevProjects = [
  {
    name: "Redux Toolkit Todo",
    duration: {
      start: "July, 2024",
      end: "July, 2024",
    },
    tags: ["React JS", "Vite", "redux", "redux-toolkit", "tailwind CSS"],
    desc: "Developed a to-do web app using Vite and ReactJS, leveraging Redux Toolkit for state management. The web app allows users to add, remove, and update tasks efficiently.",
  },
  {
    name: "Todo Context Local",
    duration: {
      start: "Feb 2024",
      end: "Feb 2024",
    },
    tags: ["React Js", "Vite", "Tailwind CSS"],
    desc: "Built a React Todo app with the context API and client-side local storage persistence using the Vite framework.",
  },
  {
    name: "MedUnited",
    duration: {
      start: "July 2023",
      end: "July 2023",
    },
    tags: ["HTML", "CSS", "JavaScript", "tailwind CSS", "fetch API"],
    desc: "Developed MedUnited: a healthcare platform prototype with real-time hospital searches, facility data display, and an integrated online medicine shop, enhancing accessibility and convenience for users.",
  },  
]

const education = [
  {
    courseName: "Bachelor of Technology",
    branch: "Electronics and Communication Enginnering",
    courseAbbr: "B. Tech",
    branchAbbr: "ECE",
    duration: {
      start: "Dec, 2021",
      end: "Jun, 2025",
      expectedEnd: true,
    },
    institute: "Bharati Vidyapeeth's College of Engineering, New Delhi",
  },
  {
    courseName: "Sr. Secondary (10+2)",
    branch: "Science (PCM)",
    duration: {
      start: "Dec, 2021",
      end: "Jun, 2025",
      expectedEnd: false,
    },
    institute: "GD Lancer's Public School, New Delhi",
  },
];

export { navLinks, Bio, experience, skills, myProjects, education, top3WebDevProjects };
