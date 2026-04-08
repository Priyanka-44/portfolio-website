import profileImg from "../assets/Priyanka.jpg";
import { motion } from "framer-motion";
import { Target, GraduationCap, Code2 } from "lucide-react";


const cards = [
  {
    icon: <Target size={22} />,
    title: "Career Objective",
    text: "Aspiring Web Developer and MERN Stack Developer with hands-on experience in building responsive full-stack web applications. Seeking an opportunity to contribute technical skills and real-world project experience in software development.",
    color: "text-cyan-400",
  },
  {
    icon: <GraduationCap size={22} />,
    title: "Education & Experience",
    text: "Currently pursuing B.E. in Information Technology from SAL Engineering and Technical Institute (GTU) with a CGPA of 8.30. Completed Diploma in IT from Government Polytechnic for Girls with 8.11 CGPA and multiple internships in MERN Stack and Web Development.",
    color: "text-purple-400",
  },
  {
    icon: <Code2 size={22} />,
    title: "Projects & Passion",
    text: "Built real-world projects including California Cricket Academy Booking Portal, Hospital Management System, Way To Interior, and Prynx-AI chatbot using MERN stack. Passionate about scalable UI, backend logic, and solving real user problems.",
    color: "text-blue-400",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 text-white px-10 py-24 overflow-hidden"
    >
      {/* Glow background */}
      <div className="absolute w-96 h-96 bg-blue-300/20 blur-[120px] rounded-full top-10 left-20"></div>
      <div className="absolute w-96 h-96 bg-purple-400/20 blur-[120px] rounded-full bottom-10 right-20"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center text-5xl font-bold text-blue-400 mb-20"
        >
          About Me
          <div className="w-20 h-1 bg-cyan-400 mx-auto mt-3 rounded-full"></div>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left profile image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="w-64 h-64 rounded-3xl bg-slate-900 border border-cyan-400/20 shadow-[0_0_40px_rgba(34,211,238,0.3)] overflow-hidden">
              <img
                src={profileImg}
                alt="Priyanka Panchal"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Right info cards */}
          <div className="space-y-6">
            {cards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 shadow-xl"
              >
                <div className={`mb-3 ${card.color}`}>
                  {card.icon}
                </div>

                <h3 className={`text-xl font-semibold mb-3 ${card.color}`}>
                  {card.title}
                </h3>

                <p className="text-gray-300 leading-7">
                  {card.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;