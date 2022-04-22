let commenttemplate = (comment) => `<div class="commenttemplate" id=${comment.id}>
  <div class='cthumbnail'>
    <img class='cimg' src='${comment.link}'/>
  </div>
  <div class='title'>${comment.name}</div>
  <div class='details'>
    <div class='fuel'>Fuel</div>
    <div class='length'>length</div>
    <div class='weight'>weight</div>
    <div class='power'>power</div>
  </div>

  <div class='commentsection'>
    <h1 class='viewcomments'>Comments(0)<h1>
    <div class='comment'>${comment.date} commenter :${comment.insight}</div>
  </div>

  <div class='addacomment'>
    <h1 class='commentheader'>Add a comment</h1>
    <input type='text' name='' class='yourname' placeholder='Your name' value='' id=''>
    <input type="text" name="" class='yourinsight' placeholder='Your insights' value='' id="">
    // <textarea name="" id="" cols="30" rows="10"></textarea>
  </div>
  <button class='comments1'>Comment</button>
</div>`;

export default commenttemplate;

// id, link, name, numOfComment, date, commenter, insight