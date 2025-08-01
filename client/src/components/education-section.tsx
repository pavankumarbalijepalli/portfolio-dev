import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { GraduationCap, University, Award, FileText, Cpu, Cloud } from "lucide-react";

const educationData = [
  {
    degree: "Master's of Technology",
    field: "Data Science & Engineering", 
    institution: "Birla Institute of Technological Sciences, Pilani",
    cgpa: "7.9",
    year: "2024",
    icon: GraduationCap,
    color: "tech-blue",
    borderColor: "border-blue-500/50"
  },
  {
    degree: "Bachelor's of Technology",
    field: "Electrical and Electronics",
    institution: "Jawaharlal Nehru Technological University, Hyd", 
    cgpa: "8.21",
    year: "2019",
    icon: University,
    color: "tech-purple", 
    borderColor: "border-purple-500/50"
  }
];

const achievements = [
  {
    title: "Fine-tuned 2 LLMs",
    description: "On Local Machine over RTX 4070",
    icon: Cpu,
    color: "text-yellow-500",
    borderColor: "border-yellow-500/50"
  },
  {
    title: "Fine-tuned 7+ LLMs", 
    description: "On Azure and Provider Instances",
    icon: Cloud,
    color: "text-blue-500",
    borderColor: "border-blue-500/50"
  },
  {
    title: "Disseration Paper",
    description: "Local FT Phi2 vs Defog Models",
    icon: FileText,
    color: "text-green-500", 
    borderColor: "border-green-500/50"
  }
];

export default function EducationSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="education" className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-16 font-title"
        >
          <span className="tech-gradient">Education</span>
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, y: -8 }}
              className={`glass-card rounded-2xl p-8 hover:${edu.borderColor} transition-all duration-300 hover-lift cursor-pointer`}
            >
              <div className="text-center">
                <div className="w-16 h-16 tech-gradient rounded-full flex items-center justify-center mx-auto mb-6">
                  <edu.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className={`text-2xl font-bold font-title ${edu.color} mb-2`}>{edu.degree}</h3>
                <p className="text-lg text-gray-300 mb-2 font-content">{edu.field}</p>
                <p className="text-gray-400 font-mono mb-4">{edu.institution}</p>
                <div className="flex justify-center items-center space-x-4">
                  <span className={`text-3xl font-bold ${edu.color}`}>{edu.cgpa}</span>
                  <span className="text-gray-400">CGPA</span>
                </div>
                <p className="text-gray-500 text-sm mt-2">{edu.year}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-300 font-title">Key Achievements</h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.7 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className={`glass-card rounded-xl p-6 text-center hover:${achievement.borderColor} transition-all duration-300`}
              >
                <achievement.icon className={`w-12 h-12 ${achievement.color} mx-auto mb-4`} />
                <h4 className="font-bold text-lg mb-2 font-title">{achievement.title}</h4>
                <p className="text-gray-400 text-sm font-content">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
