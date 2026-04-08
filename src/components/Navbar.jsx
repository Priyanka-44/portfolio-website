import { FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-950/70 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
          Priyanka
        </h1>

        {/* Nav links */}
        <div className="hidden md:flex gap-8 text-gray-300">
          <a href="#about" className="hover:text-cyan-400 transition">
            About
          </a>
          <a href="#skills" className="hover:text-cyan-400 transition">
            Skills
          </a>
          <a href="#projects" className="hover:text-cyan-400 transition">
            Projects
          </a>
          <a href="#contact" className="hover:text-cyan-400 transition">
            Contact
          </a>
        </div>

        {/* Resume Button */}
        <motion.a
          whileHover={{ scale: 1.05 }}
          href="/resume.pdf"
          download="Priyanka_Panchal_Resume.pdf"
          className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 px-5 py-2 rounded-lg"
        >
          <FaDownload />
          Resume
        </motion.a>
      </div>
    </nav>
  );
};

export default Navbar;