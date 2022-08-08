import axios from "axios";
const API_KEY = process.env.NEXT_PUBLIC_API_KEY_RAWG;

// GAME APIs

// Top 10
export const getTop10Games = (setIsLoading, setTop10Games) => {
  axios
    .get(`https://api.rawg.io/api/games?key=${API_KEY}&?page=2&page_size=10`)
    .then((response) => {
      const result = response.data.results;
      setIsLoading(false);
      setTop10Games(result);
    });
};

// GENRES
// Indie
export const getIndieGames = (setIsLoading, setIndieGames) => {
  axios
    .get(
      `https://api.rawg.io/api/games?key=${API_KEY}&limit=1&genres=indie&page=1`
    )
    .then((response) => {
      const result = response.data.results;
      setIsLoading(false);
      setIndieGames(result);
    });
};

// Action
export const getActionGames = (setIsLoading, setActionGames) => {
  axios
    .get(
      `https://api.rawg.io/api/games?key=${API_KEY}&limit=1&genres=action&page=5`
    )
    .then((response) => {
      const result = response.data.results;
      setIsLoading(false);
      setActionGames(result);
    });
};

// RPG
export const getRPGGames = (setIsLoading, setRPGGames) => {
  axios
    .get(
      `https://api.rawg.io/api/games?key=${API_KEY}&limit=1&genres=role-playing-games-rpg&page=1`
    )
    .then((response) => {
      const result = response.data.results;
      setIsLoading(false);
      setRPGGames(result);
    });
};

// FPS
export const getFPSGames = (setIsLoading, setFPSGames) => {
  axios
    .get(
      `https://api.rawg.io/api/games?key=${API_KEY}&limit=1&genres=shooter&page=2`
    )
    .then((response) => {
      const result = response.data.results;
      setIsLoading(false);
      setFPSGames(result);
    });
};

// Arcade
export const getArcadeGames = (setIsLoading, setArcadeGames) => {
  axios
    .get(
      `https://api.rawg.io/api/games?key=${API_KEY}&limit=1&genres=arcade&page=1`
    )
    .then((response) => {
      const result = response.data.results;
      setIsLoading(false);
      setArcadeGames(result);
    });
};

// MMORPG
export const getMMORPGGames = (setIsLoading, setMMORPGGames) => {
  axios
    .get(
      `https://api.rawg.io/api/games?key=${API_KEY}&limit=1&genres=massively-multiplayer&page=1`
    )
    .then((response) => {
      const result = response.data.results;
      setIsLoading(false);
      setMMORPGGames(result);
    });
};

// Random
export const getRandomGames = (setIsLoading, setRandomGames, pageNumber) => {
  axios
    .get(
      `https://api.rawg.io/api/games?key=${API_KEY}&limit=1&page=${pageNumber}`
    )
    .then((response) => {
      const result = response.data.results;
      setIsLoading(false);
      setRandomGames(result);
    });
};
