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
      const offset = 64; 
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
      'Practising and learning AWS, Azure, GCP, Vertex AI for ML ops, along with Docker, Kubernetes and CI/CD pipelines.',
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
    // Body background and default text color set to dark/cyan theme
    <div className="min-h-screen bg-gray-900 text-gray-200 font-sans selection:bg-cyan-600 selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm shadow-xl shadow-black/50 z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12"> 
          <div className="flex justify-between items-center h-16"> 
            <div className="text-xl font-bold text-white flex items-center gap-2">
               <div className="w-2 h-2 rounded-full bg-cyan-500 shadow-md shadow-cyan-500/50"></div>
               Portfolio
            </div> 

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-6"> 
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-xs font-medium tracking-wider transition-all duration-300 pb-1 border-b-2 ${
                    activeSection === item.id 
                      ? 'text-cyan-400 border-cyan-400' 
                      : 'text-gray-400 border-transparent hover:text-white hover:border-gray-600'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />} 
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-900 border-t border-gray-800">
            <div className="px-4 py-3 space-y-2"> 
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left py-2 text-sm font-medium tracking-wider border-l-4 pl-3 ${
                    activeSection === item.id
                      ? 'text-cyan-400 border-cyan-400 bg-gray-800'
                      : 'text-gray-400 border-transparent hover:text-white hover:border-gray-700'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center pt-20 pb-8 bg-gray-900"> 
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12"> 
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12"> 
            
            <div className="flex-shrink-0">
              <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-cyan-500 shadow-xl shadow-cyan-500/25"> 
                <img 
                  src="/profile-photo.jpg" 
                  alt="Prateek Prasad Deshpande" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="w-full h-full bg-gray-700 flex items-center justify-center text-4xl font-bold text-cyan-500" style={{display: 'none'}}> 
                  PD
                </div>
              </div>
            </div>

            <div className="flex-grow text-center md:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-5xl font-extrabold mb-2 text-white tracking-tight leading-tight"> 
                PRATEEK PRASAD DESHPANDE
              </h1>
              <p className="text-xl sm:text-2xl text-cyan-400 font-semibold mb-4"> 
                AI/ML Aspirant | Data Science | Clinical Data Professional
              </p>
              <p className="text-lg text-gray-400 max-w-xl md:max-w-none mx-auto md:mx-0 mb-8 leading-relaxed"> 
                Data Science enthusiast | Problem Solver | Innovation Driver
              </p>

              <div className="flex flex-wrap justify-center md:justify-start gap-4"> 
                <a 
                  href="/resume.pdf" 
                  download
                  className="bg-cyan-600 hover:bg-cyan-500 text-white px-6 py-2.5 rounded-lg transition-all duration-300 inline-flex items-center gap-2 shadow-lg shadow-cyan-500/25 transform hover:scale-[1.02] text-sm font-medium"
                >
                  <Download size={18} />
                  Download Resume
                </a>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="bg-transparent text-gray-200 px-6 py-2.5 rounded-lg border border-gray-600 hover:border-cyan-500 hover:text-cyan-400 transition-all duration-300 inline-flex items-center gap-2 transform hover:scale-[1.02] text-sm font-medium"
                >
                  <Mail size={18} />
                  Contact Me
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-white">
            About Me
          </h2>
          <div 
            className="max-w-4xl mx-auto bg-gray-900 p-8 rounded-2xl border border-cyan-500/50 shadow-lg 
            hover:shadow-xl hover:shadow-cyan-400/20 transition-all duration-300" 
          > 
            <p className="text-base text-gray-300 leading-relaxed mb-6">
              Results-driven data professional with strong expertise in clinical data programming, management using SAS, SQL, Oracle APEX, and Python. Proven success in leading end-to-end clinical study operations, database locks, and data validation for regulatory compliance. Delivered automation testing and cloud-based testing, including SAS-to-Python migration. Currently upskilling in AI/ML engineering with hands-on project experience in TensorFlow, PyTorch, along with learning and upskilling in cloud platforms (AWS, GCP, Azure). Actively transitioning career towards AI/ML, focusing on developing and integrating scalable AI applications and LLM-driven solutions such as RAG, MCP and Agentic AI.
            </p>
            <p className="text-base text-gray-300 leading-relaxed">
              My expertise spans from exploratory data analysis and feature engineering to model development, deployment, 
              and monitoring. I'm particularly interested in Large Language Models, Retrieval-Augmented Generation (RAG), Model Context Protol(MCP) and how these tools along with AI can be leveraged to solve complex problems.
              I am passionate about continuous learning and staying updated with the latest advancements in AI/ML technologies.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-gray-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-white">Work Experience</h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-8 border-l-2 border-gray-700 pb-4">
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-gray-900 rounded-full border-2 border-cyan-500"></div>
                <div 
                  className="bg-gray-800 p-6 rounded-xl border border-gray-700 shadow-lg 
                  hover:shadow-xl hover:shadow-cyan-400/20 hover:border-cyan-600 transition-all duration-300"
                >
                  <div className="flex flex-wrap justify-between items-start mb-3">
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">{exp.title}</h3>
                      <p className="text-sm text-cyan-400 mb-1 font-medium">{exp.company}</p>
                      <div className="flex flex-wrap gap-2 text-xs text-gray-500">
                        <span className="flex items-center gap-1">
                          <MapPin size={12} />
                          {exp.location}
                        </span>
                        <span>•</span>
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-300 mb-4 italic">{exp.description}</p>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-sm text-gray-400 flex items-start gap-2">
                        <span className="text-cyan-500 mt-1">▸</span>
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

      {/* Skills Section - MODIFIED: 2 boxes per row AND thick CYAN line */}
      <section id="skills" className="py-20 px-4 bg-gray-800">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-white">Skills</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Languages */}
            <div 
              className="bg-gray-900 p-6 rounded-xl shadow-lg h-full border-l-4 border-cyan-500 
              hover:shadow-xl hover:shadow-cyan-400/20 transition-all duration-300"
            >
              <h3 className="text-lg font-bold mb-4 text-white">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Python",
                  "SQL",
                  "R Programming (Basics)",
                  "Streamlit (Basics)",
                  "SAS",
                ].map((skill, index) => (
                  <div
                    key={index}
                    className="inline-flex items-center px-3 py-1 bg-gray-800 border border-gray-700 
                        rounded-md text-xs font-medium text-gray-300
                        hover:border-cyan-500 hover:text-cyan-400 hover:shadow-md transition-all"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies & Tools */}
            <div 
              className="bg-gray-900 p-6 rounded-xl shadow-lg h-full border-l-4 border-cyan-500 
              hover:shadow-xl hover:shadow-cyan-400/20 transition-all duration-300"
            >
              <h3 className="text-lg font-bold mb-4 text-white">Technologies & Tools</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "PostgreSQL",
                  "Tableau",
                  "Power BI",
                  "LangChain",
                  "LangGraph",
                  "Docker (Basics)",
                  "Kubernetes (Basics)",
                  "HuggingFace Transformers",
                  "MLflow",
                  "DagsHub",
                  "CI/CD Pipelines (basics)",
                  "Prompt Engineering",
                  "Vector Databases",
                  "LLM [BERT, GPT]",
                  "CNN",
                  "RNN",
                  "FastAPI",
                  "Retrieval-Augmented Generation (RAG)",
                  "Model Context Protocol (MCP)",
                  "Oracle APEX",
                  "AWS",
                  "Azure",
                  "GCP",
                  "Vertex AI",
                ].map((skill, index) => (
                  <div
                    key={index}
                    className="inline-flex items-center px-3 py-1 bg-gray-800 border border-gray-700 
                        rounded-md text-xs font-medium text-gray-300
                        hover:border-cyan-500 hover:text-cyan-400 hover:shadow-md transition-all"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            {/* Cloud Technologies */}
            <div 
              className="bg-gray-900 p-6 rounded-xl shadow-lg h-full border-l-4 border-cyan-500 
              hover:shadow-xl hover:shadow-cyan-400/20 transition-all duration-300"
            >
              <h3 className="text-lg font-bold mb-4 text-white">Electronic Data Capture (EDC) Systems</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Medidata Rave",
                  "Veeva EDC",
                  "Veeva Vault (Clinical)",
                ].map((skill, index) => (
                  <div
                    key={index}
                    className="inline-flex items-center px-3 py-1 bg-gray-800 border border-gray-700 
                        rounded-md text-xs font-medium text-gray-300
                        hover:border-cyan-500 hover:text-cyan-400 hover:shadow-md transition-all"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            {/* Clinical Trial Technology */}
            <div 
              className="bg-gray-900 p-6 rounded-xl shadow-lg h-full border-l-4 border-cyan-500 
              hover:shadow-xl hover:shadow-cyan-400/20 transition-all duration-300"
            >
              <h3 className="text-lg font-bold mb-4 text-white">Therapeutic Areas & Clinical Tech</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Hematology",
                  "Oncology",
                  "Immunology",
                  "Metabolic Disorders",
                  "Investigational product data (IPD)",
                  "Interactive Voice Response System (IVRS)",
                  "Clinical Data Management (CDM)",
                  "snapshots",
                  "eCOA",
                  "ePRO"
                ].map((skill, index) => (
                  <div
                    key={index}
                    className="inline-flex items-center px-3 py-1 bg-gray-800 border border-gray-700 
                        rounded-md text-xs font-medium text-gray-300
                        hover:border-cyan-500 hover:text-cyan-400 hover:shadow-md transition-all"
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
      <section id="education" className="py-20 px-4 bg-gray-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-white">Education</h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div 
                key={index} 
                className="bg-gray-800 border border-gray-700 rounded-xl p-6 shadow-lg 
                hover:shadow-xl hover:shadow-cyan-400/20 hover:border-cyan-400 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-cyan-600 text-white p-3 rounded-lg flex-shrink-0">
                    <GraduationCap size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-1">{edu.degree}</h3>
                    <p className="text-sm text-gray-400 mb-1">{edu.school}</p>
                    <div className="flex flex-wrap gap-3 text-xs text-gray-500 mb-3">
                      <span className="flex items-center gap-1">
                        <MapPin size={12} />
                        {edu.location}
                      </span>
                      <span>•</span>
                      <span>{edu.period}</span>
                      <span>•</span>
                      <span className="font-semibold text-cyan-400">CGPA: {edu.cgpa}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course, i) => (
                        <span key={i} className="bg-gray-700 text-gray-300 px-2 py-1 rounded-md text-xs border border-gray-600">
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
          <div className="mt-8 bg-gray-800 p-6 rounded-xl border border-gray-700 shadow-inner">
            <h3 className="text-lg font-bold mb-6 text-center text-white">Certifications</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-3 bg-gray-700 p-4 rounded-lg border-l-4 border-cyan-500 
                  shadow-sm hover:shadow-md hover:shadow-cyan-400/10 transition-all duration-300"
                >
                  <Award size={18} className="flex-shrink-0 text-cyan-400" />
                  <span className="text-xs text-gray-300">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-white">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="bg-gray-900 rounded-xl shadow-lg overflow-hidden transition-all duration-300 transform hover:-translate-y-1 
                hover:shadow-xl hover:shadow-cyan-400/20 border-l-4 border-cyan-500 group" 
              >
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-1 text-white group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                  <p className="text-xs text-cyan-300 mb-3 uppercase tracking-wide font-semibold">{project.subtitle}</p>
                  <p className="text-sm text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="bg-gray-800 border border-gray-700 text-gray-400 px-2 py-1 rounded-md text-xs font-medium">{tech}</span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-xs font-medium text-gray-400 hover:text-white transition-colors"
                    >
                      <Github size={16} />
                      View Code
                      <ExternalLink size={12} />
                    </a>
                    {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-xs font-medium text-cyan-400 hover:text-cyan-300 transition-all"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto"> 
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-white">Get In Touch</h2>

          <div 
            className="mx-auto max-w-lg bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-700
                  transition-all duration-300 ease-in-out
                  hover:border-cyan-500 hover:shadow-2xl hover:shadow-cyan-400/20"
          >
            <h3 className="text-lg font-bold mb-6 text-white">Contact Information</h3>
            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="bg-cyan-600 text-white p-2 rounded-lg flex-shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-white text-sm">Email</h4> 
                  <a href="mailto:prateekprasaddeshpande@gmail.com" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"> 
                    prateekprasaddeshpande@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="bg-cyan-600 text-white p-2 rounded-lg flex-shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-white text-sm">Phone</h4>
                  <p className="text-gray-400 text-sm">+91 8296837773</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="bg-cyan-600 text-white p-2 rounded-lg flex-shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-white text-sm">Location</h4>
                  <p className="text-gray-400 text-sm">Bengaluru, Karnataka</p>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-6 pt-6 border-t border-gray-700">
                <h3 className="text-lg font-bold mb-4 text-white">Connect With Me</h3>
                <div className="flex gap-3">
                  {/* Github Link */}
                  <a href="https://github.com/ppd05" target="_blank" rel="noopener noreferrer" 
                    className="bg-gray-700 text-gray-200 p-3 rounded-lg border border-gray-600 hover:bg-cyan-600 hover:text-white hover:border-cyan-600 transition-all shadow-md hover:shadow-lg">
                    <Github size={20} />
                  </a>
                  {/* LinkedIn Link */}
                  <a href="https://www.linkedin.com/in/prateek-p-a36148223/" target="_blank" rel="noopener noreferrer" 
                    className="bg-gray-700 text-gray-200 p-3 rounded-lg border border-gray-600 hover:bg-cyan-600 hover:text-white hover:border-cyan-600 transition-all shadow-md hover:shadow-lg">
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-500 py-6 px-4 border-t border-gray-700">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs mb-0">
            &copy; 2025 Prateek Prasad Deshpande | All Rights Reserved.
          </p>
        </div>
      </footer>

    </div>
  );
};

export default Portfolio;