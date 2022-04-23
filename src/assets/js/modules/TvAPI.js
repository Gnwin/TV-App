const tvApi = 'https://api.tvmaze.com';

export const getAllShows = () => fetch(`${tvApi}/shows`)
  .then((res) => res.json());

export default getAllShows;