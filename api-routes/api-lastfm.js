import axios from "axios";
const API_KEY = process.env.NEXT_PUBLIC_API_KEY_LAST_FM;

// MUSIC APIs
// Top 10

export const getTop10Music = () => {
  axios
    .get(`http://www.last.fm/api/auth/?api_key=${API_KEY}`)
    .then((response) => {
      // const example = response.data.results.slice(0, 10);
      console.log(response);
    });
};
