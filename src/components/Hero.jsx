import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-screen  from-slate-950 via-slate-900 to-slate-950 text-white flex items-center justify-center relative overflow-hidden">

      {/* Background glow */}
      <div className="absolute w-96 h-96 bg-blue-300/20 blur-[120px] rounded-full top-20 left-40"></div>
      <div className="min-h-screen bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950"></div>

      {/* Stars dots */}
      <div className="absolute inset-0 opacity-50">
        {[...Array(30)].map((_, i) => (
          <span
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center z-10"
      >
        <p className="text-cyan-400 text-4xl mb-4">&lt; / &gt;</p>

        <h1 className="text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-transparent bg-clip-text">
          Priyanka Panchal
        </h1>

        <h2 className="mt-6 text-3xl font-semibold text-gray-200">
          Aspiring Web Developer | MERN Stack Developer
        </h2>

        <p className="mt-8 text-gray-400 max-w-3xl mx-auto text-xl">
          B.Tech IT Student passionate about creating innovative web
          solutions using modern technologies
        </p>

        <div className="mt-12 flex gap-6 justify-center">
          <a
            href="#projects"
            className="px-10 py-5 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-2xl shadow-lg hover:scale-105 transition-all duration-300"
          >
            View Projects
          </a>

          <a
            href="/resume.pdf"
            download="resume.pdf"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-xl border border-purple-500 text-lg font-semibold hover:scale-105 transition inline-block"
          >
            Download Resume
          </a>

          <a
            href="#contact"
            className="px-10 py-5 rounded-2xl border border-cyan-400 text-white font-semibold text-2xl hover:bg-cyan-500/10 transition-all duration-300"
          >
            Contact Me
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;