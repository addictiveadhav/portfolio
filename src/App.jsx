import './App.css';
import { motion } from 'framer-motion';


function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-gray-900/90 backdrop-blur z-50">
        <div className="flex justify-center gap-6 py-4 text-sm sm:text-base text-gray-300 font-medium">
          <a href="#hero" className="hover:text-blue-400 transition">Home</a>
          <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
          <a href="#skills" className="hover:text-blue-400 transition">Skills</a>
          <a href="#about" className="hover:text-blue-400 transition">About</a>
          <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="flex items-center justify-center h-screen px-4 scroll-mt-24">
        <motion.div
  className="text-center space-y-6 pt-20"
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
>
  <h1 className="text-5xl font-bold text-blue-400">Adhavan Sridhar</h1>
  <p className="text-xl text-gray-300">Aspiring Java Full Stack and PEGA Developer</p>
  <p className="max-w-md mx-auto text-gray-400">
    I build responsive web applications using React, Spring Boot, and REST APIs.
  </p>
  <div className="flex justify-center gap-4 flex-wrap">
    <a href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-full transition">
      Contact Me
    </a>
    <a
      href={`${import.meta.env.BASE_URL}Adhavan_Resume.pdf`}
      download
      className="border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-6 py-2 rounded-full transition"
    >
      Download Resume
    </a>
  </div>
</motion.div>

      </section>

      {/* Projects Section */}
<section id="projects" className="px-6 py-16 bg-gray-800 scroll-mt-24 text-center">
  <h2 className="text-4xl font-bold text-blue-400 mb-10">Projects</h2>
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
    {[
      {
        title: "Courier Management",
        desc: "Pega rules-based app that manages courier assignment and tracking. Includes SLA alerts and manager dashboards.",
        link: "https://github.com/addictiveadhav/pega-courier",
      },
      {
        title: "Student Result System",
        desc: "Spring Boot + MySQL CRUD system that manages students and result publishing with secure login.",
        link: "https://github.com/addictiveadhav/student-result-system",
      },
      {
        title: "React To-Do App",
        desc: "Task manager built with React and local storage. Fully responsive with dark mode support.",
        link: "https://github.com/addictiveadhav/react-todo",
      },
    ].map((project, i) => (
      <motion.div
        key={i}
        whileHover={{ scale: 1.03 }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: i * 0.1 }}
        viewport={{ once: true }}
        className="bg-gray-700 p-6 rounded-lg shadow-md flex flex-col justify-between"
      >
        <div>
          <h3 className="text-2xl font-semibold text-white mb-2">{project.title}</h3>
          <p className="text-gray-300 mb-4">{project.desc}</p>
        </div>
        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className="text-blue-400 hover:underline mt-auto"
        >
          View on GitHub
        </a>
      </motion.div>
    ))}
  </div>
</section>



      {/* Skills Section */}
      <section id="skills" className="px-6 py-16 bg-gray-900 text-center scroll-mt-24">
        <h2 className="text-4xl font-bold text-blue-400 mb-10">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            { name: "Java", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
            { name: "Spring Boot", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
            { name: "PostgreSQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
            { name: "React", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
            { name: "HTML", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
            { name: "CSS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
            { name: "JavaScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
            { name: "Git", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
            { name: "MySQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
            { name: "Pega CSSA", src: `${import.meta.env.BASE_URL}images/pega1.png` },
          ].map((skill, i) => (
            <motion.div
  key={i}
  whileHover={{ scale: 1.1 }}
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.4 }}
  viewport={{ once: true }}
  className="flex flex-col items-center p-4 bg-gray-800 rounded-lg"
>
  <img src={skill.src} alt={skill.name} className="w-16 h-16 mb-2" />
  <p className="text-gray-300">{skill.name}</p>
</motion.div>

          ))}
        </div>
      </section>

     {/* About Me Section */}
<section id="about" className="px-6 py-16 bg-gray-800 text-white text-center scroll-mt-24">
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    <h2 className="text-4xl font-bold text-blue-400 mb-6">About Me</h2>
    <div className="max-w-3xl mx-auto text-lg text-gray-300 leading-7 space-y-4">
      <p>
        I'm <strong className="text-white">Adhavan Sridhar</strong>, a Pega Certified Senior System Architect with a strong foundation in full-stack development. With hands-on experience in Java, SQL, Pega, UI/UX, and responsive web design, I specialize in building scalable and user-focused software solutions.
      </p>
      <p>
        I’ve developed multiple end-to-end projects in Pega like courier management, digital healthcare, and food delivery systems, handling both business logic and user experience. My skillset spans technologies like Spring Boot, PostgreSQL, MySQL, React, Git, and automation tools like Jenkins and Maven.
      </p>
      <p>
        I work well in Agile/Scrum environments and enjoy leading teams as much as contributing technically. I value clean code, collaboration, and continuous learning, and I’m currently looking for a role where I can grow as a full stack developer and contribute to real-world enterprise solutions.
      </p>
    </div>
  </motion.div>
</section>


      {/* Contact Section */}
<section id="contact" className="px-6 py-16 bg-gray-900 text-center scroll-mt-24">
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    <h2 className="text-4xl font-bold text-blue-400 mb-6">Contact Me</h2>
    <p className="text-gray-300 max-w-xl mx-auto mb-8">
      Have a question or want to work together? Feel free to reach out!
    </p>

    <form
      action="https://formspree.io/f/xrbknjdn"
      method="POST"
      className="flex flex-col items-center space-y-4 max-w-md mx-auto"
    >
      <input
        type="text"
        name="name"
        required
        placeholder="Your Name"
        className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="email"
        name="email"
        required
        placeholder="Your Email"
        className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <textarea
        name="message"
        required
        rows="4"
        placeholder="Your Message"
        className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      ></textarea>
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-semibold transition"
      >
        Send Message
      </button>
    </form>
  </motion.div>
</section>


      {/* Footer */}
<footer className="bg-gray-800 py-6 mt-12">
  <div className="flex justify-center gap-6 mb-4 text-blue-400 text-xl">
    <a
      href="https://github.com/addictiveadhav"
      target="_blank"
      rel="noreferrer"
      className="hover:text-white transition"
      aria-label="GitHub"
    >
      <i className="fab fa-github"></i>
    </a>
    <a
      href="https://www.linkedin.com/in/adhavan-sridhar-93415b230"
      target="_blank"
      rel="noreferrer"
      className="hover:text-white transition"
      aria-label="LinkedIn"
    >
      <i className="fab fa-linkedin"></i>
    </a>
  </div>
  <p className="text-center text-gray-400 text-sm">
    © {new Date().getFullYear()} Adhavan Sridhar. All rights reserved.
  </p>
</footer>


    </div>
  );
}

export default App;
