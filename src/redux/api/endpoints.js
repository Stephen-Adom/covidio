import instance from './axios';

// Get Global info
export const fetchGlobalData = async () => {
  const response = await instance.get('/all');
  return response;
};

