import axios from "axios";

export const baseUrl = "https://bayout.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": "620178282cmsh94312924cdd4e03p19b208jsn4a72fda18899",
    },
  });
  return data;
};
