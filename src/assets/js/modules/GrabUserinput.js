import * as InvAPI from './InvolvementAPI'
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

  like = (e) => {
    e.preventDefault();
    const itemid = e.target.parentElement.parentElement.id;
    let likeElement = e.target.parentElement.parentElement.children[2].children[0].children[0];
    console.log(likeElement);
    let likenum = Number(likeElement.innerHTML);
    likenum += 1;
    likeElement.innerHTML = likenum;

    const tvStorage = JSON.parse(localStorage.getItem('tvapp'));
    tvStorage.likes.forEach(element => {
      if (itemid == element.likeid) {
        element.likes = likenum;
      }
    });
    localStorage.setItem('tvapp', JSON.stringify(tvStorage));

    // let appid = JSON.parse(localStorage.getItem('tvapp'));
    // appid = appid.appId;
    // console.log(appid);
    // InvAPI.createlike(appid, itemid)
    //   .then((response) => {
    //     console.log(response);
    //     return response;
    //   })
  }

  comment = (e) => {
    e.preventDefault();
  }
}

const grabInput = new GrabUserInput()
export default grabInput;