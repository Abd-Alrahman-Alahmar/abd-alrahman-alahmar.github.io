"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import LogoCarousel from "./Carousel";





const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <LogoCarousel/>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li><b>MSc in Computing</b>, Griffith College (1st Class Honor)</li>
        <li><b>BSc Computer and Networking Engineer</b>, Canadian University Dubai</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Parallel and Concurrent Programming with Java 1</li>
        <li>Java Algorithms</li>
        <li>Java 11+ Essential Training</li>
        <li>React Native Udemy Certificate</li>
        <li>Flutter & Dart Udemy Certificate</li>
        
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" alt="about" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          Full-stack software engineer with experience building responsive web and mobile applications. 
          Proficient in front-end frameworks like React/Next and mobile technologies such as Flutter, 
          React Native, Java and Kotlin. I also have experience developing scalable back-ends using Node.js, 
          Python, and Go to power RESTful APIs. Holding a Bachelor of Science in Computer and Networking 
          Engineering and Master&apos;s degree in Computing, earned with First Class Honors, I architect elegant 
          solutions across the full stack. Motivated to take on complex challenges and deliver well-engineered 
          products to solve critical problems
          </p>
          <div className="flex flex-row justify-start mt-8 overflow-hidden">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
