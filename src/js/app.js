const selectPhoto = document.querySelector('.photos--all');
const bigBoxes = [...document.querySelectorAll('div')];

function hoverPrice(event) {
  event.preventDefault();
  console.log(event);
  bigBoxes.forEach(box => {
    console.log(box);
    if (event.hasOwnProperty(box)) {
      console.log(box);
    }
    else {
      console.log("not");
    }
  }


  )

}









selectPhoto.addEventListener('mouseover', hoverPrice)
