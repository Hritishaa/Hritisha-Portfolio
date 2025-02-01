import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Hritisha Sahota",
  initials: "HS",
  url: "https://dillion.io",
  location: "Noida, India",
  locationLink: "https://maps.app.goo.gl/z54BJJCRs2WBzbNk9",
  description:
    "Creative mind with a passion for building connections and solving problems. DSA enthusiast, always exploring new ways to innovate and inspire!",
  summary:
    "Placement Coordinator for my batch at Bennett University, where I’m a third-year CSE student. I love connecting with new people and building meaningful relationships. A passionate dancer and piano enthusiast, I find joy in rhythm and melodies. Cooking is my creative escape, where I whip up delicious dishes. Balancing academics and hobbies, I’m always looking for ways to grow and inspire!",
  avatarUrl: "/pro.jpeg",
  skills: [
    "DSA",
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Go",
    "Docker",
    "Java",
    "C++",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "hritisha.11@gmail.com",
    tel: "+91 9922931525",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Hritishaa",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/hritishasahota/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://dub.sh/dillion-twitter",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://dub.sh/dillion-youtube",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "hritisha.11@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Placement Committee",
      href: "https://www.linkedin.com/company/career-services-center-bennett-university/mycompany/",
      badges: [],
      location: "Greater Noida",
      title: "Co-lead",
      logoUrl: "/pro4.png",
      start: "August 2023",
      end: "Current",
      description:
        "As the Co-Lead of the Placement Committee at Bennett University, I play a key role in connecting students with recruiters. I manage placement drives, coordinate with companies to create hiring opportunities, and ensure smooth communication between students and recruiters. I also guide my peers in interview preparation and help organize training sessions to enhance their employability skills.",
    },
    {
      company: "Skillarena",
      badges: [],
      href: "https://skillarena.in",
      location: "Remote",
      title: "Technical Sales",
      logoUrl: "/pro5.png",
      start: "June 2024",
      end: "July 2024",
      description:
        "As a Technical Sales Intern at Skillarena, I focused on bridging the gap between technology and client needs. My role involved understanding client requirements, presenting tailored technical solutions, and effectively demonstrating the value of Skillarena's products and services. I also collaborated with the sales and technical teams to strategize and drive conversions, honing my skills in communication, problem-solving, and client relationship management.",
    },
    {
      company: "Student Cabinet",
      href: "https://www.linkedin.com/company/scset-student-cabinet-bennett-university/?originalSubdomain=in",
      badges: [],
      location: "Greater Noida, India",
      title: "Minister of Alumni Relations",
      logoUrl: "/pro6.png",
      start: "September 2023",
      end: "May 2024",
      description:
        "As the Minister of Alumni Relations in the Student Cabinet at Bennett University, I served as a bridge between the alumni community and current students. My role involved organizing alumni engagement programs, networking events, and mentorship opportunities to foster meaningful connections. I collaborated with alumni to bring valuable insights and experiences to students while ensuring the alumni remained closely connected to the university. Through this position, I enhanced my leadership, event management, and communication skills.",
    },
  ],
  education: [
    {
      school: "Bennett University",
      href: "https://www.bennett.edu.in",
      degree: "BTech - CSE",
      logoUrl: "/pro1.png",
      start: "2022",
      end: "2026",
    },
    {
      school: "Delhi Public School",
      href: "https://dpsgrnoida.in/dpsgrnoida/default.asp",
      degree: "Non-Medical",
      logoUrl: "/pro2.png",
      start: "2019",
      end: "2021",
    },
    {
      school: "Blue Ridge Public School",
      href: "http://www.blueridgepublicschool.com",
      degree: "School",
      logoUrl: "/pro3.png",
      start: "2011",
      end: "2019",
    },
  ],
  projects: [
    {
      title: "MoodSync",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - May 2024",
      active: true,
      description:
        "MoodSync is a live AI-powered website that employs Convolutional Neural Networks (CNN) to detect and display user emotions.",
      technologies: [
        "React Native",
        "TensorFlow Lite",
        "Firebase",
        "Emotion Recognition API",
        "Redux",
        "Node.js",
        "Express",
        "SQLite",
        "Axios",
        "Chart.js",
      ],
      links: [
        {
          type: "Github",
          href: "https://github.com/Hritishaa/MoodSync",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://cdn.pixabay.com/video/2023/10/25/186405-877993676_small.mp4?download",
    },
    {
      title: "Sum Art AI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Sum Art AI is a sophisticated GitHub project that leverages advanced AI to deliver elegant and concise article summaries, making it an essential tool for discerning software enthusiasts.",
      technologies: [
        "Next.js",
        "TypeScript",
        "OpenAI API",
        "TensorFlow",
        "Natural Language Processing (NLP)",
        "MongoDB",
        "TailwindCSS",
        "Vercel",
        "Axios",
        "Chart.js",
      ],
      
      image: "",
      video: "https://cdn.pixabay.com/video/2016/09/21/5398-183786939_small.mp4?download",
    },
    {
      title: "Satellite Image Classification",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        " This innovative project employs advanced algorithms to accurately analyze and classify satellite imagery, providing valuable insights for geospatial applications.",
      technologies: [
        "TensorFlow",
        "PyTorch",
        "OpenCV",
        "scikit-image",
        "ENVI",
        "ERDAS Imagine",
        "Google Earth Engine",
        "GDAL",
        "Folium",
        "Matplotlib",
      ],
      links: [
        {
          type: "Github",
          href: "https://github.com/anuj1o0/Satellite-image-classification",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.pixabay.com/video/2024/06/16/216987_small.mp4?download",
    },
    {
      title: "Portfolio",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "My portfolio showcases a diverse range of projects that highlight my skills and expertise in software development, data analysis, and innovative problem-solving.",
      technologies: [
        "Git",
        "GitHub",
        "React",
        "Node.js",
        "Express",
        "PostgreSQL",
        "MongoDB",
        "Docker",
        "Jest",
        "AWS",
      ],
      links: [
        {
          type: "Github",
          href: "https://github.com/Hritishaa/Hritisha-Portfolio",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://cdn.pixabay.com/video/2020/04/25/37106-413256452_small.mp4?download",
    },
  ],
  hackathons: [
    {
      title: "Algorithmic Toolbox",
      dates: "May 2024",
      location: "San Diego",
      description:
        "Implement efficient and reliable solutions",
      image:
        "/certificate1.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "University System of Georgia",
      dates: "June 2024",
      location: "Georgia",
      description:
        "Identify the practices, tools, and methodologies associated with assessing network security",
      image:
        "/certificate2.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Google Girl Hackathon",
      dates: "April 2024",
      location: "Greater Noida, India",
      description:
        "It has been designed to provide a platform for women in the engineering campus space to showcase their coding skills and promote creative solutions for real time technical challenges.",
      icon: "public",
      image:
        "/googlehackathon.png",
      links: [],
    },
    {
      title: "Certified Ethical Hacker",
      dates: "January 2025",
      location: "Indiaa",
      description:
        "Earned the Certified Ethical Hacker (CEH) certification by mastering advanced cybersecurity techniques, ethical hacking methodologies, and rigorous hands-on penetration testing.",
      image:
        "/Users/hritisha1/Desktop/dillionverma-portfolio-bb8dd0a/public/CEH.png",
      win: "Best Data Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      links: [
        {
          title: "Link",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://drive.google.com/file/d/1U_oJ6Hz3GN6qH5SrJ7GQluHqtaoFZHf9/view?usp=sharing",
        },
      ],
    },
    {
      title: "Flipkart Grid",
      dates: "August 2024",
      location: "India",
      description:
        "Participated in Flipkart Grid, tackling real-world industry challenges through innovative problem-solving and technical excellence.",
      image:
        "/Users/hritisha1/Desktop/dillionverma-portfolio-bb8dd0a/public/GRID.png",
      links: [
        {
          title: "Organization",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ethdocnet",
        },
      ],
    },
    {
      title: "NationBuilding with Namo",
      dates: "September 15th - 17th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Competed in the Nation Building with NaMo challenge, presenting tech-driven solutions for impactful governance and societal development.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Streamer Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/htn2017",
        },
        {
          title: "Client Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/RTSPClient",
        },
      ],
    },
    {
      title: "IBM Badge",
      dates: "August 26th - 27th, 2017",
      location: "Toronto, Ontario",
      description:
        "Earned the IBM Machine Learning with Python badge by mastering ML algorithms, model training, and data-driven insights.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ShareShip/ShareShip",
        },
        {
          title: "Site",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://share-ship.herokuapp.com/",
        },
      ],
    },
    {
      title: "DSA",
      dates: "July 23rd, 2017",
      location: "Toronto, Ontario",
      description:
        "Achieved a Data Structures & Algorithms certification, demonstrating proficiency in optimized problem-solving and algorithmic efficiency.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/nsagirlfriend/nsagirlfriend",
        },
      ],
    },
  ],
} as const;
