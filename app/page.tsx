// app/page.tsx
import ThemeSwitch from "@/components/theme-switch";

export default function Page() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-50 transition-colors duration-300">
      {/* Header / Navigation */}
      <header className="flex items-center justify-between p-6">
        <h1 className="text-2xl font-bold">Sudila Jayasekara</h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a href="#about" className="hover:text-blue-500 transition">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-blue-500 transition">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-500 transition">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <ThemeSwitch />
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center flex-1 px-6 py-16">
        <div className="text-center">
          <h2 className="text-4xl sm:text-6xl font-extrabold mb-4">
            Hi, I&apos;m <span className="text-blue-500">Sudila Jayasekara</span>
          </h2>
          <p className="text-xl sm:text-2xl mb-6 max-w-2xl mx-auto">
            I create digital experiences that blend creativity and code.
          </p>
          <a
            href="#projects"
            className="px-8 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition"
          >
            See My Work
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-3xl font-bold mb-4">About Me</h3>
          <p className="text-lg">
            I&apos;m a passionate developer specializing in full-stack web
            development. With hands-on experience in Next.js, TypeScript, and
            Tailwind CSS, I transform ideas into modern, responsive digital
            experiences. Whether it&apos;s building sleek user interfaces or scalable
            backend systems, I love tackling unique challenges with innovative
            solutions.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-6 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-4">Projects</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Example Project Card */}
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h4 className="text-2xl font-semibold mb-2">Project One</h4>
              <p>
                A brief project description outlining technologies used, the
                challenges addressed, and the solution provided.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h4 className="text-2xl font-semibold mb-2">Project Two</h4>
              <p>
                A brief project description outlining technologies used, the
                challenges addressed, and the solution provided.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-3xl font-bold mb-4">Contact Me</h3>
          <p className="mb-6">
            I&apos;m open to opportunities and collaboration. Feel free to send me a
            message!
          </p>
          <form className="flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900"
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              className="p-3 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center bg-gray-200 dark:bg-gray-800">
        <p className="text-sm">
          © {new Date().getFullYear()} Sudila Jayasekara. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
