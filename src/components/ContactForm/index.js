import { useState } from "react";
import { capitalizeFirstLetter, validateEmail } from "../../helpers";

const ContactForm = () => {
  const [contactFormState, setContactFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const { name, email, message } = contactFormState;

  const onBlur = (e) => {
    if (e.target.name === "email" && !validateEmail(email)) {
      setErrorMessage("Invalid email!");
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${capitalizeFirstLetter(e.target.name)} is required!`);
      } else {
        setErrorMessage("");
      }
    }
    setContactFormState({
      ...contactFormState,
      [e.target.name]: e.target.value,
    });
    console.log(contactFormState);
  };

  const handleBlur = (e) => {};

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(contactFormState);
  };

  return (
    <div className="row">
      <form className="col s12" onSubmit={handleFormSubmit}>
        <div className="row">
          <div className="input-field col s6">
            <input
              id="name"
              type="text"
              name="name"
              className="validate"
              onBlur={onBlur}
              defaultValue={contactFormState.name}
            />
            <label htmlFor="name">Name</label>
          </div>
          <div className="input-field col s6">
            <input
              id="email"
              type="email"
              name="email"
              className="validate"
              onBlur={onBlur}
              defaultValue={contactFormState.email}
            />
            <label htmlFor="email">Email</label>
          </div>
          <div className="input-field col s12">
            <textarea
              id="message"
              name="message"
              className="materialize-textarea"
              onBlur={onBlur}
              defaultValue={contactFormState.message}
            />
            <label htmlFor="message">Message</label>
          </div>
        </div>
        <button type="submit">Submit</button>
        {errorMessage && <span className="red-text"> {errorMessage}</span>}
      </form>
    </div>
  );
};

export default ContactForm;
