const contactInfo = [
  {
    icon: `<i class="material-icons">email</i>`,
    linkText: "Email me!",
    link: "mailto:jdp.pasternak@gmail.com",
  },
  {
    icon: `<i class="material-icons">phone</i>`,
    linkText: "Call me!",
    link: "tel:1-808-216-3534",
  },
  {
    icon: `<i class="fab fa-linkedin fs-5"></i>`,
    linkText: "Connect with me!",
    link: "https://linkedin.com/in/jakepasternak/",
  },
  {
    icon: `<i class="fab fa-github fs-5"></i>`,
    linkText: "Follow me!",
    link: "https://github.com/jdpasternak/",
  },
];

const generateContactInfo = () => {
  let contactInfoHTML = [];
  for (const contact of contactInfo) {
    contactInfoHTML.push(`
            <div class="col s12 m3">
                <div class="card">
                    <a href="${contact.link}" target="_blank">
                        <div class="card-content center">
                            <span class="card-title center">${contact.icon}</span>
                            <div class="center">${contact.linkText}</div>
                        </div>
                    </a>
                </div>
            </div>`);
  }
  return contactInfoHTML.join("");
};

const generateContactsPage = () => {
  return [
    `<h2>Contact Me</h2>`,
    `<div class="container">`,
    `<div class="row">`,
    generateContactInfo(),
    `</div>`,
    `</div>`,
  ].join("");
};

export { generateContactsPage };
