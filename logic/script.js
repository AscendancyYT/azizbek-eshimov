let subCount = document.querySelector(".subCount");
let burgerMenu = document.querySelector(".burger-menu");
let lineOne = document.querySelector(".lineOne");
let lineTwo = document.querySelector(".lineTwo");
let lineThree = document.querySelector(".lineThree");

let isPressed = false;

const youtubeKey = "AIzaSyDFRzQhz8-AE96kb16HFf5L_XHEo6TkC0w";
const youtubeUser = "UCFYE_WdCyGjyNquuTU-EB3A";

let getSubscribers = () => {
  fetch(
    `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${youtubeUser}&key=${youtubeKey}`
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      subCount.innerHTML =
        data["items"][0].statistics.subscriberCount + ` ` + `Subscribers`;
    });
};

getSubscribers();

burgerMenu.onclick = () => {
  let current = !isPressed

  lineOne.style.transform = "rotate(60deg) translateX(5px)";
  lineThree.style.transform = "rotate(-30deg) translateX(3px)";
  lineTwo.style.display = "none";

  if(current === true){
    let navigation = document.createElement('div');
    navigation.className = "bBar";
  }
};
