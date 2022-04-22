// import commenttemplate from './CommentTemplate'

let showtemplate = (id, name, link, num) => `<div class="show" id=${id}>
  <div class='thumbnail'>
    <img class='img' src='${link}'/>
  </div>
  <div class='info'>
    <div class=''>${name}</div>
    <div class=''>(lovelogo)</div>
  </div>
  <div class='likesinfo'>
    <div class='likes'>${num}<span class='likesnum'> likes</span></div>
  </div>

  <button class='comments'>Comments</button>
</div>

</div>`;

export default showtemplate;