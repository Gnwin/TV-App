import * as InvAPI from "./InvolvementAPI";
import { getAllShows } from "./TVapi";

import display from "./DisplayData";

const key = 'tvapp';

const runApp = () => {
  if(localStorage.getItem(key) === null) {
    console.log('yes')

    InvAPI.createNewApp()
      .then((appid) => {
        console.log(appid);
        localStorage.setItem(key, JSON.stringify({ appId: appid }));
        getAllShows()
        .then((shows) => {
          const tvStorage = JSON.parse(localStorage.getItem(key));
          tvStorage.shows = shows;
          localStorage.setItem(key, JSON.stringify(tvStorage));
          display.render(tvStorage.shows);
        })
      })
      .catch((e) => {
        console.error(e.message);
      })

  } else {
    const tvStorage = JSON.parse(localStorage.getItem(key));
    // tvStorage.shows = shows;
    // localStorage.setItem(key, JSON.stringify(tvStorage));
    display.render(tvStorage.shows);
  }

}
export default runApp;