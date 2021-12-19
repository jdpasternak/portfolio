import { generateProjectsPage } from "./generateProjectsPage.js";
import { generateContactsPage } from "./generateContactsPage.js";
import { generateResumePage } from "./generateResumePage.js";

// Initialize sidenav
$(document).ready(() => {
  $(".sidenav").sidenav();

  // Projects Page
  $("#projectsNav, #projectsNavMobile").on("click", (evt) => {
    $("main").html(generateProjectsPage());
    makeActive(evt.target);
    $(".sidenav").sidenav("close");
  });

  // Resume Page
  $("#resumeNav, #resumeNavMobile").on("click", (evt) => {
    $("main").html(generateResumePage());
    makeActive(evt.target);
    $(".collapsible").collapsible();
    $(".scrollspy").scrollSpy();
    $(".table-of-contents a").removeClass("active");
    $(`a[href="#summary"]`).addClass("active");
    $(".sidenav").sidenav("close");

    $("#resume .activator, #resume .card-reveal .card-title").on(
      "click",
      (evt) => {
        $(evt.target).closest("div.card").toggleClass("small");
      }
    );
  });

  // Contact Page
  $("#contactNav, #contactNavMobile").on("click", (evt) => {
    $("main").html(generateContactsPage());
    makeActive(evt.target);
    $(".sidenav").sidenav("close");
  });

  // Intial View
  $("main").html(generateProjectsPage());
  $("#projectsNav, #projectsNavMobile").addClass("active");
});

const makeActive = (target) => {
  $("nav li, .sidenav li").removeClass("active");
  $(target).closest("li").addClass("active");
};

M.AutoInit();
