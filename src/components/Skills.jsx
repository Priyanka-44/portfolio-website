import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";
import { SiExpress, SiMongodb } from "react-icons/si";

const skills = [
  {
    name: "HTML",
    icon: <FaHtml5 size={40} className="text-orange-500" />,
  },
  {
    name: "CSS",
    icon: <FaCss3Alt size={40} className="text-blue-500" />,
  },
  {
    name: "JavaScript",
    icon: <FaJsSquare size={40} className="text-yellow-400" />,
  },
  {
    name: "React",
    icon: <FaReact size={40} className="text-cyan-400" />,
  },
  {
    name: "Node.js",
    icon: <FaNodeJs size={40} className="text-green-500" />,
  },
  {
    name: "Express.js",
    icon: <SiExpress size={40} className="text-gray-300" />,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb size={40} className="text-green-400" />,
  },
  {
    name: "GitHub",
    icon: <FaGithub size={40} className="text-pink-400" />,
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative min-h-screen bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 text-white px-10 py-24 overflow-hidden"
    >
      {/* Glow Background */}
      <div className="absolute w-96 h-96 bg-blue-300/20 blur-[120px] rounded-full top-10 left-20"></div>
      <div className="absolute w-96 h-96 bg-purple-400/20 blur-[120px] rounded-full bottom-10 right-20"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 className="text-center text-5xl font-bold text-blue-400 mb-20">
          Technical Skills
          <div className="w-24 h-1 bg-cyan-400 mx-auto mt-3 rounded-full"></div>
        </h2>

        {/* Skills Cards */}
        <div className="grid md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.04 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 shadow-xl"
            >
              <div className="flex justify-center mb-4">
                {skill.icon}
              </div>

              <h3 className="text-center text-xl font-semibold">
                {skill.name}
              </h3>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="flex flex-wrap gap-4 justify-center mt-16">
          {[
            "REST APIs",
            "Git",
            "Responsive Design",
            "Tailwind CSS",
            "Problem Solving",
            "ChatGPT",
            "Claude AI",
            "Debugging",
          ].map((tag, i) => (
            <span
              key={i}
              className="px-5 py-2 border border-cyan-400/30 rounded-full text-cyan-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

// import { motion } from "framer-motion";
// import {
//   FaHtml5,
//   FaCss3Alt,
//   FaJsSquare,
//   FaReact,
//   FaNodeJs,
//   FaGithub,
// } from "react-icons/fa";
// import { SiExpress, SiMongodb } from "react-icons/si";

// const skills = [
//   {
//     name: "HTML",
//     icon: <FaHtml5 size={40} className="text-orange-500" />,
//     percent: "90%",
//     width: "90%",
//   },
//   {
//     name: "CSS",
//     icon: <FaCss3Alt size={40} className="text-blue-500" />,
//     percent: "85%",
//     width: "85%",
//   },
//   {
//     name: "JavaScript",
//     icon: <FaJsSquare size={40} className="text-yellow-400" />,
//     percent: "88%",
//     width: "88%",
//   },
//   {
//     name: "React",
//     icon: <FaReact size={40} className="text-cyan-400" />,
//     percent: "85%",
//     width: "85%",
//   },
//   {
//     name: "Node.js",
//     icon: <FaNodeJs size={40} className="text-green-500" />,
//     percent: "80%",
//     width: "80%",
//   },
//   {
//     name: "Express.js",
//     icon: <SiExpress size={40} className="text-gray-300" />,
//     percent: "78%",
//     width: "78%",
//   },
//   {
//     name: "MongoDB",
//     icon: <SiMongodb size={40} className="text-green-400" />,
//     percent: "82%",
//     width: "82%",
//   },
//   {
//     name: "GitHub",
//     icon: <FaGithub size={40} className="text-pink-400" />,
//     percent: "85%",
//     width: "85%",
//   },
// ];
// {/* <div className="grid md:grid-cols-4 gap-8">
//   {skills.map((skill, index) => (
//     <motion.div
//       key={index}
//       whileHover={{ scale: 1.04 }}
//       className="bg-white/5 border border-white/10 rounded-2xl p-6 shadow-xl"
//     >
//       <div className="flex justify-center mb-4">
//         {skill.icon}
//       </div>

//       <h3 className="text-center text-xl font-semibold">
//         {skill.name}
//       </h3>
//     </motion.div>
//   ))}
// </div> */}
// const Skills = () => {
//   return (
//     <section id="skills" className="relative min-h-screen bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 text-white px-10 py-24 overflow-hidden">

//       <div className="absolute w-96 h-96 bg-blue-300/20 blur-[120px] rounded-full top-10 left-20"></div>
//       <div className="absolute w-96 h-96 bg-purple-400/20 blur-[120px] rounded-full bottom-10 right-20"></div>

//       <div className="relative z-10 max-w-6xl mx-auto">
//         <h2 className="text-center text-5xl font-bold text-blue-400 mb-20">
//           Technical Skills
//           <div className="w-24 h-1 bg-cyan-400 mx-auto mt-3 rounded-full"></div>
//         </h2>

//         <div className="grid md:grid-cols-4 gap-8">
//           {skills.map((skill, index) => (
//             <motion.div
//               key={index}
//               whileHover={{ scale: 1.04 }}
//               className="bg-white/5 border border-white/10 rounded-2xl p-6 shadow-xl"
//             >
//               <div className="flex justify-center mb-4">
//                 {skill.icon}
//               </div>

//               <h3 className="text-center text-xl font-semibold mb-6">
//                 {skill.name}
//               </h3>

//               <div className="flex justify-between text-sm text-gray-400 mb-2">
//                 <span>Proficiency</span>
//                 <span>{skill.percent}</span>
//               </div>

//               <div className="w-full h-2 bg-slate-800 rounded-full">
//                 <div
//                   className="h-2 bg-cyan-400 rounded-full"
//                   style={{ width: skill.width }}
//                 ></div>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         <div className="flex flex-wrap gap-4 justify-center mt-16">
//           {[
//             "REST APIs",
//             "Git",
//             "Responsive Design",
//             "Tailwind CSS",
//             "Problem Solving",
//             "ChatGPT",
//             "Claude AI",
//             "Debugging",
//           ].map((tag, i) => (
//             <span
//               key={i}
//               className="px-5 py-2 border border-cyan-400/30 rounded-full text-cyan-300"
//             >
//               {tag}
//             </span>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;