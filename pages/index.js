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
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12"> {/* Adjusted max-w and padding */}
          <div className="flex justify-between items-center h-16"> {/* Reduced height */}
            <div className="text-xl font-bold text-white">Portfolio</div> {/* Reduced font size */}

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-6"> {/* Reduced space-x */}
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-xs font-medium tracking-wider transition-all duration-300 pb-1 border-b-2 ${
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
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />} {/* Reduced icon size */}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-black border-t border-gray-800">
            <div className="px-4 py-3 space-y-2"> {/* Reduced padding and spacing */}
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left py-2 text-sm font-medium tracking-wider border-l-4 pl-3 ${
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
      <section id="home" className="min-h-screen flex items-center pt-20 pb-10 bg-white"> {/* Reduced vertical padding */}
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12"> {/* Increased max-w and adjusted padding */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12"> {/* Reduced gap */}
            
            <div className="flex-shrink-0">
              <div className="w-64 h-64 rounded-full overflow-hidden border-2 border-black shadow-xl"> {/* Reduced photo size (from w-80/h-80 to w-64/h-64) */}
                <img 
                  src="/profile-photo.jpg" 
                  alt="Prateek Prasad Deshpande" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="w-full h-full bg-gray-200 flex items-center justify-center text-4xl font-bold" style={{display: 'none'}}> {/* Reduced fallback font size */}
                  PD
                </div>
              </div>
            </div>

            <div className="flex-grow text-center md:text-left">
              
              {/* Main Heading and Title */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-1 text-black tracking-tight leading-tight"> {/* Reduced max font size (from text-7xl to text-6xl) */}
                PRATEEK PRASAD DESHPANDE
              </h1>
              <p className="text-xl sm:text-2xl text-gray-800 font-semibold mb-4"> {/* Reduced font size */}
                AI/ML aspirant | Data Science| Clinical Data analyst Professional
              </p>
              <p className="text-lg text-gray-500 max-w-xl md:max-w-none mx-auto md:mx-0 mb-8"> {/* Reduced font size and margin */}
                Data Science enthusiast | Problem Solver | Innovation Driver
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap justify-center md:justify-start gap-4"> {/* Reduced gap */}
                <a 
                  href="/resume.pdf" 
                  download
                  className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-all duration-300 inline-flex items-center gap-2 shadow-lg transform hover:scale-[1.02] text-sm" // Reduced padding and added text-sm
                >
                  <Download size={18} /> {/* Reduced icon size */}
                  Download Resume
                </a>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="bg-white text-black px-6 py-2 rounded-lg border-2 border-black hover:bg-black hover:text-white transition-all duration-300 inline-flex items-center gap-2 shadow-lg transform hover:scale-[1.02] text-sm" // Reduced padding and added text-sm
                >
                  <Mail size={18} /> {/* Reduced icon size */}
                  Contact Me
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4"> {/* Reduced vertical padding (from py-25 to py-20) */}
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center text-black"> {/* Reduced font size */}
            About Me
          </h2>
          <div className="max-w-4xl mx-auto"> 
            <p className="text-lg text-gray-700 leading-relaxed mb-6"> {/* Reduced font size and leading */}
              Results-driven data professional with strong expertise in clinical data programming, management using SAS, SQL, Oracle APEX, and Python. Proven success in leading end-to-end clinical study operations, database locks, and data validation for regulatory compliance. Delivered automation testing and cloud-based testing, including SAS-to-Python migration. Currently upskilling in AI/ML engineering with hands-on project experience in TensorFlow, PyTorch, and cloud platforms (AWS, GCP). Actively transitioning career towards AI/ML, focusing on developing and integrating scalable AI applications and LLM-driven solutions such as RAG, MCP and Agentic AI.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6"> {/* Reduced font size and leading */}
              My expertise spans from exploratory data analysis and feature engineering to model development, deployment, 
              and monitoring. I'm particularly interested in Large Language Models, Retrieval-Augmented Generation (RAG), Model Context Protol(MCP) and how these tools along with AI can be leveraged to solve complex problems.
              I am passionate about continuous learning and staying updated with the latest advancements in AI/ML technologies.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4"> {/* Reduced vertical padding */}
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center">Work Experience</h2> {/* Reduced font size and margin */}
          <div className="space-y-8"> {/* Reduced spacing */}
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-6 border-l-2 border-black pb-6"> {/* Reduced border size and padding */}
                <div className="absolute -left-2 top-0 w-4 h-4 bg-black rounded-full border-2 border-white"></div> {/* Reduced dot size */}
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"> {/* Reduced padding */}
                  <div className="flex flex-wrap justify-between items-start mb-3"> {/* Reduced margin */}
                    <div>
                      <h3 className="text-xl font-bold mb-1">{exp.title}</h3> {/* Reduced font size */}
                      <p className="text-base text-gray-600 mb-1">{exp.company}</p> {/* Reduced font size */}
                      <div className="flex flex-wrap gap-3 text-xs text-gray-500"> {/* Reduced font size and gap */}
                        <span className="flex items-center gap-1">
                          <MapPin size={14} /> {/* Reduced icon size */}
                          {exp.location}
                        </span>
                        <span>•</span>
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700 mb-3 italic">{exp.description}</p> {/* Reduced font size and margin */}
                  <ul className="space-y-1"> {/* Reduced spacing */}
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-sm text-gray-700 flex items-start gap-2"> {/* Reduced font size */}
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

      {/* Skills Section (Color Styling Restored & Size Reduced) */}
      <section id="skills" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center">Skills</h2>

      <div className="space-y-4">

      {/* Languages (Blue Theme Restored) */}
      <div className="bg-blue-50/30 p-5 rounded-xl shadow-sm">
        <h3 className="text-xl font-semibold mb-4">Languages</h3>

        <div className="flex flex-wrap gap-3">
          {[
            "Python",
            "SQL",
            "R Programming (Basics)",
            "Streamlit (Basics)",
            "SAS",
          ].map((skill, index) => (
            <div
              key={index}
              className="inline-flex items-center px-3 py-1 bg-white border border-gray-200 
                  rounded-lg text-sm font-medium shadow-sm 
                  hover:border-blue-600 hover:bg-blue-100 transition-all" 
            >
              {skill}
            </div>
          ))}
        </div>
      </div>

      {/* Technologies & Tools (Green Theme Restored) */}
      <div className="bg-green-50/30 p-5 rounded-xl shadow-sm">
        <h3 className="text-xl font-semibold mb-4">Technologies & Tools</h3>

        <div className="flex flex-wrap gap-3">
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
              className="inline-flex items-center px-3 py-1 bg-white border border-gray-200 
                  rounded-lg text-sm font-medium shadow-sm 
                  hover:border-green-600 hover:bg-green-100 transition-all" 
            >
              {skill}
            </div>
          ))}
        </div>
      </div>

      {/* Cloud Technologies (Sky Theme Restored) */}
      <div className="bg-sky-50/30 p-5 rounded-xl shadow-sm">
        <h3 className="text-xl font-semibold mb-4">Cloud Technologies</h3>

        <div className="flex flex-wrap gap-3">
          {[
            "AWS",
            "GCP",
            "Vertex AI",
          ].map((skill, index) => (
            <div
              key={index}
              className="inline-flex items-center px-3 py-1 bg-white border border-gray-200 
                  rounded-lg text-sm font-medium shadow-sm 
                  hover:border-sky-600 hover:bg-sky-100 transition-all" 
            >
              {skill}
            </div>
          ))}
        </div>
      </div>

      {/* Clinical Trial Technology (Orange Theme Restored) */}
      <div className="bg-orange-50/30 p-5 rounded-xl shadow-sm">
        <h3 className="text-xl font-semibold mb-4">Clinical Trial Technology</h3>

        <div className="flex flex-wrap gap-3">
          {[
            "Medidata RAVE",
            "Veeva EDC",
            "Veeva Vault (Clinical)",
            "eCOA",
            "ePRO",
          ].map((skill, index) => (
            <div
              key={index}
              className="inline-flex items-center px-3 py-1 bg-white border border-gray-200 
                  rounded-lg text-sm font-medium shadow-sm 
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
      <section id="education" className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center">Education</h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:border-black transition-all shadow-lg">
                <div className="flex items-start gap-3">
                  <div className="bg-black text-white p-2 rounded-lg">
                    <GraduationCap size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-1">{edu.degree}</h3>
                    <p className="text-base text-gray-600 mb-1">{edu.school}</p>
                    <div className="flex flex-wrap gap-3 text-xs text-gray-500 mb-2">
                      <span className="flex items-center gap-1">
                        <MapPin size={14} />
                        {edu.location}
                      </span>
                      <span>•</span>
                      <span>{edu.period}</span>
                      <span>•</span>
                      <span className="font-semibold">CGPA: {edu.cgpa}</span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {edu.coursework.map((course, i) => (
                        <span key={i} className="bg-gray-100 px-2 py-0.5 rounded-full text-xs">
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Certifications Section (Original Styling Retained, Size Reduced) */} 
          <div className="mt-10 bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-center">Certifications</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center gap-2 bg-white p-4 rounded-lg border-l-4 border-black"> 
                  <Award size={18} className="flex-shrink-0" /> 
                  <span className="text-sm text-gray-700">{cert}</span> 
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-white"> {/* Reduced vertical padding */}
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-black">Featured Projects</h2> {/* Reduced font size and margin */}
          <div className="grid md:grid-cols-2 gap-6"> {/* Reduced gap */}
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 transform hover:-translate-y-0 hover:shadow-xl hover:border-black hover:border-2" // Reduced hover border size
              >
                <div className="p-6"> {/* Reduced padding */}
                  <h3 className="text-xl font-bold mb-1">{project.title}</h3> {/* Reduced font size */}
                  <p className="text-xs text-gray-500 mb-3 uppercase tracking-wide">{project.subtitle}</p> {/* Reduced font size and margin */}
                  <p className="text-sm text-gray-700 mb-3 leading-snug">{project.description}</p> {/* Reduced font size and leading */}
                  <div className="flex flex-wrap gap-1 mb-4"> {/* Reduced gap and margin */}
                    {project.tech.map((tech, i) => (
                      <span key={i} className="bg-gray-100 px-2 py-0.5 rounded-full text-xs font-medium">{tech}</span>
                    ))}
                  </div>
                  <div className="flex gap-3"> {/* Reduced gap */}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-xs font-medium hover:text-black transition-colors" // Reduced font size and gap
                    >
                      <Github size={16} /> {/* Reduced icon size */}
                      View Code
                      <ExternalLink size={12} /> {/* Reduced icon size */}
                    </a>
                    {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-xs font-medium hover:text-black hover:drop-shadow-lg transition-all" // Reduced font size and gap
                    >
                      <ExternalLink size={16} /> {/* Reduced icon size */}
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

      {/* Contact Section*/}
      <section id="contact" className="py-20 px-4 bg-gray-50"> {/* Reduced vertical padding */}
        <div className="max-w-4xl mx-auto"> {/* Reduced max-w */}
          {/* Heading consistent with other sections */}
          <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center text-black">Get In Touch</h2> {/* Reduced font size and margin */}

          <div 
            className="mx-auto max-w-xl bg-white p-6 rounded-lg shadow-lg 
                  transition-all duration-300 ease-in-out
                  hover:shadow-xl 
                  hover:border-black 
                  hover:border-2" // Reduced max-w and padding
          >
            <h3 className="text-xl font-bold mb-4 text-black">Contact Information</h3> {/* Reduced font size and margin */}
            <div className="space-y-4"> {/* Reduced spacing */}
              {/* Email */}
              <div className="flex items-start gap-3">
                <div className="bg-black text-white p-2 rounded-lg"> {/* Reduced padding */}
                  <Mail size={20} /> {/* Reduced icon size */}
                </div>
                <div>
                  <h4 className="font-semibold mb-0.5 text-black text-sm">Email</h4> {/* Reduced font size and margin */}
                  <a href="mailto:prateekprasaddeshpande@gmail.com" className="text-gray-600 hover:text-black transition-colors text-sm"> {/* Reduced font size */}
                    prateekprasaddeshpande@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3">
                <div className="bg-black text-white p-2 rounded-lg">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-semibold mb-0.5 text-black text-sm">Phone</h4>
                  <p className="text-gray-600 text-sm">+91 8296837773</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-3">
                <div className="bg-black text-white p-2 rounded-lg">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-semibold mb-0.5 text-black text-sm">Location</h4>
                  <p className="text-gray-600 text-sm">Bengaluru, Karnataka</p>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-4 pt-4 border-t border-gray-200">
                <h3 className="text-xl font-bold mb-3 text-black">Connect With Me</h3>
                <div className="flex gap-3">
                  {/* Github Link */}
                  <a href="https://github.com/ppd05" target="_blank" rel="noopener noreferrer" 
                    className="bg-black text-white p-3 rounded-lg hover:bg-gray-800 transition-colors shadow-md"> {/* Reduced padding */}
                    <Github size={20} /> {/* Reduced icon size */}
                  </a>
                  {/* LinkedIn Link */}
                  <a href="https://www.linkedin.com/in/prateek-p-a36148223/" target="_blank" rel="noopener noreferrer" 
                    className="bg-black text-white p-3 rounded-lg hover:bg-gray-800 transition-colors shadow-md">
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-4 px-4"> {/* Reduced padding */}
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-sm mb-0"> {/* Reduced font size and margin */}
            &copy; 2025 Prateek Prasad Deshpande | All Rights Reserved.
          </p>
        </div>
      </footer>

    </div>
  );
};

export default Portfolio;