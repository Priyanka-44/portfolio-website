import { useRef } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_h7q44o5",
        "template_5sf3y4t",
        form.current,
        "kmBd1BCpijasYbo3E"
      )
      .then((result) => {
        console.log("SUCCESS:", result.text);
        alert("Message sent successfully 💖");
        e.target.reset();
      })
      .catch((err) => {
        console.error("EMAILJS ERROR:", err);
        alert(
          err?.text ||
          "Message failed ❌\nPlease check EmailJS template variables and service."
        );
      });
  };

  return (
    <section id="contact" className="relative min-h-screen bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 text-white px-10 py-24 overflow-hidden">

      {/* Glow background */}
      <div className="absolute w-96 h-96 bg-blue-300/20 blur-[120px] rounded-full top-10 left-20"></div>
      <div className="absolute w-96 h-96 bg-purple-400/20 blur-[120px] rounded-full bottom-10 right-20"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 className="text-center text-5xl font-bold text-blue-400 mb-4">
          Get In Touch
          <div className="w-24 h-1 bg-cyan-400 mx-auto mt-3 rounded-full"></div>
        </h2>

        <p className="text-center text-gray-400 mb-16">
          Feel free to reach out for opportunities
        </p>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Left Info */}
          <div className="space-y-5">
            {[
              {
                icon: <FaEnvelope />,
                title: "Email",
                value: "priyankapanchal2004@gmail.com",
              },
              {
                icon: <FaPhoneAlt />,
                title: "Phone",
                value: "+91 8401902996",
              },
              {
                icon: <FaLinkedin />,
                title: "LinkedIn",
                value: "linkedin.com/in/priyanka-panchal",
              },
              {
                icon: <FaGithub />,
                title: "GitHub",
                value: "github.com/Priyanka-44",
              },
              {
                icon: <FaMapMarkerAlt />,
                title: "Location",
                value: "Ahmedabad, Gujarat, India",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-5 flex gap-4 items-center"
              >
                <div className="text-cyan-400 text-xl">
                  {item.icon}
                </div>

                <div>
                  <p className="text-sm text-gray-400">
                    {item.title}
                  </p>
                  <p>{item.value}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Form */}
          <form
            ref={form}
            onSubmit={sendEmail}
            className="bg-white/5 border border-white/10 rounded-2xl p-8 space-y-5"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg bg-slate-800 outline-none"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-lg bg-slate-800 outline-none"
              required
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="w-full p-3 rounded-lg bg-slate-800 outline-none"
              required
            />

            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              className="w-full p-3 rounded-lg bg-slate-800 outline-none"
              required
            ></textarea>

            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-cyan-500 hover:bg-cyan-600 flex justify-center items-center gap-2 transition"
            >
              <FaPaperPlane />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;