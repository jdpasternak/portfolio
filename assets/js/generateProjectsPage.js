const projects = [
  {
    title: "LazEat",
    imageSrc: "./assets/images/lazeat-screenshot.PNG",
    description:
      "Enter your city and get meal recommendations based on the current weather where you are.",
    site: "https://afaed.github.io/LazEat/",
    github: "https://github.com/afaed/LazEat/",
  },
  {
    title: "Run Buddy",
    imageSrc: "./assets/images/run-buddy-screenshot.PNG",
    description:
      "A website that offers fitness training services. This was a project done for a coding bootcamp.",
    site: "https://jdpasternak.github.io/run-buddy/",
    github: "https://github.com/jdpasternak/run-buddy/",
  },
  {
    title: "Password Generator",
    imageSrc: "./assets/images/password-generator.PNG",
    description:
      "Generate a random password by specifying password length, uppercase letter, lowercase letters, numbers, and symbols.",
    site: "https://jdpasternak.github.io/password-generator/",
    github: "https://github.com/jdpasternak/password-generator/",
  },
  {
    title: "Robot Gladiators",
    imageSrc: "./assets/images/robot-gladiator.PNG",
    description:
      "Fight robot enemies to win the high score! Features random damage and a store to upgrade damage or health, and replenish life points.",
    site: "https://jdpasternak.github.io/robot-gladiators/",
    github: "https://github.com/jdpasternak/robot-gladiators/",
  },
  {
    title: "Master Lock&reg; Cracking Tool",
    imageSrc: "./assets/images/master-lock-combo-cracker.PNG",
    description:
      "Master Lock&reg; dial combination locks have 64,000 possible combos. Use this tool to reduce it to 80 and crack the combination in less than 20 minutes!",
    site: "https://jdpasternak.github.io/master-lock-cracking-tool/",
    github: "https://github.com/jdpasternak/master-lock-cracking-tool/",
  },
  {
    title: "Hangman",
    imageSrc: "./assets/images/hangman.PNG",
    description:
      "Play classic hangman in the command line with this Python game.",
    siteText: "Download",
    site: "https://github.com/jdpasternak/hangman/archive/refs/heads/main.zip",
    github: "https://github.com/jdpasternak/hangman",
  },
  {
    title: "0% Interest Credit Card Calculator",
    imageSrc: "./assets/images/zero-interest-calc.PNG",
    description:
      "0% interest credit cards save us lots of money. Use this tool to calculate your total monthly payments for credit cards to pay them off before the promtional APR expires, and pay $0 in inerest!",
    site: "https://jdpasternak.github.io/zero-interest-calc",
    github: "https://github.com/jdpasternak/zero-interest-calc/",
  },
  {
    title: "Weather Dashboard",
    imageSrc: "./assets/images/weather-dashboard.PNG",
    description: "Search for a city then view current and 5-day forecasts.",
    site: "https://jdpasternak.github.io/weather-dashboard",
    github: "https://github.com/jdpasternak/weather-dashboard/",
  },
  {
    title: "Git it Done",
    imageSrc: "./assets/images/git-it-done.PNG",
    description:
      "Search for GitHub users and view repositories and their issues.",
    site: "https://jdpasternak.github.io/git-it-done",
    github: "https://github.com/jdpasternak/git-it-done/",
  },
  {
    title: "Coding Quiz",
    imageSrc: "./assets/images/coding-quiz.PNG",
    description:
      "Quiz yourself on various topics. Currently contains content for JavaScript. Put your initials to save your high score and view the leaderboard.",
    site: "https://jdpasternak.github.io/coding-quiz",
    github: "https://github.com/jdpasternak/coding-quiz/",
  },
  {
    title: "Work Day Scheduler",
    imageSrc: "./assets/images/work-day-scheduler.PNG",
    description:
      "Block out hours throughout the day with events. Colors indicate current, past, and future hour blocks.",
    site: "https://jdpasternak.github.io/work-day-scheduler",
    github: "https://github.com/jdpasternak/work-day-scheduler/",
  },
  {
    title: "Taskinator",
    imageSrc: "./assets/images/taskinator.jpg",
    description: "Add, edit, and delete tasks to a Kanban style board.",
    site: "https://jdpasternak.github.io/taskinator",
    github: "https://github.com/jdpasternak/taskinator/",
  },
  {
    title: "Taskmaster Pro",
    imageSrc: "./assets/images/taskmaster-pro.PNG",
    description:
      "Add, edit and delete tasks on a Kanban style board. Features drag and drop to change task status.",
    site: "https://jdpasternak.github.io/taskmaster-pro",
    github: "https://github.com/jdpasternak/taskmaster-pro/",
  },
];

const generateAltLinkText = (siteText) => {
  if (siteText) {
    return siteText;
  }
  return "Live Site";
};

const generateProjects = () => {
  let projectsHTML = [];
  for (const project of projects) {
    let projectCardTemplate = `
    <div class="col s12 m6">
  <div class="card medium">
  <div class="card-image waves-effect waves-block waves-light">
    <img src="${project.imageSrc}" class="activator">
    
  </div>
  <div class="card-content">
  <span class="card-title activator">${
    project.title
  }<i class="material-icons right">more_vert</i></span>
  </div>
  <div class="card-action">
    <a href="${project.site}" target="_blank">${generateAltLinkText(
      project.siteText
    )}</a>
    <a href="${project.github}" target="_blank">GitHub</a>
  </div>
  <div class="card-reveal">
    <span class="card-title">${
      project.title
    }<i class="material-icons right">close</i></span>
    <p>${project.description}</p>
  </div>
</div>
</div>`;
    projectsHTML.push(projectCardTemplate);
  }
  return projectsHTML.join("");
};

const generateProjectsPage = () => {
  return [
    `<h2>Projects</h2>`,
    `<div class="container">`,
    `<div class="row">`,
    `${generateProjects()}`,
    `</div>`,
    `</div>`,
  ].join("");
};

export { generateProjectsPage };
