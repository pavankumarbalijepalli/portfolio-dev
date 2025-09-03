import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Github, Code, Brain, Database, Bot, Globe, Zap, Languages, Scroll, Cpu, BotMessageSquare } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tech: string[];
  githubUrl: string;
  liveUrl?: string;
  icon: React.ElementType;
  color: string;
  borderColor: string;
  category: string;
}

const projects: Project[] = [
  {
    title: "Research on SLMs vs LLMs",
    description: "In-depth analysis comparing Locally Finetuned Phi-2 and Defog SQLCoder-7b across NL2SQL tasks. Evaluates performance, efficiency, and practical applications in real-world scenarios.",
    tech: ["Python", "PEFT", "Transformers", "TRL", "Bitsandbytes"],
    githubUrl: "https://github.com/placeholder/ai-chat-assistant",
    liveUrl: "https://ai-chat-demo.example.com",
    icon: Scroll,
    color: "text-blue-400",
    borderColor: "border-blue-500/50",
    category: "AI Research"
  },
  {
    title: "Telugu Finetuned LLM",
    description: "Custom fine-tuned language model for Telugu language tasks. Utilizes advanced techniques for low-resource languages, achieving state-of-the-art results in text generation and understanding.",
    tech: ["Python", "PEFT", "Transformers", "TRL", "Unsloth"],
    githubUrl: "https://github.com/placeholder/multi-agent-system",
    liveUrl: "https://codegen-demo.example.com",
    icon: Languages,
    color: "text-purple-400",
    borderColor: "border-purple-500/50",
    category: "AI Research"
  },
  {
    title: "Local Pretrained LLM",
    description: "A 20M parameter language model trained on a small dataset. Designed for efficient deployment in resource-constrained environments, with capabilities for text generation and understanding.",
    tech: ["Python", "PyTorch", "Transformers", "Numpy", "CUDA"],
    githubUrl: "https://github.com/placeholder/analytics-dashboard",
    liveUrl: "https://analytics-demo.example.com",
    icon: Cpu,
    color: "text-green-400",
    borderColor: "border-green-500/50",
    category: "Data Science"
  },
  {
    title: "K.U.W.T MultiAgent Orchestration",
    description: "Multi-agent orchestration framework for Keep-Up-With-Technology usecase. Integrates multiple AI agents to collaboratively make decisions to fetch latest tech information from the internet.",
    tech: ["Python", "LangGraph", "OpenAI", "LangFuse"],
    githubUrl: "https://github.com/placeholder/neural-optimizer",
    liveUrl: "https://codegen-demo.example.com",
    icon: Bot,
    color: "text-yellow-400",
    borderColor: "border-yellow-500/50",
    category: "AI Agents"
  },
  {
    title: "AI Product Search Engine",
    description: "Similar to Amazon Rufus, this AI-powered search engine uses advanced natural language processing to understand user queries and provide relevant product recommendations. Can be integrated with any e-commerce platform.",
    tech: ["Python", "LangGraph", "OpenAI", "Ollama", "ChromaDB"],
    githubUrl: "https://github.com/placeholder/distributed-platform",
    liveUrl: "https://codegen-demo.example.com",
    icon: BotMessageSquare,
    color: "text-cyan-400",
    borderColor: "border-cyan-500/50",
    category: "AI Agents"
  },
  {
    title: "Peronsal Document Organizer Agent",
    description: "An AI agent that organizes personal documents using natural language understanding. It categorizes, tags, and retrieves documents based on user questions, enhancing productivity and document management.",
    tech: ["Python", "LangGraph", "Ollama", "ChromaDB", "Edge"],
    githubUrl: "https://github.com/placeholder/code-generator",
    liveUrl: "https://codegen-demo.example.com",
    icon: BotMessageSquare,
    color: "text-orange-400",
    borderColor: "border-orange-500/50",
    category: "AI Agents"
  }
];

export default function ProjectsSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="projects" className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-16 font-title"
        >
          <span className="tech-gradient">Featured Projects</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, y: -10 }}
              className={`glass-card rounded-2xl p-6 hover:${project.borderColor} transition-all duration-300 hover-lift cursor-pointer group h-full flex flex-col`}
            >
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 flex items-center justify-center mr-4`}>
                  <project.icon className={`w-6 h-6 ${project.color}`} />
                </div>
                <div className="flex-1">
                  <h3 className={`text-xl font-bold font-title ${project.color} mb-1`}>{project.title}</h3>
                  <span className="text-xs text-gray-400 bg-gray-800/50 px-2 py-1 rounded-full font-content">
                    {project.category}
                  </span>
                </div>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed font-content flex-1">
                {project.description}
              </p>

              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs bg-blue-500/10 text-blue-300 px-3 py-1 rounded-full border border-blue-500/20 font-content"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex space-x-3 mt-auto">
                <motion.a
                  href={project.githubUrl}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2 bg-gray-800/50 hover:bg-gray-700/50 px-4 py-2 rounded-lg transition-all duration-300 text-sm font-content flex-1 justify-center"
                >
                  <Github className="w-4 h-4" />
                  <span>Code</span>
                </motion.a>
                
                {project.liveUrl && (
                  <motion.a
                    href={project.liveUrl}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center space-x-2 bg-blue-600/20 hover:bg-blue-600/30 px-4 py-2 rounded-lg transition-all duration-300 text-sm font-content flex-1 justify-center ${project.color}`}
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}