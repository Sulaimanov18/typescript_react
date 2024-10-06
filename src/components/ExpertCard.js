import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Typography, Button } from 'antd';
import { Link } from 'react-router-dom';
import useWindowSize from '../hooks/useWindowSize'; // Adjust the path accordingly
const { Title, Paragraph } = Typography;
const ExpertCard = ({ expert }) => {
    const { width } = useWindowSize(); // Get window width
    // Determine button text size based on window width
    const buttonTextSize = width < 768 ? 'text-xs' : 'text-sm'; // Adjust the breakpoint as needed
    return (_jsx(Link, { to: `/expert/${expert.id}`, children: _jsxs("div", { className: "flex flex-col md:flex-row p-5 rounded-xl shadow-md bg-white transition-transform transform hover:scale-105 cursor-pointer", style: { width: '100%', marginBottom: '16px' }, children: [_jsx("img", { alt: expert.name, src: expert.imageUrl, className: "w-24 h-24 md:w-32 md:h-32 object-cover rounded-md mb-3 md:mb-0 mr-4" }), _jsxs("div", { className: "flex-grow", children: [_jsx("div", { className: "flex flex-col md:flex-row", children: _jsxs("div", { className: "md:flex-grow", children: [_jsx(Title, { level: 4, className: "text-custom-blue mb-1", children: expert.name }), _jsx(Paragraph, { className: "text-gray-600 text-xs mb-1", children: expert.profession }), _jsxs(Paragraph, { className: 'text-sm mb-1', children: [_jsx("strong", { children: "Specialties:" }), " ", expert.specialties.join(', ')] })] }) }), _jsxs(Paragraph, { className: 'text-sm mb-2', children: [_jsx("strong", { children: "Description:" }), " ", expert.description] })] }), _jsxs("div", { className: "flex flex-col md:ml-4 mt-2", children: [_jsx(Paragraph, { className: "flex items-center justify-center bg-blue-500 text-white p-2 rounded-md mb-2", children: expert.phone }), _jsx(Button, { type: "primary", onClick: () => window.open(`mailto:${expert.email}`), className: `mb-2 ${buttonTextSize} w-full`, style: { minWidth: '200px', height: '40px' }, children: "Email" }), _jsx("div", { className: "hidden md:block", children: _jsx(Button, { type: "default", className: ` ${buttonTextSize} w-full`, style: { minWidth: '200px', height: '40px' }, children: "View" }) })] })] }) }));
};
export default ExpertCard;
