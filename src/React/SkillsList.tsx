import React, { useState } from "react";

const CategoryIcons = {
  "Backend Development": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      className="w-6 h-6 text-[var(--sec)] opacity-70"
    >
      <path d="M12 2L1 7l11 5 9-4.09V17h2V7L12 2z"></path>
      <path d="M11 12.17L3 8.09V17l9 5 9-5v-4.91l-8 4.08z"></path>
    </svg>
  ),
  "Database & DevOps": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      className="w-6 h-6 text-[var(--sec)] opacity-70"
    >
      <path d="M12 2C6.48 2 2 4.24 2 7v10c0 2.76 4.48 5 10 5s10-2.24 10-5V7c0-2.76-4.48-5-10-5zm0 2c4.41 0 8 .99 8 3s-3.59 3-8 3-8-.99-8-3 3.59-3 8-3zm0 16c-4.41 0-8-.99-8-3V13c1.74 1.05 4.4 1.5 8 1.5s6.26-.45 8-1.5v4c0 2.01-3.59 3-8 3z"></path>
    </svg>
  ),
  "Frontend & UI Integration": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      className="w-6 h-6 text-[var(--sec)] opacity-70"
    >
      <path d="M3 4a1 1 0 0 0-1 1v3h20V5a1 1 0 0 0-1-1H3zm19 5H2v10a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V9zm-9 9H5v-2h8v2z"></path>
    </svg>
  ),
  "Testing & Quality": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      className="w-6 h-6 text-[var(--sec)] opacity-70"
    >
      <path d="M21 3H3a1 1 0 0 0-1 1v2a2 2 0 0 0 1.85 1.995L4 8v10a2 2 0 0 0 1.85 1.995L6 20h12a2 2 0 0 0 1.995-1.85L20 18V8a2 2 0 0 0 1.995-1.85L22 6V4a1 1 0 0 0-1-1zM9 11h6v2H9v-2z"></path>
    </svg>
  )
};


const SkillsList = () => {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const skills = {
    "Backend Development": [
      "API RESTful design with Laravel",
      "Domain-Driven Design (DDD)",
      "Command Query Responsibility Segregation (CQRS)",
      "Queue jobs & workers",
      "Custom Artisan commands",
    ],
    "Database & DevOps": [
      "Relational DBs with MySQL/PostgreSQL",
      "Advanced SQL queries and optimization",
      "Database versioning & migrations",
      "Docker & Docker Compose environments",
      "CI/CD with GitLab Pipelines",
    ],
    "Frontend & UI Integration": [
      "Frontend logic with React.js",
      "Custom component development for Shopify stores",
      "Theme customization using Liquid",
      "Workflow automation with Shopify Scripts and metafields",
      "Building tailored ecommerce user experiences",
    ],
    "Testing & Quality": [
      "Unit & Feature testing in Laravel",
      "Error logging and monitoring with Sentry",
      "Static analysis with PHPStan and more stuff",
      "Clean code principles & SOLID",
    ]
  };


  const toggleItem = (item: string) => {
    setOpenItem(openItem === item ? null : item);
  };

  return (
    <div className="text-left pt-3 md:pt-9">
      <h2 className="text-[var(--white)] text-3xl md:text-4xl font-semibold md:mb-6">
        What I do?
      </h2>
      <ul className="space-y-4 mt-4 text-lg">
        {Object.entries(skills).map(([category, items]) => (
          <li key={category} className="w-full">
            <div
              onClick={() => toggleItem(category)}
              className="md:w-[400px] w-full bg-[#1414149c] rounded-2xl text-left hover:bg-opacity-80 transition-all border border-[var(--white-icon-tr)] cursor-pointer overflow-hidden"
            >
              <div className="flex items-center gap-3 p-4">
                {CategoryIcons[category]}
                <div className="flex items-center gap-2 flex-grow justify-between">
                  <div className="min-w-0 max-w-[200px] md:max-w-none overflow-hidden">
                    <span className="block truncate text-[var(--white)] text-lg">
                      {category}
                    </span>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className={`w-6 h-6 text-[var(--white)] transform transition-transform flex-shrink-0 ${openItem === category ? "rotate-180" : ""
                      }`}
                  >
                    <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
                  </svg>
                </div>
              </div>

              <div
                className={`transition-all duration-300 px-4 ${openItem === category
                  ? "max-h-[500px] pb-4 opacity-100"
                  : "max-h-0 opacity-0"
                  }`}
              >
                <ul className="space-y-2 text-[var(--white-icon)] text-sm">
                  {items.map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <span className="pl-1">•</span>
                      <span className="pl-2">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsList;
