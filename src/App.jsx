import './App.css';

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
        <div className="text-center space-y-6 pt-20">
          <h1 className="text-5xl font-bold text-blue-400">Adhavan Sridhar</h1>
          <p className="text-xl text-gray-300">Aspiring Java Full Stack Developer</p>
          <p className="max-w-md mx-auto text-gray-400">
            I build responsive web applications using React, Spring Boot, and REST APIs.
          </p>
          <div className="flex justify-center gap-4">
            <a href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-full transition">
              Contact Me
            </a>
            {/* Resume Download Button */}
            <a
              href="/Adhavan_Resume.pdf"
              download
              className="border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-6 py-2 rounded-full transition"
            >
              Download Resume
            </a>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="px-6 py-16 bg-gray-800 scroll-mt-24">
  <h2 className="text-4xl font-bold text-center mb-10 text-blue-400">Projects</h2>
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
    {/* Project 1 */}
    <div className="bg-gray-700 p-6 rounded-lg shadow-md">
      <h3 className="text-2xl font-semibold text-white mb-2">Courier Management</h3>
      <p className="text-gray-300 mb-4">Pega rules-based app that manages courier assignment and tracking. Includes SLA alerts and manager dashboards.</p>
      <a href="https://github.com/addictiveadhav/pega-courier" target="_blank" className="text-blue-400 hover:underline">
        GitHub
      </a>
    </div>

    {/* Project 2 */}
    <div className="bg-gray-700 p-6 rounded-lg shadow-md">
      <h3 className="text-2xl font-semibold text-white mb-2">Student Result System</h3>
      <p className="text-gray-300 mb-4">Spring Boot + MySQL CRUD system that manages students and result publishing with secure login.</p>
      <a href="https://github.com/addictiveadhav/student-result-system" target="_blank" className="text-blue-400 hover:underline">
        GitHub
      </a>
    </div>

    {/* Project 3 */}
    <div className="bg-gray-700 p-6 rounded-lg shadow-md">
      <h3 className="text-2xl font-semibold text-white mb-2">React To-Do App</h3>
      <p className="text-gray-300 mb-4">Task manager built with React and local storage. Fully responsive with dark mode support.</p>
      <a href="https://github.com/addictiveadhav/react-todo" target="_blank" className="text-blue-400 hover:underline">
        GitHub
      </a>
    </div>
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
            { name: "Pega CSSA", src: "/images/pega1.png" },
          ].map((skill, i) => (
            <div key={i} className="flex flex-col items-center p-4 bg-gray-800 rounded-lg hover:scale-105 transition">
              <img src={skill.src} alt={skill.name} className="w-16 h-16 mb-2" />
              <p className="text-gray-300">{skill.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="px-6 py-16 bg-gray-800 text-white text-center scroll-mt-24">
        <h2 className="text-4xl font-bold text-blue-400 mb-6">About Me</h2>
        <div className="max-w-3xl mx-auto text-lg text-gray-300 leading-7">
          <p className="mb-4">
            I'm <strong className="text-white">Adhavan Sridhar</strong>, a Pega Certified Senior System Architect with a strong foundation in full-stack development. With hands-on experience in Java, SQL, Pega, UI/UX, and responsive web design, I specialize in building scalable and user-focused software solutions.
          </p>
          <p className="mb-4">
            I’ve developed multiple end-to-end projects in Pega like courier management, digital healthcare, and food delivery systems, handling both business logic and user experience. My skillset spans technologies like Spring Boot, PostgreSQL, MySQL, React, Git, and automation tools like Jenkins and Maven.
          </p>
          <p className="mb-4">
            I work well in Agile/Scrum environments and enjoy leading teams as much as contributing technically. I value clean code, collaboration, and continuous learning, and I’m currently looking for a role where I can grow as a full stack developer and contribute to real-world enterprise solutions.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-6 py-16 bg-gray-900 text-center scroll-mt-24">
        <h2 className="text-4xl font-bold text-blue-400 mb-8">Contact Me</h2>
        <p className="text-gray-300 max-w-xl mx-auto mb-8">
          Have a question or want to work together? Feel free to reach out!
        </p>
        <form
          action="https://formspree.io/f/xrbknjdn"
          method="POST"
          className="flex flex-col items-center space-y-4"
        >
          <input
            type="text"
            name="name"
            required
            placeholder="Your Name"
            className="w-full max-w-md px-4 py-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Your Email"
            className="w-full max-w-md px-4 py-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            name="message"
            required
            rows="4"
            placeholder="Your Message"
            className="w-full max-w-md px-4 py-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-semibold"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-center py-6">
  <div className="flex justify-center gap-6 mb-4 text-blue-400">
    <a href="https://github.com/addictiveadhav" target="_blank" className="hover:underline">
      GitHub
    </a>
    <a href="https://www.linkedin.com/in/adhavan-sridhar-93415b230" target="_blank" className="hover:underline">
      LinkedIn
    </a>
  </div>
  <p className="text-gray-400 text-sm">
    © {new Date().getFullYear()} Adhavan Sridhar. All rights reserved.
  </p>
</footer>

    </div>
  );
}

export default App;
