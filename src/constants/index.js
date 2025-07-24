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
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const Bio = {
  firstName: "Aditya",
  lastName: "Mishra",
  primaryRole: "Full-Stack Developer",
  roles: [
    "Full-Stack Web Developer",
    "Front-End Developer",
    "AI/ML Engineer",
    "Programmer",
  ],
  description:
    "I am a Full-Stack Developer skilled in building scalable, real-time web applications using the MERN stack and Next.js. Experienced in designing clean backend architectures (REST APIs, SSE, WebSocket, RBAC) and building responsive, user-friendly UIs with React, Tailwind CSS, and Redux Toolkit.",
  tagLine: "Let's create something useful in a better way",
  city: "New Delhi",
  state: "Delhi",
  country: "India",
  resume: "", // will upload google word and paste the link
  github: "AdityaNath0777",
  linkedin: "aditya-mishra-0777am",
  mail: "adityanath0777@gmail.com",
  insta: "", // will make another one
  twitter: "AdityaNath0777", // new twitter A/C has been created 🗿
};

const experience = {
  work: [
    {
      role: "Full Stack Developer Intern",
      duration: {
        start: "Feb 2025",
        end: "Jun 2025",
      },
      skills: [
        "ReactJs",
        "Express",
        "MongoDB",
        "WebSockets",
        "Server Side Events",
        "RBAC",
        "multer",
      ],
      company: "WebTree Global Pvt. Ltd.",
      desc: `Built a full-stack forum app with scalable APIs, RBAC, voting system, real-time notifications (SSE), and a responsive, modular UI using MERN and Redux Toolkit.`,

      fullDescription: `
### Backend (Express, MongoDB, SSE)

- Designed and implemented scalable APIs for threads, comments, replies, topics, and users with pagination and schema validation (Joi).
- Developed a unified voting system with atomic updates, transaction support, and vote score tracking.
- Built a real-time notification system using SSE with in-memory queuing; integrated basic WebSocket setup for chat prototype.
- Added RBAC and protected admin routes; optimized schemas and queries for performance.

### Frontend (React, Redux Toolkit, Tailwind)

- Built and optimized major pages (Home, Thread, Comments, Profile) with voting, commenting, and markdown rendering.
- Developed the Admin Dashboard from scratch with metrics, modmail layout, and user management.
- Modularized UI with reusable, responsive components and improved state handling using Redux Toolkit.
`,
    },
  ],
  volunteer: [
    {
      role: "Vice Chaiperson",
      duration: {
        start: "May 2024",
        end: "May 2025",
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
      desc: "Leading a college society of 100+ members, organize valuable events to enhance participants tech and soft skills.",
    },
    // {
    //   role: "Generative AI",
    //   duration: {
    //     start: "Oct, 2023",
    //     end: "Apr, 2023",
    //   },
    //   skills: [
    //     "python",
    //     "transformers",
    //     "stable diffusion",
    //     "text-to-image generation",
    //   ],
    //   company: "BVCOE, New Delhi",
    //   desc: "Conducted research on various text-to-image generation models, exploring their potential impact and applications across different fields.",
    // },
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
      desc: "Successfully organized hello a 5-day online AI/ML Bootcamp with a team of 8. Developed and led the team for a website for the hackathon Hack The Crisis 3.0 oraganized by BVP-ISTE",
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
  ],
};

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
    name: "TypeScript",
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
    name: "Next.js",
    img: "",
  },
  {
    name: "git",
    img: "",
  },
  {
    name: "github",
    img: "",
  },
  {
    name: "express",
    img: "",
  },
  {
    name: "mongodb",
    img: "",
  },
  {
    name: "jwt",
    img: "",
  },
  {
    name: "C/C++",
    img: "",
  },
  // {
  //   name: "Python",
  //   img: "",
  // },
  // {
  //   name: "numpy",
  //   img: "",
  // },
  // {
  //   name: "pandas",
  //   img: "",
  // },
  // {
  //   name: "matplotlib",
  //   img: "",
  // },
  // {
  //   name: "tensorflow",
  //   img: "",
  // },
];

