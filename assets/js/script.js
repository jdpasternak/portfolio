import { generateProjectsPage } from "./generateProjectsPage.js";
import { generateContactsPage } from "./generateContactsPage.js";
import { generateResumePage } from "./generateResumePage.js";

// Initialize sidenav
$(document).ready(() => {
  $(".sidenav").sidenav();
  $("#projectsNav").on("click", () => {
    $("main").html(generateProjectsPage());
  });
  $("#resumeNav").on("click", () => {
    $("main").html(generateResumePage());
  });
  $("#contactNav").on("click", () => {
    $("main").html(generateContactsPage());
  });
});

$("#resume .activator, #resume .card-reveal .card-title").on("click", (evt) => {
  $(evt.target).closest("div.card").toggleClass("small");
});

M.AutoInit();
