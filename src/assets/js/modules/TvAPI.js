const tvApi = 'https://api.tvmaze.com';

export const getAllShows = () => {
  return fetch(`${tvApi}/shows`)
    .then((res) => res.json())
}