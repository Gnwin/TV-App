// import commenttemplate from './CommentTemplate'

let showtemplate = (show) => `<div class="show" id=${show.id}>
  <div class='thumbnail'>
    <img class='img' src='${show.imgUrl}'/>
  </div>
  <div class='info'>
    <div class=''>${show.name}</div>
    <div class=''>(lovelogo)</div>
  </div>
  <div class='likesinfo'>
    <div class='likes'>${show.num}<span class='likesnum'> likes</span></div>
  </div>

  <button class='comments'>Comments</button>
</div>

</div>`;

export default showtemplate;