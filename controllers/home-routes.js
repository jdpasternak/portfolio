const router = require("express").Router();
const fetch = require("node-fetch");
const resumeData = require("../data/resumeData.json");

const contactInfo = [
  {
    icon: `<i class="material-icons">email</i>`,
    linkText: "Email!",
    link: "mailto:jdp.pasternak@gmail.com",
  },
  {
    icon: `<i class="material-icons">phone</i>`,
    linkText: "Call!",
    link: "tel:1-808-216-3534",
  },
  {
    icon: `<i class="fab fa-linkedin fs-5"></i>`,
    linkText: "Connect!",
    link: "https://linkedin.com/in/jakepasternak/",
  },
  {
    icon: `<i class="fab fa-github fs-5"></i>`,
    linkText: "Follow!",
    link: "https://github.com/jdpasternak/",
  },
];

// Hompeage
router.get("/", (req, res) => {
  res.render("homepage");
});

router.get("/projects", async (req, res) => {
  // const oReq = new XMLHttpRequest();
  // oReq.addEventListener("load", function () {
  //   // res.render("projects", this.responseText);
  //   console.log(this.responseText);
  // });
  // oReq.open("GET", "https://api.github.com/users/jdpasternak/repos");
  // oReq.send();

  const response = await fetch(
    "https://api.github.com/users/jdpasternak/repos?sort=updated"
  );
  if (response.ok) {
    response.json().then((data) => {
      res.render("projects", { projects: data });
      // console.log(data);
    });
  }
});

router.get("/resume", (req, res) => {
  res.render("resume", { resumeData });
});

router.get("/contact", (req, res) => {
  res.render("contact", { contacts: contactInfo });
});

module.exports = router;
