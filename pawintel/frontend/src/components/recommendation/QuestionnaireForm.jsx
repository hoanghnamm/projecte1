import React, { useState } from 'react';

const QuestionnaireForm = ({ onSubmit, isLoading }) => {
  const [formData, setFormData] = useState({
    homeSize: 'Apartment',
    lifestyle: 'Couch Potato',
    activityLevel: 'Low',
    climate: 'Temperate',
    familyType: 'Single',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const selectClasses = "w-full mt-1 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white transition-all";
  const labelClasses = "block text-sm font-semibold text-gray-700";

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-lg mx-auto transform transition-all">
      <h2 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">Find Your Perfect Dog</h2>
      <div className="space-y-5">
        <div>
          <label className={labelClasses}>Home Size</label>
          <select name="homeSize" value={formData.homeSize} onChange={handleChange} className={selectClasses}>
            <option value="Apartment">Apartment</option>
            <option value="Small House">Small House</option>
            <option value="Large Home">Large Home</option>
          </select>
        </div>
        <div>
          <label className={labelClasses}>Lifestyle</label>
          <select name="lifestyle" value={formData.lifestyle} onChange={handleChange} className={selectClasses}>
            <option value="Couch Potato">Couch Potato</option>
            <option value="Active">Active</option>
            <option value="Athletic">Athletic</option>
          </select>
        </div>
        <div>
          <label className={labelClasses}>Activity Level</label>
          <select name="activityLevel" value={formData.activityLevel} onChange={handleChange} className={selectClasses}>
            <option value="Low">Low (Short walks)</option>
            <option value="Medium">Medium (Daily moderate exercise)</option>
            <option value="High">High (Running, hiking)</option>
          </select>
        </div>
        <div>
          <label className={labelClasses}>Climate</label>
          <select name="climate" value={formData.climate} onChange={handleChange} className={selectClasses}>
            <option value="Cold">Cold</option>
            <option value="Temperate">Temperate</option>
            <option value="Hot">Hot</option>
          </select>
        </div>
        <div>
          <label className={labelClasses}>Family Type</label>
          <select name="familyType" value={formData.familyType} onChange={handleChange} className={selectClasses}>
            <option value="Single">Single</option>
            <option value="Couple">Couple</option>
            <option value="Family with Kids">Family with Kids</option>
            <option value="Seniors">Seniors</option>
          </select>
        </div>
        <button 
          type="submit" 
          disabled={isLoading}
          className="w-full mt-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-4 focus:ring-blue-300 disabled:opacity-50 transition-all shadow-md"
        >
          {isLoading ? 'Consulting AI...' : 'Get Recommendations'}
        </button>
      </div>
    </form>
  );
};

export default QuestionnaireForm;
