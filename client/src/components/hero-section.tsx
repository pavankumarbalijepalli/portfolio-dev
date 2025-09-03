import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail } from "lucide-react";

export default function HeroSection() {
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "Senior Data Scientist & AI Engineer";

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setDisplayedText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-tech-dark via-tech-gray to-tech-dark" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-purple-500/20" />
      
      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-20 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500/10 rounded-full blur-xl"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4 font-title">
            <span className="text-white">Pavan Kumar</span>
            <br />
            <span className="tech-gradient">Balijepalli</span>
          </h1>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="font-title tech-blue text-xl md:text-2xl mb-8"
        >
          <span className={displayedText === fullText ? "" : "typing-cursor"}>
            {displayedText}
          </span>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed font-content"
        >
          Specializing in Generative AI, Large Language Models, and Multi-Agent Systems. 
          Building the future of AI-powered solutions with cutting-edge technology.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button 
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open("https://github.com/pavankumarbalijepalli", "_blank")}
            className="tech-gradient px-8 py-3 rounded-full font-semibold font-mono hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform animate-glow"
          >
            View My Work
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open("https://github.com/pavankumarbalijepalli/achievements/blob/main/assets/PavanKumar_Balijepalli_v8.pdf", "_blank")}
            className="border border-blue-500 tech-blue px-8 py-3 rounded-full font-semibold font-mono hover:bg-blue-500 hover:text-black transition-all duration-300"
          >
            Download Resume
          </motion.button>
        </motion.div>
        
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 0.8 }}
          className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 mt-12 text-gray-400"
        >
          <div className="flex items-center space-x-2">
            <Phone className="w-4 h-4 tech-blue" />
            <span className="font-mono">+91 7673977636</span>
          </div>
          <div className="flex items-center space-x-2">
            <Mail className="w-4 h-4 tech-blue" />
            <span className="font-mono text-sm">2021sc04115@alumni.bits-pilani.ac.in</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
