import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Project Intern – Web Development (Python/Django)",
    company: "Infolabz IT Services Pvt. Ltd., Ahmedabad",
    duration: "May 2023",
    points: [
      "Worked on the 'Way To Interior' platform connecting users with interior designers",
      "Developed responsive user interfaces and secure backend modules",
      "Followed modular coding practices and structured testing",
      "Gained hands-on experience in real-world project workflow",
    ],
    side: "left",
  },
  {
    title: "MERN Stack Intern",
    company: "CreArt Solutions",
    duration: "Jul 2025 - Jul 2025",
    points: [
      "Built and tested full-stack modules for Hospital Management System",
      "Implemented CRUD operations and REST API integrations",
      "Worked on user authentication and frontend components",
      "Collaborated in a team-based internship environment",
    ],
    side: "right",
  },
  {
    title: "MERN Stack Development Intern",
    company: "Tabdelta Solutions Pvt. Ltd., Ahmedabad",
    duration: "Jan 2026 - Mar 2026",
    points: [
      "Developed California Cricket Academy Online Booking Portal",
      "Implemented secure authentication and role-based dashboards",
      "Built booking modules, CRUD operations, and responsive UI pages",
      "Integrated MongoDB database with backend APIs",
    ],
    side: "left",
  },
];

const Experience = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 text-white px-10 py-24 overflow-hidden">

      {/* Glow Background */}
      <div className="absolute w-96 h-96 bg-blue-300/20 blur-[120px] rounded-full top-10 left-20"></div>
      <div className="absolute w-96 h-96 bg-purple-400/20 blur-[120px] rounded-full bottom-10 right-20"></div>

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Heading */}
        <h2 className="text-center text-5xl font-bold text-blue-400 mb-20">
          Experience
          <div className="w-20 h-1 bg-cyan-400 mx-auto mt-3 rounded-full"></div>
        </h2>

        <div className="relative">

          {/* Center Timeline Line */}
          <div className="absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-cyan-400 to-purple-500 transform -translate-x-1/2"></div>

          <div className="space-y-20">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: exp.side === "left" ? -80 : 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className={`flex ${exp.side === "left" ? "justify-start" : "justify-end"
                  }`}
              >
                <div className="w-[42%] bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 shadow-xl hover:scale-[1.02] transition">

                  <div className="flex items-center gap-3 mb-3 text-cyan-400">
                    <Briefcase size={20} />
                    <h3 className="text-lg font-semibold">
                      {exp.title}
                    </h3>
                  </div>

                  <p className="text-purple-400 font-medium mb-2">
                    {exp.company}
                  </p>

                  <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
                    <Calendar size={16} />
                    <span>{exp.duration}</span>
                  </div>

                  <ul className="space-y-2 text-gray-300 text-sm leading-6">
                    {exp.points.map((point, i) => (
                      <li key={i}>• {point}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;