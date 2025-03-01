import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaProjectDiagram, FaVideo, FaImage } from "react-icons/fa";
import "./Projects.css";

const projects = [
  {
    title: "AgentAI",
    description: "An AI chatbot trained on Harvard Kennedy IT data to troubleshoot customer issues. Built with Flask for frontend, Chroma DB for backend vector search, and TailwindCSS.",
    media: "/videos/agentai.mp4",
    type: "video",
  },
  {
    title: "HKS Toolkit",
    description: "An ElectronJS desktop application featuring an application launcher and system diagnostics including network, security, and activation status verification.",
    media: "/videos/hkstoolkit.mp4",
    type: "video",
  },
  {
    title: "Incident Management Tracker",
    description: "A ServiceNow replacement for tracking IT service tickets. Features real-time updates between customers and IT staff.",
    media: "/videos/incidenttracker.mp4",
    type: "video",
  },
  {
    title: "HuskyHorizons",
    description: "A career-path visualization tool for students to map out possible career trajectories based on real-world alumni data.",
    media: "/images/huskytrade.png",
    type: "image",
  },
  {
    title: "InsightStock",
    description: "A stock market visualization tool that provides AI-driven investment insights with predictive analytics.",
    media: "/images/insightstock.png",
    type: "image",
  },
  {
    title: "CircleBreaker",
    description: "A fast-paced arcade game built in JavaScript using Canvas API, featuring physics-based collision and scoring.",
    media: "/videos/circlebreaker.mp4",
    type: "video",
  },
  {
    title: "Image Processor",
    description: "A Java GUI-based image processing tool with filters, blur, sharpening and other features.",
    media: "/videos/imageprocessor.mp4",
    type: "video",
  },
  {
    title: "Boston Climate Action Network",
    description: "Developed a web portal for BCAN to help visualize climate data and improve community engagement on sustainability efforts.",
    media: "/images/bcan.png",
    type: "image",
  },
  {
    title: "C4C Recruitment Portal",
    description: "A full-stack recruitment portal for Code4Community, streamlining volunteer onboarding and project assignments.",
    media: "/images/coreinfra.png",
    type: "image",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <motion.div
            className="project-card"
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {project.type === "video" ? (
              <video className="project-media" src={project.media} autoPlay loop muted playsInline />
            ) : (
              <img className="project-media" src={project.media} alt={project.title} />
            )}

            <div className="project-header">
              <FaProjectDiagram className="project-icon" />
              <h3>{project.title}</h3>
            </div>

            <p className="project-description">{project.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
