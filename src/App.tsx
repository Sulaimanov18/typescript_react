import React from 'react';
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

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-50">
        {/* Navbar at the top */}
        <Navbar />

        {/* Main content area */}
        <main className="flex-grow p-4">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/categories" element={<CategoriesPage />} />
            <Route path="/experts" element={<ExpertListingPage />} />
            <Route path="/experts/:category" element={<ExpertListingPage />} /> {/* Dynamic category route */}
            <Route path="/expert/:id" element={<ExpertProfilePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/signup" element={<SignUpPage />} />
          </Routes>
        </main>

        {/* Footer at the bottom */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
