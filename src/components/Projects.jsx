import { motion } from "framer-motion";
import { PROJECTS } from "../constants";
import { MdArrowOutward } from "react-icons/md";

const Projects = () => {
  return (
    <section className="pt-20" id="projects">
      {/* Section Title */}
      <motion.h2
        className="mb-8 text-3xl text-center lg:text-4xl"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Projects
      </motion.h2>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project) => (
          <motion.div
            key={project.id}
            className="relative overflow-hidden rounded-3xl group"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.name}
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
            />

            {/* Project Details */}
            <motion.div
              className="absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 backdrop-blur-lg group-hover:opacity-100"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="mb-2 text-xl">{project.name}</h3>
              <p className="p-4 mb-12">{project.description}</p>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-black bg-white rounded-full hover:bg-gray-300"
              >
                <div className="flex items-center">
                  <span>View on Github</span>
                  <MdArrowOutward />
                </div>
              </a>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
