import * as InvAPI from "./InvolvementAPI";
import { getAllShows } from "./TVapi";
import Like from "./Like";

import display from "./DisplayData";

const key = 'tvapp';
let id;

const runApp = () => {
  if (localStorage.getItem(key) === null) {
    // InvAPI.createNewApp()
    //   .then((appid) => {
    //     // console.log(appid);
    //     id = appid;
    //     console.log(id);
    //     localStorage.setItem(key, JSON.stringify({ appId: appid }));
    //     return getAllShows()
    //   })
    //   .then((shows) => {
    //     const tvStorage = JSON.parse(localStorage.getItem(key));
    //     tvStorage.shows = shows;
    //     localStorage.setItem(key, JSON.stringify(tvStorage));
    //     display.render(tvStorage.shows);
    //   })
    //   .catch((e) => {
    //     console.error(e.message);
    //   })

    let appid = InvAPI.createNewApp();
    let shows = getAllShows();
    console.log('app');

    Promise.all([appid, shows])
      .then((responses) => {
        responses.forEach((element) => {
          if (typeof element === 'string') {
            id = appid;
            localStorage.setItem(key, JSON.stringify({ appId: element }));
          } else {
            const tvStorage = JSON.parse(localStorage.getItem(key));
            tvStorage.shows = element;
            tvStorage.likes = [];
            tvStorage.comments = [];
            localStorage.setItem(key, JSON.stringify(tvStorage));
            console.log(tvStorage)
            
            display.render(tvStorage);
          }
        })
      })
      // .then(() => {})
      .catch((e) => {
        console.error(e.message);
      })
  } else {
    const tvStorage = JSON.parse(localStorage.getItem(key));
    display.render(tvStorage);
  }

}
export default runApp;