import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    sass,
    shopify,
    dbtwork,
    twwork,
    cwwork,
    threejs,
    idg,
    logo,
    wordpress,
    dbt,
    belay,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];

  const logos = [
    {
      name: "TC",
      icon: logo,
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "WordPress Developer",
      icon: mobile,
    },
    {
      title: "React Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
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
      name: "figma",
      icon: figma,
    },
    {
      name: "sass",
      icon: sass,
    },
    {
      name: "Shopify",
      icon: shopify,
    },
    {
      name: "WordPress",
      icon: wordpress,
    },
  ];
  
  const experiences = [
    {
      title: "Frontend Developer",
      company_name: "IDG",
      icon: idg,
      iconBg: "#383E56",
      date: "June 2009 - March 2020",
      points: [
        "Led frontend development initiatives for significant projects such as Computerworld’s Best Places to Work, Salary Survey, and CIO-100.",
        "Pioneered the development of custom HTML email templates and executed Solution Center Marketing Campaigns using Liquid Ruby code.",
        "Managed the maintenance and introduction of new features across the IDG US suite of sites, including Computerworld, Macworld, PC World, and others.",
        "Offered expertise in frontend development for medium to large-scale projects.",
      ],
    },
    {
      title: "WordPress Developer",
      company_name: "Contractor",
      icon: logo,
      iconBg: "#E6DEDD",
      date: "Jan 2015 - Present",
      points: [
        "Designing and Developing WordPress themes and plugins.",
        "Daily security checks or plugin updates.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Frontend Engineer",
      company_name: "dbt Labs",
      icon: dbt,
      iconBg: "#383E56",
      date: "June 2021 - November 2023",
      points: [
        "Implemented responsive design using Flexbox and CSS Grid, adhering to semantic HTML and CSS best practices.",
        "Took projects from scoping requirements, through development and testing, to the actual project launch.",
        "Deployed projects utilizing GIT source control.",
        "Scoped, estimated, communicated, and tracked project progress in coordination with the project management team.",
        "Constructed page templates using Liquid code, CSS, and Javascript.",
      ],
    },
    {
      title: "Website Specialist",
      company_name: "BELAY",
      icon: belay,
      iconBg: "#E6DEDD",
      date: "June 2022 - Present",
      points: [
        "Update client websites content in conjunction with client requests via marketing calendars or plans.",
        "Regularly audit and test websites to ensure optimal efficiency, navigational integrity, as well as page and link content accuracy.",
        "Track and prioritizing website bugs and enhancements through completion.",
        "Ensure websites are secure and user data is safeguarded.",
        "Interact with clients and the corporate team virtually in a fast-paced environment.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I've always appreciated Trever's patience and willingness to tirelessly work to meet exacting requirements of any task he takes on. I had the pleasure of working with him in his front-end development role at IDG for the the better part of a decade (directly reporting to me for the past 5 years). He takes an immense amount of pride and ownership in his work no matter how big or small the task, and is always eager to take on new challenges to improve his skills. Trever's positive attitude and strong front-end development skills would be a wonderful addition to any team.",
      name: "Valerie D'Aquila",
      designation: "Manager, Frontend Developer",
      company: "IDG",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "Simply put, Trever is one of the steadiest, most reliable people I've worked with. I related well to him because we both shifted into web development careers after starting out in unrelated fields, so it really stood out to me how much knowledge and creativity he demonstrated so many times over the years that we worked together. But perhaps most of all, I always respected how diligently he tackled every task with a determination to get it done right, and how willingly he took on anything that came his way. Trever epitomizes the kind of person I want to have as a teammate.",
      name: "Dave Gradijan",
      designation: "Frontend Developer",
      company: "IDG",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "I worked with Trever at IDG since my day one at the company, ten years ago. He was always a pleasure to work with -- easy-going, eager to learn new stuff, and a fast learner, to boot. His HTML, CSS, and JS skills are top-notch, and you could always trust him to get you what you needed when you were working together on a project.",
      name: "Lise Fracalossi",
      designation: "Senior Frontend Developer",
      company: "IDG",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "dbt Labs",
      description:
        "dbt Labs is on a mission to empower data practitioners to create and disseminate organizational knowledge. Having pioneered the practice of analytics engineering, we're now fortunate to support a community of over 25,000 data practitioners committed to changing how data teams work together.",
      tags: [
        {
          name: "liquid",
          color: "blue-text-gradient",
        },
        {
          name: "bootstrap",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: dbtwork,
      source_code_link: "https://dbtlabs.com/",
    },
    {
      name: "Tom Williams Rebuild",
      description:
        "Tom Williams Residential's website underwent a complete redesign and rebuild using WordPress, with the primary objective of showcasing Tom Williams' exceptional work. The new design encompasses the entire site and provide an enhanced user experience.",
      tags: [
        {
          name: "wordpress",
          color: "blue-text-gradient",
        },
        {
          name: "php",
          color: "green-text-gradient",
        },
        {
          name: "figma",
          color: "pink-text-gradient",
        },
      ],
      image: twwork,
      source_code_link: "https://tomwilliamsresidential.com/",
    },
    {
      name: "Computerworld",
      description:
        "Computerworld is an ongoing decades old professional publication which in 2014 went digital. Its audience is information technology and business technology professionals, and is available via a publication website and as a digital magazine.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "scss",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: cwwork,
      source_code_link: "https://computerworld.com/",
    },
  ];
  
  export { logos, services, technologies, experiences, testimonials, projects };
