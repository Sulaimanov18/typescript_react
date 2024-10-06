import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Input, Typography, Button } from 'antd';
import ExpertCard from '../components/ExpertCard';
import experts from '../expertsData';
const { Title } = Typography;
const EXPERTS_PER_PAGE = 5; // Number of experts per page
const ExpertListingPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    // Filter experts based on search term
    const filteredExperts = experts.filter((expert) => expert.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        expert.profession.toLowerCase().includes(searchTerm.toLowerCase()));
    // Calculate the number of pages
    const totalPages = Math.ceil(filteredExperts.length / EXPERTS_PER_PAGE);
    // Get the current page experts
    const startIndex = (currentPage - 1) * EXPERTS_PER_PAGE;
    const currentExperts = filteredExperts.slice(startIndex, startIndex + EXPERTS_PER_PAGE);
    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };
    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };
    return (_jsxs("div", { className: "flex flex-col items-center p-6 bg-gray-200 min-h-screen", children: [_jsx(Title, { level: 2, className: "mb-4 text-center text-blue-600", children: "Find a Therapist" }), _jsx(Input, { placeholder: "Search by name or profession", value: searchTerm, onChange: (e) => setSearchTerm(e.target.value), className: "mb-6 w-full max-w-md border border-blue-500" }), _jsx("div", { className: "flex flex-col items-center w-full", children: currentExperts.map((expert, index) => (_jsx("div", { className: "w-full max-w-3xl mb-4", children: _jsx(ExpertCard, { expert: expert }) }, index))) }), _jsxs("div", { className: "flex justify-center w-full max-w-md mt-6", children: [_jsx(Button, { onClick: handlePrevPage, disabled: currentPage === 1, className: "mx-2 text-lg", style: { width: '150px', backgroundColor: '#3B82F6', color: 'white' }, children: "Previous" }), _jsx(Button, { onClick: handleNextPage, disabled: currentPage === totalPages, className: "mx-2 text-lg", style: { width: '150px', backgroundColor: '#3B82F6', color: 'white' }, children: "Next" })] })] }));
};
export default ExpertListingPage;
