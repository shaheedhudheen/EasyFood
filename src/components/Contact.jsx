import { useState } from "react";

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
    <div className="max-w-screen-xl mx-auto my-4">
      <h1 className="text-center my-4 text-2xl font-bold">Contact Us</h1>
      <form
        className="flex flex-col items-center gap-4"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col">
          <label htmlFor="name" className="font-[500]">
            Name
          </label>
          <input
            className="border-2  rounded-xl outline-emerald-300 px-2 py-1 w-64"
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className="font-[500]">
            Email
          </label>
          <input
            className="border-2  rounded-xl outline-emerald-300 px-2 py-1 w-64"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="message" className="font-[500]">
            Message
          </label>
          <textarea
            className="border-2  rounded-xl outline-emerald-300 px-2 py-1 w-64"
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-emerald-500 px-4 py-2 rounded-xl text-white text-lg font-semibold"
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default Contact;
