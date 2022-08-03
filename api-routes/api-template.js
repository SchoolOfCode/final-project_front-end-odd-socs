import axios from "axios";
import { useState } from "react";

// TMDB - API Key: 5b12a167b6f95af9455340da9de5a3ad

// To fetch on initial page load - needs to go in homepage

export const getTop10Movies = () => {
  axios
    .get(
      "https://api.themoviedb.org/3/movie/popular?api_key=5b12a167b6f95af9455340da9de5a3ad&language=en-US&page=1"
    )
    .then((response) => {
      const example = response.data.results.slice(0, 10);
      // console.log(example);
    });
};

export const getTop10TV = () => {
  axios
    .get(
      "https://api.themoviedb.org/3/tv/popular?api_key=5b12a167b6f95af9455340da9de5a3ad&language=en-US&page=1"
    )
    .then((response) => {
      const example = response.data.results.slice(0, 10);
      console.log(example);
    });
};

// export const getTop10Music = () => {
//   axios
//     .get(
//       "https://api.themoviedb.org/3/tv/popular?api_key=5b12a167b6f95af9455340da9de5a3ad&language=en-US&page=1"
//     )
//     .then((response) => {
//       const example = response.data.results.slice(0, 10);
//       console.log(example);
//     });
// };

export const getTop10Games = () => {};

// To fetch on specific media page (movies, tv, games etc)

// TMDb genre id's =
// 28 = action
// 35 = comedy
// 27 = horror
// 878 = sci fi
// 14 = fantasy
// 99 = documentary

// useEffect(() => {
//   axios
//     .get(
//       "https://api.themoviedb.org/3/search/movie?api_key=5b12a167b6f95af9455340da9de5a3ad&language=en-US&page=1&include_adult=false"
//     )
//     .then((response) => {
//       const example = response.data;
//       console.log(example);
//     });
// }, []);
