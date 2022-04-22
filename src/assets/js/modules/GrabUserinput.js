import insertCommentModalInfo from "./InsertCommentContent";
import commenttemplate from './CommentTemplate';
import CommentModal from "./CommentModal";

class GrabUserInput {

  openComment = (e) => {
    e.preventDefault();
    const showId = e.target.parentElement.id;
    const tvStorage = JSON.parse(localStorage.getItem('tvapp'));
    let commentModal;
    tvStorage.shows.forEach(element => {
      if (showId == element.id) {
        commentModal = new CommentModal(element.id, element.name, element.image.medium);
      }
    });
    const modal = document.getElementById("myModal");
    insertCommentModalInfo(commentModal, commenttemplate);
    modal.style.display = "block";
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