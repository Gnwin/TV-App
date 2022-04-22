import Show from './Show';
import shows from './Shows';
import showtemplate from './ShowTemplate';
import grabInput from './GrabUserinput';

const showsDiv = document.querySelector('.shows');
let showTemplate = '';

class Display {
  render = (data) => {
    data.forEach(element => {
      const show = new Show(element.id, element.name, element.image.medium, element.likes);
      shows.addShows(show);
      showTemplate += showtemplate(show);
    });
    showsDiv.innerHTML = showTemplate;
    const commentsbtns = document.querySelectorAll(".comments");
    
    commentsbtns.forEach((element) => {
      element.onclick = grabInput.openComment
    })

    
    // inputFocus.forEach((element) => {
    //   // proper closure;
    //   const listItemElement = element.value;
    //   const makeHandler = (listItemElement) => (event) => {
    //     grabinput.changeValue(event, listItemElement);
    //   };
    //   element.addEventListener('change', makeHandler(listItemElement));
    // });

    const span = document.getElementsByClassName("close")[0];
    span.onclick = grabInput.closeComment;

    const modal = document.getElementById("myModal");
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }

    // const commentcontent = document.querySelector(".commentcontent");

    // span.onclick = function() {
    //   modal.style.display = "none";
    // }

    // window.onclick = function(event) {
    //   if (event.target == modal) {
    //     modal.style.display = "none";
    //   }
    // }

  }
}



const display = new Display();
export default display;