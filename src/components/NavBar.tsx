import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-[#477be4] shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-white hover:text-gray-200 transition-colors duration-300">Expert Platform</Link>
        <div className="space-x-4">
          <Link to="/categories" className="text-lg text-white hover:text-gray-200 transition-colors duration-300">Categories</Link>
          <Link to="/about" className="text-lg text-white hover:text-gray-200 transition-colors duration-300">About</Link>
          <Link to="/contact" className="text-lg text-white hover:text-gray-200 transition-colors duration-300">Contact</Link>
          <Link to="/signup" className="text-lg text-white hover:text-gray-200 transition-colors duration-300">Sign Up</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
