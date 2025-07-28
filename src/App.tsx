import { useState, useEffect } from 'react';
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar,
  Award, 
  Code, 
  Briefcase, 
  GraduationCap,
  Star,
  ExternalLink,
  Download,
  Github,
  Linkedin,
  Menu,
  X,
  
  BookOpen,
  Trophy,
  Heart,
  Cloud,
} from 'lucide-react';


function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'education', 'experience', 'projects', 'skills', 'achievements', 'contact'];
      const scrollY = window.scrollY;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollY >= offsetTop - 100 && scrollY < offsetTop + offsetHeight - 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const navigation = [
    { id: 'about', label: 'About', icon: User },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'projects', label: 'Projects', icon: Code },
    { id: 'skills', label: 'Skills', icon: Star },
    { id: 'achievements', label: 'Achievements', icon: Trophy },
    { id: 'contact', label: 'Contact', icon: Mail }
  ];

  const skills = [
    { name: 'Java', level: 85, category: 'Language' },
    { name: 'Python', level: 80, category: 'Language' },
    { name: 'C', level: 75, category: 'Language' },
    { name: 'React.js', level: 90, category: 'Frontend' },
    { name: 'Node.js', level: 85, category: 'Backend' },
    { name: 'JavaScript', level: 88, category: 'Language' },
    { name: 'HTML/CSS', level: 92, category: 'Frontend' },
    { name: 'MongoDB', level: 82, category: 'Database' },
    { name: 'MySQL', level: 78, category: 'Database' },
    { name: 'AWS EC2', level: 75, category: 'Cloud' },
    { name: 'Git/GitHub', level: 85, category: 'Tools' }
  ];

  // const projects = [
  //   {
  //     title: "Disaster Management and Alert System",
  //     description: "Real-time disaster alerts and emergency coordination platform with live tracking and SMS notifications",
  //     tech: ["React.js", "Node.js", "MongoDB", "Google Maps API", "Twilio"],
  //     image: "https://images.pexels.com/photos/73909/pexels-photo-73909.jpeg?auto=compress&cs=tinysrgb&w=800",
  //     link: "#"
  //   },
  //   {
  //     title: "AWS Cloud Deployment",
  //     description: "Web application deployment on AWS EC2 instances with hands-on cloud computing experience",
  //     tech: ["AWS EC2", "Cloud Computing", "Web Deployment"],
  //     image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800",
  //     link: "#"
  //   },
  //   {
  //     title: "Java Programming Projects",
  //     description: "Object-oriented programming projects covering data structures, exception handling, and file I/O operations",
  //     tech: ["Java", "OOPs", "Data Structures", "Exception Handling"],
  //     image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800",
  //     link: "#"
  //   }
  // ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-3xl md:text-1xl font-bold">PAGGILLA SAKETH</h1>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navigation.map(({ id, label, icon: Icon }) => (
                  <button
                    key={id}
                    onClick={() => scrollToSection(id)}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-blue-50 hover:text-blue-600 ${
                      activeSection === id 
                        ? 'bg-blue-100 text-blue-600' 
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    <div className="flex items-center space-x-2">
                      <Icon className="w-4 h-4" />
                      <span>{label}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              {navigation.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-base font-medium transition-all duration-200 ${
                    activeSection === id 
                      ? 'bg-blue-100 text-blue-600' 
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <Icon className="w-5 h-5" />
                    <span>{label}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="about" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
                  Available for Opportunities
                </span>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-4">
                  Paggilla
                  <span className="block text-blue-600">Saketh</span>
                </h1>
                <h2 className="text-xl lg:text-2xl text-gray-600 mb-6">
                  Full Stack Developer & Software Engineer
                </h2>
              </div>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Aspiring software engineer with expertise in full-stack development, 
                cloud technologies, and modern web frameworks. Committed to solving complex 
                problems and engineering scalable web applications. Aspires to build and 
                expand my own tech company in the future, delivering innovative solutions that impact lives.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
  <a
    href="/RESUME(CSE23343).pdf"
    download
    className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
  >
    <Download className="w-5 h-5 mr-2" />
    Download Resume
  </a>

  <button
    onClick={() => scrollToSection('contact')}
    className="inline-flex items-center px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-200 transform hover:scale-105"
  >
    <Mail className="w-5 h-5 mr-2" />
    Get In Touch
  </button>
</div>


              <div className="flex space-x-4">
              <a
              href="https://github.com/saketh-04"
             target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-110 group"
             >
            <Github className="w-6 h-6 text-gray-600 group-hover:text-blue-600" />
            </a>

            <a
              href="https://www.linkedin.com/in/paggilla-saketh-95a84833b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    target="_blank"
    rel="noopener noreferrer"
    className="p-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-110 group"
  >
    <Linkedin className="w-6 h-6 text-gray-600 group-hover:text-blue-600" />
  </a>

  <a
    href="mailto:sakethpaggila666@gmail.com"
    className="p-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-110 group"
  >
    <Mail className="w-6 h-6 text-gray-600 group-hover:text-blue-600" />
  </a>
</div>

            </div>

            <div className="relative animate-slide-up">
              <div className="relative z-10">
                <div className="w-80 h-80 mx-auto rounded-2xl bg-gradient-to-br from-blue-400 to-teal-400 shadow-2xl overflow-hidden transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  <img 
                    src="/final.jpg" 
                    alt="PAGGILLA SAKETH"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-orange-400 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-400 rounded-full opacity-20 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-teal-100 text-teal-600 rounded-full text-base font-medium mb-4">
              <GraduationCap className="w-4 h-4 mr-2" />
              Academic Background
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Education</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Strong academic foundation in computer science and engineering
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-teal-400"></div>
              
              <div className="space-y-8">
                <div className="relative flex items-start group">
                  <div className="absolute left-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-200">
                    <GraduationCap className="w-4 h-4 text-white" />
                  </div>
                  <div className="ml-12 bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 w-full">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">Bachelor of Technology</h3>
                        <p className="text-blue-600 font-medium">Computer Science Engineering</p>
                        <p className="text-gray-600">Amrita Vishwa Vidyapeetham, Coimbatore</p>
                      </div>
                      <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-base font-medium">
                       (on going)
                      </span>
                    </div>
                    <div className="flex items-center text-gray-500 text-base">
                      <Calendar className="w-4 h-4 mr-2" />
                      2023 - 2027
                    </div>
                  </div>
                </div>

                <div className="relative flex items-start group">
                  <div className="absolute left-0 w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-200">
                    <BookOpen className="w-4 h-4 text-white" />
                  </div>
                  <div className="ml-12 bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 w-full">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">Higher Secondary Education</h3>
                        <p className="text-teal-600 font-medium">Intermediate (+2)</p>
                        <p className="text-gray-600">Sri Chaitanya College, R.K. Puram</p>
                      </div>
                      <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-base font-medium">
                        94.1%
                      </span>
                    </div>
                    <div className="flex items-center text-gray-500 text-base">
                      <Calendar className="w-4 h-4 mr-2" />
                      2021 - 2023
                    </div>
                  </div>
                </div>

                <div className="relative flex items-start group">
                  <div className="absolute left-0 w-8 h-8 bg-green-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-200">
                    <Star className="w-4 h-4 text-white" />
                  </div>
                  <div className="ml-12 bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 w-full">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">Secondary School</h3>
                        <p className="text-green-600 font-medium">Class 10th</p>
                        <p className="text-gray-600">Sri Chaitanya School</p>
                      </div>
                      <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-base font-medium">
                        10 GPA
                      </span>
                    </div>
                    <div className="flex items-center text-gray-500 text-base">
                      <Calendar className="w-4 h-4 mr-2" />
                      2021
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-base font-medium mb-4">
              <Briefcase className="w-4 h-4 mr-2" />
              Professional Experience
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Internships & Training</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hands-on experience through virtual internships and professional development
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                      <Cloud className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">AWS Virtual Intern</h3>
                      <p className="text-orange-600 font-medium">Amazon Web Services (AWS) - AICTE</p>
                      <p className="text-gray-600">Online</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-base font-medium">
                    Summer 2025
                  </span>
                </div>
                <ul className="space-y-2 text-gray-600 mb-4">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Worked with Amazon EC2 to launch and manage virtual servers
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Deployed web applications on EC2 instances with hands-on experience
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Gained practical knowledge of cloud computing concepts and AWS services
                  </li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-base font-medium">AWS EC2</span>
                  <span className="px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-base font-medium">Cloud Computing</span>
                  <span className="px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-base font-medium">Virtual Servers</span>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Code className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">Java Programming Student</h3>
                      <p className="text-blue-600 font-medium">Naresh i Technologies</p>
                      <p className="text-gray-600">Online Course</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-600 rounded-full text-base font-medium">
                    Ongoing (2025)
                  </span>
                </div>
                <ul className="space-y-2 text-gray-600 mb-4">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Learning Object-Oriented Programming concepts and principles
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Mastering exception handling and file I/O operations
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Implementing data structures and algorithms in Java
                  </li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">Java</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">OOPs</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">Data Structures</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

<section id="projects" className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Header */}
    <div className="text-center mb-16">
      <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
        <Code className="w-4 h-4 mr-2" />
        Portfolio
      </div>
      <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
        Featured Projects
      </h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Showcasing innovative solutions and technical expertise
      </p>
    </div>

    {/* Projects Grid */}
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
  {[
    {
      title: "GamingApp",
      description:
        "A modern gaming application featuring multiple mini-games, user profiles, and a leaderboard. Built for a seamless and engaging user experience.",
      image:
        "https://res.cloudinary.com/upwork-cloud/image/upload/c_scale,w_1000/v1695813059/catalog/1706985968800821248/o4rmjiat31ydgzscj7mj.jpg",
      tech: ["React", "TailwindCSS", "TypeScript", "Node.js"],
      liveDemo: "https://games-app-coral.vercel.app/",
      github: "https://github.com/saketh-04/GamesApp.git"
    },
    {
      title: "Disaster Management System",
      description:
        "A comprehensive web application for managing disaster response and relief operations. Features real-time alerts, resource allocation, and emergency communication systems.",
      image:
        "https://dcassetcdn.com/design_img/2523470/636004/636004_13504479_2523470_8700c44d_image.jpg",
      tech: ["Java", "HTML/CSS", "JavaScript", "Database"],
      liveDemo: "#",
      github: "https://github.com/saketh-04/Disaster_Mangement"
    },
    {
      title: "Pharmacy Website",
      description:
        "An online pharmacy platform that allows users to browse medicines, view details, and place orders. Built with responsive design and user-friendly interface.",
      image:
        "https://mir-s3-cdn-cf.behance.net/projects/808/a05d2e228325821.Y3JvcCwxMjE1LDk1MCwyOTEsODQ.jpg",
      tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      liveDemo: "https://medisphere-f3b4.onrender.com",
      github: "https://github.com/Kuladeep-Reddy-C/MediSphere/tree/main"
    },
    {
      title: "AstroAtlas",
      description:
        "An interactive astronomical database and visualization tool that provides detailed information about celestial objects and space phenomena.",
      image:
        "https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/411/128/datas/original.jpg",
      tech: ["HTML/CSS", "JavaScript", "Python", "API Integration"],
      liveDemo: "#",
      github: "#"
    },
    {
      title: "AI Interview Questions",
      description:
        "A comprehensive collection and practice platform for AI and machine learning interview questions with detailed explanations and code examples.",
      image:
        "https://play-lh.googleusercontent.com/-U215sMKF3epOq8qLQL3THeExKsTJ2OC0sB2QDNxLUn5AL6ufp7p74bvdbBZQDjzcw",
      tech: ["Python", "Machine Learning", "Web Development", "Algorithms"],
      liveDemo: "#",
      github: "#"
    },
    {
      title: "MovieApp",
      description:
        "MovieApp shows the latest movie ratings so you can easily see which films are worth watching on other platforms.",
      image:
        "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/63/ac/65/63ac6582-bcc1-0aa2-6b6f-ac4070190cb3/pr_source.png/643x0w.jpg",
      tech: ["React", "TailwindCSS", "TypeScript", "Node.js"],
      liveDemo: "https://saketh-04.github.io/Movie_App/",
      github: "https://github.com/saketh-04/Movie_App/"
    }
  ].map((project, index) => (
    <div
      key={index}
      className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
    >
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        {/* Two buttons: Live Demo and GitHub */}
        <div className="absolute top-4 right-4 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <a
            href={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-110"
            title="Live Demo"
          >
            <ExternalLink className="w-4 h-4 text-gray-600" />
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-110"
            title="GitHub Repo"
          >
            {/* Replace this with an actual GitHub icon */}
            <svg
              className="w-4 h-4 text-gray-600"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577v-2.15c-3.338.727-4.033-1.416-4.033-1.416-.546-1.385-1.333-1.754-1.333-1.754-1.088-.745.082-.729.082-.729 1.205.085 1.84 1.238 1.84 1.238 1.07 1.834 2.805 1.304 3.492.997.108-.775.42-1.305.763-1.605-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.467-2.38 1.235-3.22-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.48 11.48 0 013.003-.404c1.02.005 2.045.138 3.003.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.12 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.803 5.624-5.475 5.92.432.372.816 1.103.816 2.222v3.293c0 .32.216.694.825.576C20.565 21.796 24 17.296 24 12c0-6.63-5.373-12-12-12z" />
            </svg>
          </a>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
          {project.title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-3">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm font-medium hover:bg-blue-100 hover:text-blue-600 transition-colors duration-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  ))}
</div>

  </div>
</section>




      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-600 rounded-full text-sm font-medium mb-4">
              <Star className="w-4 h-4 mr-2" />
              Technical Expertise
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Skills & Technologies</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Proficient in modern technologies and development frameworks
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-8">Technical Skills</h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={index} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center space-x-3">
                        <span className="text-lg font-medium text-gray-900">{skill.name}</span>
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs font-medium">
                          {skill.category}
                        </span>
                      </div>
                      <span className="text-sm font-medium text-gray-600">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div 
                        className="h-3 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full transition-all duration-1000 ease-out transform origin-left group-hover:scale-x-105"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-8">Tools & Technologies</h3>
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Code className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">Development Tools</h4>
                      <p className="text-gray-600">VS Code, IntelliJ IDEA, Eclipse</p>
                      <p className="text-sm text-gray-500 mt-1">Git, GitHub, Postman</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Cloud className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">Operating Systems</h4>
                      <p className="text-gray-600">Windows, Linux (Basic)</p>
                      <p className="text-sm text-gray-500 mt-1">Microsoft Office, Google Workspace</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Award className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">AWS Virtual Internship</h4>
                      <p className="text-gray-600">Cloud Computing Fundamentals</p>
                      <p className="text-sm text-gray-500 mt-1">Completed via AICTE 2025</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-yellow-100 text-yellow-600 rounded-full text-sm font-medium mb-4">
              <Trophy className="w-4 h-4 mr-2" />
              Recognition
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Achievements & Awards</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Recognition for academic excellence, technical contributions, and sports achievements
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-xl border border-yellow-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                <Trophy className="w-6 h-6 text-yellow-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Top 5 in Hackathon</h3>
              <p className="text-gray-600">Secured Top 5 position in 2-hour Hackathon at CIT Coimbatore for disaster response solutions</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-teal-50 p-6 rounded-xl border border-green-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">State Cricket Representative</h3>
              <p className="text-gray-600">Represented Telangana State in Cricket, trained under Hyderabad Cricket Association (HCA)</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-6 rounded-xl border border-blue-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Star className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Cricket Tournament Winner</h3>
              <p className="text-gray-600">Won tournaments at HCA and Ranga Reddy District levels</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-6 rounded-xl border border-purple-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Cloud className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">AWS Internship Completion</h3>
              <p className="text-gray-600">Successfully completed AWS Virtual Internship via AICTE with hands-on cloud experience</p>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-orange-50 p-6 rounded-xl border border-red-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <GraduationCap className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Academic Excellence</h3>
              <p className="text-gray-600">10 GPA in 10th grade and 94.1% in Intermediate education</p>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-xl border border-indigo-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Multi-Sport Athlete</h3>
              <p className="text-gray-600">Active in Cricket, Volleyball, Basketball, and Fitness training</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 text-white rounded-full text-sm font-medium mb-4">
              <Mail className="w-4 h-4 mr-2" />
              Get In Touch
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Let's Work Together</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              I'm always interested in new opportunities and exciting projects
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4 group">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-300">Email</p>
                    <p className="text-xl font-medium">sakethpaggila666@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 group">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-300">Phone</p>
                    <p className="text-xl font-medium">+91 7330946389</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 group">
                  <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-300">Location</p>
                    <p className="text-xl font-medium">LB Nagar, Telangana, India</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 group">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-300">Languages</p>
                    <p className="text-xl font-medium">English, Telugu, Hindi</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <p className="text-gray-300 mb-4">Find me on social media</p>
                <div className="flex space-x-4">
                  <a href="#" className="p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-200 transform hover:scale-110">
                    <Github className="w-6 h-6" />
                  </a>
                  <a href="#" className="p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-200 transform hover:scale-110">
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a href="#" className="p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-200 transform hover:scale-110">
                    <Mail className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10">
              <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-gray-300 mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 resize-none"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-400">© 2025 PAGGILLA SAKETH. All rights reserved.</p>
            </div>
            <div className="flex items-center space-x-4">
              <Heart className="w-4 h-4 text-red-500" />
              <span className="text-gray-400">Made with passion</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;