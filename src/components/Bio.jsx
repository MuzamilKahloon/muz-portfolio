import { motion } from "framer-motion";
import { BIO } from "../constants/index";

const Bio = () => {
  return (
    <section className="flex flex-col max-w-4xl gap-12 pt-20" id="bio">
      {/* Animated Title */}
      <motion.h2
        className="text-3xl text-center lg:text-4xl"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Bio
      </motion.h2>

      {/* Animated Container */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex flex-col gap-4"
      >
        {BIO.map((bio, index) => (
          <motion.p
            key={index}
            className="mb-4 text-lg lg:text-xl"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.5 }}
          >
            {bio}
          </motion.p>
        ))}
      </motion.div>
    </section>
  );
};

export default Bio;
