import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CategoriesPage from './pages/CategoriesPage';
import ExpertListingPage from './pages/ExpertListingPage';
import ExpertProfilePage from './pages/ExpertProfilePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import SignUpPage from './pages/SignUpPage';
import './index.css';
import 'antd/dist/reset.css'; // Ant Design CSS reset
const App = () => {
    return (_jsx(Router, { children: _jsxs("div", { className: "flex flex-col min-h-screen bg-gray-50", children: [_jsx(Navbar, {}), _jsx("main", { className: "flex-grow p-4", children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(HomePage, {}) }), _jsx(Route, { path: "/categories", element: _jsx(CategoriesPage, {}) }), _jsx(Route, { path: "/experts", element: _jsx(ExpertListingPage, {}) }), _jsx(Route, { path: "/experts/:category", element: _jsx(ExpertListingPage, {}) }), " ", _jsx(Route, { path: "/expert/:id", element: _jsx(ExpertProfilePage, {}) }), _jsx(Route, { path: "/about", element: _jsx(AboutPage, {}) }), _jsx(Route, { path: "/contact", element: _jsx(ContactPage, {}) }), _jsx(Route, { path: "/signup", element: _jsx(SignUpPage, {}) })] }) }), _jsx(Footer, {})] }) }));
};
export default App;
