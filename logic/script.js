let subCount = document.querySelector(".subCount");
let burgerMenu = document.querySelector(".burger-menu");
let lineOne = document.querySelector(".lineOne");
let lineTwo = document.querySelector(".lineTwo");
let lineThree = document.querySelector(".lineThree");
let bBar = document.querySelector(".bBar");

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

const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger= document.querySelector(".hamburger");
const closeIcon= document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "flex";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach( 
  function(menuItem) { 
    menuItem.addEventListener("click", toggleMenu);
  }
)