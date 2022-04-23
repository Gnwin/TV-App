import * as InvAPI from './InvolvementAPI'
import insertCommentModalInfo from "./InsertCommentContent";
import commenttemplate from './CommentTemplate';
import CommentModal from "./CommentModal";
import Comment from './Comment';
import commentMarkup from './CommentMarkup';
import formatDate from './Date';

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
      //   this.id = id;
      //   this.name = name;
      //   this.date = date;
      //   this.insight = insight;
      // }

    const commentNum = document.querySelector('.commentnum');
    if (tvStorage.comments.length === 0) {
      commentNum.innerHTML = 0;
    } else {
      let existingComment = '';
      const commentList = document.querySelector('.commentlist');
      let counter = 0;
      tvStorage.comments.forEach(element => {
        if (showId == element.id) {
          existingComment += commentMarkup(element);
          counter += 1;
        }
      })
      commentList.innerHTML = existingComment;
      commentNum.innerHTML = counter;
    }
    const makeAComment = document.querySelector('.comments1');
    makeAComment.onclick = this.comment;
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
    const id  = e.target.parentElement.id;
    const name = document.querySelector('.yourname');
    const insight = document.querySelector('.yourinsight');
    let namevalue = name.value;
    let insightvalue = insight.value;
    if (!namevalue || !insightvalue) {
      return
    }
    name.value = '';
    insight.value = '';
    let date = formatDate(new Date());
    const tvStorage = JSON.parse(localStorage.getItem('tvapp'));
    const newlyCreatedComment = new Comment(id, date, namevalue, insightvalue);

    let newlyCreatedCommentMarkup =  commentMarkup(newlyCreatedComment);
    const commentList = document.querySelector('.commentlist');
    let content = commentList.innerHTML;
    content += newlyCreatedCommentMarkup;
    commentList.innerHTML = content;
    tvStorage.comments.push(newlyCreatedComment);
    const commentNum = document.querySelector('.commentnum');
    let counter = 0;
    tvStorage.comments.forEach(element => {
      if (id == element.id) {
        counter += 1;
      }
    });
    commentNum.innerHTML = counter;

    localStorage.setItem('tvapp', JSON.stringify(tvStorage));
  }
}

const grabInput = new GrabUserInput()
export default grabInput;