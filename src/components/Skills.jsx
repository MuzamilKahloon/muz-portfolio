import { SKILLS } from "../constants";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { 
    opacity: 0, 
    y: 20 
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.5,
    },
  },
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    x: -20 
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { 
      duration: 0.5 
    },
  },
};

const Skills = () => {
  return (
    <div className="container px-4 py-10 mx-auto" id="skills">
      <motion.h2
        className="mt-20 mb-12 text-4xl font-semibold text-center text-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Skills
      </motion.h2>

      <motion.div
        className="max-w-3xl px-6 py-4 mx-auto shadow-lg bg-gradient-to-r from-gray-800 via-gray-900 to-black rounded-3xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {SKILLS.map((skill, index) => (
          <motion.div
            key={index}
            className={`flex items-center justify-between py-4 ${
              index !== SKILLS.length - 1 ? "border-b border-gray-700" : ""
            }`}
            variants={itemVariants}
          >
            <div className="flex items-center space-x-4">
              <div className="text-2xl text-blue-400">{skill.icon}</div>
              <h3 className="text-lg font-medium text-white">{skill.name}</h3>
            </div>
            <div className="text-lg font-semibold text-gray-300">
              {skill.experience}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Skills;
