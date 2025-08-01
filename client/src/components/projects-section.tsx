import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Github, Code, Brain, Database, Bot, Globe, Zap } from "lucide-react";

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
    tech: ["Python", "PEFT", "Transformers", "TRL", "bitsandbytes"],
    githubUrl: "https://github.com/placeholder/ai-chat-assistant",
    liveUrl: "https://ai-chat-demo.example.com",
    icon: Bot,
    color: "text-blue-400",
    borderColor: "border-blue-500/50",
    category: "AI/ML"
  },
  {
    title: "Multi-Agent System",
    description: "Sophisticated multi-agent framework for autonomous task coordination. Implements agent communication protocols, task distribution, and collaborative problem-solving using advanced AI techniques.",
    tech: ["Python", "AutoGen", "LangGraph", "Redis", "Docker"],
    githubUrl: "https://github.com/placeholder/multi-agent-system",
    icon: Brain,
    color: "text-purple-400",
    borderColor: "border-purple-500/50",
    category: "AI/ML"
  },
  {
    title: "Real-time Analytics Dashboard",
    description: "High-performance data visualization platform processing millions of events per second. Features real-time streaming, interactive charts, and predictive analytics for business intelligence.",
    tech: ["React", "D3.js", "Apache Kafka", "ClickHouse", "Node.js"],
    githubUrl: "https://github.com/placeholder/analytics-dashboard",
    liveUrl: "https://analytics-demo.example.com",
    icon: Database,
    color: "text-green-400",
    borderColor: "border-green-500/50",
    category: "Data Science"
  },
  {
    title: "Neural Network Optimizer",
    description: "Custom deep learning framework with novel optimization algorithms. Implements gradient-free optimization techniques and automated hyperparameter tuning for enhanced model performance.",
    tech: ["Python", "PyTorch", "NumPy", "CUDA", "MLflow"],
    githubUrl: "https://github.com/placeholder/neural-optimizer",
    icon: Zap,
    color: "text-yellow-400",
    borderColor: "border-yellow-500/50",
    category: "AI/ML"
  },
  {
    title: "Distributed Computing Platform",
    description: "Scalable microservices architecture for handling large-scale data processing tasks. Features auto-scaling, load balancing, and fault tolerance with Kubernetes orchestration.",
    tech: ["Go", "Kubernetes", "gRPC", "PostgreSQL", "Redis"],
    githubUrl: "https://github.com/placeholder/distributed-platform",
    icon: Globe,
    color: "text-cyan-400",
    borderColor: "border-cyan-500/50",
    category: "Backend"
  },
  {
    title: "Code Generation Tool",
    description: "AI-powered code generation and refactoring assistant. Utilizes fine-tuned language models to generate high-quality code snippets, documentation, and automated testing suites.",
    tech: ["TypeScript", "OpenAI Codex", "AST Parser", "Electron", "Monaco Editor"],
    githubUrl: "https://github.com/placeholder/code-generator",
    liveUrl: "https://codegen-demo.example.com",
    icon: Code,
    color: "text-orange-400",
    borderColor: "border-orange-500/50",
    category: "Tools"
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