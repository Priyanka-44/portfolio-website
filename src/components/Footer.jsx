import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 text-white px-10 py-12 overflow-hidden border-t border-white/10">

      {/* Glow */}
      <div className="absolute w-80 h-80 bg-blue-300/10 blur-[120px] rounded-full top-0 left-20"></div>
      <div className="absolute w-80 h-80 bg-purple-400/10 blur-[120px] rounded-full bottom-0 right-20"></div>

      <div className="relative z-10 max-w-6xl mx-auto">

        <div className="grid md:grid-cols-3 gap-10 items-center">

          {/* Left */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
              Priyanka Panchal
            </h3>
            <p className="text-gray-400 mt-2">
              Aspiring Web Developer | MERN Stack Developer
            </p>
          </div>

          {/* Center */}
          <div className="flex justify-center gap-6 text-gray-300">
            <a href="#about" className="hover:text-cyan-400 transition">
              About
            </a>
            <a href="#projects" className="hover:text-cyan-400 transition">
              Projects
            </a>
            <a href="#contact" className="hover:text-cyan-400 transition">
              Contact
            </a>
          </div>

          {/* Right */}
          <div className="flex justify-end gap-4">
            <a
              href="https://github.com/Priyanka-44"
              target="_blank"
              rel="noreferrer"
              className="text-xl text-cyan-400 hover:scale-110 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/priyanka-panchal-1b4794289/"
              target="_blank"
              rel="noreferrer"
              className="text-xl text-purple-400 hover:scale-110 transition"
            >
              <FaLinkedin />
            </a>

            <motion.button
              whileHover={{ scale: 1.1 }}
              onClick={scrollToTop}
              className="text-xl text-white bg-cyan-500 p-2 rounded-full"
            >
              <FaArrowUp />
            </motion.button>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-8 pt-6 text-center text-gray-400 text-sm">
          © 2026 Priyanka Panchal. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;