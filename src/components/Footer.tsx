const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-heading font-bold">
              Abi<span className="text-data-400">Dev</span>
            </h2>
            <p className="text-gray-400 mt-2">Data Scientist & AI Specialist</p>
          </div>
          
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-data-400 transition-colors">LinkedIn</a>
            <a href="#" className="text-gray-400 hover:text-data-400 transition-colors">GitHub</a>
            <a href="#" className="text-gray-400 hover:text-data-400 transition-colors">Twitter</a>
            <a href="#" className="text-gray-400 hover:text-data-400 transition-colors">Medium</a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} AbiDev. All rights reserved.
          </p>
          
          <div className="mt-4 md:mt-0">
            <ul className="flex gap-6 text-sm">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white">Home</a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white">About</a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-white">Projects</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
