const resumeData = {
  summary:
    "Confident and charismatic leader with drive and will to grow in a role where his talents, skills, and visions fuel consistent achievement that benefits the company and its people. Experience in desktop/server administration, networking and web development.",
  skills: [
    {
      group: "Platforms",
      skillsList: ["Windows 7/8/8.1/10", "Mac OS X", "Linux"],
    },
    {
      group: "Server",
      skillsList: ["Windows Server 2016", "Ubuntu Server", "Dell PowerEdge"],
    },
    {
      group: "Productivity Suites",
      skillsList: [
        "MS Office / 365",
        "MS Access",
        "SharePoint",
        "MS 365 Admin",
      ],
    },
    {
      group: "Networking",
      skillsList: ["Cisco IOS", "VLANs", "Subnetting", "VPNs", "DNS"],
    },
    {
      group: "Security",
      skillsList: ["Malware Analysis", "Ethical Hacking", "Cryptography"],
    },
    {
      group: "Programming / Scripting",
      skillsList: [
        "HTML, CSS, JavaScript",
        "React, Node.js, Express.js, JQuery",
        "PHP, SQL, PostgreSQL",
        "Bootstrap, Foundation, Materialize CSS",
        "Python, PowerShell, Java",
      ],
    },
    {
      group: "Web",
      skillsList: ["Hosting", "Administration", "DNS"],
    },
    {
      group: "Virtualization",
      skillsList: ["VMware Workstation", "Virtualbox", "Hyper-V"],
    },
    {
      group: "ITSM / LCM",
      skillsList: ["ServiceNow", "TFS"],
    },
    {
      group: "Automation / Logging",
      skillsList: ["Ansible", "Elastic Stack"],
    },
    {
      group: "Cloud",
      skillsList: ["Amazon Web Services", "Azure", "Heroku"],
    },
  ],
  certifications: [
    {
      name: "CompTIA A+",
      logo: "./assets/images/Aplus Logo Certified CE.png",
      link: "https://www.credly.com/badges/2bcfc959-8c05-461b-a1d3-964aa1d840e3",
    },
    {
      name: "CompTIA Network+",
      logo: "./assets/images/NetworkPlus Logo Certified CE.png",
      link: "https://www.credly.com/badges/be30561e-8421-445f-84d3-d855d98921b5",
    },
    {
      name: "CompTIA Security+",
      logo: "./assets/images/SecurityPlus Logo Certified CE.png",
      link: "https://www.credly.com/badges/9f0c61bf-20f9-40a2-a736-47d69f451c8e",
    },
    {
      name: "CompTIA Pentest+",
      logo: "",
      link: "https://www.credly.com/badges/748e8690-1543-48fb-84f9-eb1ceeda7022",
    },
    {
      name: "Cisco CCENT",
      logo: "./assets/images/ccent_network_large.jpg",
      link: "",
    },
    {
      name: "AWS Cloud Practitioner",
      logo: "./assets/images/aws-certified-logo_color-horz_360x60.png",
      link: "https://www.credly.com/badges/220db854-cc9a-4a91-9d9b-9cd073a5800e",
    },
  ],
  work: [
    {
      title: "Owner",
      company: "JDP Enterprises, LLC",
      companySite: "https://jdp-enterprises.com/",
      duration: "September 2017 - Present (5 yrs 2 mos)",
      location: "Honolulu, HI",
    },
    {
      title: "IT Project Administrator",
      company: "Hawaii Medical Service Association",
      comapnySite: "https://hmsa.com/",
      duration: "December 2019 - Present (2 yrs)",
      location: "Honolulu, HI",
    },
    {
      title: "IT Project Coordinator",
      company: "Hawaii Medical Service Association",
      comapnySite: "https://hmsa.com/",
      duration: "April 2019 - December 2019 (8 mos)",
      location: "Honolulu, HI",
    },
    {
      title: "Advanced Repair Agent",
      company: "Geek Squad",
      comapnySite: "https://geeksquad.com",
      duration: "April 2017 - September 2020",
      location: "Honolulu, HI",
    },
    {
      title: "IT Instructor",
      company: "Advanced Computer Technology Training, Inc.",
      comapnySite: "https://actt-inc.com/",
      duration: "June 2018 - January 2019 (8 mos)",
      location: "Pearl City, HI",
    },
    {
      title: "Consultation Agent",
      company: "Geek Squad",
      comapnySite: "https://geeksquad.com",
      duration: "July 2017 - August 2018 (1 yr 2 mos)",
      location: "Honolulu, HI",
    },
    {
      title: "Supply Chain Specialist",
      company: "OneSource Distributors",
      comapnySite: "https://www.1sourcedist.com/",
      duration: "December 2015 - March 2017 (1 yr 4 mos)",
      location: "Honolulu, HI",
    },
    {
      title: "Head of Receiving",
      company: "OneSource Distributors",
      comapnySite: "https://www.1sourcedist.com/",
      duration: "January 2015 - December 2015 (1 yr)",
      location: "Honolulu, HI",
    },
  ],
  education: {
    degree: "Associates in Science",
    study: "Computer Security and Networking Technologies",
    school: "Honolulu Community College",
    location: "Honolulu, HI",
    graduation: "May 2020",
    disiplines: [
      "Hardware and Software Troubleshooting",
      "Information Security",
      "Advanced Cisco Networking",
      "Programming and Scripting",
      "System Administration",
      "Telecommunication",
      "Ethical Hacking",
      "Malware Analysis and Reverse Engineering",
    ],
  },
};

const generateSummary = () => {
  return `
  <h2>Summary</h2>
    <div class="row">
        <div class="col s12">
            <div class="card">
                <div class="card-content">
                    <p>${resumeData.summary}</p>
                </div>
            </div>
        </div>
    </div>
  `;
};

const generateSkillsCollection = (skillsList) => {
  let skillsCollection = [`<ul class="collection">`];
  for (const skill of skillsList) {
    skillsCollection.push(`<li class="collection-item">${skill}</li>`);
  }
  skillsCollection.push(`</ul>`);
};

const generateSkills = () => {
  let skillsHTML = [];
  for (skill of resumeData.skills) {
    skillsHTML.push(`
        <li>
            <div class="collapsible-header">${skill.group}</div>
            <div class="collapsible-body">${generateSkillsCollection(
              skill.skillsList
            )}</div>
        </li>
    `);
  }

  return `
    <h2>Skills</h2>
        <ul class="collapsible">
            ${skillsHTML.join("")}
        </ul>
    `;
};

const generateCertLink = (certLink) => {
  if (certLink) {
    return `<a href="${certLink}>View on Credly</a>`;
  }
  return "";
};

const generateCertImg = (certImg) => {
  if (certImg) {
    return `
    <div class="card-image">
        <img src="${certImg} />
    </div>`;
  }
  return "";
};

const generateCertifications = () => {
  certificationsHTML = [];

  for (const cert of resumeData.certifications) {
    let certHTML = `
            <div class="col s12 m4">
                <div class="card small">
                    ${generateCertImg(cert.logo)}
                    <div class="card-content">
                        <span class="card-title">${cert.name}</span>
                    </div>
                    <div class="card-action">
                        ${generateCertLink(cert.link)}
                    </div>
                </div>
            </div>
        `;
    certificationsHTML.push(certHTML);
  }
  return certificationsHTML.join("");
};
const generateWork = () => {};
const generateEducation = () => {};

const generateResumePage = () => {};

export { generateResumePage };