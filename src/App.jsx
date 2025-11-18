import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, Code, Award, BookOpen, Users, ExternalLink, ChevronDown } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      title: "AI Workflow Development – NOovershare",
      period: "Jan. 2024 – 2025",
      description: "End-to-end Generative AI workflow with object detection, text extraction, and summarization",
      tech: ["DETR-ResNet", "EasyOCR", "LLaMA 3 8B", "OpenCV", "Flask", "AES-128"],
      highlights: [
        "Integrated object detection (DETR-ResNet) with text extraction (EasyOCR)",
        "Implemented automatic summarization using LLaMA 3 8B",
        "Applied AES-128 encryption and OpenCV-based blurring for privacy",
        "Deployed interactive Flask web interfaces"
      ],
      github: "#"
    },
    {
      title: "Voting Platform for Organisations",
      period: "Jan. 2025 – Present",
      description: "Secure blockchain-based voting platform with decentralized authentication",
      tech: ["Ethereum", "Solidity", "Ganache", "Truffle", "MetaMask", "FastAPI", "React.js"],
      highlights: [
        "Built secure voting using Ethereum blockchain and Solidity smart contracts",
        "Configured blockchain networks with Ganache",
        "Integrated MetaMask for decentralized authentication",
        "FastAPI–React.js full-stack implementation"
      ],
      demo: "#"
    },
    {
      title: "Multi-Omics Cancer Survival Prediction",
      period: "Aug. 2025 – Oct. 2025",
      description: "Integrated multi-omics data analysis for cancer survival prediction",
      tech: ["Cox PH", "Random Survival Forests", "DeepSurv", "PCA", "LASSO", "Python"],
      highlights: [
        "Integrated clinical and multi-omics data (gene expression, DNA methylation, miRNA)",
        "Implemented Cox PH, Kaplan–Meier, and deep learning models",
        "Applied PCA and LASSO for feature selection",
        "Evaluated using C-index, Brier Score, and Log-Rank Test"
      ]
    },
    {
      title: "Smart Kitchen IoT System – Nutrigenius",
      period: "2025",
      description: "Raspberry Pi-based IoT device for automated food inventory management",
      tech: ["Raspberry Pi", "IoT", "OpenCV", "HTTP APIs", "Python"],
      highlights: [
        "Integrated weight sensor, camera, and ultrasonic sensor",
        "Automated food logging and inventory tracking",
        "Real-time monitoring with HTTP API integration",
        "Implemented automated alerts for inventory management"
      ]
    }
  ];

  const skills = {
    "Languages": ["C", "C++", "Python", "R", "MATLAB"],
    "Web Development": ["HTML", "CSS", "JavaScript", "Node.js", "React.js", "Next.js", "FastAPI"],
    "Hardware": ["Raspberry Pi", "ESP32", "Arduino"],
    "Core CS": ["Data Structures & Algorithms", "Operating Systems", "Computer Networking", "Machine Learning", "Generative AI", "Object Detection"],
    "Tools & Libraries": ["ANSYS", "OpenCV", "Express", "Matplotlib", "Scikit-learn", "Uvicorn"]
  };

  const certifications = [
    {
      title: "Data Science for Engineers",
      issuer: "NPTEL (IIT Madras)",
      achievement: "Elite Certification (Top 1% nationally)",
      description: "8-week course covering R, statistics, regression, clustering, and optimization"
    },
    {
      title: "AI for Economics",
      issuer: "NPTEL (IIT Kanpur)",
      description: "Applications of AI and ML in economic modeling, prediction, and decision-making"
    },
    {
      title: "Python for Beginners",
      issuer: "Udemy (Shan Singh)",
      description: "Python fundamentals including variables, loops, functions, and file handling"
    }
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              DC
            </h1>
            <div className="hidden md:flex gap-8">
              {['home', 'about', 'projects', 'skills', 'certifications', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize hover:text-cyan-400 transition-colors ${activeSection === section ? 'text-cyan-400' : ''}`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-4xl text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
            Darshan Chavan
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8">
            AI/ML Engineer | Full-Stack Developer | IoT Enthusiast
          </p>
          <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto">
            Building intelligent systems at the intersection of AI, blockchain, and IoT. 
            Passionate about creating innovative solutions that make a difference.
          </p>
          <div className="flex gap-6 justify-center mb-12">
            <a href="mailto:darshanchavan.cs23@rvce.edu.in" className="hover:text-cyan-400 transition-colors">
              <Mail size={28} />
            </a>
            <a href="tel:9902482292" className="hover:text-cyan-400 transition-colors">
              <Phone size={28} />
            </a>
            <a href="https://linkedin.com/in/darshan-chavan" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
              <Linkedin size={28} />
            </a>
            <a href="https://leetcode.com/u/now or never13" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
              <Code size={28} />
            </a>
          </div>
          <button onClick={() => scrollToSection('about')} className="animate-bounce">
            <ChevronDown size={32} className="text-cyan-400" />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold text-cyan-400 mb-4">Education</h3>
                <div className="space-y-4">
                  <div className="border-l-2 border-cyan-400 pl-4">
                    <h4 className="text-xl font-semibold">RV College of Engineering</h4>
                    <p className="text-slate-400">CGPA: 9.39 | Sept. 2023 – July 2025 | Bangalore</p>
                  </div>
                  <div className="border-l-2 border-cyan-400 pl-4">
                    <h4 className="text-xl font-semibold">Poornaprajna College (PUC)</h4>
                    <p className="text-slate-400">Percentage: 96% | 2021 – 2023 | Udupi</p>
                  </div>
                  <div className="border-l-2 border-cyan-400 pl-4">
                    <h4 className="text-xl font-semibold">Fathima High School</h4>
                    <p className="text-slate-400">Percentage: 99% | 2010 – 2021 | Hubli</p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-cyan-400 mb-4">Interests & Activities</h3>
                <p className="text-slate-300 mb-4">Gym, Jogging, Reading, Scriptwriting, Bhagavat Geeta Reading Clubs</p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-slate-700/50 rounded-full text-sm">Rotaract Club (2023–Present)</span>
                  <span className="px-4 py-2 bg-slate-700/50 rounded-full text-sm">Studio Zero Media Club (2023–Present)</span>
                  <span className="px-4 py-2 bg-slate-700/50 rounded-full text-sm">Google Developer Club (2024–Present)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <div key={idx} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:border-cyan-400 transition-all hover:transform hover:scale-105">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-semibold text-cyan-400">{project.title}</h3>
                  <div className="flex gap-2">
                    {project.github && (
                      <a href={project.github} className="text-slate-400 hover:text-cyan-400">
                        <Github size={20} />
                      </a>
                    )}
                    {project.demo && (
                      <a href={project.demo} className="text-slate-400 hover:text-cyan-400">
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>
                <p className="text-sm text-slate-400 mb-3">{project.period}</p>
                <p className="text-slate-300 mb-4">{project.description}</p>
                <ul className="space-y-2 mb-4">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="text-sm text-slate-400 flex items-start">
                      <span className="text-cyan-400 mr-2">▹</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-slate-700/50 rounded-full text-xs text-cyan-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Technical Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700">
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, i) => (
                    <span key={i} className="px-3 py-1 bg-slate-700/50 rounded-lg text-sm text-slate-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 px-6 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Certifications & Learning</h2>
          <div className="space-y-6">
            {certifications.map((cert, idx) => (
              <div key={idx} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:border-cyan-400 transition-all">
                <div className="flex items-start gap-4">
                  <Award className="text-cyan-400 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="text-xl font-semibold text-cyan-400">{cert.title}</h3>
                    <p className="text-slate-300 font-medium mb-2">{cert.issuer}</p>
                    {cert.achievement && (
                      <p className="text-cyan-300 font-semibold mb-2">{cert.achievement}</p>
                    )}
                    <p className="text-slate-400">{cert.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Let's Connect</h2>
          <p className="text-xl text-slate-300 mb-12">
            I'm always open to discussing new projects, opportunities, or collaborations.
          </p>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
            <div className="space-y-4">
              <a href="mailto:darshanchavan.cs23@rvce.edu.in" className="flex items-center justify-center gap-3 text-lg hover:text-cyan-400 transition-colors">
                <Mail size={24} />
                darshanchavan.cs23@rvce.edu.in
              </a>
              <a href="tel:9902482292" className="flex items-center justify-center gap-3 text-lg hover:text-cyan-400 transition-colors">
                <Phone size={24} />
                +91 9902482292
              </a>
              <div className="flex gap-6 justify-center pt-4">
                <a href="https://linkedin.com/in/darshan-chavan" target="_blank" rel="noopener noreferrer" 
                   className="px-6 py-3 bg-cyan-600 hover:bg-cyan-700 rounded-lg transition-colors font-semibold">
                  LinkedIn Profile
                </a>
                <a href="https://leetcode.com/u/now or never13" target="_blank" rel="noopener noreferrer"
                   className="px-6 py-3 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors font-semibold">
                  LeetCode Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-slate-800 text-center text-slate-400">
        <p>© 2025 Darshan Chavan. Built with React & Tailwind CSS.</p>
      </footer>
    </div>
  );
}