
// --------- Navigation Bar -----------

var homeLT = document.querySelector("#home-lt");
var historyLT = document.querySelector("#history-lt");
var ecologyLT = document.querySelector("#ecology-lt");
var peopleLT = document.querySelector("#people-lt");
var productionLT = document.querySelector("#production-lt");

var homeLink = document.querySelector("#home-link");
var historyLink = document.querySelector("#history-link");
var productionLink = document.querySelector("#production-link");
var ecologyLink = document.querySelector("#ecology-link");
var peopleLink = document.querySelector("#people-link");



function showLinkText(htmlElement) {
  let id = htmlElement.id;

  switch (id) {
    case "home-link":
      homeLT.classList.remove("hidden");
      homeLT.classList.add("visible");
      break;
    case "history-link":
      historyLT.classList.remove("hidden");
      historyLT.classList.add("visible");
      break;
    case "production-link":
      productionLT.classList.remove("hidden");
      productionLT.classList.add("visible");
      break;
    case "ecology-link":
      ecologyLT.classList.remove("hidden");
      ecologyLT.classList.add("visible");
      break;
    case "people-link":
      peopleLT.classList.remove("hidden");
      peopleLT.classList.add("visible");
      break;
    default:
      console.log("something went wrong");
      break;
  }
};

function hideLinkText(htmlElement) {
  let id = htmlElement.id;

  switch (id) {
    case "home-link":
      homeLT.classList.remove("visible");
      homeLT.classList.add("hidden");
      break;
    case "history-link":
      historyLT.classList.remove("visible");
      historyLT.classList.add("hidden");
      break;
    case "production-link":
      productionLT.classList.remove("visible");
      productionLT.classList.add("hidden");
      break;
    case "ecology-link":
      ecologyLT.classList.remove("visible");
      ecologyLT.classList.add("hidden");
      break;
    case "people-link":
      peopleLT.classList.remove("visible");
      peopleLT.classList.add("hidden");
      break;
    default:
      console.log("something went wrong");
      break;
  }
}
