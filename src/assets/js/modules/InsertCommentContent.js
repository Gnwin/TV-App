// const commentcontent = document.querySelector(".commentcontent");
// const modal = document.getElementById("myModal");

const insertComment = (id, comments, commentmarkup) => {
  const commentcontent = document.querySelector(".commentcontent");
  const modal = document.getElementById("myModal");

  // console.log(id);
  // console.log(comments[0].id)
  let commentModalContent = '';

  comments.forEach(element => {
    console.log(id == element.id)
    console.log(typeof id, typeof element.id);
    if (id == element.id) {
      commentModalContent = commentmarkup(element);
    }
  });
  
  // console.log(commentModalContent);
  commentcontent.innerHTML = commentModalContent;
  modal.style.display = "block";
}

export default insertComment;

// element.id, element.link, element.name, 0, element.date, 'commenter', element.insight
