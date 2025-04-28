const navLinks = [
  {
    name: "About Me",
    link: "#aboutme",
  },
  {
    name: "Projects",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
];

const words = [
  { text: "Software Engineer", imgPath: "/images/code.svg" },
  { text: "Full Stack Developer", imgPath: "/images/designs.svg" },
  { text: "AI Research Assistant", imgPath: "/images/concepts.svg" },
  { text: "Problem Solver", imgPath: "/images/ideas.svg" },
];

const counterItems = [
  { value: 1, suffix: "+", label: "Years of Experience" },
  { value: 10, suffix: "+", label: "Applications Deployed" },
  { value: 8, suffix: "+", label: "AI Models Deployed" },
  { value: 20, suffix: "+", label: "Completed Projects" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "Java",
    imgPath: "/images/logos/java.png",
  },
  {
    name: "Python",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "JavaScript",
    imgPath: "/images/logos/javascript.png",
  },
  {
    name: "TypeScript",
    imgPath: "/images/logos/typescript.png",
  },
  {
    name: "React",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Spring Boot",
    imgPath: "/images/logos/springboot.png",
  },
  {
    name: "NodeJS",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "MySQL",
    imgPath: "/images/logos/mysql.png",
  },
  {
    name: "MongoDB",
    imgPath: "/images/logos/mongodb.png",
  },
  {
    name: "AWS",
    imgPath: "/images/logos/aws.png",
  },
  {
    name: "Docker",
    imgPath: "/images/logos/docker.png",
  },
  {
    name: "Git",
    imgPath: "/images/logos/git.svg",
  },
  {
    name: "Tensorflow",
    imgPath: "/images/logos/tensorflow.png",
  },
];

const techStackIcons = [
  {
    name: "React",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Git",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

// const expCards = [
//   {
//     review:
//       "Adrian brought creativity and technical expertise to the team, significantly improving our frontend performance. His work has been invaluable in delivering faster experiences.",
//     imgPath: "/images/exp1.png",
//     logoPath: "/images/logo1.png",
//     title: "Frontend Developer",
//     date: "January 2023 - Present",
//     responsibilities: [
//       "Developed and maintained user-facing features for the Hostinger website.",
//       "Collaborated closely with UI/UX designers to ensure seamless user experiences.",
//       "Optimized web applications for maximum speed and scalability.",
//     ],
//   },
//   {
//     review:
//       "Adrian’s contributions to Docker's web applications have been outstanding. He approaches challenges with a problem-solving mindset.",
//     imgPath: "/images/exp2.png",
//     logoPath: "/images/logo2.png",
//     title: "Full Stack Developer",
//     date: "June 2020 - December 2023",
//     responsibilities: [
//       "Led the development of Docker's web applications, focusing on scalability.",
//       "Worked with backend engineers to integrate APIs seamlessly with the frontend.",
//       "Contributed to open-source projects that were used with the Docker ecosystem.",
//     ],
//   },
//   {
//     review:
//       "Adrian’s work on Appwrite’s mobile app brought a high level of quality and efficiency. He delivered solutions that enhanced our mobile experience & meet our product goals.",
//     imgPath: "/images/exp3.png",
//     logoPath: "/images/logo3.png",
//     title: "React Native Developer",
//     date: "March 2019 - May 2020",
//     responsibilities: [
//       "Built cross-platform mobile apps using React Native, integrating with Appwrite's backend services.",
//       "Improved app performance and user experience through code optimization and testing.",
//       "Coordinated with the product team to implement features based on feedback.",
//     ],
//   },
// ];

const expCards = [
  {
    companyName: "Kodak Alaris (Datrose)", // 👈 Added company name
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo.png",
    title: "Software Engineer",
    date: "August 2024 - Present",
    responsibilities: [
      "Developed and deployed custom Python and C++ models for facial expression detection, focusing on smile/no smile and mouth open/closed classification, using TensorFlow Lite.",
      "Designed a multi-input deep learning pipeline combining VGG16-based CNNs for image features and fully connected layers for 124-point facial landmark data, enhanced with an attention mechanism to improve classification accuracy.",
      "Applied optimization techniques including model quantization, pruning, learning rate scheduling, and early stopping, achieving 97.56% accuracy in mouth classification and 82.97% in smile detection with efficient real-time inference.",
    ],
  },
  {
    companyName: "SNCNext", // 👈 Added company name
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo.png",
    title: "Software Engineer Intern",
    date: "December 2022 - Jaunuary 2023",
    responsibilities: [
      "Built automated ETL pipelines in Azure Data Factory (ADF) with data flows to ingest, clean, and load 500K+ inventory records into Azure Blob Storage and a centralized data lake for analysis.",
      "Queried and transformed data using SQL to enable trend forecasting, inventory optimization, and predictive analytics.",
      "Built 7+ Power BI dashboards to visualize inventory trends, improving planning accuracy by 20%.",
      "Integrated pipeline orchestration and reporting to support real-time analytics and timely business insights.",
    ],
  },
  {
    companyName: "Sahu Technologies", // 👈 Added company name
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo.png",
    title: "Software Developer Intern",
    date: "June 2021 - July 2021",
    responsibilities: [
      "Contributed to developing client-facing features for an e-commerce platform using React.js, JavaScript, HTML, and CSS, enhancing customer support tools and enabling personalized recommendations for over 1,500 users.",
      "Assisted in building 6+ backend REST API endpoints using Java Spring Boot and Hibernate, supporting key modules like user authentication, product listings, order history, and payment processing.",
      "Leveraged AWS S3 for storing product-related assets and AWS EC2 for deploying backend services, ensuring scalable and cost-effective infrastructure management.",
      "Collaborated in configuring CI/CD pipelines with GitHub Actions, decreasing deployment time by 15% and improving code integration reliability across development and staging environments.",
      "Implemented responsive UI components that led to a 30% increase in average session duration, 20% boost in click-through rates, and a 15% improvement in customer retention.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  // {
  //   name: "insta",
  //   imgPath: "/images/insta.png",
  // },
  // {
  //   name: "fb",
  //   imgPath: "/images/fb.png",
  // },
  {
    name: "github",
    imgPath: "/images/github.png",
    link: "https://github.com/menon-abhinav",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    link: "https://www.linkedin.com/in/menon-abhinav/",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
