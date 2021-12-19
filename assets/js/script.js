import { generateProjectsPage } from "./generateProjectsPage.js";
import { generateContactsPage } from "./generateContactsPage.js";
import { generateResumePage } from "./generateResumePage.js";

// Initialize sidenav
$(document).ready(() => {
  $(".sidenav").sidenav();

  $("#projectsNav, #projectsNavMobile").on("click", (evt) => {
    $("main").html(generateProjectsPage());
    makeActive(evt.target);
    $(".sidenav").sidenav("close");
  });

  $("#resumeNav, #resumeNavMobile").on("click", (evt) => {
    $("main").html(generateResumePage());
    makeActive(evt.target);
    $(".collapsible").collapsible();
    $(".sidenav").sidenav("close");

    $("#resume .activator, #resume .card-reveal .card-title").on(
      "click",
      (evt) => {
        $(evt.target).closest("div.card").toggleClass("small");
      }
    );
  });

  $("#contactNav, #contactNavMobile").on("click", (evt) => {
    $("main").html(generateContactsPage());
    makeActive(evt.target);
    $(".sidenav").sidenav("close");
  });

  $("main").html(generateProjectsPage());
  $("#projectsNav").addClass("active");
});

const makeActive = (target) => {
  $("nav li, .sidenav li").removeClass("active");
  $(target).closest("li").addClass("active");
};

M.AutoInit();
