import React, { useState } from "react";
import "../App.css";
import { Button } from "@chakra-ui/react";
import { MdCall } from "react-icons/md";
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <BrowserRouter>
      <nav className="bg-purple p-10">
        <div className="container mx-auto flex items-center justify-between ">
          <div className="flex items-center">
            <a href="/" className="text-white text-3xl font-bold ">
              PORTFOLIO
            </a>
          </div>
          <div className="hidden md:flex space-x-6 text-xl">
            <Link to="#about">About</Link>
            <Link to="#skills">Skills</Link>
            <Link to="#experience">Experience</Link>
            <Link to="#projects">Projects</Link>
            <Link to="#education">Education</Link>

            <Link to="#contact">
              <Button
                className="bg-light "
                rightIcon={<MdCall />}
                variant="outline"
              >
                Contact
              </Button>
            </Link>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleNavbar}
              className="text-white focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden text-xl ">
            <Link to="#about" className="block p-4">
              About
            </Link>
            <Link to="#skills" className="block p-4">
              Skills
            </Link>
            <Link to="#experience" className="block p-4">
              Experience
            </Link>
            <Link to="#projects" className="block p-4">
              Projects
            </Link>
            <Link to="#education" className="block p-4">
              Education
            </Link>

            <Link to="#contact">
              <Button
                className="bg-light "
                rightIcon={<MdCall />}
                variant="outline"
              >
                Contact
              </Button>
            </Link>
          </div>
        )}
      </nav>
    </BrowserRouter>
  );
};

export default Navbar;
