import React, { useState } from "react";
import { Icon } from "@iconify/react";

const education = [
  {
    year: "2020 - 2024",
    title: "Bachelor of Informatics Engineering",
    institution: "Universitas Islam Nusantara",
    location: "Bandung, Indonesia",
    icon: "mdi:school-outline",
    description: [
      "GPA: 3.81/4.00",
      "Learned programming fundamentals, SDLC, OS, and data structures.",
    ],
  },
  {
    year: "Aug 2022 - Dec 2022",
    title: "Frontend Development Program",
    institution: "Ruang Guru (Kampus Merdeka)",
    location: "Remote",
    icon: "mdi:laptop",
    description: [
      "Learned API integration, React.js, TailwindCSS, and Git collaboration.",
    ],
  },
];

const experience = [
  {
    year: "Feb 2023 - Jun 2023",
    title: "Frontend Developer",
    institution: "PT Menara Indonesia",
    location: "Indonesia",
    icon: "mdi:code-tags",
    description: [
      "Developed e-learning platforms using React.js",
      "Built LMS features and internal dashboards",
      "Collaborated in an Agile environment for UI development",
    ],
  },
  {
    year: "Sep 2023 - Dec 2023",
    title: "QA Engineer & Frontend Developer",
    institution: "PT Supernova",
    location: "Indonesia",
    icon: "mdi:bug-check-outline",
    description: [
      "Tested websites manually and performed UI/UX debugging",
      "Revamped the landing page using React.js & TailwindCSS",
      "Practiced Scrum: backlog grooming, sprint planning, retrospective",
    ],
  },
  {
    year: "Sep 2023 - Feb 2024",
    title: "QA Manual Engineer",
    institution: "PSU Dev Team",
    location: "Indonesia",
    icon: "mdi:clipboard-check-outline",
    description: [
      "Created test cases and scenarios based on requirements",
      "Performed API testing using Postman",
      "Documented UAT and collaborated with dev team for bug fixing",
    ],
  },
  {
    year: "Apr 2024 - Mar 2025",
    title: "QA Manual & Data Analyst IT",
    institution: "Grobmedia (PT Sinar Maju)",
    location: "Indonesia",
    icon: "mdi:database-search-outline",
    description: [
      "Performed manual testing on internal web apps",
      "Validated database using SQL, supported debugging in JIRA",
      "Led weekly testing reports and managed bug tracking",
    ],
  },
];

const skills = [
  "Manual Testing: Test Cases, Bug Tracking, Exploratory Testing",
  "API Testing: Postman, REST API Validation",
  "Database & CI/CD: Basic SQL, Git, GitHub Actions",
  "Frontend Development: React.js, TailwindCSS",
];

