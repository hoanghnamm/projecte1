import React, { useState } from 'react';
import QuestionnaireForm from '../../components/recommendation/QuestionnaireForm';
import { getRecommendations } from '../../services/recommendationService';

const RecommendationPage = () => {
  const [recommendations, setRecommendations] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFormSubmit = async (formData) => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await getRecommendations(formData);
      if (data && data.matches) {
        setRecommendations(data.matches);
      } else {
        setError("Invalid response format from server.");
      }
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.error || "Failed to fetch recommendations. Ensure backend is running and Groq API key is set.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            AI Dog Matchmaker
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Let our AI analyze your lifestyle and find your perfect furry companion.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="order-2 lg:order-1 sticky top-24">
            <QuestionnaireForm onSubmit={handleFormSubmit} isLoading={isLoading} />
          </div>
          
          <div className="order-1 lg:order-2">
            {isLoading && (
              <div className="flex flex-col items-center justify-center h-64 bg-white rounded-2xl shadow-md border border-gray-100">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-600 mb-4"></div>
                <p className="text-lg text-gray-500 font-medium animate-pulse">Our AI is fetching the best dogs for you...</p>
              </div>
            )}
            
            {error && (
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-xl shadow-sm">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <span className="h-6 w-6 text-red-500 font-bold text-xl">!</span>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-red-700 font-medium">{error}</p>
                  </div>
                </div>
              </div>
            )}
            
            {!isLoading && !error && recommendations.length > 0 && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <span className="bg-blue-100 text-blue-800 p-2 rounded-lg mr-3 text-sm">Top {recommendations.length}</span> 
                  Your AI Matches
                </h3>
                {recommendations.map((dog, index) => (
                  <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transform transition duration-300 hover:scale-[1.02] hover:shadow-xl">
                    <div className="p-6">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="text-2xl font-bold text-gray-900">{dog.breedName}</h4>
                          <div className="flex space-x-2 mt-2">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                              {dog.size} Size
                            </span>
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                              {dog.energyLevel} Energy
                            </span>
                          </div>
                        </div>
                        <div className="flex flex-col items-center justify-center bg-blue-50 rounded-full h-16 w-16 border-4 border-blue-100">
                          <span className="text-xl font-black text-blue-600">{dog.score}%</span>
                        </div>
                      </div>
                      <p className="mt-4 text-gray-600 leading-relaxed">
                        {dog.description}
                      </p>
                    </div>
                    <div className="bg-gray-50 px-6 py-4 border-t border-gray-100">
                      <span className="text-sm text-gray-500 font-medium flex items-center">
                        Trainability: <strong className="ml-1 text-gray-700">{dog.trainability}</strong>
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
            
            {!isLoading && !error && recommendations.length === 0 && (
              <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-10 text-center h-full flex flex-col justify-center items-center">
                <h3 className="mt-2 text-xl font-medium text-gray-900">Waiting for your preferences</h3>
                <p className="mt-2 text-gray-500 text-center max-w-sm">
                  Fill out the questionnaire on the left to discover the dog breeds that perfectly match your lifestyle!
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendationPage;
