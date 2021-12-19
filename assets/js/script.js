import { generateProjectsPage } from "./generateProjectsPage.js";
import { generateContactsPage } from "./generateContactsPage.js";
import { generateResumePage } from "./generateResumePage.js";

// Initialize sidenav
$(document).ready(() => {
  $(".sidenav").sidenav();

  $("#projectsNav").on("click", (evt) => {
    $("main").html(generateProjectsPage());
    makeActive(evt.target);
  });

  $("#resumeNav").on("click", (evt) => {
    $("main").html(generateResumePage());
    makeActive(evt.target);
    $("#resume .activator, #resume .card-reveal .card-title").on(
      "click",
      (evt) => {
        $(evt.target).closest("div.card").toggleClass("small");
      }
    );
    M.AutoInit();
  });

  $("#contactNav").on("click", (evt) => {
    $("main").html(generateContactsPage());
    makeActive(evt.target);
  });

  $("main").html(generateProjectsPage());
  $("#projectsNav").addClass("active");
});

const makeActive = (target) => {
  $("nav li").removeClass("active");
  $(target).closest("li").addClass("active");
};

M.AutoInit();