const myProjects = [
  {
    id: "chal-chitra",
    name: "ChalChitra",
    duration: {
      start: "Jul 2024",
      end: "Jan 2025",
    },
    links: {
      github: "https://github.com/AdityaNath0777/ChalChitra",
    },
    tags: ["ReactJS", "typescript", "express", "mongodb", "jwt", "full-stack"],
    desc: "Developed a YouTube-Twitter hybrid platform with user authentication, content models, and robust error handling, integrating backend and frontend seamlessly using MERN Stack.",
  },
  {
    id: "prompt-nagar",
    name: "PromptNagar",
    duration: {
      start: "Nov 2024",
      end: "Dec 2024",
    },
    links: {
      github: "https://github.com/AdityaNath0777/next-js-tutorial/tree/main/prompt_nagar",
      website: "https://prompt-nagar.vercel.app/",
    },
    tags: ["Next.js", "next-auth", "OAuth", "full-stack"],
    desc: "Developed a web app using Next.js 14 that allows users to sign-in with Google OAuth and share helpful prompts. Implemented CRUD operations and a responsive user-friendly interface.",
  },
  // {
  //   name: "Redux Toolkit Todo",
  //   duration: {
  //     start: "July, 2024",
  //     end: "July, 2024",
  //   },
  //   links: {
  //     github:
  //       "https://github.com/AdityaNath0777/react-tutorial/tree/main/11_ReduxTookit_Todo",
  //   },
  //   tags: ["ReactJS", "Vite", "redux", "redux-toolkit", "tailwind CSS"],
  //   desc: "Developed a to-do web app using Vite and ReactJS, leveraging Redux Toolkit for state management. The web app allows users to add, remove, and update tasks efficiently.",
  // },
  // {
  //   name: "GammaSignal Predictor",
  //   duration: {
  //     start: "Feb 2024",
  //     end: "Feb 2024",
  //   },
  //   links: {
  //     github: "#",
  //   },
  //   tags: [
  //     "colab",
  //     "python",
  //     "numpy",
  //     "pandas",
  //     "matplotlib",
  //     "machine learning",
  //     "ML classification",
  //   ],
  //   desc: "A GammaSignal Predictor, utilizing a dataset to distinguish between gamma particles (signal) and hadrons (background). Employed various models to assess accuracy, enhancing the precision of particle classification in high-energy physics research.",
  // },
  // {
  //   name: "Todo Context Local",
  //   duration: {
  //     start: "Feb 2024",
  //     end: "Feb 2024",
  //   },
  //   links: {
  //     github:
  //       "https://github.com/AdityaNath0777/react-tutorial/tree/main/10todo_context_local",
  //   },
  //   tags: ["ReactJs", "Vite", "Tailwind CSS"],
  //   desc: "Built a React Todo app with the context API and client-side local storage persistence using the Vite framework.",
  // },
  // {
  //   name: "MedUnited",
  //   duration: {
  //     start: "July 2023",
  //     end: "July 2023",
  //   },
  //   links: {
  //     github: "https://github.com/AdityaNath0777/Ayushman-Bhavah",
  //   },
  //   tags: ["HTML", "CSS", "JavaScript", "tailwind CSS", "fetch API"],
  //   desc: "Developed MedUnited: a healthcare platform prototype with real-time hospital searches, facility data display, and an integrated online medicine shop, enhancing accessibility and convenience for users.",
  // },
  // {
  //   name: "Spotify Clone",
  //   duration: {
  //     start: "Feb 2023",
  //     end: "Mar 2023",
  //   },
  //   links: {
  //     github: "https://github.com/AdityaNath0777/Spotify-ka-Clone",
  //   },
  //   tags: ["HTML", "CSS", "JavaScript"],
  //   desc: "Developed a responsive Spotify clone webpage using HTML, CSS, and JavaScript, mirroring the latest UI.",
  // },
];

const top3WebDevProjects = [
  {
    id: "chal-chitra",
    name: "ChalChitra",
    duration: {
      start: "Jul 2024",
      end: "Jan 2025",
    },
    links: {
      github: "https://github.com/AdityaNath0777/ChalChitra",
    },
    tags: ["ReactJS", "typescript", "express", "mongodb", "jwt", "full-stack"],
    desc: "Developed a YouTube-Twitter hybrid platform with user authentication, content models, and robust error handling, integrating backend and frontend seamlessly using MERN Stack.",
  },
  {
    name: "PromptNagar",
    duration: {
      start: "Nov 2024",
      end: "Dec 2024",
    },
    links: {
      github: "https://github.com/AdityaNath0777/next-js-tutorial/tree/main/prompt_nagar",
      website: "https://prompt-nagar.vercel.app/",
    },
    tags: ["Next.js", "next-auth", "OAuth", "full-stack"],
    desc: "Developed a web app using Next.js 14 that allows users to sign-in with Google OAuth and share helpful prompts. Implemented CRUD operations and a responsive user-friendly interface.",
  },
  {
    name: "Redux Toolkit Todo",
    duration: {
      start: "July, 2024",
      end: "July, 2024",
    },
    tags: ["React JS", "Vite", "redux", "redux-toolkit", "tailwind CSS"],
    desc: "Developed a to-do web app using Vite and ReactJS, leveraging Redux Toolkit for state management. The web app allows users to add, remove, and update tasks efficiently.",
  },
  // {
  //   name: "Todo Context Local",
  //   duration: {
  //     start: "Feb 2024",
  //     end: "Feb 2024",
  //   },
  //   tags: ["React Js", "Vite", "Tailwind CSS"],
  //   desc: "Built a React Todo app with the context API and client-side local storage persistence using the Vite framework.",
  // },
  // {
  //   name: "MedUnited",
  //   duration: {
  //     start: "July 2023",
  //     end: "July 2023",
  //   },
  //   tags: ["HTML", "CSS", "JavaScript", "tailwind CSS", "fetch API"],
  //   desc: "Developed MedUnited: a healthcare platform prototype with real-time hospital searches, facility data display, and an integrated online medicine shop, enhancing accessibility and convenience for users.",
  // },
];

const education = [
  {
    courseName: "Bachelor of Technology",
    branch: "Electronics and Communication Enginnering",
    courseAbbr: "B. Tech",
    branchAbbr: "ECE",
    duration: {
      start: "Dec, 2021",
      end: "Jun, 2025",
      expectedEnd: false,
    },
    CGPA: "8.47",
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
    percentage: "90.6",
    institute: "GD Lancer's Public School, New Delhi",
  },
];

export {
  navLinks,
  Bio,
  experience,
  skills,
  myProjects,
  education,
  top3WebDevProjects,
};
