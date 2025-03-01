import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">Get in Touch</h2>

      {/* Animated Email Address */}
      <motion.p
        className="contact-email"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <FaEnvelope className="contact-icon" />{" "}
        <a href="inkiad.a@northeastern.edu">inkiad.a@northeastern.edu</a>
      </motion.p>

      {/* Floating Social Icons */}
      <div className="social-container">
        <motion.a
          href="https://www.instagram.com/ahnfikd7/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link instagram"
          whileHover={{ scale: 1.2 }}
        >
          <FaInstagram />
        </motion.a>
        <motion.a
          href="https://www.facebook.com/ahnf.ikd7/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link facebook"
          whileHover={{ scale: 1.2 }}
        >
          <FaFacebook />
        </motion.a>
        <motion.a
          href="https://www.youtube.com/@ahnafinkiad5050"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link youtube"
          whileHover={{ scale: 1.2 }}
        >
          <FaYoutube />
        </motion.a>
      </div>

      {/* Animated Hacker-Style Message */}
      <motion.div
        className="contact-message"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <p>👾 "Let's connect and create something cool!"</p>
      </motion.div>
    </section>
  );
};

export default Contact;
