import React, { useEffect } from "react";
// dispatch goes into the action loadGames and runs all the axios request and stores the data in the payload
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesAction";
import styled from "styled-components";
import { motion } from "framer-motion";
import Game from "../components/Game";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);
  // get data from store
  const { popular, newGames, upcoming } = useSelector((state) => state.games);
  console.log(upcoming);

  return (
    <GameList>
      <h2>Upcoming Games</h2>
      <motion.div className="games">
        {upcoming.map((game) => (
          <Game
            name={game.name}
            release={game.released}
            id={game.id}
            key={game.id}
            img={game.background_image}
          />
        ))}
      </motion.div>
      <h2>Popular Games</h2>
      <motion.div className="games">
        {popular.map((game) => (
          <Game
            name={game.name}
            release={game.released}
            id={game.id}
            key={game.id}
            img={game.background_image}
          />
        ))}
      </motion.div>
      <h2>New Games</h2>
      <motion.div className="games">
        {newGames.map((game) => (
          <Game
            name={game.name}
            release={game.released}
            id={game.id}
            key={game.id}
            img={game.background_image}
          />
        ))}
      </motion.div>
    </GameList>
  );
};

const GameList = styled(motion.div)`
  padding: 0rem 5rem;
  h2 {
    padding: 5rem 0rem;
  }
  .games {
    min-height: 80vh;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
    grid-column-gap: 3rem;
    grid-row-gap: 5rem;
  }
`;

export default Home;
