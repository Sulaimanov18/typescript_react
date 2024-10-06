import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Button } from 'antd';
import experts from '../expertsData'; // Import the expert data
const { Title, Paragraph } = Typography;
const ExpertProfilePage = () => {
    const { id } = useParams();
    // Find the index of the expert by ID
    const initialIndex = experts.findIndex((expert) => expert.id === id);
    const [currentIndex, setCurrentIndex] = useState(initialIndex >= 0 ? initialIndex : 0);
    const expert = experts[currentIndex];
    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : experts.length - 1));
    };
    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex < experts.length - 1 ? prevIndex + 1 : 0));
    };
    return (_jsxs("div", { className: "flex flex-col items-center", children: [_jsxs("div", { className: "flex justify-between mb-4 w-full md:max-w-2xl", children: [_jsx("button", { className: "bg-white rounded-full shadow-md p-2 cursor-pointer hover:bg-gray-200", onClick: handlePrev, children: _jsx("span", { className: "text-lg", children: "\u276E" }) }), _jsx("button", { className: "bg-white rounded-full shadow-md p-2 cursor-pointer hover:bg-gray-200", onClick: handleNext, children: _jsx("span", { className: "text-lg", children: "\u276F" }) })] }), _jsxs("div", { className: "flex flex-col md:flex-row p-4 md:max-w-2xl bg-white shadow-lg rounded-lg", children: [_jsx("div", { className: "flex-none md:w-1/3", children: _jsx("img", { className: "w-full h-auto object-cover rounded-l-lg", alt: expert.name, src: expert.imageUrl }) }), _jsxs("div", { className: "flex-grow p-4", children: [_jsx(Title, { level: 2, children: expert.name }), _jsx(Title, { level: 4, children: expert.profession }), _jsx(Paragraph, { children: expert.bio }), _jsx(Title, { level: 5, children: "Specialties:" }), _jsx("ul", { className: "list-disc list-inside mb-4", children: expert.specialties.map((specialty, index) => (_jsx("li", { children: specialty }, index))) }), _jsxs(Paragraph, { children: [_jsx("strong", { children: "Location:" }), " ", expert.location] }), _jsxs(Paragraph, { children: [_jsx("strong", { children: "Phone:" }), " ", expert.phone] }), _jsx(Button, { type: "primary", onClick: () => window.open(`tel:${expert.phone}`), className: "mr-2", children: "Call" }), _jsx(Button, { type: "link", onClick: () => window.open(expert.website), children: "Visit Website" })] })] })] }));
};
export default ExpertProfilePage;
