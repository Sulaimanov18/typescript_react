import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (_jsx("nav", { className: "bg-[#477be4] shadow-md p-4", children: _jsxs("div", { className: "container mx-auto flex justify-between items-center", children: [_jsx(Link, { to: "/", className: "text-2xl font-bold text-white hover:text-gray-200 transition-colors duration-300", children: "Expert Platform" }), _jsxs("div", { className: "space-x-4", children: [_jsx(Link, { to: "/categories", className: "text-lg text-white hover:text-gray-200 transition-colors duration-300", children: "Categories" }), _jsx(Link, { to: "/about", className: "text-lg text-white hover:text-gray-200 transition-colors duration-300", children: "About" }), _jsx(Link, { to: "/contact", className: "text-lg text-white hover:text-gray-200 transition-colors duration-300", children: "Contact" }), _jsx(Link, { to: "/signup", className: "text-lg text-white hover:text-gray-200 transition-colors duration-300", children: "Sign Up" })] })] }) }));
};
export default Navbar;
