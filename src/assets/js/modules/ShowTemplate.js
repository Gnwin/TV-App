
let showtemplate = (show) => `<div class="show" id=${show.id}>
  <div class='thumbnail'>
    <img class='img' src='${show.imgUrl}'/>
  </div>
  <div class='info'>
    <div class=''>${show.title}</div>
    <div class='lovelogo'>(lovelogo)</div>
  </div>
  <div class='likesinfo'>
    <div class='likes'><span class='likesnum'></span> likes</div>
  </div>

  <button class='comments'>Comments</button>
</div>

</div>`;

export default showtemplate;