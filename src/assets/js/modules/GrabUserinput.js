import insertComment from "./InsertCommentContent";
// import showtemplate from "./ShowTemplate";
import commenttemplate from './CommentTemplate';
import Comments from "./Comments";
import Comment from "./Comment";



// const commentsbtn = document.querySelector(".comments");

// const commentcontent = document.querySelector(".commentcontent");

// commentsbtn.onclick = function() {
//   modal.style.display = "block";
// }
// const span = document.getElementsByClassName("close")[0];

// span.onclick = function() {
//   modal.style.display = "none";
// }

// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }

let commentbox = new Comments();

class GrabUserInput {

  openComment = (e) => {
    e.preventDefault();
    const tvStorage = JSON.parse(localStorage.getItem('tvapp'));

    tvStorage.shows.forEach(element => {
      const comment = new Comment(element.id, element.name, 'date', element.image.medium, 'insight');
      commentbox.addComment(comment);
    });
    
    insertComment(e.target.parentElement.id, commentbox.comments, commenttemplate);
  }

  closeComment = (e) => {
    e.preventDefault();
    const modal = document.getElementById("myModal");
    modal.style.display = "none";
  }

  comment = () => {}
}

const grabInput = new GrabUserInput()
export default grabInput;