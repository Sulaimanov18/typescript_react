import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
const ContactPage = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here (send to backend, etc.)
        alert('Message sent!');
    };
    return (_jsxs("div", { className: "container mx-auto p-6", children: [_jsx("h1", { className: "text-3xl font-bold text-gray-900", children: "Contact Us" }), _jsxs("form", { onSubmit: handleSubmit, className: "mt-6 space-y-4", children: [_jsx("input", { type: "text", value: formData.name, onChange: (e) => setFormData({ ...formData, name: e.target.value }), placeholder: "Your Name", className: "w-full p-2 border border-gray-200 rounded-lg" }), _jsx("input", { type: "email", value: formData.email, onChange: (e) => setFormData({ ...formData, email: e.target.value }), placeholder: "Your Email", className: "w-full p-2 border border-gray-200 rounded-lg" }), _jsx("textarea", { value: formData.message, onChange: (e) => setFormData({ ...formData, message: e.target.value }), placeholder: "Your Message", className: "w-full p-2 border border-gray-200 rounded-lg", rows: 5 }), _jsx("button", { type: "submit", className: "bg-blue-500 text-white p-4 rounded-lg", children: "Send Message" })] })] }));
};
export default ContactPage;
