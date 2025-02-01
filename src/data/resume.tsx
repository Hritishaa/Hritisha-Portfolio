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
        "data:image/jpeg;base64,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",
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
        "data:image/jpeg;base64,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",
      links: [
        {
          title: "Organization",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://unstop.com/hackathons/flipkart-grid-60-software-development-track-flipkart-grid-60-flipkart-1024247",
        },
      ],
    },
    {
      title: "NationBuilding with Namo",
      dates: "January, 2025",
      location: "India",
      description:
        "Competed in the Nation Building with NaMo challenge, presenting tech-driven solutions for impactful governance and societal development.",
      image:
        "data:image/png;base64,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",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "View",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/htn2017",
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
        "data:image/png;base64,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",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
    },
    {
      title: "DSA",
      dates: "July 23rd, 2023",
      location: "Pune, India",
      description:
        "Achieved a Data Structures & Algorithms certification, demonstrating proficiency in optimized problem-solving and algorithmic efficiency.",
      image:
        "data:image/png;base64,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",
      links: [
        {
          title: "View",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://drive.google.com/file/d/1HpTHtgaXs1QfWXYl16Q7_SzloSTGh9JR/view?usp=sharing",
        },
      ],
    },
  ],
} as const;
