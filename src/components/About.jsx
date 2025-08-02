import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div
      className="px-5 lg:px-28 flex justify-between flex-col lg:flex-row"
      id="about"
    >
      <motion.div
        className="flex items-center justify-center lg:w-2/3 w-full max-w-lg mx-auto"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 10 }}
        viewport={{ once: true }}
      >
        <img
          src="/assets/about-me.jpg"
          alt="About Me Illustration"
          className="w-full h-auto max-w-md mx-auto rounded-lg"
        />
      </motion.div>

      <motion.div
        className="lg:w-1/2"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 10, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h2 className="lg:text-4xl text-2xl mt-4 lg:mt-0">
          About <span className="font-extrabold">Me</span>
        </h2>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-5 lg:mt-10">
          I'm a full-stack developer specializing in{" "}
          <strong>React.js, Next.js & Node.js</strong>. I focus on building
          production-ready web applications and developer tools that solve real
          problems. From API testing platforms to SaaS applications, I create
          solutions that developers and businesses actually use.
        </p>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-5">
          Currently pursuing{" "}
          <strong>B.Tech in AI & Data Science at IIITDM Kurnool</strong> with a{" "}
          <strong>8.7 CGPA</strong>. I've built diverse projects including a{" "}
          <strong>Postman clone for API testing</strong>,{" "}
          <strong>LinkTree alternatives</strong>,
          <strong>documentation platforms with advanced search</strong>,{" "}
          <strong>portfolio templates</strong>, and
          <strong>landing page systems</strong> using modern web technologies.
        </p>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-5">
          With my AI & Data Science background, I also work on{" "}
          <strong>AI-powered projects</strong> including
          <strong>PDF to Quiz generators using OpenAI APIs</strong>,{" "}
          <strong>Model Context Protocol (MCP) servers</strong>,
          <strong>LangChain integrations</strong>, and{" "}
          <strong>AI-powered answer engines</strong>. This unique combination
          allows me to build intelligent web applications that leverage both
          modern web development and AI capabilities.
        </p>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-5">
          My tech stack includes{" "}
          <strong>
            TypeScript, React, Next.js, Node.js, Express, MongoDB, PostgreSQL,
            and Tailwind CSS
          </strong>
          . I deploy on <strong>Vercel</strong> and use modern tools like{" "}
          <strong>Upstash Redis</strong> for performance optimization. I've also
          gained experience in <strong>React Native</strong> through my
          internship at <strong>FundGazer</strong>.
        </p>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-5">
          When I'm not coding, I'm exploring new web technologies, contributing
          to open-source projects, or working on side projects that push the
          boundaries of what's possible with modern web development. Check out
          my work on <strong>GitHub</strong> or connect with me to discuss tech
          and development.
        </p>
      </motion.div>
    </div>
  );
}
