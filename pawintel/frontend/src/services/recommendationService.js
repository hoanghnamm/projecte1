import axios from 'axios';

const API_URL = 'http://localhost:5000/api/recommendations';

export const getRecommendations = async (formData) => {
    const response = await axios.post(API_URL, formData);
    return response.data;
};
