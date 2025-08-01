import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { Code, Bot, Brain, Database, Cloud, Cog, Star, Check } from "lucide-react";

const skillCategories = [
  {
    title: "Languages & Tools",
    icon: Code,
    color: "tech-blue",
    borderColor: "border-blue-500/50",
    skills: [
      { name: "Python", level: 95 },
      { name: "SQL", level: 90 }, 
      { name: "R", level: 85 },
      { name: "Git", level: 80 }
    ]
  },
  {
    title: "Gen-AI & LLMs",
    icon: Bot,
    color: "tech-purple", 
    borderColor: "border-purple-500/50",
    items: [
      "OpenAI GPT-4o",
      "LangChain", 
      "LangGraph",
      "Transformers",
      "PEFT",
      "CrewAI"
    ]
  },
  {
    title: "Machine Learning",
    icon: Brain,
    color: "text-green-500",
    borderColor: "border-green-500/50", 
    skills: [
      { name: "TensorFlow", level: 95 },
      { name: "Scikit-Learn", level: 90 },
      { name: "PyTorch", level: 85 }
    ]
  },
  {
    title: "Data Processing", 
    icon: Database,
    color: "text-yellow-500",
    borderColor: "border-yellow-500/50",
    items: [
      "NumPy",
      "Pandas", 
      "Seaborn",
      "OpenCV"
    ]
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    color: "text-blue-500",
    borderColor: "border-blue-500/50",
    items: [
      "Azure",
      "AWS",
      "Docker", 
      "Flask API"
    ]
  },
  {
    title: "Specialized Models",
    icon: Cog,
    color: "text-purple-500", 
    borderColor: "border-purple-500/50",
    items: [
      "Phi-2 (Fine-tuned)",
      "Mistral 7B/13B",
      "Llama Models",
      "Qwen2.5-Coder"
    ]
  }
];

function SkillBar({ skill, inView, delay }: { skill: { name: string; level: number }, inView: boolean, delay: number }) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        setWidth(skill.level);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [inView, skill.level, delay]);

  return (
    <div className="skill-item">
      <div className="flex justify-between mb-2">
        <span className="font-title">{skill.name}</span>
        <span className="tech-blue">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2">
        <motion.div
          className="tech-gradient h-2 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${width}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

export default function SkillsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-16 font-title"
        >
          <span className="tech-gradient">Technical Skills</span>
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className={`glass-card rounded-2xl p-6 hover:${category.borderColor} transition-all duration-300 hover-lift cursor-pointer`}
            >
              <h3 className={`text-xl font-bold font-title ${category.color} mb-6 flex items-center`}>
                <category.icon className="w-6 h-6 mr-3" />
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.skills ? (
                  category.skills.map((skill, skillIndex) => (
                    <SkillBar
                      key={skillIndex}
                      skill={skill}
                      inView={inView}
                      delay={index * 100 + skillIndex * 50}
                    />
                  ))
                ) : (
                  <div className="space-y-3">
                    {category.items?.map((item, itemIndex) => (
                      <motion.div
                        key={itemIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: index * 0.1 + itemIndex * 0.05 }}
                        className="flex items-center justify-between p-2 bg-white/5 rounded-lg"
                      >
                        <span className="font-content text-sm">{item}</span>
                        {item.includes("Fine-tuned") ? (
                          <div className="w-4 h-4 bg-yellow-500 rounded-full" />
                        ) : item.includes("GPT") || item.includes("LangChain") || item.includes("Azure") ? (
                          <Star className="w-4 h-4 text-yellow-400" />
                        ) : (
                          <Check className="w-4 h-4 text-green-400" />
                        )}
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
