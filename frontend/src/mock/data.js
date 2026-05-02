// Mock data for portfolio - extracted from resume
// This will later move to backend for dynamic content

export const portfolioData = {
  profile: {
    name: "Yashraj Singh Chauhan",
    firstName: "Yashraj",
    lastName: "Chauhan",
    title: "Associate Software Developer",
    tagline: "Frontend engineer crafting scalable, performant interfaces with React, TypeScript & modern web tooling.",
    currentRole: "Associate Software Developer Intern @ Zenyus.ai",
    location: "Jaipur, Rajasthan, India",
    email: "yashrajsinghchauhan03@gmail.com",
    phone: "+91 76655 55027",
    linkedin: "https://linkedin.com/in/yashraj-chauhan-",
    github: "https://github.com/miikkuu",
    yearsExperience: "1+",
    availability: "Open to opportunities"
  },

  about: {
    summary:
      "I'm a Computer Science engineer with 1+ years of hands-on experience building production-grade frontend systems. My focus is on React, TypeScript, and Tailwind CSS — writing maintainable, performant UI that scales with real products.",
    paragraphs: [
      "I'm currently an Associate Software Developer Intern at Zenyus.ai — a Salesforce-focused consultancy — where I work across enterprise-grade interfaces and integrations. Before this, I shipped a production hotel booking platform at Ezulix and trained ML/GenAI models at Evoxify using PyTorch on Azure.",
      "I care about details: clean motion, typography, micro-interactions, and code that the next engineer actually wants to read. Outside work, I experiment with GSAP animations, 3D on the web, and the occasional side project."
    ],
    highlights: [
      { label: "Experience", value: "1+ yrs" },
      { label: "Projects Shipped", value: "8+" },
      { label: "Based in", value: "Jaipur, IN" },
      { label: "Focus", value: "Frontend / UI" }
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
      role: "Associate Software Developer Intern",
      type: "Salesforce Consultancy",
      location: "Remote / India",
      start: "2026",
      end: "Present",
      current: true,
      description:
        "Working on Salesforce-centric enterprise solutions — building UI components, integrations, and automation across the Salesforce ecosystem.",
      bullets: [
        "Developing Lightning Web Components and React-based admin consoles.",
        "Integrating Salesforce APIs with internal tooling and client workflows.",
        "Collaborating with senior consultants on enterprise delivery sprints.",
        "Writing reusable TypeScript modules for multi-tenant client setups."
      ],
      stack: ["Salesforce", "LWC", "React", "TypeScript", "REST APIs"]
    },
    {
      id: "exp-ezulix",
      company: "Ezulix Software Pvt Ltd",
      role: "Full Stack Developer (Intern)",
      type: "SaaS / Travel Tech",
      location: "Jaipur, India",
      start: "2025",
      end: "2026",
      current: false,
      description:
        "Built and shipped the production frontend for a full-stack hotel booking platform with user, host, and admin workflows.",
      bullets: [
        "Developed a production-grade hotel booking frontend in React + TypeScript.",
        "Implemented wallet transactions, commissions, and time-based earnings dashboards.",
        "Integrated REST APIs, payment gateways, and payout flows end-to-end.",
        "Built real-time chat between user and host, and OAuth sign-in (Google, Facebook)."
      ],
      stack: ["React", "TypeScript", "Tailwind CSS", "GSAP", "Postman"]
    },
    {
      id: "exp-evoxify",
      company: "Evoxify LLP",
      role: "Generative AI Intern",
      type: "AI / ML",
      location: "Jaipur, India",
      start: "Mar 2025",
      end: "Sep 2025",
      current: false,
      description:
        "Trained and deployed ML/GenAI workflows for client projects using PyTorch and Azure Cloud.",
      bullets: [
        "Worked with PyTorch and tensor-based model pipelines.",
        "Wrote production-level Python for data preprocessing and inference.",
        "Deployed workloads on Azure Cloud for client environments.",
        "Mentored by senior engineers on MLOps best practices."
      ],
      stack: ["Python", "PyTorch", "Azure", "GenAI"]
    }
  ],

  projects: [
    {
      id: "proj-spotstays",
      name: "Spot Stays",
      subtitle: "Production Hotel Booking Platform",
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
      link: null,
      github: null,
      featured: true
    },
    {
      id: "proj-portfolio",
      name: "Personal Portfolio v1",
      subtitle: "Animated Developer Portfolio",
      year: "2025",
      role: "Designer + Developer",
      description:
        "My first personal portfolio — fully responsive, animation-rich, and built to showcase all prior mini-projects under one roof.",
      features: [
        "GSAP-driven scroll animations",
        "Responsive grid across breakpoints",
        "Integrated project showcase",
        "Deployed on Vercel"
      ],
      stack: ["React", "Tailwind CSS", "GSAP", "HTML", "CSS"],
      link: "https://yashrajsinghchauhan.vercel.app/",
      github: "https://github.com/miikkuu",
      featured: true
    },
    {
      id: "proj-gsap",
      name: "GSAP Motion Demo",
      subtitle: "Interactive Animation Showcase",
      year: "2025",
      role: "Frontend Engineer",
      description:
        "A GSAP-first experimental site built to push interactive motion and scroll storytelling on the web.",
      features: [
        "ScrollTrigger timelines",
        "Canvas + DOM interplay",
        "Custom cursor states",
        "Fully responsive"
      ],
      stack: ["React", "Tailwind CSS", "GSAP"],
      link: null,
      github: "https://github.com/miikkuu",
      featured: false
    },
    {
      id: "proj-3d",
      name: "3D Landing Experiment",
      subtitle: "WebGL + GSAP Landing Page",
      year: "2024",
      role: "Frontend Engineer",
      description:
        "An experimental 3D-infused landing page blending WebGL scenes with traditional DOM content and scroll-synced animation.",
      features: [
        "WebGL hero scene",
        "Scroll-locked camera motion",
        "GPU-optimized shaders",
        "Fallback for low-end devices"
      ],
      stack: ["React", "Three.js", "GSAP"],
      link: null,
      github: "https://github.com/miikkuu",
      featured: false
    }
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
