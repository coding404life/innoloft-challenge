import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

// Get product
const getProduct = async (productId) => {
  const response = await axios({
    method: 'get',
    url: `${API_URL}/product/${productId}`,
    headers: {
      'Content-Type': 'application/json'
    }
  });

  return response.data;
};

// Put Edited product
const editProduct = async (editedProductData, productId) => {
  const response = await axios({
    method: 'put',
    url: `${API_URL}/product/${productId}`,
    data: { data: editedProductData }
  });

  return response.data;
};

// Get TRL
const getTRL = async () => {
  const response = await axios({
    method: 'get',
    url: `${API_URL}/trl`,
    headers: {
      'Content-Type': 'application/json'
    }
  });

  return response.data;
};

const productService = {
  getTRL,
  getProduct,
  editProduct
};

export default productService;
