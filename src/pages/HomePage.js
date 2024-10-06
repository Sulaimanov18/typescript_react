import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
const HomePage = () => {
    return (_jsxs("div", { className: "container mx-auto p-6", children: [_jsx("h1", { className: "text-4xl font-bold text-gray-900", children: "Welcome to Expert Platform" }), _jsx("p", { className: "text-lg text-gray-700 mt-4", children: "Find experts across different categories, including psychologists, life coaches, financial advisors, and more." }), _jsx("div", { className: "mt-8", children: _jsx(Link, { to: "/categories", className: "bg-blue-500 text-white p-4 rounded-lg shadow-md", children: "Browse Experts by Category" }) })] }));
};
export default HomePage;
