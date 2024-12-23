import {
    FaReact,
    FaHtml5,
    FaCss3Alt,
    FaJsSquare,
    FaTwitter,
    FaGithub,
    FaLinkedin,
    FaInstagram,
  } from "react-icons/fa";
  import { SiTailwindcss, SiFramer } from "react-icons/si";
  
  import projectImage2 from "../../public/assets/project2.jpeg";
  import projectImage3 from "../../public/assets/project3.jpeg";
  import projectImage4 from "../../public/assets/project4.jpeg";
  import projectImage1 from "../../public/assets/project1.jpeg";
  import projectImage5 from "../../public/assets/project5.jpeg";
  import projectImage6 from "../../public/assets/project6.jpeg";
  
  export const NAVIGATION_LINKS = [
    { label: "Projects", href: "#projects" },
    { label: "Bio", href: "#bio" },
    { label: "Skills", href: "#skills" },
    { label: "Work Experience", href: "#work" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ];
  
  export const HERO = {
    name: "MUZAMMIL ASHFAQ KAHLOON",
    greet: "Hello there! 👋🏻",
    description:
      "I am a dedicated frontend developer with a strong passion for crafting responsive and visually appealing user interfaces. With hands-on experience in HTML, CSS, JavaScript, React, Tailwind CSS, and Framer Motion, I specialize in bringing ideas to life through innovative web solutions.",
  };
  
  export const PROJECTS = [
    {
      id: 1,
      name: "Client Portfolio",
      description:
        "A client portfolio website built with React and Tailwind CSS to showcase my skills, projects, and contact information.",
      image: projectImage1,
      githubLink: "https://github.com/MuzamilKahloon/Ben-portfolio",
    },
    {
      id: 2,
      name: "Fully Responsive Landing page",
      description:
        "A landing page developed using React.js and Tailwind fully responsive.",
      image: projectImage2,
      githubLink: "https://github.com/MuzamilKahloon/centraD",
    },
    {
      id: 3,
      name: "FinLoan",
      description:
        "A theme page of FinLoan website which is basically used to apply for the Loan",
      image: projectImage3,
      githubLink: "https://github.com/MuzamilKahloon/Loan",
    },
    {
      id: 4,
      name: "Hepta",
      description:
        "A tour booking website which show all the features that contain in it and it made with the React.js and tailwind",
      image: projectImage4,
      githubLink: "https://github.com/MuzamilKahloon/Hepta",
    },
    {
      id: 5,
      name: "avo",
      description:
        "This is themepage from themeshiffer developed with react.js and tailwind, more about this website its fully responsive website",
      image: projectImage5,
      githubLink: "https://github.com/MuzamilKahloon/avo",
    },
    {
      id: 6,
      name: "my-shoe",
      description: "Landing page built with the React.js and css ",
      image: projectImage6,
      githubLink: "https://github.com/MuzamilKahloon/myshoe-app",
    },
  ];
  
  export const BIO = [
    "Muzammil Ashfaq Kahlon graduated in 2025 with a Bachelor's degree in Software Engineering. Currently, he is a skilled Front-End Web Developer with over 1.5 years of hands-on experience. Muzammil honed his expertise through two impactful internships: the first at Web Hunters, Lahore, and the second at Ezitech.",
    "With a strong foundation in modern web technologies, Muzammil specializes in creating responsive and dynamic user interfaces using HTML, CSS, JavaScript, React, Tailwind CSS, and Framer Motion. His dedication to innovation and attention to detail enable him to deliver visually compelling and highly functional web experiences.",
  ];
  
  export const SKILLS = [
    {
      icon: <FaReact className="text-4xl text-cyan-400 lg:text-5xl" />,
      name: "React",
      experience: "7+ months",
    },
    {
      icon: <FaHtml5 className="text-4xl text-orange-500 lg:text-5xl" />,
      name: "HTML",
      experience: "1.5+ years",
    },
    {
      icon: <FaCss3Alt className="text-4xl text-blue-500 lg:text-5xl" />,
      name: "CSS",
      experience: "1.5+ years",
    },
    {
      icon: <FaJsSquare className="text-4xl text-yellow-500 lg:text-5xl" />,
      name: "JavaScript",
      experience: "1.5+ years",
    },
    {
      icon: <SiTailwindcss className="text-4xl text-cyan-400 lg:text-5xl" />,
      name: "Tailwind CSS",
      experience: "7+ months",
    },
    {
      icon: <SiFramer className="text-4xl text-purple-500 lg:text-5xl" />,
      name: "Framer Motion",
      experience: "7+ months",
    },
  ];
  
  export const EXPERIENCES = [
    {
      title: "Frontend Developer Intern",
      company: "Web Hunters, Lahore",
      duration: "June 2023 - November 2023",
      description:
        "During my internship at Web Hunters, I contributed to developing responsive web applications using HTML, CSS, and JavaScript. I collaborated with designers and senior developers to implement user-friendly interfaces and optimize web performance. This experience enhanced my understanding of frontend development and introduced me to best practices in coding and design.",
    },
    {
      title: "Frontend Developer Intern",
      company: "Ezitech",
      duration: "August 2024 - December 2024",
      description:
        "At Ezitech, I worked on real-world projects, focusing on creating dynamic and visually appealing user interfaces with React and Tailwind CSS. I collaborated with cross-functional teams to deliver high-quality applications while leveraging modern tools and frameworks like Framer Motion to enhance user interactions. This role further solidified my expertise in frontend development.",
    },
  ];
  
  export const EDUCATION = [
    {
      degree: "Bachelor of Science in Software Engineering",
      institution: "PMAS Arid Agriculture University, Rawalpindi",
      duration: "September 2021 - June 2025",
      description:
        "Focused on software development, web technologies, and programming principles. Gained practical experience through internships and academic projects, specializing in frontend development using HTML, CSS, JavaScript, React, Tailwind CSS, and Framer Motion. Participated in university tech events and workshops, further honing my skills in building dynamic and user-friendly web applications.",
    },
  ];
  
  export const SOCIAL_MEDIA_LINKS = [
    {
      href: "https://www.instagram.com/muzammil_kahloon07/",
      icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
    },
    {
      href: "https://twitter.com/MuzammilKahloon/",
      icon: <FaTwitter fontSize={25} className="hover:opacity-80" />,
    },
    {
      href: "https://github.com/MuzamilKahloon",
      icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
    },
    {
      href: "https://www.linkedin.com/in/muzammil-ashfaq-kahloon-2193ba275/",
      icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
    },
  ];
  