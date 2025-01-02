import { EDUCATION } from "../constants";
import { motion } from "framer-motion";

const EducationSection = () => {
  return (
    <section className="py-8" id="education">
      {/* Animated Title */}
      <motion.h2
        className="mb-4 text-3xl font-bold text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Education
      </motion.h2>

      {/* Animated Education Items */}
      <div>
        {EDUCATION.map((edu, index) => (
          <motion.div
            key={index}
            className="p-10 mb-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: index * 0.5 }}
          >
            <h3 className="text-xl font-semibold">{edu.degree}</h3>
            <p className="text-lg">{edu.institution}</p>
            <p className="text-sm text-stone-300">{edu.duration}</p>
            <p className="mt-2">{edu.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;
