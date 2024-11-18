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


function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block !important";
    menuIcon.style.display = "none";
  }
}



document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});

document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();

  const CHAT_ID = "-1002300090325";
  const BOT_TOKEN = "8199115147:AAH0X_JanAI2isJNXDoY7xQlQBWMnpaQbW4";
  const URI_API = `https://api.telegram.org/bot${BOT_TOKEN}/SendMessage`;

  let message = "<b>Сообшение с сайта</b> \n";
  message += `<b>Отправитель:</b> ${this.name.value} \n`;
  message += `<b>Контактные данные:</b> ${this.email.value} \n`;
  message += `<b>Сообшение:</b> ${this.message.value} \n`;

  axios.post(URI_API, {
    parse_mode: "html",
    text: message,
    chat_id: CHAT_ID,
  });

  this.name.value = " ";
  this.email.value = " ";
  this.message.value = " ";
});
