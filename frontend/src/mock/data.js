// Mock data for portfolio - extracted from resume
// This will later move to backend for dynamic content

export const portfolioData = {
  profile: {
    name: "Yashraj Singh Chauhan",
    firstName: "Yashraj",
    lastName: "Chauhan",
    title: "Associate Software Developer",
    tagline: "Salesforce developer + frontend engineer crafting enterprise-grade apps, automations and integrations across the Salesforce ecosystem.",
    currentRole: "Associate Software Developer @ Zenyus.ai · Salesforce",
    location: "Jaipur, Rajasthan, India",
    email: "yashrajsinghchauhan03@gmail.com",
    phone: "+91 76655 55027",
    linkedin: "https://linkedin.com/in/yashraj-chauhan-",
    github: "https://github.com/Yashraj2204",
    yearsExperience: "1+",
    availability: "Open to opportunities"
  },

  about: {
    summary:
      "Hey! I'm a developer building smart Salesforce tools with Apex, LWC, and Agentforce — saving people hours of boring manual work. Let's build something useful and actually have fun doing it.",
    paragraphs: [
      "I'm currently an Associate Software Developer at Zenyus.ai — a Salesforce Consulting Partner — where I build enterprise apps, automations and integrations on the Salesforce platform (LWC, Apex, Sales Cloud & Service Cloud). Before this, I shipped a production hotel booking platform at Ezulix.",
      "I care about details, clean motion, typography, micro-interactions, and code that the next engineer actually wants to read. Outside work, I experiment with GSAP animations, 3D on the web, and the occasional side project."
    ],
    highlights: [
      { label: "Experience", value: "1+ yrs" },
      { label: "Projects Shipped", value: "2+" },
      { label: "Based in", value: "Jaipur, IN" },
      { label: "Focus", value: "Frontend / Salesforce Platform Development" }
    ]
  },

  skills: {
    categories: [
      {
        name: "Languages",
        items: ["TypeScript", "JavaScript", "Python", "SQL", "HTML", "CSS"]
      },
      {
        name: "Frameworks & Libraries",
        items: ["React.js", "Next.js", "Tailwind CSS", "GSAP", "Framer Motion"]
      },
      {
        name: "Tools & Platforms",
        items: ["Git", "GitHub Actions", "Postman", "Vercel", "Figma"]
      },
      {
        name: "Auth & Integrations",
        items: ["JWT", "OAuth 2.0", "REST APIs", "Payment Gateways", "Salesforce"]
      },
      {
        name: "AI / Cloud",
        items: ["PyTorch", "TensorFlow", "Azure Cloud", "Generative AI"]
      },
      {
        name: "Practices",
        items: ["Component Architecture", "Responsive Design", "Accessibility", "Code Review"]
      }
    ]
  },

  experience: [
    {
      id: "exp-zenyus",
      company: "Zenyus.ai",
      role: "Associate Software Developer",
      type: "Salesforce Consulting Partner",
      location: "Remote / Australia",
      start: "05-2026",
      end: "Present",
      current: true,
      description:
        "Building Salesforce-centric enterprise solutions — designing custom applications, automations, and integrations across Sales Cloud, Service Cloud, and Experience Cloud for global B2B clients.",
      bullets: [
        "Developing Lightning Web Components (LWC) and Aura components for client-facing admin consoles and customer portals.",
        "Writing Apex classes, triggers and test coverage (>85%) for business-critical Salesforce automations.",
        "Building custom REST integrations between Salesforce and third-party systems using Named Credentials and OAuth flows.",
        "Configuring Salesforce Flows, Process Builder and Validation Rules to replace manual ops with declarative automation.",
        "Crafting performant SOQL / SOSL queries and Lightning Data Service bindings for high-traffic record views.",
        "Collaborating with solution architects on multi-tenant deployments via Salesforce DX and GitHub Actions CI/CD."
      ],
      stack: ["Salesforce", "Apex", "LWC", "SOQL", "Sales Cloud", "Service Cloud", "REST APIs", "Git"]
    },
    {
      id: "exp-ezulix",
      company: "Ezulix Software Pvt Ltd",
      role: "Full Stack Developer (Intern)",
      type: "Web / App Development",
      location: "Jaipur, India",
      start: "01-2026",
      end: "05-2026",
      current: false,
      description:
        "Built and shipped the production frontend for a full-stack hotel booking platform with user, host, and admin workflows.",
      bullets: [
        "Developed a production-grade hotel booking frontend in React + TypeScript.",
        "Implemented wallet transactions, commissions, and time-based earnings dashboards.",
        "Integrated REST APIs, payment gateways, and payout flows end-to-end.",
        "Built real-time chat between user and host, and OAuth sign-in (Google, Facebook)."
      ],
      stack: ["React", "TypeScript", "Tailwind CSS", "GSAP", "Postman","HTML","Git","OAuth"]
    },
    // {
    //   id: "exp-evoxify",
    //   company: "Evoxify LLP",
    //   role: "Generative AI Intern",
    //   type: "AI / ML",
    //   location: "Jaipur, India",
    //   start: "Mar 2025",
    //   end: "Sep 2025",
    //   current: false,
    //   description:
    //     "Trained and deployed ML/GenAI workflows for client projects using PyTorch and Azure Cloud.",
    //   bullets: [
    //     "Worked with PyTorch and tensor-based model pipelines.",
    //     "Wrote production-level Python for data preprocessing and inference.",
    //     "Deployed workloads on Azure Cloud for client environments.",
    //     "Mentored by senior engineers on MLOps best practices."
    //   ],
    //   stack: ["Python", "PyTorch", "Azure", "GenAI"]
    // }
  ],

  projects: [
    {
      id: "proj-spotstays",
      name: "Spot Stays",
      subtitle: "Production Hotel Booking Platform",
      image: "/SpotStay.jpeg",
      year: "2025",
      role: "Frontend Engineer",
      description:
        "End-to-end hotel booking platform with user, host and admin portals. Built wallet system with commissions and time-based earnings, real-time chat, and multi-provider OAuth.",
      features: [
        "Wallet + commission engine",
        "Real-time user ↔ host chat",
        "Payment + payout gateways",
        "Google & Facebook OAuth"
      ],
      stack: ["TypeScript", "React", "Tailwind CSS", "Postman"],
      link: "https://spotstays.ezulix.co/#/",
      github: null,
      featured: true
    },
    {
      id: "proj-portfolio",
      name: "GSAP Motion Demo",
      subtitle: "Interactive Animation Showcase",
      image: "/car.jpeg",
      year: "2025",
      role: "Designer + Developer",
      description:
        "A GSAP-first experimental site built to push interactive motion and scroll storytelling on the web.",
      features: [
        "ScrollTrigger timelines",
        "Canvas + DOM interplay",
        "Custom cursor states",
        "Fully responsive"
      ],
      stack: ["React", "Tailwind CSS", "GSAP", "HTML", "CSS"],
      link: "https://alphaysc.vercel.app/",
      github: "https://github.com/Yashraj2204",
      featured: true
    },
    // {
    //   id: "proj-gsap",
    //   name: "GSAP Motion Demo",
    //   subtitle: "Interactive Animation Showcase",
    //   year: "2025",
    //   role: "Frontend Engineer",
    //   description:
    //     "A GSAP-first experimental site built to push interactive motion and scroll storytelling on the web.",
    //   features: [
    //     "ScrollTrigger timelines",
    //     "Canvas + DOM interplay",
    //     "Custom cursor states",
    //     "Fully responsive"
    //   ],
    //   stack: ["React", "Tailwind CSS", "GSAP"],
    //   link: null,
    //   github: "https://github.com/miikkuu",
    //   featured: false
    // },
    // {
    //   id: "proj-3d",
    //   name: "3D Landing Experiment",
    //   subtitle: "WebGL + GSAP Landing Page",
    //   year: "2024",
    //   role: "Frontend Engineer",
    //   description:
    //     "An experimental 3D-infused landing page blending WebGL scenes with traditional DOM content and scroll-synced animation.",
    //   features: [
    //     "WebGL hero scene",
    //     "Scroll-locked camera motion",
    //     "GPU-optimized shaders",
    //     "Fallback for low-end devices"
    //   ],
    //   stack: ["React", "Three.js", "GSAP"],
    //   link: null,
    //   github: "https://github.com/miikkuu",
    //   featured: false
    // }
  ],

  education: [
    {
      id: "edu-jecrc",
      school: "JECRC University",
      degree: "Bachelor of Engineering, Computer Science",
      location: "Jaipur, India",
      start: "2022",
      end: "2026",
      notes: "Focus on software engineering, data structures, and applied AI coursework."
    }
  ],

  navigation: [
    { label: "About", href: "#about", num: "01" },
    { label: "Skills", href: "#skills", num: "02" },
    { label: "Experience", href: "#experience", num: "03" },
    { label: "Work", href: "#work", num: "04" },
    { label: "Contact", href: "#contact", num: "05" }
  ]
};

export default portfolioData;
