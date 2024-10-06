import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
const SignUpPage = () => {
    const [formData, setFormData] = useState({ name: '', email: '', profession: '', password: '' });
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle sign-up logic here (send to backend, etc.)
        alert('Registration successful!');
    };
    return (_jsxs("div", { className: "container mx-auto p-6", children: [_jsx("h1", { className: "text-3xl font-bold text-gray-900", children: "Sign Up as an Expert" }), _jsxs("form", { onSubmit: handleSubmit, className: "mt-6 space-y-4", children: [_jsx("input", { type: "text", value: formData.name, onChange: (e) => setFormData({ ...formData, name: e.target.value }), placeholder: "Full Name", className: "w-full p-2 border border-gray-200 rounded-lg" }), _jsx("input", { type: "email", value: formData.email, onChange: (e) => setFormData({ ...formData, email: e.target.value }), placeholder: "Email", className: "w-full p-2 border border-gray-200 rounded-lg" }), _jsx("input", { type: "text", value: formData.profession, onChange: (e) => setFormData({ ...formData, profession: e.target.value }), placeholder: "Profession", className: "w-full p-2 border border-gray-200 rounded-lg" }), _jsx("input", { type: "password", value: formData.password, onChange: (e) => setFormData({ ...formData, password: e.target.value }), placeholder: "Password", className: "w-full p-2 border border-gray-200 rounded-lg" }), _jsx("button", { type: "submit", className: "bg-blue-500 text-white p-4 rounded-lg", children: "Register" })] })] }));
};
export default SignUpPage;
