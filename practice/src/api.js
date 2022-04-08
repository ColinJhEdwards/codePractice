// Base URL
const key = "d4db52d5e3de4eebb44d55a5da1a37cc";
const base_url = "https://api.rawg.io/api/";

// get current date

const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};

const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

// Current day/month/year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

// popularr games
const popular_games = `https://api.rawg.io/api/games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=10&key=${key}`;
const upcomingGames = `https://api.rawg.io/api/games?dates=${currentDate},${nextYear}&ordering=-added&page_size=10&key=${key}`;
const newGames = `https://api.rawg.io/api/games?dates=${lastYear},${currentDate}&ordering=-released&page_size=10&key=${key}`;

export const popularGamesURL = () => popular_games;
export const upcomingGamesURL = () => upcomingGames;
export const newGamesURL = () => newGames;
