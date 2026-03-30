import api from "./api";

const URLS: { getMeal: string } = {
  getMeal: "search.php",
};

export const searchMeals = (query: string): Promise<any[]> => {
  return api
    .get(URLS.getMeal, {
      baseURL: "https://www.themealdb.com/api/json/v1/1/",
      params: {
        s: query,
      },
    })
    .then((res) => res.data.meals);
};

// API call using fetch browser API
export const searchMealsFetch = async (query: string): Promise<any[]> => {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(query)}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Fetch error: ${response.status} ${response.statusText}`);
  }

  const data = await response.json();
  return data.meals || [];
};