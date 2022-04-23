import Show from './Show';
import shows from './Shows';
import showtemplate from './ShowTemplate';
import grabInput from './GrabUserinput';
import Like from './Like';

const showsDiv = document.querySelector('.shows');
const shownum = document.querySelector('.num')
let showTemplate = '';

class Display {
  render = (data) => {
    const likesArr = [];
    const tvStorage = JSON.parse(localStorage.getItem('tvapp'));
    data.shows.forEach(element => {
      const show = new Show(element.id, element.name, element.image.medium);
      shows.addShows(show);
      showTemplate += showtemplate(show);
    });
    showsDiv.innerHTML = showTemplate;
    shownum.innerHTML = tvStorage.shows.length;

    if (tvStorage.likes.length === 0) {
      data.shows.forEach(element => {
        const likess = new Like(element.id, 0);
        likesArr.push(likess);
      })
    } else {
      const tvStorage = JSON.parse(localStorage.getItem('tvapp'));
      tvStorage.likes.forEach(element => {
        const likess = new Like(element.likeid, element.likes);
        likesArr.push(likess);
      })
    }

    const likeElement = document.querySelectorAll('.likesnum');
    likesArr.forEach((element, index) => {
      likeElement[index].innerHTML = element.likes;
    });
    tvStorage.likes = likesArr;
    localStorage.setItem('tvapp', JSON.stringify(tvStorage));

    const commentsbtns = document.querySelectorAll(".comments");
    commentsbtns.forEach((element) => {
      element.onclick = grabInput.openComment
    })
    
    const likeAShow = document.querySelectorAll('.lovelogo');
    likeAShow.forEach(element => {
      element.onclick = grabInput.like;
    });

    const span = document.getElementsByClassName("close")[0];
    span.onclick = grabInput.closeComment;

    const modal = document.getElementById("myModal");
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  }
}



const display = new Display();
export default display;