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
      const offset = 64; // Reduced offset for smaller nav bar
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
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12"> 
          <div className="flex justify-between items-center h-16"> 
            <div className="text-xl font-bold text-white">Portfolio</div> 

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-6"> 
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
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />} 
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-black border-t border-gray-800">
            <div className="px-4 py-3 space-y-2"> 
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

      {/* Hero Section - REDUCED VERTICAL PADDING */}
      <section id="home" className="min-h-screen flex items-center pt-20 pb-10 bg-white"> 
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12"> 
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12"> 
            
            <div className="flex-shrink-0">
              <div className="w-64 h-64 rounded-full overflow-hidden border-2 border-black shadow-xl"> 
                <img 
                  src="/profile-photo.jpg" 
                  alt="Prateek Prasad Deshpande" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="w-full h-full bg-gray-200 flex items-center justify-center text-4xl font-bold" style={{display: 'none'}}> 
                  PD
                </div>
              </div>
            </div>

            <div className="flex-grow text-center md:text-left">
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-1 text-black tracking-tight leading-tight"> 
                PRATEEK PRASAD DESHPANDE
              </h1>
              <p className="text-xl sm:text-2xl text-gray-800 font-semibold mb-3"> {/* Reduced margin from mb-4 to mb-3 */}
                AI/ML aspirant | Data Science| Clinical Data analyst Professional
              </p>
              <p className="text-lg text-gray-500 max-w-xl md:max-w-none mx-auto md:mx-0 mb-6"> {/* Reduced margin from mb-8 to mb-6 */}
                Data Science enthusiast | Problem Solver | Innovation Driver
              </p>

              <div className="flex flex-wrap justify-center md:justify-start gap-3"> {/* Reduced gap from gap-4 to gap-3 */}
                <a 
                  href="/resume.pdf" 
                  download
                  className="bg-black text-white px-5 py-1.5 rounded-lg hover:bg-gray-800 transition-all duration-300 inline-flex items-center gap-1 shadow-lg transform hover:scale-[1.02] text-sm" // Reduced padding, gap
                >
                  <Download size={16} /> {/* Reduced icon size */}
                  Download Resume
                </a>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="bg-white text-black px-5 py-1.5 rounded-lg border-2 border-black hover:bg-black hover:text-white transition-all duration-300 inline-flex items-center gap-1 shadow-lg transform hover:scale-[1.02] text-sm" // Reduced padding, gap
                >
                  <Mail size={16} /> {/* Reduced icon size */}
                  Contact Me
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - REDUCED VERTICAL PADDING */}
      <section id="about" className="py-16 px-4"> {/* Reduced vertical padding from py-20 to py-16 */}
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-5 text-center text-black"> {/* Reduced margin from mb-6 to mb-5 */}
            About Me
          </h2>
          <div className="max-w-4xl mx-auto"> 
            <p className="text-base text-gray-700 leading-relaxed mb-5"> {/* Reduced font size (from text-lg) and margin (from mb-6) */}
              Results-driven data professional with strong expertise in clinical data programming, management using SAS, SQL, Oracle APEX, and Python. Proven success in leading end-to-end clinical study operations, database locks, and data validation for regulatory compliance. Delivered automation testing and cloud-based testing, including SAS-to-Python migration. Currently upskilling in AI/ML engineering with hands-on project experience in TensorFlow, PyTorch, and cloud platforms (AWS, GCP). Actively transitioning career towards AI/ML, focusing on developing and integrating scalable AI applications and LLM-driven solutions such as RAG, MCP and Agentic AI.
            </p>
            <p className="text-base text-gray-700 leading-relaxed mb-5"> {/* Reduced font size (from text-lg) and margin (from mb-6) */}
              My expertise spans from exploratory data analysis and feature engineering to model development, deployment, 
              and monitoring. I'm particularly interested in Large Language Models, Retrieval-Augmented Generation (RAG), Model Context Protol(MCP) and how these tools along with AI can be leveraged to solve complex problems.
              I am passionate about continuous learning and staying updated with the latest advancements in AI/ML technologies.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section - REDUCED PADDING/MARGINS/SPACING */}
      <section id="experience" className="py-16 px-4"> {/* Reduced vertical padding from py-20 to py-16 */}
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">Work Experience</h2> {/* Reduced margin from mb-10 to mb-8 */}
          <div className="space-y-6"> {/* Reduced spacing from space-y-8 to space-y-6 */}
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-6 border-l-2 border-black pb-4"> {/* Reduced bottom padding from pb-6 to pb-4 */}
                <div className="absolute -left-2 top-0 w-4 h-4 bg-black rounded-full border-2 border-white"></div>
                <div className="bg-white p-5 rounded-lg shadow-lg hover:shadow-xl transition-shadow"> {/* Reduced padding from p-6 to p-5 */}
                  <div className="flex flex-wrap justify-between items-start mb-2"> {/* Reduced margin from mb-3 to mb-2 */}
                    <div>
                      <h3 className="lg:text-lg font-bold mb-0.5">{exp.title}</h3> {/* Reduced font size to lg:text-lg */}
                      <p className="text-sm text-gray-600 mb-0.5">{exp.company}</p> {/* Reduced font size to text-sm */}
                      <div className="flex flex-wrap gap-2 text-xs text-gray-500"> {/* Reduced gap from gap-3 to gap-2 */}
                        <span className="flex items-center gap-1">
                          <MapPin size={12} /> {/* Reduced icon size to size={12} */}
                          {exp.location}
                        </span>
                        <span>•</span>
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-gray-700 mb-2 italic">{exp.description}</p> {/* Reduced font size to text-xs, margin to mb-2 */}
                  <ul className="space-y-0.5"> {/* Reduced spacing from space-y-1 to space-y-0.5 */}
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-xs text-gray-700 flex items-start gap-2"> {/* Reduced font size to text-xs */}
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
      <section id="skills" className="py-16 px-4"> {/* Reduced vertical padding from py-20 to py-16 */}
      <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">Skills</h2> {/* Reduced margin from mb-10 to mb-8 */}

      <div className="space-y-3"> {/* Reduced spacing from space-y-4 to space-y-3 */}

      {/* Languages (Blue Theme Restored) */}
      <div className="bg-blue-50/30 p-4 rounded-xl shadow-sm"> {/* Reduced padding from p-5 to p-4 */}
        <h3 className="text-lg font-semibold mb-3">Languages</h3> {/* Reduced font size (from text-xl) and margin (from mb-4) */}

        <div className="flex flex-wrap gap-2"> {/* Reduced gap from gap-3 to gap-2 */}
          {[
            "Python",
            "SQL",
            "R Programming (Basics)",
            "Streamlit (Basics)",
            "SAS",
          ].map((skill, index) => (
            <div
              key={index}
              className="inline-flex items-center px-2.5 py-0.5 bg-white border border-gray-200 
                  rounded-lg text-xs font-medium shadow-sm 
                  hover:border-blue-600 hover:bg-blue-100 transition-all" // Reduced padding and font size to text-xs
            >
              {skill}
            </div>
          ))}
        </div>
      </div>

      {/* Technologies & Tools (Green Theme Restored) */}
      <div className="bg-green-50/30 p-4 rounded-xl shadow-sm"> {/* Reduced padding from p-5 to p-4 */}
        <h3 className="text-lg font-semibold mb-3">Technologies & Tools</h3> {/* Reduced font size (from text-xl) and margin (from mb-4) */}

        <div className="flex flex-wrap gap-2"> {/* Reduced gap from gap-3 to gap-2 */}
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
              className="inline-flex items-center px-2.5 py-0.5 bg-white border border-gray-200 
                  rounded-lg text-xs font-medium shadow-sm 
                  hover:border-green-600 hover:bg-green-100 transition-all" // Reduced padding and font size to text-xs
            >
              {skill}
            </div>
          ))}
        </div>
      </div>

      {/* Cloud Technologies (Sky Theme Restored) */}
      <div className="bg-sky-50/30 p-4 rounded-xl shadow-sm"> {/* Reduced padding from p-5 to p-4 */}
        <h3 className="text-lg font-semibold mb-3">Cloud Technologies</h3> {/* Reduced font size (from text-xl) and margin (from mb-4) */}

        <div className="flex flex-wrap gap-2"> {/* Reduced gap from gap-3 to gap-2 */}
          {[
            "AWS",
            "GCP",
            "Vertex AI",
          ].map((skill, index) => (
            <div
              key={index}
              className="inline-flex items-center px-2.5 py-0.5 bg-white border border-gray-200 
                  rounded-lg text-xs font-medium shadow-sm 
                  hover:border-sky-600 hover:bg-sky-100 transition-all" // Reduced padding and font size to text-xs
            >
              {skill}
            </div>
          ))}
        </div>
      </div>

      {/* Clinical Trial Technology (Orange Theme Restored) */}
      <div className="bg-orange-50/30 p-4 rounded-xl shadow-sm"> {/* Reduced padding from p-5 to p-4 */}
        <h3 className="text-lg font-semibold mb-3">Clinical Trial Technology</h3> {/* Reduced font size (from text-xl) and margin (from mb-4) */}

        <div className="flex flex-wrap gap-2"> {/* Reduced gap from gap-3 to gap-2 */}
          {[
            "Medidata RAVE",
            "Veeva EDC",
            "Veeva Vault (Clinical)",
            "eCOA",
            "ePRO",
          ].map((skill, index) => (
            <div
              key={index}
              className="inline-flex items-center px-2.5 py-0.5 bg-white border border-gray-200 
                  rounded-lg text-xs font-medium shadow-sm 
                  hover:border-orange-600 hover:bg-orange-100 transition-all" // Reduced padding and font size to text-xs
            >
              {skill}
            </div>
          ))}
        </div>
      </div>

      </div>
      </div>
      </section>


      {/* Education Section - REDUCED PADDING/MARGINS/SPACING */}
      <section id="education" className="py-16 px-4"> {/* Reduced vertical padding from py-20 to py-16 */}
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">Education</h2> {/* Reduced margin from mb-10 to mb-8 */}
          <div className="space-y-4"> {/* Reduced spacing from space-y-6 to space-y-4 */}
            {education.map((edu, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-5 hover:border-black transition-all shadow-lg"> {/* Reduced padding from p-6 to p-5 */}
                <div className="flex items-start gap-3">
                  <div className="bg-black text-white p-2 rounded-lg">
                    <GraduationCap size={20} /> {/* Reduced icon size from 24 to 20 */}
                  </div>
                  <div className="flex-1">
                    <h3 className="lg:text-lg font-bold mb-0.5">{edu.degree}</h3> {/* Reduced font size to lg:text-lg and margin to mb-0.5 */}
                    <p className="text-sm text-gray-600 mb-0.5">{edu.school}</p> {/* Reduced font size to text-sm and margin to mb-0.5 */}
                    <div className="flex flex-wrap gap-2 text-xs text-gray-500 mb-1"> {/* Reduced gap from gap-3 to gap-2 and margin from mb-2 to mb-1 */}
                      <span className="flex items-center gap-1">
                        <MapPin size={12} /> {/* Reduced icon size from 14 to 12 */}
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
          <div className="mt-8 bg-gray-50 p-5 rounded-lg"> {/* Reduced top margin from mt-10 to mt-8 and padding from p-6 to p-5 */}
            <h3 className="text-lg font-bold mb-3 text-center">Certifications</h3> {/* Reduced font size (from text-xl) and margin (from mb-4) */}
            <div className="grid sm:grid-cols-2 gap-3">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center gap-2 bg-white p-3 rounded-lg border-l-4 border-black"> {/* Reduced padding from p-4 to p-3 */}
                  <Award size={16} className="flex-shrink-0" /> {/* Reduced icon size from 18 to 16 */}
                  <span className="text-xs text-gray-700">{cert}</span> {/* Reduced font size from text-sm to text-xs */}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section - REDUCED PADDING/MARGINS/SPACING */}
      <section id="projects" className="py-16 px-4 bg-white"> {/* Reduced vertical padding from py-20 to py-16 */}
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center text-black">Featured Projects</h2> {/* Reduced margin from mb-12 to mb-10 */}
          <div className="grid md:grid-cols-2 gap-5"> {/* Reduced gap from gap-6 to gap-5 */}
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 transform hover:-translate-y-0 hover:shadow-xl hover:border-black hover:border-2" 
              >
                <div className="p-5"> {/* Reduced padding from p-6 to p-5 */}
                  <h3 className="lg:text-lg font-bold mb-0.5">{project.title}</h3> {/* Reduced font size to lg:text-lg and margin to mb-0.5 */}
                  <p className="text-xs text-gray-500 mb-2 uppercase tracking-wide">{project.subtitle}</p> {/* Reduced margin from mb-3 to mb-2 */}
                  <p className="text-xs text-gray-700 mb-2 leading-snug">{project.description}</p> {/* Reduced font size from text-sm to text-xs and margin to mb-2 */}
                  <div className="flex flex-wrap gap-1 mb-3"> {/* Reduced margin from mb-4 to mb-3 */}
                    {project.tech.map((tech, i) => (
                      <span key={i} className="bg-gray-100 px-2 py-0.5 rounded-full text-xs font-medium">{tech}</span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-xs font-medium hover:text-black transition-colors"
                    >
                      <Github size={14} /> {/* Reduced icon size from 16 to 14 */}
                      View Code
                      <ExternalLink size={10} /> {/* Reduced icon size from 12 to 10 */}
                    </a>
                    {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-xs font-medium hover:text-black hover:drop-shadow-lg transition-all"
                    >
                      <ExternalLink size={14} /> {/* Reduced icon size from 16 to 14 */}
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

      {/* Contact Section - REDUCED PADDING/MARGINS/SPACING */}
      <section id="contact" className="py-16 px-4 bg-gray-50"> {/* Reduced vertical padding from py-20 to py-16 */}
        <div className="max-w-4xl mx-auto"> 
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-black">Get In Touch</h2> {/* Reduced margin from mb-10 to mb-8 */}

          <div 
            className="mx-auto max-w-lg bg-white p-5 rounded-lg shadow-lg 
                  transition-all duration-300 ease-in-out
                  hover:shadow-xl 
                  hover:border-black 
                  hover:border-2" // Reduced max-w from max-w-xl to max-w-lg and padding from p-6 to p-5
          >
            <h3 className="lg:text-lg font-bold mb-3 text-black">Contact Information</h3> {/* Reduced font size and margin */}
            <div className="space-y-3"> {/* Reduced spacing from space-y-4 to space-y-3 */}
              {/* Email */}
              <div className="flex items-start gap-3">
                <div className="bg-black text-white p-1.5 rounded-lg"> {/* Reduced padding from p-2 to p-1.5 */}
                  <Mail size={16} /> {/* Reduced icon size from 20 to 16 */}
                </div>
                <div>
                  <h4 className="font-semibold mb-0.5 text-black text-sm">Email</h4> 
                  <a href="mailto:prateekprasaddeshpande@gmail.com" className="text-gray-600 hover:text-black transition-colors text-sm"> 
                    prateekprasaddeshpande@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3">
                <div className="bg-black text-white p-1.5 rounded-lg">
                  <Phone size={16} />
                </div>
                <div>
                  <h4 className="font-semibold mb-0.5 text-black text-sm">Phone</h4>
                  <p className="text-gray-600 text-sm">+91 8296837773</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-3">
                <div className="bg-black text-white p-1.5 rounded-lg">
                  <MapPin size={16} />
                </div>
                <div>
                  <h4 className="font-semibold mb-0.5 text-black text-sm">Location</h4>
                  <p className="text-gray-600 text-sm">Bengaluru, Karnataka</p>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-3 pt-3 border-t border-gray-200"> {/* Reduced top margin and padding */}
                <h3 className="lg:text-lg font-bold mb-3 text-black">Connect With Me</h3>
                <div className="flex gap-2"> {/* Reduced gap from gap-3 to gap-2 */}
                  {/* Github Link */}
                  <a href="https://github.com/ppd05" target="_blank" rel="noopener noreferrer" 
                    className="bg-black text-white p-2 rounded-lg hover:bg-gray-800 transition-colors shadow-md"> {/* Reduced padding from p-3 to p-2 */}
                    <Github size={18} /> {/* Reduced icon size from 20 to 18 */}
                  </a>
                  {/* LinkedIn Link */}
                  <a href="https://www.linkedin.com/in/prateek-p-a36148223/" target="_blank" rel="noopener noreferrer" 
                    className="bg-black text-white p-2 rounded-lg hover:bg-gray-800 transition-colors shadow-md">
                    <Linkedin size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-3 px-4"> {/* Reduced padding from py-4 to py-3 */}
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs mb-0"> {/* Reduced font size from text-sm to text-xs */}
            &copy; 2025 Prateek Prasad Deshpande | All Rights Reserved.
          </p>
        </div>
      </footer>

    </div>
  );
};

export default Portfolio;