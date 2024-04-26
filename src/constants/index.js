import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    reactjs,
    git,
    threejs,
    blender,
    rony,
    coderSchool,
    vulkan,
    rtx,
    bleed,
    cpp,
    kt,
    dna,
    gd,
    torch,
    tf,
    ue5,
    rust, python, ta_a,
    vercel,
    octocat,
    html,
    tailwind_logo,
    css_logo
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Experience",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Golfer",
        icon: web,
    },
    {
        title: "Student",
        icon: mobile,
    },
    {
        title: "Boy Scout",
        icon: backend,
    },
    {
        title: "Drummer",
        icon: creator,
    },
];

const technologies = [
    {
        name: "Python",
        icon: python,
    },
    {
        name: "Vercel",
        icon: vercel,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "octocat",
        icon: octocat,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "html",
        icon: html,
    },
    
    {
        name: " tailwind_logo",
        icon:  tailwind_logo,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "css",
        icon: css_logo
    }
];

const experiences = [
    {
        title: "The Rony Golf school",
        company_name: "The Rony Golf school ",
        icon: rony,
        iconBg: "#383E56",
        date: "Oct 2023",
        points: [
            "I enjoy golfing because it works on your hand eye cordination",

        ],
    },
    {
        title: "Texas amps and axes",
        company_name: "Texas apms and axes",
        icon: ta_a,
        iconBg: "#E6DEDD",
        date: "Dec 2023",
        points: [
            "I started druming at the \"texas apms and axes\"on december 2023.",
            "I'ved had 5 difrent drum teachers ",
            "My curntent teacher is MR**** "
        ],
    },
    {
        title: "CS Education",
        company_name: "The Coder School",
        icon: coderSchool,
        iconBg: "#142c69",
        date: " Present ",
        points: [
            "So far the coders school is amazing I have done a lot of projects including this website"
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "Vulkan Introduction",
        description:
            "Basic multi threaded vulkan renderer that supports both basic compute shaders and a basic pbr pipeline. This project expanded my C/C++ skills and helped me learn every step of GPU processing.",
        tags: [
            {
                name: "C/C++",
                color: "blue-text-gradient",
            },
            {
                name: "Vulkan",
                color: "green-text-gradient",
            },
            {
                name: "GLFW",
                color: "pink-text-gradient",
            },
        ],
        image: vulkan,
        source_code_link: "https://github.com/ccleavinger/VulkanIntro",
    },
    {
        name: "CPU Raytracing",
        description:
            "Multi threaded CPU raytracing following the The Cherno's youtube series. This project has taught me essentials for setting up C/C++ projects on Windows and writing performant CPU-driven code.",
        tags: [
            {
                name: "C/C++",
                color: "blue-text-gradient",
            },
            {
                name: "ImGUI",
                color: "green-text-gradient",
            },
            {
                name: "Premake",
                color: "pink-text-gradient",
            },
            {
                name: "Lua",
                color: "orange-text-gradient"
            },
        ],
        image: rtx,
        source_code_link: "https://github.com/ccleavinger/Raytracing",
    },
    {
        name: "Bleed OS",
        description:
            "A minimalist toy OS that is under-development. This massive project is teaching me the importance of project management, writing memory safe and performant code, and developing on linux.",
        tags: [
            {
                name: "x86 Assembly",
                color: "blue-text-gradient",
            },
            {
                name: "C/C++",
                color: "orange-text-gradient",
            },
            {
                name: "Linux",
                color: "green-text-gradient",
            },
            {
                name: "QEMU",
                color: "pink-text-gradient",
            },
        ],
        image: bleed,
        source_code_link: "https://github.com/ccleavinger/bleed",
    },
];

export { services, technologies, experiences, testimonials, projects };