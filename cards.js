let cardsList = document.querySelector(".cards");
let cards = [
  {
    title: "html project",
    url: "https://github.com/A-Hicken/favRomanceMovies.git",
  },
];
document.getElementsById("front").textContent = cards.map(getTitle);
function getTitle(item) {
  return [item.title];
}

// look up what an object in JavaScript is, when you find the syntax for an object, include a title and a url link
// Look up how to push an object to an array
