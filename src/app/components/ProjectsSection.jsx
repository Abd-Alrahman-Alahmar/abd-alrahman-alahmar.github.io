"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Monteva App",
    description: "Warranty App",
    image: "/images/projects/monteva-app.jpg",
    tag: ["All", "Mobile"],
    gitUrl: "https://apps.apple.com/ie/app/monteva/id6450029671?platform=iphone",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Meeting App",
    description: "Zoom Clone",
    image: "/images/projects/Meeting-app-c.jpg",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/Abd-Alrahman-Alahmar/Video-Meeting",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "E-commerce Application",
    description: "Amazon Clone",
    image: "/images/projects/e-commerce-app.jpg",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/Abd-Alrahman-Alahmar/Flutter_Ecommerce_App",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Classified App",
    description: "AR Integrated for product preview",
    image: "/images/projects/classified-app.jpg",
    tag: ["All", "Mobile"],
    gitUrl: "https://play.google.com/store/apps/details?id=com.classiConnect.flutter_classified",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Personal Expenses",
    description: "Manage your Expenses",
    image: "/images/projects/personal-expenses.jpg",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/Abd-Alrahman-Alahmar/Personal-Expenses",
    previewUrl: "/",
  },
  {
    id: 6,
    title: " ApartHotel",
    description: "Reservation System",
    image: "/images/projects/aparthotell.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://apart-hotel.vercel.app/",
    previewUrl: "/",
  },
  {
    id: 7,
    title: " Learning Management System",
    description: "Sell Your Online Courses",
    image: "/images/projects/LMSS.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://lms-client-snowy.vercel.app/",
    previewUrl: "/",
  },
  {
    id: 8,
    title: " E-Commerce Website",
    description: "Sell Your Product Anywhere",
    image: "/images/projects/NextCommerce.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://next-e-commerce-nu-green.vercel.app/",
    previewUrl: "/",
  },
  
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
