import { generateProjectsPage } from "./generateProjects.js";

// Initialize sidenav
$(document).ready(() => $(".sidenav").sidenav());

console.log(generateProjectsPage());

$("#projects").append(generateProjectsPage());
