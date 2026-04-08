import { motion } from "framer-motion";
import { GraduationCap, BadgeCheck, FileText } from "lucide-react";

const certificates = [
  {
    title: "DMCP – C-DAC",
    org: "Diploma in Multimedia & Computer Programming",
    date: "2020",
    icon: <FileText size={28} className="text-orange-400" />,
  },
  {
    title: "Diploma Complated in IT",
    org: "Government Polytechnic for Girls",
    date: "2023",
    icon: <GraduationCap size={28} className="text-yellow-400" />,
  },
  {
    title: "Project Completion Certificate",
    org: "Infolabz IT Services Pvt. Ltd.",
    date: "May 2023",
    icon: <BadgeCheck size={28} className="text-green-400" />,
  },

  {
    title: "MERN Stack Internship Certificate",
    org: "Tabdelta Solutions",
    date: "Jan 2026 – Mar 2026",
    icon: <BadgeCheck size={28} className="text-pink-400" />,
  },
];

const Certifications = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 text-white px-10 py-24 overflow-hidden">

      {/* Glow */}
      <div className="absolute w-96 h-96 bg-blue-300/20 blur-[120px] rounded-full top-10 left-20"></div>
      <div className="absolute w-96 h-96 bg-purple-400/20 blur-[120px] rounded-full bottom-10 right-20"></div>

      <div className="relative z-10 max-w-6xl mx-auto">

        <h2 className="text-center text-5xl font-bold text-blue-400 mb-4">
          Certifications
          <div className="w-24 h-1 bg-cyan-400 mx-auto mt-3 rounded-full"></div>
        </h2>

        <p className="text-center text-gray-400 mb-16">
          Verified certifications and internship achievements
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 shadow-xl"
            >
              <div className="mb-4">{cert.icon}</div>

              <h3 className="text-lg font-semibold mb-2">
                {cert.title}
              </h3>

              <p className="text-purple-400 text-sm mb-4">
                {cert.org}
              </p>

              <div className="border-t border-white/10 pt-3 text-gray-400 text-sm">
                {cert.date}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;