//  Step 1: Import the images and the icons  
import logo from "../assets/Logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

const Navbar = () => {
  return (
  <nav className="mb-20 flex items-center justify-between py-6">
    <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt="logo" style={{ width: '100px', height: 'auto' }} />    
    </div>
    <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/cyrine-anene-6b79b0245" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
        </a>
        <a href="https://github.com/cyrineanene" target="_blank" rel="noopener noreferrer">
            <FaGithub />
        </a>
        <a href="mailto:cyrine.anene@supcom.tn">
            <FaEnvelope />
        </a>
    </div>
  </nav>
  );
};

export default Navbar;