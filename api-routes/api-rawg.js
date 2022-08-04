import axios from "axios";
const API_KEY = process.env.NEXT_PUBLIC_API_KEY_RAWG;

// GAME APIs

// Top 10
export const getTop10Games = (setIsLoading, setTop10Games) => {
  axios
    .get(`https://api.rawg.io/api/games?key=${API_KEY}&?page=2&page_size=20`)
    .then((response) => {
      const result = response.data.results;
      console.log(result);
      setIsLoading(false);
      setTop10Games(result);
    });
};
