import Show from './Show';
import shows from './Shows';
import showtemplate from './ShowTemplate';

const showsDiv = document.querySelector('.shows');

class Display {
  render = (data) => {

    let showTemplate = '';
    data.forEach(element => {
      const show = new Show(element.image.medium, element.name, element.id );
      shows.addShows(show);
      showTemplate += showtemplate(element.image.medium, element.name, element.id);
    });
    showsDiv.innerHTML = showTemplate;

    // const scorelist = document.querySelector('.scores');
    // const message = document.querySelector('.message');
    // if (data.length === 0) {
    //   scorelist.innerHTML = error;
    //   message.style.display = 'none';
    //   return;
    // }
    // message.style.display = 'block';
    // let markup = '';
    // data.forEach((element) => {
    //   const gameitem = game(element.user, element.score);
    //   markup += gameitem;
    // });
    // scorelist.innerHTML = markup;

    // let showTemplate = '';
    // json.forEach(element => {
    //   showTemplate += show(element.image.medium, element.name, element.id);
    // });
    // shows.innerHTML = showTemplate;
  }
}

const display = new Display();
export default display;