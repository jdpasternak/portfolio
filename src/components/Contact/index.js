import ContactCard from "../ContactCard";

const Contact = () => {
  const contactInfo = [
    {
      icon: `<i class="material-icons fa-beat">email</i>`,
      linkText: "Email!",
      link: "mailto:jdp.pasternak@gmail.com",
    },
    {
      icon: `<i class="material-icons fa-beat">phone</i>`,
      linkText: "Call!",
      link: "tel:1-808-216-3534",
    },
    {
      icon: `<i class="fab fa-linkedin fa-beat fs-5"></i>`,
      linkText: "Connect!",
      link: "https://linkedin.com/in/jakepasternak/",
    },
    {
      icon: `<i class="fab fa-github fa-beat fs-5"></i>`,
      linkText: "Follow!",
      link: "https://github.com/jdpasternak/",
    },
  ];

  return (
    <div>
      <h2>Contact</h2>
      <div className="row">
        {contactInfo.map((contact) => (
          <ContactCard data={contact} key={contact.link} />
        ))}
      </div>
    </div>
  );
};

export default Contact;
