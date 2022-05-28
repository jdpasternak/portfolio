import {
  faApple,
  faAws,
  faBootstrap,
  faCss3,
  faHtml5,
  faJava,
  faJira,
  faJs,
  faLinux,
  faMicrosoft,
  faNodeJs,
  faPhp,
  faPython,
  faReact,
  faUbuntu,
  faWindows,
} from "@fortawesome/free-brands-svg-icons";
import {
  faAppleAlt,
  faBellConcierge,
  faCloud,
  faCode,
  faDatabase,
  faFile,
  faKey,
  faNetworkWired,
  faServer,
  faUserSecret,
  faVirus,
  faWandMagic,
} from "@fortawesome/free-solid-svg-icons";

export const getYearsAndMonthsTimeLapse = (start, end) => {
  const lapse =
    ((end ? end : Date.now()) - (start ? start : Date.now())) / 31536000000;
  const years = Math.floor(lapse);
  const months = Math.ceil((lapse % 1) * 12);
  const string = `${
    (years > 0 ? years + (years > 1 ? " yrs, " : " yr, ") : "") +
    (months > 0 ? months + (months > 1 ? " mos" : " mo") : "")
  }`;
  return string;
};

export const getMonthYearStringFromDate = (date) => {
  return "";
};

export const resumeData = {
  summary:
    "Confident and charismatic leader with drive and will to grow in a role where his talents, skills, and visions fuel consistent achievement that benefits the company and its people. Experience in desktop/server administration, networking and web development.",
  skills: [
    {
      group: "Programming / Scripting",
      skillsList: [
        { name: "JavaScript", icon: faJs },
        { name: "React", icon: faReact },
        { name: "Java", icon: faJava },
        { name: "Java Spring Boot", icon: faJava },
        { name: "Python", icon: faPython },
        { name: "HTML", icon: faHtml5 },
        { name: "CSS", icon: faCss3 },
        { name: "Node.js", icon: faNodeJs },
        { name: "Express.js", icon: faCode },
        { name: "JQuery", icon: faCode },
        { name: "PHP", icon: faPhp },
        { name: "SQL", icon: faDatabase },
        { name: "PostgreSQL", icon: faDatabase },
        { name: "Bootstrap", icon: faBootstrap },
        { name: "Materialize CSS", icon: faCode },
        { name: "PowerShell", icon: faMicrosoft },
      ],
    },
    {
      group: "Platforms",
      skillsList: [
        { name: "Windows 7/8/8.1/10", icon: faWindows },
        { name: "Mac OS X", icon: faApple },
        { name: "Linux", icon: faLinux },
      ],
    },
    {
      group: "Server",
      skillsList: [
        { name: "Windows Server 2016", icon: faWindows },
        { name: "Ubuntu Server", icon: faUbuntu },
        { name: "Dell PowerEdge", icon: faServer },
      ],
    },
    {
      group: "Productivity Suites",
      icon: faAppleAlt,
      skillsList: [
        { name: "MS Office / 365", icon: faMicrosoft },
        { name: "MS Access", icon: faMicrosoft },
        { name: "SharePoint", icon: faMicrosoft },
        { name: "MS 365 Admin", icon: faMicrosoft },
      ],
    },
    {
      group: "Networking",
      skillsList: [
        { name: "Cisco IOS", icon: faNetworkWired },
        { name: "VLANs", icon: faNetworkWired },
        { name: "Subnetting", icon: faNetworkWired },
        { name: "VPNs", icon: faNetworkWired },
        { name: "DNS", icon: faNetworkWired },
      ],
    },
    {
      group: "Security",
      skillsList: [
        { name: "Malware Analysis", icon: faVirus },
        { name: "Ethical Hacking", icon: faUserSecret },
        { name: "Cryptography", icon: faKey },
      ],
    },

    {
      group: "Web",
      skillsList: [
        { name: "Hosting", icon: faServer },
        { name: "Administration", icon: faServer },
        { name: "DNS", icon: faServer },
      ],
    },
    {
      group: "Virtualization",
      skillsList: [
        { name: "VMware Workstation", icon: faServer },
        { name: "Virtualbox", icon: faServer },
        { name: "Hyper-V", icon: faMicrosoft },
      ],
    },
    {
      group: "ITSM / LCM",
      skillsList: [
        { name: "ServiceNow", icon: faBellConcierge },
        { name: "TFS", icon: faMicrosoft },
        { name: "Jira", icon: faJira },
      ],
    },
    {
      group: "Automation / Logging",
      skillsList: [
        { name: "Ansible", icon: faWandMagic },
        { name: "Elastic Stack", icon: faFile },
      ],
    },
    {
      group: "Cloud",
      skillsList: [
        { name: "Amazon Web Services", icon: faAws },
        { name: "Azure", icon: faCloud },
        { name: "Heroku", icon: faCloud },
      ],
    },
  ],
  certifications: [
    {
      name: "CompTIA A+",
      logo: "/portfolio/assets/images/CompTIA_A_2Bce.png",
      link: "https://www.credly.com/badges/2bcfc959-8c05-461b-a1d3-964aa1d840e3",
    },
    {
      name: "CompTIA Network+",
      logo: "/portfolio/assets/images/CompTIA_Network_2Bce.png",
      link: "https://www.credly.com/badges/be30561e-8421-445f-84d3-d855d98921b5",
    },
    {
      name: "CompTIA Security+",
      logo: "/portfolio/assets/images/CompTIA_Security_2Bce.png",
      link: "https://www.credly.com/badges/9f0c61bf-20f9-40a2-a736-47d69f451c8e",
    },
    {
      name: "CompTIA Pentest+",
      logo: "portfolio/assets/images/CompTIA_PenTest_2B.png",
      link: "https://www.credly.com/badges/748e8690-1543-48fb-84f9-eb1ceeda7022",
    },
    {
      name: "Cisco CCENT",
      logo: "/portfolio/assets/images/ccent_network_large.jpg",
      link: "",
    },
    {
      name: "AWS Cloud Practitioner",
      logo: "/portfolio/assets/images/aws-cloud-practitioner.png",
      link: "https://www.credly.com/badges/220db854-cc9a-4a91-9d9b-9cd073a5800e",
    },
  ],
  work: [
    {
      title: "Software Engineer",
      company: "J. P. Morgan Chase & Co.",
      companySite: "https://jpmorgan.com/",
      start: new Date("2022-04-25"),
      end: "",
      location: "Tampa, FL",
    },
    {
      title: "Owner",
      company: "JDP Enterprises, LLC",
      companySite: "https://jdp-enterprises.com/",
      start: new Date("2017-09-01"),
      end: "",
      location: "Honolulu, HI",
    },
    {
      title: "IT Project Administrator",
      company: "Hawaii Medical Service Association",
      companySite: "https://hmsa.com/",
      start: new Date("2019-04-11"),
      end: new Date("2021-12-28"),
      duration: "December 2019 - December 2021 (2 yrs)",
      location: "Honolulu, HI",
    },
    {
      title: "IT Project Coordinator",
      company: "Hawaii Medical Service Association",
      companySite: "https://hmsa.com/",
      start: new Date("2019-04-11"),
      end: new Date("2019-12-29"),
      duration: "April 2019 - December 2019 (8 mos)",
      location: "Honolulu, HI",
    },
    {
      title: "Advanced Repair Agent",
      company: "Geek Squad",
      companySite: "https://geeksquad.com",
      start: new Date("2017-04-01"),
      end: new Date("2020-09-31"),
      duration: "April 2017 - September 2020",
      location: "Honolulu, HI",
    },
    {
      title: "IT Instructor",
      company: "Advanced Computer Technology Training, Inc.",
      companySite: "https://actt-inc.com/",
      start: new Date("2018-06-01"),
      end: new Date("2019-01-25"),
      duration: "June 2018 - January 2019 (8 mos)",
      location: "Pearl City, HI",
    },
    {
      title: "Consultation Agent",
      company: "Geek Squad",
      companySite: "https://geeksquad.com",
      start: new Date("2017-07-01"),
      end: new Date("2018-08-31"),
      duration: "July 2017 - August 2018 (1 yr 2 mos)",
      location: "Honolulu, HI",
    },
    {
      title: "Supply Chain Specialist",
      company: "OneSource Distributors",
      companySite: "https://www.1sourcedist.com/",
      start: new Date("2015-12-01"),
      end: new Date("2017-03-31"),
      duration: "December 2015 - March 2017 (1 yr 4 mos)",
      location: "Honolulu, HI",
    },
    {
      title: "Head of Receiving",
      company: "OneSource Distributors",
      companySite: "https://www.1sourcedist.com/",
      start: new Date("2015-01-01"),
      end: new Date("2015-12-31"),
      duration: "January 2015 - December 2015 (1 yr)",
      location: "Honolulu, HI",
    },
  ],
  education: [
    {
      degree: "Bootcamp Certificate",
      study: "Coding and Web Development",
      school: "UC Berkeley Extension",
      location: "Berkeley, CA",
      graduation: "April 2022",
      degreeLink: "https://bootcamp.berkeley.edu/coding/",
      description:
        "In today's age of technology, coding and logic-based skills are becoming increasingly in-demand across job markets. At Berkeley Coding Boot Camp, our web development program teaches you the key programming skills for front end and back end web development, all while preparing you for success in the professional world. Not only will you get real-world project experience that's immediately applicable to the workforce, you'll also earn a Certificate of Completion from UC Berkeley Extension to bolster your resume and begin or advance your career as a web developer.",
    },
    {
      degree: "Associate in Science",
      study: "Computer Security and Networking Technologies",
      school: "Honolulu Community College",
      location: "Honolulu, HI",
      graduation: "May 2020",
      degreeLink: "https://www.honolulu.hawaii.edu/csnt",
      description:
        "The Associate in Science (AS) Degree in the Computing, Security and Networking Technology program is a two year course of study that prepares the student for entry-level employment in the field of Information and Communications Technology. Core courses are designed to give students a firm foundation in the basics of computers, networking, system administration and information security. The AS Degree also provides options for a Certificate of Achievement in Networking and Telecommunications, and a Certificate of Achievement in Information Assurance.\n\nElective courses allow students to further specialize in a field of study. Students will have the opportunity to participate in an internship or cooperative education experience before completing the program. Certain CSNT courses also help to prepare the student to take the following Information and Communications Technology industry certification exams: Computer Technician A+, Cisco Certified Network Associate (CCNA), Microsoft Certified Professional, Security+, Linux+, and VMware Certified Professional. The CSNT program is a Cisco Academy, a CompTIA Training Center, a Microsoft Regional Academy, and a VMware Academy.",
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
    {
      degree: "Certificate of Achievement",
      study: "Information Assurance",
      school: "Honolulu Community College",
      location: "Honolulu, HI",
      graduation: "May 2020",
      degreeLink: "https://www.honolulu.hawaii.edu/csnt",
      description:
        "Courses selected for this certificate, meet the two year core knowledge unit requirements for a college to become recognized as a National Center of Academic Excellence in Cyber Defense Two-Year (CAE2Y). This program, which is sponsored by the NSA and DHS, recognizes colleges which have met their standard of academic excellence in Information Assurance education. Honolulu Community College is currently recognized as a CAE2Y.",
    },
    {
      degree: "Certificate of Achievement",
      study: "Networking and Telecommunications",
      school: "Honolulu Community College",
      location: "Honolulu, HI",
      graduation: "May 2020",
      degreeLink: "https://www.honolulu.hawaii.edu/csnt",
      description:
        "Courses within this certificate provide the student with a solid foundation in networking and telecommunications. This certificate is built upon industry standards and provides support for the following industry certifications: A+, Security+, Linux+, CCNA.",
    },
  ],
};
