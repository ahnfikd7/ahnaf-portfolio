import React from 'react';
import { motion } from 'framer-motion';
import { FaRobot, FaUsers, FaTools, FaCode, FaUniversity } from 'react-icons/fa';
import './Experience.css';

const experiences = [
  {
    title: "Software Engineer Co-op - Cleo Robotics",
    icon: <FaRobot className="experience-icon" />,
    image: "/images/cleodrone.png",
    duration: "July 2024 - December 2024",
    description: [
      "Led the transition of the drone software pipeline to ROS2, optimizing communication between flight modules.",
      "Conducted extensive flight testing, log collection, and analysis to refine drone navigation and stability.",
      "Developed and maintained development infrastructure and tooling to streamline drone software deployment.",
      "Worked on hardware bring-up, testing, and configuration, ensuring seamless integration of drone components.",
      "Enhanced real-time flight analysis and debugging through improved software testing methodologies."
    ]
  },
  {
    title: "President - Bangladeshi Student Association (BONDHUS)",
    icon: <FaUsers className="experience-icon" />,
    image: "/images/bondhusbhorta.jpg",
    duration: "2023 - Present",
    description: [
      "Revived and expanded the Bangladeshi Student Association after over 10 years of inactivity, creating an inclusive cultural space.",
      "Organized large-scale events like Mezban Night and Pitha Utshob, celebrating Bangladeshi culture through food and community engagement.",
      "Facilitated collaborations with other cultural organizations across Boston to expand reach and foster intercultural connections.",
      "Established biweekly meetups to build stronger connections within the Bangladeshi student community.",
      "Managed finances, sponsorships, and budgeting to sustain and grow the organization."
    ]
  },
  {
    title: "Software Engineer & Director of Finance - Code4Community",
    icon: <FaTools className="experience-icon" />,
    image: "/images/c4c.png",
    duration: "2024 - Present",
    description: [
      "Led financial operations, sponsorships, and budgeting to support community-driven software projects.",
      "Worked as a developer in the Core Infra Team, enhancing backend architecture and database optimization.",
      "Developed full-stack solutions for BCAN Team, providing technology for social impact initiatives.",
      "Managed project coordination between developers, designers, and non-profit organizations.",
      "Implemented scalable infrastructure for long-term sustainability of Code4Community projects."
    ]
  },
  {
    title: "AerospaceNU - UAV Navigation & Controls",
    icon: <FaRobot className="experience-icon" />,
    image: "/images/nuav.png",
    duration: "September 2023 - December 2023",
    description: [
      "Worked on Webots simulation for UAV takeoff, landing, and autonomous navigation.",
      "Implemented obstacle avoidance algorithms within Webots to simulate realistic drone behavior.",
      "Optimized path planning logic for UAV movement in simulated environments.",
      "Collaborated with team members on flight simulation testing and hardware integration."
    ]
  },
  {
    title: "Mars Rover Team - Software Engineer",
    icon: <FaCode className="experience-icon" />,
    videoSrc: "/videos/rovervideo.mp4",
    duration: "September 2023 - December 2023",
    description: [
      "Contributed to autonomous rover navigation and control systems.",
      "Enhanced the Rover UI error console, improving debugging efficiency and usability.",
      "Fixed positioning issues in the turret control system, ensuring smoother and more precise movements.",
      "Collaborated with software and hardware teams to refine rover control and feedback mechanisms."
    ]
  },
  {
    title: "Software Engineer Co-op - Harvard Kennedy School",
    icon: <FaUniversity className="experience-icon" />,
    image: "/images/hks.jpg",
    duration: "July 2023 - December 2023",
    description: [
      "Developed AgentAI, an AI chatbot trained on Harvard Kennedy IT data to troubleshoot customer issues, implementing Flask for the frontend and Chroma DB for backend vector search.",
      "Built an account management portal with role-based access control for modifying admin and user privileges.",
      "Created HKS Toolkit, an ElectronJS desktop application featuring an application launcher and system diagnostics for network, security, and activation status verification.",
      "Worked on the Incident Management Tracker, a replacement for ServiceNow, allowing real-time ticket tracking and status updates between customers and IT staff.",
      "Collaborated with IT teams and faculty to enhance internal tools, improving system efficiency and workflow automation."
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="experience-section tech-background">
      <h2 className="section-title">Experience</h2>
      <div className="experience-container">
        {experiences.map((exp, index) => (
          <motion.div 
            className="experience-card"
            key={index} 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 0.5 }}
          >
            {exp.videoSrc ? (
              <video
                className="experience-media"
                src={exp.videoSrc}
                autoPlay
                loop
                muted
                playsInline
              />
            ) : (
              <img
                src={exp.image}
                alt={exp.title}
                className="experience-media"
              />
            )}

            <div className="experience-header">
              {exp.icon}
              <h3>{exp.title}</h3>
            </div>

            <p className="experience-duration">{exp.duration}</p>

            <ul className="experience-description">
              {exp.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;