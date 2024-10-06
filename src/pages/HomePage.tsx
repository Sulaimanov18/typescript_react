import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-gray-900">Welcome to Expert Platform</h1>
      <p className="text-lg text-gray-700 mt-4">Find experts across different categories, including psychologists, life coaches, financial advisors, and more.</p>

      <div className="mt-8">
        <Link to="/categories" className="bg-blue-500 text-white p-4 rounded-lg shadow-md">
          Browse Experts by Category
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
