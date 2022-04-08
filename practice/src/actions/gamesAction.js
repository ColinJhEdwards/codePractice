import axios from "axios";
import { popularGamesURL } from "../api";

export const loadGames = () => async (dispatch) => {
  //fetch with axios
  const popularGames = await axios.get(popularGamesURL());
  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularGames.data.results,
    },
  });
};
