const API_KEY = '6332dbccd91d4b2580d8bcbe68098d41';
const BASE_URL = 'https://newsapi.org/v2';

export const fetchNews = async (query = 'latest') => {
  const response = await fetch(`${BASE_URL}/everything?q=${query}&apiKey=${API_KEY}`);
  if (!response.ok) {
    throw new Error(`Error: ${response.status} ${response.statusText}`);
  }
  const data = await response.json();
  return data.articles;
};
