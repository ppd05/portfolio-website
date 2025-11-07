import React, { useState, useEffect } from 'react';
import { Mail, Phone, Github, Linkedin, Download, Menu, X, ExternalLink, MapPin, Briefcase, GraduationCap, Code, Award } from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'skills', 'education', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'HOME' },
    { id: 'about', label: 'ABOUT' },
    { id: 'experience', label: 'EXPERIENCE' },
    { id: 'skills', label: 'SKILLS' },
    { id: 'education', label: 'EDUCATION' },
    { id: 'projects', label: 'PROJECTS' },
    { id: 'contact', label: 'CONTACT' }
  ];
  const projects = [
  {
    title: 'Surgical Complication AI assistant',
    subtitle: 'AI -Powered RAG System for surgery-related queries',
    description: 'Engineered a RAG pipeline for a surgical knowledge base, integrating LangChain, cost-effective HuggingFace embeddings, and FAISS vector store with a Streamlit UI for high-speed, fact-based clinical query responses.',
    tech: ['Python', 'Scikit-Learn', 'Pandas', 'LangChain', 'Streamlit','HuggingFace','FAISS','Google gemini 2.0 flash lite'],
    github: 'https://github.com/ppd05/Surgical-Complication-AI-assistant/',
    demo: 'https://surgical-complication-ai-assistant.streamlit.app/'
  },

  {
    title: 'Clinical Notes AI assistant',
    subtitle: 'AI - powered RAG System for querying clinical notes',
    description: 'Developed a RAG based AI application that converts unstructured clinical notes to structured (JSON) data and uses this structured data as knowledge base to summarize and act as a chatbot.',
    tech: ['Python', 'Scikit-Learn', 'Pandas', 'LangChain', 'Streamlit','HuggingFace','FAISS','Google gemini 2.0 flash lite'],
    github: 'https://github.com/ppd05/clinical-notes-rag/',
    demo: 'https://clinical-notes-rag-ai.streamlit.app/'
  },

  {
    title: 'Infrastructure Crack Detection System',
    subtitle: 'Computer Vision tech for crack detection in infrastructures',
    description: 'Developed ResNet101-based deep learning application achieving 95% accuracy in detecting structural cracks; built Streamlit web interface for real-time image analysis with <2s inference time.',
    tech: ['Python', 'StreamLit', 'Numpy', 'Tensorflow', 'FastAPI(locally)', 'ResNet101','PIL','Transfer Learning'],
    github: 'https://github.com/ppd05/infrastructure-crack-detection/',
    demo: 'https://infrastructure-crack-detection.streamlit.app/'
  },

  {
    title: 'Hotel Restaurant Review sentiment predictor: NLP Project',
    subtitle: 'Sentiment Analysis on hotel reviews using NLP',
    description: 'A Streamlit web app that trains and evaluates multiple ML models to predict sentiment from restaurant reviews',
    tech: ['Python', 'Scikit-Learn', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn','RandomForest','Logistic Regression','Naive Bayes','streamlit'],
    github: 'https://github.com/ppd05/restaurant-review-sentiment-analyzer',
    demo: 'https://hotel-restaurant-review-sentiment-analysis.streamlit.app/'
  },

  {
    title: 'Spaceship_Titanic_project competition',
    subtitle: 'Using ML to predict spaceship survival',
    description: 'Built and tuned an XGBoost model with Stratified K-Fold CV, achieving ~80% validation accuracy, with full reproducibility from pre-processing to modeling achieving rank of 572 (current rank)',
    tech: ['Python', 'Exploratory Data Analysis', 'Feature Engineering', 'XGBoost', 'Stratified K-Fold CV', 'Pandas', 'NumPy'],
    github: 'https://github.com/ppd05/Titanic_spaceship_kaggle_competition/'
  },

  {
    title: 'Brain Tumor Classification: Deep Learning Project',
    subtitle: 'Classifying brain tumors using CNNs',
    description: 'Developed a custom CNN model in TensorFlow/Keras to classify brain tumor MRI scans into 4 categories (Glioma, Meningioma, Pituitary, No Tumor), achieving 78% test accuracy through data augmentation',
    tech: ['Python', 'TensorFlow', 'Keras', 'CNN', 'Data Augmentation', 'Transfer Learning', 'Pandas', 'NumPy'],
    github: 'https://github.com/ppd05/brain-tumor-classification_cnn'
  }
];

  const experiences = [
    {
      title: 'Independent AI/ML Projects and Coursework',
      company: 'Self-Directed Learning (Remote)',
      location: 'Bengaluru, Karnataka',
      period: 'Aug 2025 - Present',
      description: 'Hands-on remote learning creating ML models, deep learning systems, RAG assistants, and cloud-MLOps setups using modern AI frameworks.',
      achievements: [
      'Completed end-to-end Machine Learning, Deep Learning projects using Python, Scikit-Learn, and XGBoost.',
      'Built RAG-based clinical decision support and surgical assistant projects.',
      'Practising and learning AWS, GCP, Vertex AI for ML ops, along with Docker and Kubernetes',
      'Developing proficiency in TensorFlow, PyTorch, and Generative AI applications along with MCP [model context protocol] and Agentic AI.'
      ]
    },
    {
      title: 'Database Management Analyst',
      company: 'IQVIA RDS (India) Private Limited',
      location: 'Bengaluru, Karnataka',
      period: 'Jun 2024 - Aug 2025',
      description: 'Managed end-to-end clinical data workflows-including SAS processing, Python-based ingestion systems, testing, validation, and AWS migration-ensuring high data accuracy, optimised performance, and reliable study deliverables.',
      achievements:[
      "Utilized SAS to process and deliver clinical datasets with 98% on-time submissions and 95% production accuracy.",
      "Identified and resolved 500+ issues in the Python-based Clinical Data Ingestion (CDI) system, reducing errors by 85%.",
      "Collaborated with cross-functional teams to define and validate data acquisition requirements, achieving 97% data accuracy.",
      "Led test planning and execution for CDI and Extraction tools, achieving a 100% test case pass rate and reducing processing time from 6 hrs to 2 hrs.",
      "Supported AWS server migration and testing with a 100% successful cutover and only 60 minutes of controlled downtime.",
      "Served as SME/POC for CDI and Extraction tools, identifying 200+ critical bugs with 98% diagnostic accuracy.",
      "Developed SQL-based reports and dashboards using Oracle APEX for internal data visualization and reporting."
]
    },
    {
      title: 'Clinical Data Programming assoc1',
      company: 'IQVIA RDS (India) Private Limited',
      location: 'Bengaluru, Karnataka',
      period: 'Sep 2022 - Jun 2024',
      description: 'Processed, validated, and optimized clinical trial data while supporting CAPA/RCA activities and ensuring high data quality and compliance.',
      achievements: [
      "Drove a Corrective and Preventive Action (CAPA) for regulatory data by conducting Root Cause Analysis (RCA), executing data reprocessing, and updating SOPs/WIs to prevent recurrence.",
      "Reduced document approval cycle time by 25% by optimizing workflows within Veeva Vault.",
      "Managed end-to-end clinical trial data and partnered with clients and biostatistics to draft requirement specifications for data acquisition using SAS datasets.",
      "Ensured data quality and compliance by reviewing, analyzing, and processing clinical trial data transfers to meet project specifications."
]
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Engineering in Electronics and Communications',
      school: 'Dr. Ambedkar Institute of Technology, Bengaluru',
      location: 'Bengaluru, Karnataka, India',
      period: '2018 - 2022',
      cgpa: '8.9/10',
      coursework: ['Data Structures', 'Algorithms', 'Machine Learning', 'Statistics', 'Tableau', 'Database Management Systems', 'Computer Networks', 'Operating Systems','Artificial Intelligence'],
    }
  ];

  const certifications = [
    'Python for Absolute Beginners, Python Beginner to Pro (Udemy)',
    'DS (Data Structures) basics using Python Programming.(Geeks for Geeks)',
    'Problem Solving in Python (HackerRank)',
    'R programming For Data Science (Udemy)',
    'Python-for-data-science-and-machine-learning-bootcamp (Udemy)',
    'Machine Learning A-Z: AI, Python & R',
    'LangChain - Develop AI Agents with LangChain and LangGraph (Udemy)',
    'Docker Containers and Kubernetes Fundamentals (Youtube)'
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black shadow-lg z-50">
        <div className="max-w-1xl mx-auto px-10 sm:px-5 lg:px-50">
          <div className="flex justify-between items-center h-20">
            <div className="text-2xl font-bold text-white">Portfolio</div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium tracking-wider transition-all duration-300 pb-1 border-b-2 ${
                    activeSection === item.id 
                      ? 'text-white border-white' 
                      : 'text-gray-400 border-transparent hover:text-white hover:border-gray-400'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-black border-t border-gray-800">
            <div className="px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left py-3 text-base font-medium tracking-wider border-l-4 pl-4 ${
                    activeSection === item.id
                      ? 'text-white border-white'
                      : 'text-gray-400 border-transparent hover:text-white hover:border-gray-400'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section - Designed for Photo Left, Content Right */}
<section id="home" className="min-h-screen flex items-center py-20 bg-white">
  <div className="max-w-6xl mx-auto px-6"> {/* Increased max-w to 6xl for more horizontal space */}
    <div className="flex flex-col md:flex-row items-center md:items-start gap-12 md:gap-16"> {/* Core flex container */}
      
      <div className="flex-shrink-0"> {/* Ensures photo doesn't shrink on smaller screens */}
        <div className="w-80 h-80 rounded-full overflow-hidden border-2 border-black shadow-2xl"> {/* Slightly larger photo */}
          <img 
            src="/profile-photo.jpg" 
            alt="Prateek Prasad Deshpande" 
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
          <div className="w-full h-full bg-gray-200 flex items-center justify-center text-5xl font-bold" style={{display: 'none'}}>
            PD
          </div>
        </div>
      </div>

      <div className="flex-grow text-center md:text-left">
        
        {/* Main Heading and Title */}
        <h1 className="text-3xl sm:text-1xl lg:text-7xl font-extrabold mb-2 text-black tracking-tight leading-tight">
          PRATEEK PRASAD DESHPANDE
        </h1>
        <p className="text-3xl sm:text-4xl text-gray-800 font-semibold mb-6"> 
          AI/ML aspirant | Data Science| Clinical Data analyst Professional
        </p>
        <p className="text-xl text-gray-500 max-w-xl md:max-w-none mx-auto md:mx-0 mb-10">
          Data Science enthusiast | Problem Solver | Innovation Driver
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center md:justify-start gap-6">
          <a 
            href="/resume.pdf" 
            download
            className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-all duration-300 inline-flex items-center gap-2 shadow-lg transform hover:scale-[1.02]"
          >
            <Download size={20} />
            Download Resume
          </a>
          <button 
            onClick={() => scrollToSection('contact')}
            className="bg-white text-black px-8 py-3 rounded-lg border-2 border-black hover:bg-black hover:text-white transition-all duration-300 inline-flex items-center gap-2 shadow-lg transform hover:scale-[1.02]"
          >
            <Mail size={20} />
            Contact Me
          </button>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* About Section */}
<section id="about" className="py-25 px-4 bg-white"> 
  <div className="max-w-6xl mx-auto">
    <h2 className="text-2xl sm:text-5xl font-bold mb-8 text-center text-black">
      About Me
    </h2>
    {/* Increased max-width for the text content for better readability on large screens */}
    <div className="max-w-4xl mx-auto"> 
      <p className="text-xl text-gray-700 leading-loose mb-8">
        Results-driven data professional with strong expertise in clinical data programming, management using SAS, SQL, Oracle APEX, and Python. Proven success in leading end-to-end clinical study operations, database locks, and data validation for regulatory compliance. Delivered automation testing and cloud-based testing, including SAS-to-Python migration. Currently upskilling in AI/ML engineering with hands-on project experience in TensorFlow, PyTorch, and cloud platforms (AWS, GCP). Actively transitioning career towards AI/ML, focusing on developing and integrating scalable AI applications and LLM-driven solutions such as RAG, MCP and Agentic AI.
      </p>
      <p className="text-xl text-gray-700 leading-loose mb-6">
        My expertise spans from exploratory data analysis and feature engineering to model development, deployment, 
        and monitoring. I'm particularly interested in Large Language Models, Retrieval-Augmented Generation (RAG), Model Context Protol(MCP) and how these tools along with AI can be leveraged to solve complex problems.
        I am passionate about continuous learning and staying updated with the latest advancements in AI/ML technologies.
      </p>
    </div>
  </div>
</section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold mb-16 text-center">Work Experience</h2>
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-8 border-l-4 border-black pb-8">
                <div className="absolute -left-3 top-0 w-6 h-6 bg-black rounded-full border-4 border-white"></div>
                <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex flex-wrap justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
                      <p className="text-xl text-gray-600 mb-2">{exp.company}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <MapPin size={16} />
                          {exp.location}
                        </span>
                        <span>•</span>
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4 italic">{exp.description}</p>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-gray-700 flex items-start gap-2">
                        <span className="text-black mt-1">▸</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
      <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center">Skills</h2>

      <div className="space-y-0.5">

      {/* Languages */}
      <div className="bg-blue-50/30 p-6 rounded-xl shadow-sm">
        <h3 className="text-2xl font-semibold mb-6">Languages</h3>

        <div className="flex flex-wrap gap-4">
          {[
            "Python",
            "SQL",
            "R Programming (Basics)",
            "Streamlit (Basics)",
            "SAS",
          ].map((skill, index) => (
            <div
              key={index}
              className="inline-flex items-center px-4 py-2 bg-white border-2 border-gray-200 
                         rounded-lg text-sm font-medium shadow-md 
                         hover:border-blue-600 hover:bg-blue-100 transition-all"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>

      {/* Technologies & Tools (non-cloud) */}
      <div className="bg-green-50/30 p-6 rounded-xl shadow-sm">
        <h3 className="text-2xl font-semibold mb-6">Technologies & Tools</h3>

        <div className="flex flex-wrap gap-4">
          {[
            "PostgreSQL",
            "MySQL",
            "Tableau",
            "Power BI",
            "LangChain",
            "LangGraph",
            "Docker (Basics)",
            "Kubernetes (Basics)",
            "HuggingFace",
            "MLflow",
            "Prompt Engineering",
            "Vector Databases",
            "LLMs",
            "FastAPI",
            "RAG",
            "MCP",
          ].map((skill, index) => (
            <div
              key={index}
              className="inline-flex items-center px-4 py-2 bg-white border-2 border-gray-200 
                         rounded-lg text-sm font-medium shadow-md 
                         hover:border-green-600 hover:bg-green-100 transition-all"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>

      {/* Cloud Technologies */}
      <div className="bg-sky-50/30 p-6 rounded-xl shadow-sm">
        <h3 className="text-2xl font-semibold mb-6">Cloud Technologies</h3>

        <div className="flex flex-wrap gap-4">
          {[
            "AWS",
            "GCP",
            "Vertex AI",
          ].map((skill, index) => (
            <div
              key={index}
              className="inline-flex items-center px-4 py-2 bg-white border-2 border-gray-200 
                         rounded-lg text-sm font-medium shadow-md 
                         hover:border-sky-600 hover:bg-sky-100 transition-all"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>

      {/* Clinical Trial Technology (EDC Included) */}
      <div className="bg-orange-50/30 p-6 rounded-xl shadow-sm">
        <h3 className="text-2xl font-semibold mb-6">Clinical Trial Technology</h3>

        <div className="flex flex-wrap gap-4">
          {[
            "Medidata RAVE",
            "Veeva EDC",
            "Veeva Vault (Clinical)",
            "eCOA",
            "ePRO",
          ].map((skill, index) => (
            <div
              key={index}
              className="inline-flex items-center px-4 py-2 bg-white border-2 border-gray-200 
                         rounded-lg text-sm font-medium shadow-md 
                         hover:border-orange-600 hover:bg-orange-100 transition-all"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>

    </div>
  </div>
</section>


      {/* Education Section */}
      <section id="education" className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold mb-16 text-center">Education</h2>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-black transition-all shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="bg-black text-white p-3 rounded-lg">
                    <GraduationCap size={32} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">{edu.degree}</h3>
                    <p className="text-xl text-gray-600 mb-2">{edu.school}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-3">
                      <span className="flex items-center gap-1">
                        <MapPin size={16} />
                        {edu.location}
                      </span>
                      <span>•</span>
                      <span>{edu.period}</span>
                      <span>•</span>
                      <span className="font-semibold">CGPA: {edu.cgpa}</span>
                    </div>
                    <p className="text-gray-700 mb-4">{edu.details}</p>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course, i) => (
                        <span key={i} className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Certifications Section */} 
          <div className="mt-12 bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6 text-center">Certifications</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center gap-3 bg-white p-4 rounded-lg border-l-4 border-black">
                  <Award size={20} className="flex-shrink-0" />
                  <span className="text-gray-700">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
<section id="projects" className="py-24 px-4 bg-white"> 
  <div className="max-w-6xl mx-auto">
    <h2 className="text-4xl sm:text-5xl font-bold mb-16 text-center text-black">Featured Projects</h2>
    <div className="grid md:grid-cols-2 gap-8">
      {projects.map((project, index) => (
        <div 
          key={index} 
          // UPDATED: Added vertical border (border-r-4 border-black) and adjusted shadow/hover for coherence.
          className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 transform hover:-translate-y-0 hover:shadow-xl hover:border-black hover:border-4"
        >
          <div className="p-8">
            <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
            <p className="text-sm text-gray-500 mb-5 uppercase tracking-wide">{project.subtitle}</p>
            <p className="text-gray-700 mb-4 leading-relaxed">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((tech, i) => (
                // Kept tech tags gray for a nice secondary color contrast
                <span key={i} className="bg-gray-100 px-3 py-1 rounded-full text-sm font-medium">{tech}</span>
              ))}
            </div>
            <div className="flex gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                // UPDATED: Ensuring hover text is black
                className="flex items-center gap-2 text-sm font-medium hover:text-black transition-colors"
              >
                <Github size={18} />
                View Code
                <ExternalLink size={14} />
              </a>
              {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                // UPDATED: Ensuring hover text is black
                className="flex items-center gap-2 text-sm font-medium hover:text-black hover:drop-shadow-lg transition-all"
              >
                <ExternalLink size={18} />
                Live Demo
              </a>
              )}
            </div>
          </div>
          {/* REMOVED: <div className="bg-black h-2 w-full mt-5"></div> */}
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Contact Section*/}
{/* Contact Section*/}
<section id="contact" className="py-24 px-4 bg-gray-50"> {/* Subtle gray background for contrast */}
  <div className="max-w-5xl mx-auto">
    {/* Heading consistent with other sections */}
    <h2 className="text-4xl sm:text-5xl font-bold mb-16 text-center text-black">Get In Touch</h2>

    <div 
      // UPDATED: Added transition, border classes, and hover effects for the main card
      className="mx-auto max-w-2xl bg-white p-8 rounded-lg shadow-lg 
                 transition-all duration-300 ease-in-out
                 hover:shadow-2xl 
                 hover:border-black 
                 hover:border-4" // This creates the black border on hover
    >
      <h3 className="text-2xl font-bold mb-6 text-black">Contact Information</h3>
      <div className="space-y-6">
        {/* Email */}
        <div className="flex items-start gap-4">
          <div className="bg-black text-white p-3 rounded-lg">
            <Mail size={24} />
          </div>
          <div>
            <h4 className="font-semibold mb-1 text-black">Email</h4>
            {/* Hover color changed to black */}
            <a href="mailto:prateekprasaddeshpande@gmail.com" className="text-gray-600 hover:text-black transition-colors">
              prateekprasaddeshpande@gmail.com
            </a>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-start gap-4">
          <div className="bg-black text-white p-3 rounded-lg">
            <Phone size={24} />
          </div>
          <div>
            <h4 className="font-semibold mb-1 text-black">Phone</h4>
            <p className="text-gray-600">+91 8296837773</p>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-start gap-4">
          <div className="bg-black text-white p-3 rounded-lg">
            <MapPin size={24} />
          </div>
          <div>
            <h4 className="font-semibold mb-1 text-black">Location</h4>
            <p className="text-gray-600">Bengaluru, Karnataka</p>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-6 pt-6 border-t border-gray-200"> {/* Added a divider line for separation */}
          <h3 className="text-2xl font-bold mb-4 text-black">Connect With Me</h3>
          <div className="flex gap-4">
            {/* Github Link */}
            <a href="https://github.com/ppd05" target="_blank" rel="noopener noreferrer" 
               className="bg-black text-white p-4 rounded-lg hover:bg-gray-800 transition-colors shadow-md">
              <Github size={24} />
            </a>
            {/* LinkedIn Link */}
            <a href="https://www.linkedin.com/in/prateek-p-a36148223/" target="_blank" rel="noopener noreferrer" 
               className="bg-black text-white p-4 rounded-lg hover:bg-gray-800 transition-colors shadow-md">
              <Linkedin size={24} />
            </a>
            {/* CONSIDER ADDING: A link to your portfolio/web page if applicable */}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Footer */}
<footer className="bg-black text-white py-6 px-4">
  <div className="max-w-2xl mx-auto text-center">
    <p className="text-lg mb-4">
      &copy; 2025 Prateek Prasad Deshpande | All Rights Reserved.
    </p>
    {/* Optional: Add a subtle credit line here */}
  </div>
</footer>

    </div>
  );
};

export default Portfolio;