export default function PortfolioRoadmap() {
  const [activeTab, setActiveTab] = useState("qa");

  const frontendProjects = [
    {
      img: "/porto1.png",
      alt: "Frontend Project 1",
      link: "https://apotekqyu.netlify.app/",
    },
    {
      img: "/porto2.png",
      alt: "Frontend Project 2",
      link: "https://invitation-birthday-aurora.netlify.app/",
    },
    {
      img: "/porto3.png",
      alt: "Frontend Project 3",
      link: "https://vegetamart.netlify.app/",
    },
    {
      img: "/porto.png",
      alt: "Frontend Project 4",
      link: "https://simple-funny-webapp.netlify.app/",
    },
  ];

  const qaProjects = [
    { img: "/qa1.png", alt: "QA Project 1" },
    { img: "/qa2.png", alt: "QA Project 2" },
    { img: "/qa3.png", alt: "QA Project 3" },
    { img: "/qa4.png", alt: "QA Project 4" },
    { img: "/qa5.png", alt: "QA Project 5" },
    { img: "/qa6.png", alt: "QA Project 6" },
  ];
  return (
    <div className="min-h-screen bg-gray-900 text-white px-4 sm:px-6 md:px-12 py-8 space-y-16">
      <h1 className="text-4xl font-bold text-center text-pink-400">
        Fenny Oktaviani - Portfolio Roadmap
      </h1>

      {/* Introduction */}
      <section className="max-w-3xl mx-auto text-center text-gray-300">
        <p className="text-lg leading-relaxed">
          Hi! I'm <strong className="text-pink-300">Fenny Oktaviani</strong>, a
          dedicated and detail-oriented{" "}
          <strong>Quality Assurance Engineer</strong> with a strong foundation
          in <strong>frontend development</strong> and software testing. I
          recently earned my Bachelor's degree in Informatics Engineering from
          Universitas Islam Nusantara with a GPA of 3.81.
          <br />
          <br />I specialize in{" "}
          <strong>manual testing, API validation, and bug tracking</strong>,
          with hands-on experience using tools like{" "}
          <strong>Postman, Git, and SQL</strong>. My passion lies in ensuring
          high-quality software through rigorous testing and documentation.
          <br />
          <br />
          I've also worked on several frontend projects using{" "}
          <strong>React.js</strong> and <strong>TailwindCSS</strong>, and I
          enjoy collaborating within agile teams.
          <br />
          <br />
          Feel free to check out my{" "}
          <a
            href="/resume.pdf"
            target="_blank"
            className="text-blue-400 underline"
          >
            CV / Resume,
          </a>{" "}
          <a
            href="https://linkedin.com/in/fenny-oktaviani"
            target="_blank"
            className="text-blue-400 underline"
          >
            LinkedIn ,
          </a>
          <a
            href="https://github.com/fnny04?tab=repositories"
            target="_blank"
            className="text-blue-400 underline"
          >
            Github
          </a>{" "}
          or view my personal portfolio at{" "}
          <a
            href="https://porto-fenny.my.canva.site/"
            target="_blank"
            className="text-blue-400 underline"
          >
            porto-fenny
          </a>
          .
        </p>
      </section>

      {/* Education Roadmap (Vertical Zigzag Path) */}
      <section>
        <h2 className="text-2xl font-bold mt-20 mb-10 text-pink-300 text-center">
          Education
        </h2>
        <div className="relative flex flex-col items-center before:content-[''] before:absolute before:h-full before:w-1 before:bg-pink-600 before:left-1/2">
          {education.map((item, index) => (
            <div
              key={index}
              className={`w-full md:w-1/2 px-4 py-6 mb-10 relative z-10 ${
                index % 2 === 0
                  ? "self-start text-right md:pr-10"
                  : "self-end text-left md:pl-10"
              }`}
            >
              <div className="bg-gray-800 rounded-lg shadow-lg p-5 border border-pink-600">
                <div className="flex items-center justify-end gap-2 text-pink-400">
                  <span>{item.year}</span>
                  <Icon icon={item.icon} className="text-xl" />
                </div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <div className="text-sm italic text-gray-400">
                  {item.institution} - {item.location}
                </div>
                <ul className="list-disc pl-5 mt-2 text-gray-300">
                  {item.description.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Work Experience Horizontal Timeline */}
      <section>
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold  text-blue-300 ">
            Work Experience
          </h2>
          <a href="https://porto-fenny.my.canva.site/">
            More details,{" "}
            <span className="text-blue-400 font-bold">
              let's check this out
            </span>
          </a>
        </div>
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8 overflow-x-auto px-2">
          {experience.map((item, index) => (
            <div
              key={index}
              className="min-w-[250px] md:w-[22%] bg-gray-800 border-t-4 border-blue-500 rounded-lg p-4 shadow-md"
            >
              <div className="flex items-center gap-2 text-blue-400 mb-2">
                <Icon icon={item.icon} className="text-xl" />
                <span className="text-sm font-medium">{item.year}</span>
              </div>
              <h3 className="text-base font-semibold mb-1">{item.title}</h3>
              <div className="text-sm italic text-gray-400 mb-2">
                {item.institution} - {item.location}
              </div>
              <ul className="list-disc text-sm pl-4 text-gray-300 space-y-1">
                {item.description.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-purple-300 text-center">
          Skills
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-300 list-disc pl-6 max-w-4xl mx-auto">
          {skills.map((skill, idx) => (
            <li key={idx}>{skill}</li>
          ))}
        </ul>
      </section>

      {/* Project Tabs */}
      <section className="text-center">
        <h2 className="text-2xl font-bold  text-yellow-300">Projects</h2>
        <p>
          Below are personal projects that I independently created and
          developed. These do not include company-related work and are intended
          to showcase my own learning, creativity, and technical capabilities in
          both QA and frontend development.
        </p>

        <div className="flex justify-center my-6 gap-4">
          <button
            onClick={() => setActiveTab("qa")}
            className={`px-4 py-2 rounded-md font-semibold ${
              activeTab === "qa" ? "bg-yellow-400 text-black" : "bg-gray-700"
            }`}
          >
            QA Projects
          </button>
          <button
            onClick={() => setActiveTab("frontend")}
            className={`px-4 py-2 rounded-md font-semibold ${
              activeTab === "frontend"
                ? "bg-yellow-400 text-black"
                : "bg-gray-700"
            }`}
          >
            Frontend Projects
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 max-w-6xl mx-auto">
          {(activeTab === "frontend" ? frontendProjects : qaProjects).map(
            (project, idx) => (
              <a
                key={idx}
                href={project.link || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full group"
              >
                <div className="aspect-[4/3] bg-gray-800 rounded shadow-md overflow-hidden transition-transform duration-300 group-hover:scale-125">
                  <img
                    src={project.img}
                    alt={project.alt}
                    className="w-full h-full "
                  />
                </div>
              </a>
            )
          )}
        </div>
      </section>
    </div>
  );
}
