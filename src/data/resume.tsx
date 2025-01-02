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
      title: "HackDavis",
      dates: "January 20th - 21st, 2018",
      location: "Davis, California",
      description:
        "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
      win: "Best Data Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/my6footprint",
        },
        {
          title: "ML",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/my6footprint-machine-learning",
        },
        {
          title: "iOS",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/CarbonWallet",
        },
        {
          title: "Server",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/wallet6-server",
        },
      ],
    },
    {
      title: "ETH Waterloo",
      dates: "October 13th - 15th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
      links: [
        {
          title: "Organization",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ethdocnet",
        },
      ],
    },
    {
      title: "Hack The North",
      dates: "September 15th - 17th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a virtual reality application allowing users to see themselves in third person.",
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
      title: "Hack The 6ix",
      dates: "August 26th - 27th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
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
      title: "Stupid Hack Toronto",
      dates: "July 23rd, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
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
    {
      title: "Global AI Hackathon - Toronto",
      dates: "June 23rd - 25th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/TinySamosas/",
        },
      ],
    },
    {
      title: "McGill AI for Social Innovation Hackathon",
      dates: "June 17th - 18th, 2017",
      location: "Montreal, Quebec",
      description:
        "Developed realtime facial microexpression analyzer using AI",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
      links: [],
    },
    {
      title: "Open Source Circular Economy Days Hackathon",
      dates: "June 10th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/genecis",
        },
      ],
    },
    {
      title: "Make School's Student App Competition 2017",
      dates: "May 19th - 21st, 2017",
      location: "International",
      description: "Improved PocketDoc and submitted to online competition",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
      win: "Top 10 Finalist | Honourable Mention",
      links: [
        {
          title: "Medium Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
        },
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "HackMining",
      dates: "May 12th - 14th, 2017",
      location: "Toronto, Ontario",
      description: "Developed neural network to optimize a mining process",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
      links: [],
    },
    {
      title: "Waterloo Equithon",
      dates: "May 5th - 7th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "SpaceApps Waterloo",
      dates: "April 28th - 30th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/earthwatch",
        },
      ],
    },
    {
      title: "MHacks 9",
      dates: "March 24th - 26th, 2017",
      location: "Ann Arbor, Michigan",
      description:
        "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/threejs-planes",
        },
      ],
    },
    {
      title: "StartHacks I",
      dates: "March 4th - 5th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
      win: "1st Place Winner",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-ionic",
        },
        {
          title: "Source (Server)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-rails",
        },
      ],
    },
    {
      title: "QHacks II",
      dates: "February 3rd - 5th, 2017",
      location: "Kingston, Ontario",
      description:
        "Developed a mobile game which enables city-wide manhunt with random lobbies",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/human-huntr-react-native",
        },
        {
          title: "Source (API)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/human-huntr-rails",
        },
      ],
    },
    {
      title: "Terrible Hacks V",
      dates: "November 26th, 2016",
      location: "Waterloo, Ontario",
      description:
        "Developed a mock of Windows 11 with interesting notifications and functionality",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
        },
      ],
    },
    {
      title: "Portal Hackathon",
      dates: "October 29, 2016",
      location: "Kingston, Ontario",
      description:
        "Developed an internal widget for uploading assignments using Waterloo's portal app",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/UWPortalSDK/crowmark",
        },
      ],
    },
  ],
} as const;
