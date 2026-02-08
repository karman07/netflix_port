import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { NETFLIX_COLORS } from '@/constants/colors';
import NameDialog from '@/components/NameDialog';
import meeImg from '@/assets/mee.jpg';
import intelliumImg from '@/assets/intellium.png';
import techlambdaImg from '@/assets/techlambda.jpg';
import sproutingImg from '@/assets/sprouting_minds.png';
import dine3dImg from '@/assets/dine3d.png';
import prateekImg from '@/assets/prateek_website.png';
import sproutingAbacusImg from '@/assets/sprouting minds abacus.png';
import hiremeaiImg from '@/assets/hiremeai.png';
import clubskyshotImg from '@/assets/clubskyshot.png';
import myshowmatchImg from '@/assets/myshowmatch.png';
import whatmoviewImg from '@/assets/whatmoview.png';
import whichanimalImg from '@/assets/whichanimal.png';
import stockmarketImg from '@/assets/stockmarket.png';
import astrologyImg from '@/assets/astrology.png';
import crazyarduinoImg from '@/assets/crazyarduino.png';
import principlesConclaveImg from '@/assets/principles_conclave.png';

export default function Developer() {
  const navigate = useNavigate();
  const [selectedModal, setSelectedModal] = useState<string | null>(null);
  const [showDialog, setShowDialog] = useState(false);

  useEffect(() => {
    const storedName = localStorage.getItem('userName');
    if (!storedName) {
      setShowDialog(true);
    }
  }, []);

  const handleNameSubmit = (name: string) => {
    localStorage.setItem('userName', name);
    setShowDialog(false);
  };

  const experiences = [
    {
      id: 'intellinum',
      title: 'Java Developer',
      company: 'Intellinum',
      subtitle: '2024 - Present • Excellent Package',
      image: intelliumImg,
      description: 'Enterprise-level Java development with Spring Boot and microservices architecture.',
      details: 'Currently working as Java Developer at Intellinum with an excellent package. Developing large-scale enterprise applications using Java, Spring Boot, microservices architecture, and cloud technologies. Leading development of critical business applications serving thousands of users daily.',
      achievements: ['Enterprise Applications', 'Microservices Architecture', 'Cloud Integration', 'Team Leadership'],
      technologies: ['Java', 'Spring Boot', 'Microservices', 'AWS', 'Docker', 'Kubernetes'],
      isLatest: true
    },
    {
      id: 'techlambda',
      title: 'Full Stack Developer',
      company: 'Tech Lambda',
      subtitle: '2023-2024 • Backend Expert & Trainer',
      image: techlambdaImg,
      description: 'Backend development and Android expertise with training responsibilities.',
      details: 'Worked as backend developer and Android expert at Tech Lambda. Provided comprehensive training on Nest.js and Express frameworks. Created educational YouTube content and successfully completed 10+ live projects for various clients across different industries.',
      achievements: ['Backend Technology Training', 'YouTube Content Creation', '10+ Live Projects', 'Android Development'],
      technologies: ['Node.js', 'Express', 'Nest.js', 'Android', 'MongoDB', 'React']
    },
    {
      id: 'sprouting',
      title: 'Full Stack Developer',
      company: 'Sprouting Minds Abacus',
      subtitle: '2022-2024 • Mobile App Success',
      image: sproutingImg,
      description: 'Developed successful Android app with 1000+ downloads on Play Store.',
      details: 'Developed and launched the successful Sprouting Minds Abacus Android application with over 1000+ downloads on Google Play Store. Worked extensively on web development and mobile app architecture using modern technologies and best practices.',
      achievements: ['1000+ App Downloads', 'Play Store Success', 'Web Development', 'Mobile Architecture'],
      technologies: ['Android', 'Java', 'Firebase', 'React', 'Node.js']
    }
  ];

  const projects = [
    {
      id: 'dine3d',
      title: 'Dine3D',
      subtitle: 'AR Restaurant Technology • Revolutionary Startup',
      image: dine3dImg,
      description: 'Revolutionary 3D & AR food menu technology transforming restaurant experiences.',
      details: 'Founded and developed Dine3D, a groundbreaking 3D & AR food menu technology that revolutionizes restaurant experiences. The platform allows customers to view interactive 3D models of dishes and place them in their environment using AR, boosting sales by 40% and significantly improving customer satisfaction.',
      tech: ['3D Modeling', 'AR Technology', 'React', 'Node.js', 'Mobile Development'],
      link: 'https://github.com/karman07',
      category: 'Startup'
    },
    {
      id: 'parteek',
      title: 'Professor Parteek Bhatia Website',
      subtitle: 'Academic Portfolio • Professional Website',
      image: prateekImg,
      description: 'Professional academic portfolio showcasing research and achievements.',
      details: 'Designed and developed a comprehensive academic portfolio website for Professor Parteek Bhatia featuring modern design, research publications, academic achievements, course information, and responsive layout. Built using React and Next.js with smooth animations and professional styling.',
      tech: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'Responsive Design'],
      link: 'https://github.com/karman07/prateek_sir_website',
      category: 'Web Development'
    },
    {
      id: 'sprouting-app',
      title: 'Sprouting Minds Abacus',
      subtitle: 'Educational App • 1000+ Downloads',
      image: sproutingAbacusImg,
      description: 'Educational Android app for learning abacus calculations with gamification.',
      details: 'Developed and published an engaging educational Android application for learning abacus calculations. The app features interactive lessons, practice exercises, progress tracking, and gamification elements. Successfully achieved over 1000+ downloads on Google Play Store with excellent user ratings.',
      tech: ['Android', 'Java', 'Firebase', 'SQLite', 'Material Design'],
      link: 'https://github.com/karman07',
      category: 'Mobile App'
    },
    {
      id: 'hiremeai',
      title: 'HireMeAI',
      subtitle: 'AI-Powered Recruitment • Smart Hiring',
      image: hiremeaiImg,
      description: 'AI-powered recruitment platform for smart candidate screening and matching.',
      details: 'Developed an intelligent recruitment platform that uses AI to screen candidates, match job requirements, and streamline the hiring process. Features include resume parsing, skill assessment, automated screening, and candidate ranking algorithms.',
      tech: ['React', 'Python', 'Machine Learning', 'Node.js', 'MongoDB'],
      link: 'https://github.com/karman07/ai_interview',
      category: 'AI/ML'
    },
    {
      id: 'clubskyshot',
      title: 'Club SkyShot',
      subtitle: 'Sports Management • Club Platform',
      image: clubskyshotImg,
      description: 'Comprehensive sports club management platform with booking and scheduling.',
      details: 'Built a complete sports club management system featuring member registration, court booking, tournament management, payment processing, and real-time scheduling. Includes mobile app for members and admin dashboard for club management.',
      tech: ['React', 'Node.js', 'MongoDB', 'React Native', 'Payment Gateway'],
      link: 'https://github.com/karman07/clubsky',
      category: 'Web & Mobile'
    },
    {
      id: 'myshowmatch',
      title: 'MyShowMatch',
      subtitle: 'Entertainment Platform • Show Recommendations',
      image: myshowmatchImg,
      description: 'Personalized entertainment platform for TV show and movie recommendations.',
      details: 'Created a Netflix-style entertainment platform that provides personalized TV show and movie recommendations based on user preferences, viewing history, and advanced recommendation algorithms. Features include user profiles, watchlists, and social sharing.',
      tech: ['React', 'Node.js', 'Recommendation Engine', 'MongoDB', 'API Integration'],
      link: 'https://github.com/karman07/movies_app_rec',
      category: 'Entertainment'
    },
    {
      id: 'whatmoview',
      title: 'WhatMoview',
      subtitle: 'Movie Discovery • Entertainment',
      image: whatmoviewImg,
      description: 'Movie discovery platform with advanced search and recommendations.',
      details: 'Built a comprehensive movie discovery platform featuring advanced search filters, personalized recommendations, and detailed movie information with ratings and reviews.',
      tech: ['React', 'API Integration', 'JavaScript', 'CSS'],
      link: 'https://github.com/karman07/movies_app_rec',
      category: 'Entertainment'
    },
    {
      id: 'whichanimal',
      title: 'WhichAnimal',
      subtitle: 'AI Classification • Machine Learning',
      image: whichanimalImg,
      description: 'AI-powered animal classification using machine learning.',
      details: 'Developed an intelligent animal classification system using computer vision and machine learning algorithms to identify different animal species from images.',
      tech: ['Python', 'TensorFlow', 'Computer Vision', 'Machine Learning'],
      link: 'https://github.com/karman07/face_animal_Ai',
      category: 'AI/ML'
    },
    {
      id: 'stockmarket',
      title: 'Stock Market Analyzer',
      subtitle: 'Financial Analysis • Data Science',
      image: stockmarketImg,
      description: 'Stock market analysis and prediction platform.',
      details: 'Created a comprehensive stock market analysis tool with real-time data visualization, trend analysis, and predictive modeling for investment decisions.',
      tech: ['Python', 'Data Science', 'Pandas', 'Matplotlib', 'API Integration'],
      link: 'https://github.com/karman07/Quizoo',
      category: 'Data Science'
    },
    {
      id: 'astrology',
      title: 'Astrology Platform',
      subtitle: 'Astrology Services • Web Application',
      image: astrologyImg,
      description: 'Complete astrology platform with personalized readings.',
      details: 'Developed a full-featured astrology platform offering personalized horoscopes, birth chart analysis, and astrological consultations with modern web technologies.',
      tech: ['React', 'Node.js', 'MongoDB', 'API Integration'],
      link: 'https://github.com/karman07/astro_final_back',
      category: 'Web Development'
    },
    {
      id: 'crazyarduino',
      title: 'Crazy Arduino',
      subtitle: 'IoT Projects • Hardware Programming',
      image: crazyarduinoImg,
      description: 'Arduino-based IoT projects and automation systems.',
      details: 'Collection of innovative Arduino projects including home automation, sensor networks, and IoT devices with mobile app integration for remote control.',
      tech: ['Arduino', 'C++', 'IoT', 'Mobile App', 'Sensors'],
      link: 'https://github.com/karman07',
      category: 'IoT'
    },
    {
      id: 'principles-conclave',
      title: 'The Principles Conclave',
      subtitle: 'Educational Platform • Event Management',
      image: principlesConclaveImg,
      description: 'Educational event management platform for academic conferences.',
      details: 'Developed a comprehensive platform for The Principles Conclave, featuring event registration, speaker management, schedule coordination, and attendee engagement tools for educational conferences.',
      tech: ['React', 'Next.js', 'Tailwind CSS', 'Vercel', 'Event Management'],
      link: 'https://tpc-principal.vercel.app/',
      category: 'Web Development'
    }
  ];

  const skills = [
    { name: 'Java', level: 95, icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" className="w-8 h-8" alt="Java" /> },
    { name: 'React', level: 92, icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className="w-8 h-8" alt="React" /> },
    { name: 'Node.js', level: 90, icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" className="w-8 h-8" alt="Node.js" /> },
    { name: 'Python', level: 88, icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" className="w-8 h-8" alt="Python" /> },
    { name: 'Data Science', level: 85, icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" className="w-8 h-8" alt="Data Science" /> },
    { name: 'Machine Learning', level: 82, icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" className="w-8 h-8" alt="Machine Learning" /> },
    { name: 'Deep Learning', level: 80, icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" className="w-8 h-8" alt="Deep Learning" /> },
    { name: 'React Native', level: 88, icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className="w-8 h-8" alt="React Native" /> },
    { name: 'MongoDB', level: 85, icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" className="w-8 h-8" alt="MongoDB" /> },
    { name: 'Android', level: 87, icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg" className="w-8 h-8" alt="Android" /> }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {showDialog && <NameDialog onSubmit={handleNameSubmit} />}
      
      {/* Netflix Navigation */}
      <nav className="fixed top-0 w-full z-40 bg-black/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 
            className="text-2xl font-bold cursor-pointer"
            style={{ color: NETFLIX_COLORS.primary, fontFamily: 'Netflix Sans, Arial, sans-serif' }}
            onClick={() => navigate('/')}
          >
            KARMAN SINGH
          </h1>
          <button 
            onClick={() => navigate('/')}
            className="text-white hover:text-gray-300 transition-colors"
          >
            ← Back
          </button>
        </div>
      </nav>

      {/* Hero Section - Netflix Style */}
      <section className="relative pt-20 pb-16 px-6 min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/80 z-10"></div>
        <div className="absolute inset-0 opacity-70">
          <img 
            src={meeImg} 
            alt="Karman Singh"
            className="w-full h-full object-cover object-center"
          />
        </div>
        
        <div className="relative z-20 max-w-7xl mx-auto">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6" style={{ fontFamily: 'Netflix Sans, Arial, sans-serif' }}>
              <span style={{ color: NETFLIX_COLORS.primary }}>KARMAN SINGH</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-300 mb-6">Full Stack Developer</h2>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Passionate developer creating seamless digital experiences. Currently working as Java Developer at Intellinum with expertise in React, Node.js, and Android development.
            </p>
            <div className="flex space-x-4">
              <button 
                onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 text-black font-bold rounded flex items-center space-x-2 hover:opacity-80 transition-opacity"
                style={{ backgroundColor: 'white' }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <polygon points="5,3 19,12 5,21"/>
                </svg>
                <span>View Portfolio</span>
              </button>
              <a 
                href="/resume.pdf" 
                download="Karman_Singh_Resume.pdf"
                className="px-8 py-3 bg-gray-600/70 text-white font-bold rounded hover:bg-gray-600 transition-colors flex items-center space-x-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
                </svg>
                <span>Download Resume</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Row - Netflix Style */}
      <section id="experience" className="px-6 py-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: 'Netflix Sans, Arial, sans-serif' }}>
            Work Experience
          </h2>
          <div className="flex space-x-4 overflow-x-auto pb-4">
            {experiences.map((exp) => (
              <motion.div
                key={exp.id}
                whileHover={{ scale: 1.05 }}
                className="flex-shrink-0 w-80 cursor-pointer group"
                onClick={() => setSelectedModal(exp.id)}
              >
                <div className="relative rounded-lg overflow-hidden mb-2 aspect-video bg-gray-800">
                  <img 
                    src={exp.image} 
                    alt={exp.title}
                    className="w-full h-full object-contain object-center group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
                  {exp.isLatest && (
                    <div className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded text-xs font-bold">
                      LATEST
                    </div>
                  )}
                </div>
                <h3 className="text-lg font-bold mb-1 text-white">{exp.title}</h3>
                <p className="text-gray-300 text-sm font-medium">{exp.subtitle}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Row - Netflix Style */}
      <section className="px-6 py-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: 'Netflix Sans, Arial, sans-serif' }}>
            Featured Projects
          </h2>
          <div className="flex space-x-4 overflow-x-auto pb-4">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                whileHover={{ scale: 1.05 }}
                className="flex-shrink-0 w-80 cursor-pointer group"
                onClick={() => setSelectedModal(project.id)}
              >
                <div className="relative rounded-lg overflow-hidden mb-2 aspect-video bg-gray-800">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
                </div>
                <h3 className="text-lg font-bold mb-1 text-white">{project.title}</h3>
                <p className="text-gray-300 text-sm font-medium">{project.subtitle}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Row - Netflix Style */}
      <section className="px-6 py-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: 'Netflix Sans, Arial, sans-serif' }}>
            Technical Skills
          </h2>
          <div className="flex space-x-4 overflow-x-auto pb-4">
            {skills.map((skill) => (
              <motion.div
                key={skill.name}
                whileHover={{ scale: 1.05 }}
                className="flex-shrink-0 w-60 cursor-pointer group"
                onClick={() => setSelectedModal(skill.name)}
              >
                <div className="bg-gray-900 rounded-lg p-6 group-hover:bg-gray-800 transition-colors">
                  <div className="flex justify-center mb-4">{skill.icon}</div>
                  <h3 className="text-lg font-semibold text-center mb-2">{skill.name}</h3>
                  <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                    <div 
                      className="h-2 rounded-full transition-all duration-1000"
                      style={{ 
                        width: `${skill.level}%`,
                        backgroundColor: NETFLIX_COLORS.primary
                      }}
                    ></div>
                  </div>
                  <p className="text-center text-gray-400 text-sm">{skill.level}% Proficiency</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* GitHub Projects Link */}
      <section className="px-6 py-8">
        <div className="max-w-7xl mx-auto text-center">
          <a 
            href="https://github.com/karman07" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 px-8 py-4 bg-gray-900 hover:bg-gray-800 text-white font-bold rounded-lg transition-colors border border-gray-700 hover:border-gray-600"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            <span>View All Projects on GitHub</span>
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
              <polyline points="15,3 21,3 21,9"/>
              <line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
          </a>
        </div>
      </section>

      {/* Netflix Modal */}
      {selectedModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90"
          onClick={() => setSelectedModal(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-gray-900 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {(() => {
              const exp = experiences.find(e => e.id === selectedModal);
              const project = projects.find(p => p.id === selectedModal);
              const skill = skills.find(s => s.name === selectedModal);
              
              if (exp) {
                return (
                  <>
                    {/* Netflix-style header with image and controls */}
                    <div className="relative h-96 overflow-hidden bg-gray-800">
                      <img 
                        src={exp.image} 
                        alt={exp.title}
                        className="image-fit"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
                      
                      {/* Close button */}
                      <button
                        onClick={() => setSelectedModal(null)}
                        className="absolute top-6 right-6 w-10 h-10 bg-gray-900/80 rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition-colors"
                      >
                        ✕
                      </button>
                      
                      {/* Content overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-8">
                        <h1 className="text-4xl font-bold mb-2 text-white">{exp.title}</h1>
                        <h2 className="text-2xl text-gray-300 mb-4">{exp.company}</h2>
                        <p className="text-lg text-gray-400 mb-6">{exp.subtitle}</p>
                        
                        {/* Netflix-style action buttons */}
                        <div className="flex items-center space-x-4">
                          <button className="flex items-center space-x-2 bg-white text-black px-6 py-3 rounded font-bold hover:bg-gray-200 transition-colors">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                              <polygon points="5,3 19,12 5,21"/>
                            </svg>
                            <span>View Details</span>
                          </button>
                          {exp.isLatest && (
                            <span className="bg-red-600 text-white px-3 py-1 rounded text-sm font-bold">
                              CURRENT ROLE
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    {/* Content section */}
                    <div className="p-8">
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2">
                          <h3 className="text-2xl font-bold mb-4 text-white">About this Role</h3>
                          <p className="text-lg text-gray-300 leading-relaxed mb-6">{exp.details}</p>
                          
                          <h4 className="text-xl font-bold mb-4 text-white">Key Achievements</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                            {exp.achievements.map((achievement, index) => (
                              <div key={index} className="flex items-center space-x-3 p-3 bg-gray-800/50 rounded">
                                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: NETFLIX_COLORS.primary }}></div>
                                <span className="text-gray-300">{achievement}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="text-xl font-bold mb-4 text-white">Technologies Used</h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, index) => (
                              <span key={index} className="px-3 py-2 bg-gray-800 text-gray-300 rounded-full text-sm border border-gray-700">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                );
              }
              
              if (project) {
                return (
                  <>
                    {/* Netflix-style header */}
                    <div className="relative h-96 overflow-hidden bg-gray-800">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="image-fit"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
                      
                      <button
                        onClick={() => setSelectedModal(null)}
                        className="absolute top-6 right-6 w-10 h-10 bg-gray-900/80 rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition-colors"
                      >
                        ✕
                      </button>
                      
                      <div className="absolute bottom-0 left-0 right-0 p-8">
                        <h1 className="text-4xl font-bold mb-2 text-white">{project.title}</h1>
                        <p className="text-lg text-gray-400 mb-6">{project.subtitle}</p>
                        
                        <div className="flex items-center space-x-4">
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 bg-white text-black px-6 py-3 rounded font-bold hover:bg-gray-200 transition-colors"
                          >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
                              <polyline points="15,3 21,3 21,9"/>
                              <line x1="10" y1="14" x2="21" y2="3"/>
                            </svg>
                            <span>View Project</span>
                          </a>
                          <span className="bg-gray-800 text-white px-3 py-1 rounded text-sm">
                            {project.category}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-8">
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2">
                          <h3 className="text-2xl font-bold mb-4 text-white">Project Overview</h3>
                          <p className="text-lg text-gray-300 leading-relaxed mb-6">{project.details}</p>
                        </div>
                        
                        <div>
                          <h4 className="text-xl font-bold mb-4 text-white">Tech Stack</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.tech.map((tech, index) => (
                              <span key={index} className="px-3 py-2 bg-gray-800 text-gray-300 rounded-full text-sm border border-gray-700">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                );
              }
              
              if (skill) {
                return (
                  <>
                    <div className="relative h-64 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                      <div className="text-center">
                        <div className="mb-4">{skill.icon}</div>
                        <h2 className="text-4xl font-bold text-white">{skill.name}</h2>
                      </div>
                      <button
                        onClick={() => setSelectedModal(null)}
                        className="absolute top-6 right-6 w-10 h-10 bg-gray-900/80 rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition-colors"
                      >
                        ✕
                      </button>
                    </div>
                    <div className="p-8">
                      <h3 className="text-2xl font-bold mb-6 text-white">Skill Proficiency</h3>
                      <div className="w-full bg-gray-700 rounded-full h-6 mb-4 overflow-hidden">
                        <div 
                          className="h-6 rounded-full transition-all duration-1000"
                          style={{ 
                            width: `${skill.level}%`,
                            backgroundColor: NETFLIX_COLORS.primary
                          }}
                        ></div>
                      </div>
                      <p className="text-2xl font-bold mb-4" style={{ color: NETFLIX_COLORS.primary }}>{skill.level}% Proficiency</p>
                      <p className="text-lg text-gray-300 leading-relaxed">
                        Extensive professional experience with {skill.name} across multiple projects and enterprise environments. 
                        Proven track record of delivering high-quality solutions and mentoring team members.
                      </p>
                    </div>
                  </>
                );
              }
              
              return null;
            })()}
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}