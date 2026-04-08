import projectImg from "../assets/hero.png";
import cricketImg from "../assets/cricket.png";
import hospitalImg from "../assets/hospital.png";
import interiorImg from "../assets/interior.png";
import gameImg from "../assets/game.png";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";


const projects = [
  {
    title: "California Cricket Academy Portal",
    image: cricketImg,
    description:
      "Full-stack MERN web application for online cricket academy booking with role-based dashboards, secure authentication, booking modules, and responsive UI.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    gradient: "from-cyan-500 to-blue-600",
    live: "https://your-live-link.com",
    github: "https://github.com/Priyanka-44",
  },
  {
    title: "Hospital Management System",
    image: hospitalImg,
    description:
      "Internship project for managing hospital operations with patient records, doctor appointments, admin control, and role-based access.",
    tech: ["MERN", "REST API", "Auth", "Dashboard"],
    gradient: "from-pink-500 to-purple-600",
    live: "https://your-live-link.com",
    github: "https://github.com/Priyanka-44",
  },
  {
    title: "Way To Interior",
    image: interiorImg,
    description:
      "Platform connecting users with interior designers for remote collaboration, project bidding, and portfolio-based hiring.",
    tech: ["React", "Node.js", "MongoDB", "UI/UX"],
    gradient: "from-blue-500 to-cyan-500",
    live: "https://your-live-link.com",
    github: "https://github.com/Priyanka-44",
  },
  {
    title: "Prynx-AI",
    image: projectImg,
    description:
      "Smart AI chatbot with voice & text communication, multi-activity support, futuristic UI, and productivity features.",
    tech: ["MERN", "AI", "Voice", "Chatbot"],
    gradient: "from-orange-500 to-red-500",
    live: "https://your-live-link.com",
    github: "https://github.com/Priyanka-44",
  },
  {
    title: "Type Rush & Colour Storm",
    image: gameImg,
    description:
      "Interactive browser games featuring typing speed challenge, color matching, timer logic, and responsive gameplay.",
    tech: ["HTML", "CSS", "JavaScript"],
    gradient: "from-purple-500 to-pink-500",
    live: "https://your-live-link.com",
    github: "https://github.com/Priyanka-44",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative min-h-screen bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 text-white px-10 py-24 overflow-hidden">

      <div className="absolute w-96 h-96 bg-blue-300/20 blur-[120px] rounded-full top-10 left-20"></div>
      <div className="absolute w-96 h-96 bg-purple-400/20 blur-[120px] rounded-full bottom-10 right-20"></div>

      <div className="relative z-10 max-w-7xl mx-auto">

        <h2 className="text-center text-5xl font-bold text-blue-400 mb-4">
          Featured Projects
          <div className="w-24 h-1 bg-cyan-400 mx-auto mt-3 rounded-full"></div>
        </h2>

        <p className="text-center text-gray-400 mb-16">
          Real projects showcasing my full-stack development skills
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-xl"
            >

              <div className="h-40 overflow-hidden rounded-t-2xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm leading-6 mb-5">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs border border-cyan-400/30 rounded-full text-cyan-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div>
                  <a
                    href={project.github}
                    target="_blank"
                    className="w-full flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-600 py-2 rounded-lg"
                  >
                    <FaGithub size={18} />
                    View Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;