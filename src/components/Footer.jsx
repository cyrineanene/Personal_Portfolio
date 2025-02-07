import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t border-neutral-900 bg-neutral-950 py-6 text-center">
      <div className="container mx-auto px-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          <p className="text-neutral-400">
            © 2025 Cyrine Anene. All rights reserved.
          </p>
          <div className="flex space-x-6 text-2xl text-neutral-400">
            <a href="https://www.linkedin.com/in/cyrine-anene-6b79b0245" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400">
              <FaLinkedin />
            </a>
            <a href="https://github.com/cyrineanene" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400">
              <FaGithub />
            </a>
            <a href="mailto:cyrine.anene@supcom.tn" className="hover:text-purple-400">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;