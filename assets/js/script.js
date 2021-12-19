import { generateProjectsPage } from "./generateProjectsPage.js";

// Initialize sidenav
$(document).ready(() => $(".sidenav").sidenav());

console.log(generateProjectsPage());

$("#projects").append(generateProjectsPage());
