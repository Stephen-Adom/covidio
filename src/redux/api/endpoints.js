import baseURL from './baseURI';

// Get Global info
export const fetchGlobalData = async () => {
  const response = await fetch(`${baseURL}/all`, {
    method: 'GET',
  });
  return response.json();
};

// Get data for all countries
export const fetchAllCountries = async () => {
  const response = await fetch(`${baseURL}/countries`, {
    method: 'GET',
  });
  return response.json();
};

// Get data for a specific country
export const fetchContinent = async (continent) => {
  const response = await fetch(`${baseURL}/continents/${continent}`, {
    method: 'GET',
  });
  return response.json();
};

// Get data for all continents
export const fetchAllContinents = async () => {
  const response = await fetch(`${baseURL}/continents`);
  return response.json();
};
