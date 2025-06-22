import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import CircularLogo from "./CircularLogo";
import gecoLogo from "../../assets/geco_logo.png";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-green-600 text-white p-4 fixed w-full top-0 left-0 z-50">
      <div className="flex justify-between items-center">
        <div className="text-2xl font-bold flex items-center space-x-2">
            <CircularLogo src={gecoLogo} label="GECO" color="text-gray-300"/>
        </div>

        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <div className="hidden md:flex space-x-6">
          <ThemeToggle />
          <a href="#download" className="hover:text-gray-200">Download</a>
          <a href="#features" className="hover:text-gray-200">Features</a>
          <a href="#about" className="hover:text-gray-200">System Requirements</a>
          <a href="#troubleshooting" className="hover:text-gray-200">Troubleshooting</a>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-green-700 bg-opacity-90 flex flex-col items-center justify-center space-y-6 text-xl">
          <ThemeToggle />
          <a href="#download" className="hover:text-gray-200" onClick={() => setIsOpen(false)}>Download</a>
          <a href="#features" className="hover:text-gray-200" onClick={() => setIsOpen(false)}>Features</a>
          <a href="#about" className="hover:text-gray-200" onClick={() => setIsOpen(false)}>System Requirements</a>
          <a href="#troubleshooting" className="hover:text-gray-200" onClick={() => setIsOpen(false)}>Troubleshooting</a>
          <button onClick={() => setIsOpen(false)} className="mt-4 p-2 bg-gray-800 text-white rounded-lg">Close</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
