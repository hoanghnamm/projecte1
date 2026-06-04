import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import RecommendationPage from './pages/Recommendations/RecommendationPage';

const HomePage = () => (
  <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
    <div className="text-center bg-white p-10 rounded-2xl shadow-xl max-w-2xl w-full">
      <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-6">Welcome to PawIntel</h1>
      <p className="text-xl text-gray-600 mb-8 leading-relaxed">
        Your ultimate AI-powered dog matchmaking portal. Discover breeds, get nutrition advice, and find your new best friend.
      </p>
      <Link to="/recommendations" className="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 hover:shadow-lg transition-all transform hover:-translate-y-1">
        Try the AI Matchmaker
      </Link>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/recommendations" element={<RecommendationPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
