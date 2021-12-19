import { generateProjectsPage } from "./generateProjectsPage.js";
import { generateContactsPage } from "./generateContactsPage.js";
import { generateResumePage } from "./generateResumePage.js";


// Initialize sidenav
$(document).ready(() => $(".sidenav").sidenav());

console.log(generateProjectsPage());

$("#projects").append(generateProjectsPage());
$("#contact").append(generateContactsPage());
