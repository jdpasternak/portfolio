const router = require("express").Router();
const fetch = require("node-fetch");

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
  res.render("resume");
});

router.get("/contact", (req, res) => {
  res.render("contact");
});

module.exports = router;
