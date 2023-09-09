import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

// Get product
const getConfiguration = async (configurationId) => {
  const response = await axios({
    method: 'get',
    url: `${API_URL}/configuration/${configurationId}`
  });

  return response.data;
};

const confugrationPlaceService = {
  getConfiguration
};

export default confugrationPlaceService;
