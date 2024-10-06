import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
const categories = ['Psychologists', 'Life Coaches', 'Career Mentors', 'Business Coaches', 'Financial Advisors'];
const CategoriesPage = () => {
    return (_jsxs("div", { className: "p-6 bg-gray-50", children: [_jsx("h1", { className: "text-3xl font-bold text-center mb-6 text-gray-800", children: "Browse by Category" }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: categories.map((category, index) => (_jsx(Link, { to: `/experts/${category.toLowerCase().replace(/\s+/g, '-')}`, className: "block p-6 border border-gray-300 rounded-lg shadow-md hover:bg-[#477be4] hover:text-white transition-colors duration-300", "aria-label": `Browse experts in ${category}`, title: `Browse experts in ${category}`, children: _jsx("h2", { className: "text-xl font-semibold", children: category }) }, index))) })] }));
};
export default CategoriesPage;
