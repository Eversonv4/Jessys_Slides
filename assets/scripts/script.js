const MainPicture = document.querySelector(".main-foto");
const ArrayPictures = document.querySelectorAll(".cards");
let index = 0;

function Start() {
  ArrayPictures.forEach((item) => {
    if (item.src === MainPicture.src) {
      item.className += " border";
      return;
    }
  });
}

function receiveImg(imgHTML) {
  changeClass();
  imgHTML.className += " border";
  MainPicture.src = imgHTML.src;
  ArrayPictures.forEach((item, indice) => {
    if (item.src === MainPicture.src) {
      index = indice;
      return index;
    }
  });
}

function changeClass() {
  ArrayPictures.forEach((item) => {
    item.classList.remove("border");
  });
}

function filter(sideHTML) {
  const side = sideHTML.innerHTML;
  changeClass();

  switch (side) {
    case "Left":
      if (index === 0) {
        index = ArrayPictures.length - 1;
        ArrayPictures[index].className += " border";
        MainPicture.src = ArrayPictures[index].src;
        return;
      }
      if (index <= ArrayPictures.length - 1) {
        index = index - 1;
        ArrayPictures[index].className += " border";
        MainPicture.src = ArrayPictures[index].src;
        return;
      }
      break;
    case "Right":
      if (index === ArrayPictures.length - 1) {
        index = 0;
        ArrayPictures[index].className += " border";
        MainPicture.src = ArrayPictures[index].src;
        return;
      }
      if (index >= 0) {
        index = index + 1;
        ArrayPictures[index].className += " border";
        MainPicture.src = ArrayPictures[index].src;
        return;
      }
      break;

    default:
      return;
  }
}

Start();
