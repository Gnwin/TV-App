import Show from './Show';
// import Comment from './Comment';
import shows from './Shows';
// import Comments from './Comments';
import showtemplate from './ShowTemplate';
// import commenttemplate from './CommentTemplate';
import grabInput from './GrabUserinput';
// import insertComment from './insertCommentContent';

const showsDiv = document.querySelector('.shows');
let showTemplate = '';


class Display {
  render = (data) => {
    data.forEach(element => {
      const show = new Show(element.id, element.name, element.image.medium, 0);
      shows.addShows(show);
      showTemplate += showtemplate(element.id, element.name, element.image.medium, 0);
    });
    showsDiv.innerHTML = showTemplate;

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

    const span = document.getElementsByClassName("close")[0];
    span.onclick = grabInput.closeComment;

    // const commentcontent = document.querySelector(".commentcontent");

    // span.onclick = function() {
    //   modal.style.display = "none";
    // }

    // window.onclick = function(event) {
    //   if (event.target == modal) {
    //     modal.style.display = "none";
    //   }
    // }

  }
}



const display = new Display();
export default display;