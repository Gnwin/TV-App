import Show from './Show';
import shows from './Shows';
import showtemplate from './ShowTemplate';
import grabInput from './GrabUserinput';
import * as InvAPI from './InvolvementAPI';
import Like from './Like';
import Comment from './Comment';

const showsDiv = document.querySelector('.shows');
let showTemplate = '';

class Display {
  render = (data) => {
    const likesArr = [];
    const commentsArr = [];
    const tvStorage = JSON.parse(localStorage.getItem('tvapp'));
    data.shows.forEach(element => {
      const show = new Show(element.id, element.name, element.image.medium);
      shows.addShows(show);
      showTemplate += showtemplate(show);
    });
    showsDiv.innerHTML = showTemplate;

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

  //   this.id = id;
  //   this.name = name;
  //   this.date = date;
  //   this.insight = insight;
  // }

    // if (tvStorage.comments.length === 0) {
    //   data.shows.forEach(element => {
    //     const comment = new Comment(element.id, '', '', '');
    //     commentsArr.push(comment);
    //   })
    // } else {
    //   const tvStorage = JSON.parse(localStorage.getItem('tvapp'));
    //   // tvStorage.comments.forEach(element => {
    //     // const comment = new (element.id, element.likes);
    //     // commentsArr.push(likess);
    //   // })
    // }

    const likeElement = document.querySelectorAll('.likesnum');
    likesArr.forEach((element, index) => {
      likeElement[index].innerHTML = element.likes;
    });
    tvStorage.likes = likesArr;
    localStorage.setItem('tvapp', JSON.stringify(tvStorage));

    // const appid = tvStorage.appId;
    // InvAPI.getlikes(appid)
    //   .then((response) => {
    //     console.log(response);
    //   })

    const commentsbtns = document.querySelectorAll(".comments");
    commentsbtns.forEach((element) => {
      element.onclick = grabInput.openComment
    })
    
    // inputFocus.forEach((element) => {
    //   // proper closure;
    //   const listItemElement = element.value;
    //   const makeHandler = (listItemElement) => (event) => {
    //     grabinput.changeValue(event, listItemElement);
    //   };
    //   element.addEventListener('change', makeHandler(listItemElement));
    // });

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