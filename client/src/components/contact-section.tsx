import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Mail, Phone, MapPin, Linkedin, Github, Brain } from "lucide-react";

// Custom LeetCode Icon Component
const LeetCodeIcon = ({ className = "w-6 h-6" }) => (
  <svg 
    role="img" 
    viewBox="0 0 24 24" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="currentColor"
  >
    <title>LeetCode</title>
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
  </svg>
);


// Custom Codeforces Icon Component
const CodeforcesIcon = ({ className = "w-6 h-6" }) => (
  <svg 
    viewBox="0 0 24 24" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="currentColor"
  >
    <title>Codeforces</title>
    <path d="M4.5 7.5A1.5 1.5 0 0 1 6 9v10.5A1.5 1.5 0 0 1 4.5 21h-3A1.5 1.5 0 0 1 0 19.5V9a1.5 1.5 0 0 1 1.5-1.5h3zM12 6a1.5 1.5 0 0 1 1.5 1.5v11A1.5 1.5 0 0 1 12 20H9a1.5 1.5 0 0 1-1.5-1.5v-11A1.5 1.5 0 0 1 9 6h3zm7.5-3A1.5 1.5 0 0 1 21 4.5v15a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 15 19.5v-15A1.5 1.5 0 0 1 16.5 3h3z"/>
  </svg>
);

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "2021sc04115@alumni.bits-pilani.ac.in",
    href: "mailto:2021sc04115@alumni.bits-pilani.ac.in",
    color: "tech-blue",
    borderColor: "border-blue-500/50"
  },
  {
    icon: Phone,
    title: "Phone", 
    value: "+91 7673977636",
    href: "tel:+917673977636",
    color: "tech-purple",
    borderColor: "border-purple-500/50"
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Hyderabad, India",
    href: "#",
    color: "text-green-500",
    borderColor: "border-green-500/50"
  }
];

const socialLinks = [
  { 
    icon: Linkedin, 
    href: "https://www.linkedin.com/in/pavan-kumar-balijepalli/", 
    color: "text-blue-600", 
    hoverColor: "hover:border-blue-500/50",
    title: "LinkedIn"
  },
  { 
    icon: Github, 
    href: "https://github.com/pavankumarbalijepalli", 
    color: "text-gray-300", 
    hoverColor: "hover:border-gray-500/50",
    title: "GitHub"
  },
  { 
    icon: Brain, 
    href: "https://huggingface.co/pavankumarbalijepalli/", 
    color: "text-yellow-500", 
    hoverColor: "hover:border-yellow-500/50",
    title: "HF"
  },
  { 
    icon: LeetCodeIcon, 
    href: "https://leetcode.com/u/pavankumarbalijepalli/", 
    color: "text-orange-500", 
    hoverColor: "hover:border-orange-500/50",
    title: "LeetCode"
  },
  { 
    icon: CodeforcesIcon, 
    href: "https://codeforces.com/profile/kundelu-casual", 
    color: "text-blue-400", 
    hoverColor: "hover:border-blue-500/50",
    title: "Codeforces"
  }
];

export default function ContactSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="contact" className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-8 font-title"
        >
          <span className="tech-gradient">Let's Connect</span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-gray-300 max-w-2xl mx-auto mb-12 font-content"
        >
          Ready to collaborate on cutting-edge AI projects? Let's build the future together.
        </motion.p>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {contactInfo.map((contact, index) => (
            <motion.a
              key={index}
              href={contact.href}
              target={contact.href.startsWith('http') ? '_blank' : '_self'}
              rel={contact.href.startsWith('http') ? 'noopener noreferrer' : ''}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className={`glass-card rounded-xl p-6 hover:${contact.borderColor} transition-all duration-300 hover-lift cursor-pointer block`}
            >
              <contact.icon className={`w-12 h-12 ${contact.color} mx-auto mb-4`} />
              <h3 className="font-bold text-lg mb-2 font-title">{contact.title}</h3>
              <p className={`text-gray-400 font-mono text-sm ${contact.title === 'Email' ? 'break-all' : ''}`}>
                {contact.value}
              </p>
            </motion.a>
          ))}
        </div>
        
        {/* Social Links - Static Tiles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-12"
        >
          <h3 className="text-xl font-bold text-center mb-6 text-gray-300 font-title">Connect With Me</h3>
          <div className="flex justify-center items-center gap-6 flex-wrap">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`glass-card rounded-xl p-4 ${social.hoverColor} transition-all duration-300 hover-lift flex flex-col items-center justify-center w-20 h-20 group`}
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.1,
                  boxShadow: `0 10px 30px ${social.color.includes('blue') ? 'rgba(59, 130, 246, 0.5)' : 
                                          social.color.includes('green') ? 'rgba(34, 197, 94, 0.5)' :
                                          social.color.includes('purple') ? 'rgba(147, 51, 234, 0.5)' :
                                          social.color.includes('yellow') ? 'rgba(234, 179, 8, 0.5)' :
                                          social.color.includes('orange') ? 'rgba(249, 115, 22, 0.5)' :
                                          'rgba(59, 130, 246, 0.5)'}`
                }}
                whileTap={{ scale: 0.95 }}
                title={social.title}
              >
                <social.icon className={`${social.color} group-hover:scale-110 transition-transform duration-300 mb-1`} size={20} />
                <span className="text-xs text-gray-300 font-content">{social.title}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
      
      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 1 }}
        className="py-8 border-t border-white/10 mt-16"
      >
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400 font-content">
            © 2024 Pavan Kumar Balijepalli. Built with passion for AI and innovation.
          </p>
        </div>
      </motion.footer>
    </section>
  );
}
