import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Bot, MessageSquare, Database, Eye, UserCheck, HeartHandshake, Car, Cloud } from "lucide-react";

const experiences = [
  {
    title: "Senior Data Scientist",
    company: "Amnet Digital, Hyderabad",
    period: "SEPT 2023 - PRESENT",
    description: "Developed multiple generative AI systems using Prompt Engineering, LLM Output Structuring, and Agentic Orchestration.",
    color: "tech-blue",
    borderColor: "border-blue-500/50",
    icon: Bot,
    achievements: [
      "* Developed Multi-Agent Orchestrated workflow using OpenAI 4.1 mini with LangGraph and Azure AI Foundry",
      "* Built e-commerce chatbot (similar to Amazon Rufus) using LangChain and GPT-4o",
      "* Implemented Resume-to-Job Application system with Audio integration using OpenAI and ElevenLabs"
    ]
  },
  {
    title: "Senior ML Engineer", 
    company: "Nagarro, Hyderabad",
    period: "NOV 2022 - SEPT 2023",
    description: "Developed anomaly detection models for food and beverage production quality assurance.",
    color: "tech-purple",
    borderColor: "border-purple-500/50",
    icon: Eye,
    achievements: [
      "* Built OCR model using TensorFlow for product anomaly detection",
      "* Built my first LLM based Speech Chatbot using OpenAI to take orders at kiosk",
      "* Managed a team of 6 to meet project deadlines"
    ]
  },
  {
    title: "Data Science Analyst",
    company: "Tiger Analytics, Hyderabad", 
    period: "NOV 2021 - NOV 2022",
    description: "Developed classification models for insurance client customer profiling and automated monitoring systems.",
    color: "text-green-500",
    borderColor: "border-green-500/50",
    icon: UserCheck,
    achievements: [
      "* Built classification model for insurance application system using ICD codes",
      "* Automated Model Health Monitoring by building a framework which served for 160+ models",
      "* Performed Mann-Kendall test for trend analysis between time periods"
    ]
  },
  {
    title: "Project Engineer",
    company: "Wipro Ltd., Bengaluru",
    period: "JUN 2019 - NOV 2021", 
    description: "Developed Car Spare-part Availability Tracking System using Computer Vision and Deep Learning.",
    color: "text-orange-500",
    borderColor: "border-orange-500/50",
    icon: Car,
    achievements: [
      "* Built Convolutional Siamese model for automobile spare part recognition",
      "* Integrated model with existing project pipeline using Flask API",
      "* Deployed containerized model on AWS with server-side logic integration"
    ]
  }
];

export default function ExperienceSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="experience" className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-16 font-title"
        >
          <span className="tech-gradient">Experience</span>
        </motion.h2>
        
        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-cyan-500 opacity-70" style={{ height: 'calc(100% - 2rem)' }} />
          
          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative"
              >
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full border-4 border-tech-dark shadow-lg z-10" />
                <div className="ml-12 md:ml-0 md:grid md:grid-cols-2 md:gap-8">
                  <div className={index % 2 === 0 ? "md:text-right" : "md:col-start-2"}>
                    <motion.div 
                      whileHover={{ scale: 1.02, y: -5 }}
                      className={`glass-card rounded-2xl p-6 hover:${exp.borderColor} transition-all duration-300 hover-lift cursor-pointer`}
                    >
                      <div className="flex items-center mb-4">
                        <exp.icon className={`w-6 h-6 mr-3 ${exp.color}`} />
                        <h3 className={`text-2xl font-bold font-title ${exp.color}`}>{exp.title}</h3>
                      </div>
                      <h4 className="text-lg font-semibold text-gray-300 mb-2 font-content">{exp.company}</h4>
                      <p className="text-gray-400 font-mono mb-4">{exp.period}</p>
                      <p className="text-gray-300 mb-4 font-content text-sm leading-relaxed text-left">{exp.description}</p>
                      
                      <div className="space-y-3 text-sm text-gray-300">
                        {exp.achievements.map((achievement, i) => (
                          <div key={i} className="flex items-start space-x-2 text-left">
                            <div className={`w-2 h-2 rounded-full ${exp.color} mt-2 flex-shrink-0`} />
                            <span className="font-content leading-relaxed ml-[0px] mr-[0px]">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
