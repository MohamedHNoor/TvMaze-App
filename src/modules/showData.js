import displayMovies from './displayMovies.js';
import modalHandler from './modalHandler.js';
import itemCounter from './itemsCount.js';

const showsData = async () => {
  const response = await fetch('https://api.tvmaze.com/shows');
  const movies = await response.json();
  const latestMovies = movies.slice(0, 16);
  displayMovies(latestMovies);
  modalHandler(latestMovies);
  itemCounter();
};

export default showsData;
