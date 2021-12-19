import { generateProjectsPage } from "./generateProjectsPage.js";
import { generateContactsPage } from "./generateContactsPage.js";
import { generateResumePage } from "./generateResumePage.js";

// Initialize sidenav
$(document).ready(() => $(".sidenav").sidenav());

console.log(generateProjectsPage());

$("#projects").append(generateProjectsPage());
$("#contact").append(generateContactsPage());
$("#resume").append(generateResumePage());

$("#resume .activator, #resume .card-reveal .card-title").on("click", (evt) => {
  $(evt.target).closest("div.card").toggleClass("small");
});

M.AutoInit();
