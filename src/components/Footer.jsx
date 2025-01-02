import logo from "../../public/assets/logom.jpg";
import { SOCIAL_MEDIA_LINKS } from "../constants";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const Footer = () => {
  return (
    <motion.div
      className="mt-20 mb-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Logo Section */}
      <motion.div
        className="flex items-center justify-center"
        variants={itemVariants}
      >
        <img src={logo} width={200} className="my-20" alt="Logo" />
      </motion.div>

      {/* Social Media Links */}
      <motion.div
        className="flex items-center justify-center gap-8"
        variants={containerVariants}
      >
        {SOCIAL_MEDIA_LINKS.map((link, index) => (
          <motion.a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-900"
            variants={itemVariants}
          >
            {link.icon}
          </motion.a>
        ))}
      </motion.div>

      {/* Footer Text */}
      <motion.p
        className="mt-8 text-sm tracking-wide text-center text-gray-400"
        variants={itemVariants}
      >
        &copy; {new Date().getFullYear()} Muzammil Ashfaq Kahloon. All rights
        reserved.
      </motion.p>
    </motion.div>
  );
};

export default Footer;
