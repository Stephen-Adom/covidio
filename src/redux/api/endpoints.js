import instance from './axios';

// Get Global info
export const fetchGlobalData = async () => {
  const response = await instance.get('/all');
  return response;
};

// Get data for all countries
export const fetchAllCountries = async () => {
  const response = await instance.get('/countries');
  return response;
};
