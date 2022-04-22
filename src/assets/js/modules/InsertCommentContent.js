
const insertCommentModalInfo = (modal, commentmarkup) => {
  const commentcontent = document.querySelector(".commentcontent");
  let commentModalContent = '';
  commentModalContent = commentmarkup(modal);
  console.log(commentModalContent);
  commentcontent.innerHTML = commentModalContent;
}

export default insertCommentModalInfo;