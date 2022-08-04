import axios from "axios";

// MUSIC APIs
// Top 10

export const getTop10Music = () => {
  axios
    .get(
      "https://api.themoviedb.org/3/tv/popular?api_key=5b12a167b6f95af9455340da9de5a3ad&language=en-US&page=1"
    )
    .then((response) => {
      const example = response.data.results.slice(0, 10);
      console.log(example);
    });
};