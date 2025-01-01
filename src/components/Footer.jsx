import logo from "../../public/assets/logom.jpg";
import { SOCIAL_MEDIA_LINKS } from "../constants";

const Footer = () => {
  return (
    <div className="mt-20 mb-8">
      {/* Logo Section */}
      <div className="flex items-center justify-center">
        <img src={logo} width={200} className="my-20" alt="Logo" />
      </div>

      {/* Social Media Links */}
      <div className="flex items-center justify-center gap-8">
        {SOCIAL_MEDIA_LINKS.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-900"
          >
            {link.icon}
          </a>
        ))}
      </div>

      {/* Footer Text */}
      <p className="mt-8 text-sm tracking-wide text-center text-gray-400">
        &copy; {new Date().getFullYear()} Muzammil Ashfaq Kahloon. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
