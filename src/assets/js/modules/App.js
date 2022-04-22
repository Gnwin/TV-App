import * as InvAPI from "./InvolvementAPI";
import { getAllShows } from "./TVapi";

import display from "./DisplayData";

const key = 'tvapp';
let id;

const runApp = () => {
  if (localStorage.getItem(key) === null) {
    console.log('yes')
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

    Promise.all([appid, shows])
      .then((responses) => {
        console.log(responses);
        responses.forEach((element) => {
          if (typeof element === 'string') {
            id = appid;
            localStorage.setItem(key, JSON.stringify({ appId: element }));
          } else {
            const tvStorage = JSON.parse(localStorage.getItem(key));
            tvStorage.shows = element;
            localStorage.setItem(key, JSON.stringify(tvStorage));
            display.render(tvStorage.shows);
          }
        })

        // window.onclick = function(event) {
        //   if (event.target == modal) {
        //     modal.style.display = "none";
        //   }
        // }
      })
      .catch((e) => {
        console.error(e.message);
      })
    // if (id){}
  } else {
    const tvStorage = JSON.parse(localStorage.getItem(key));
    display.render(tvStorage.shows);
  }

}
export default runApp;