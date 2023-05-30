import React, { useState } from "react";

function Contact() {
  // state variables for form inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // prevent default browser behavior
    alert(
      `Thank you for contacting us, ${name}! We will get back to you soon.`
    ); // show a confirmation message
    // TODO: send the form data to a backend service or an email address
    // reset the form inputs
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="contact-us">
      <h1>Contact Us</h1>
      <form className="contact" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-button">
          Send
        </button>
      </form>
    </div>
  );
}

export default Contact;
