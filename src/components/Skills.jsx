import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaJs, FaReact, FaNodeJs, FaPython, FaDatabase } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript, SiExpress, SiMongodb, SiVercel } from "react-icons/si";

export default function Skills() {
  const [skills] = useState([
    { id: 1, name: "JavaScript", icon: <FaJs size={50} /> },
    { id: 2, name: "TypeScript", icon: <SiTypescript size={50} /> },
    { id: 3, name: "React", icon: <FaReact size={50} /> },
    { id: 4, name: "Next.js", icon: <RiNextjsFill size={50} /> },
    { id: 5, name: "Node.js", icon: <FaNodeJs size={50} /> },
    { id: 6, name: "Express", icon: <SiExpress size={50} /> },
    { id: 7, name: "MongoDB", icon: <SiMongodb size={50} /> },
    { id: 8, name: "PostgreSQL", icon: <BiLogoPostgresql size={50} /> },
    { id: 9, name: "Tailwind CSS", icon: <RiTailwindCssFill size={50} /> },
    { id: 10, name: "Vercel", icon: <SiVercel size={50} /> },
  ]);

  const [experiences] = useState([
    {
      id: 1,
      company: "FundGazer",
      role: "React Native Developer Intern",
      period: "2025",
      description:
        "Developed cross-platform mobile applications using React Native and NativeWind CSS. Built user-friendly interfaces for financial data visualization, implemented real-time data fetching, and optimized app performance. Collaborated with backend developers to integrate APIs and ensure seamless data flow between mobile app and server.",
      logo: "/assets/fundgazer.svg", // You'll need to add this logo
    },
  ]);

  return (
    <div className="mt-3 lg:mt-16" id="skills">
      <div className="px-5 lg:px-28">
        <motion.h2
          className="text-2xl lg:text-4xl text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          My <span className="font-extrabold">Skills</span>
        </motion.h2>

        {/* Skill Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5 text-lg font-bold mt-7 lg:mt-16 w-full place-items-center gap-y-6 lg:gap-y-12">
          {skills.map((skill) => (
            <motion.div
              key={skill.id}
              className="bg-white border-2 hover:bg-black hover:text-white transition-all cursor-pointer border-black rounded p-3 h-36 w-36 lg:h-44 lg:w-44 flex flex-col items-center justify-center gap-5"
              initial={{ opacity: 0, y: 5 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: skill.id * 0.1,
              }}
              viewport={{ once: true }}
            >
              {skill.icon}
              <p className="text-center text-sm lg:text-base">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Experience Section */}
      <div className="bg-black w-full my-8 py-8 lg:my-16 lg:py-16">
        <motion.h2
          className="text-2xl lg:text-4xl text-center text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          My <span className="font-extrabold">BackGround</span>
        </motion.h2>

        {/* Experience Cards */}
        <div className="px-5 lg:px-28 my-8 lg:mt-16 space-y-10">
          <motion.h3
            className="text-xl lg:text-2xl text-white font-bold mb-8"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Work Experience
          </motion.h3>
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="bg-black p-5 border border-[#D4D4D8] rounded-md hover:bg-[#27272A] transition-all cursor-pointer"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
            >
              <div className="flex justify-between flex-col items-start lg:flex-row lg:items-center">
                <div className="flex items-center gap-5">
                  <h2 className="font-semibold text-white text-lg lg:text-xl">
                    {exp.role} at {exp.company}
                  </h2>
                </div>
                <span className="text-[#D4D4D8] font-semibold text-sm mt-4 lg:mt-0 lg:text-base">
                  {exp.period}
                </span>
              </div>
              <p className="text-[#D4D4D8] mt-6 text-sm/6 lg:text-base font-light">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Education Section */}
        <div className="px-5 lg:px-28 mt-16">
          <motion.h3
            className="text-xl lg:text-2xl text-white font-bold mb-8"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Education
          </motion.h3>

          <motion.div
            className="bg-black p-5 border border-[#D4D4D8] rounded-md hover:bg-[#27272A] transition-all cursor-pointer"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
            }}
            viewport={{ once: true }}
          >
            <div className="flex justify-between flex-col items-start lg:flex-row lg:items-center">
              <div className="flex items-center gap-5">
                {/* <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center text-black font-bold text-sm">
                  I
                </div> */}
                <h2 className="font-semibold text-white text-lg lg:text-xl">
                  B.Tech in AI & Data Science at IIITDM Kurnool
                </h2>
              </div>
              <span className="text-[#D4D4D8] font-semibold text-sm mt-4 lg:mt-0 lg:text-base">
                2023 - 2027
              </span>
            </div>
            <div className="flex items-center gap-4 mt-4">
              <span className="text-[#D4D4D8] font-semibold text-sm lg:text-base">
                CGPA: 8.7
              </span>
            </div>
            <p className="text-[#D4D4D8] mt-6 text-sm/6 lg:text-base font-light">
              Currently pursuing Bachelor of Technology in Artificial
              Intelligence and Data Science. Coursework includes Data Structures
              & Algorithms, Machine Learning, Database Systems, Software
              Engineering, and Web Technologies. Active in coding competitions
              and technical projects.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
