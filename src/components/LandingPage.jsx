import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-500 to-pink-500 flex flex-col items-center justify-center text-white">
      <h1 className="text-6xl font-bold mb-4">tinder</h1>
      <p className="text-2xl mb-8">Start something epic.</p>
      
      <button 
        onClick={() => navigate('/signup')}
        className="bg-white text-red-500 px-8 py-3 rounded-full text-lg font-semibold
                   hover:bg-gray-100 transition-colors duration-200 shadow-lg"
      >
        Create account
      </button>

      <p className="mt-12 text-sm text-white/80 text-center px-4">
        All photos are of models and used for illustrative purposes only
      </p>
    </div>
  );
};

export default LandingPage;