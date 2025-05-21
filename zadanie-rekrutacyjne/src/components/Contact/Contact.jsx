import { useState } from "react";
import "./Contact.css";
import { useCountdown } from "../../hooks/useCountdown";

const Contact = () => {
  const usersJoined = useCountdown(35000, 20);
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [active, setActive] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setActive(true);

    if (!email) {
      setError("Email nie może być pusty.");
      return;
    }

    if (!email.includes("@")) {
      setError("Niepoprawny email.");
      return;
    }

    setActive(false);
  };

  return (
    <section className="contact section full-width" id="contact">
      <div className="contact__joined">
        <span>{usersJoined}+</span> already joined
      </div>
      <form className="contact__container" onSubmit={(e) => handleSubmit(e)}>
        <h2 className="header">Stay up-to-date with what we're doing</h2>
        <div className="contact__input-container">
          <input
            type="text" // type="email" nie przepuści tekstu bez @, ale nie wyświetli w ".contact__newsletter"
            placeholder="Enter your email address"
            className="contact__input input__email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <button className="special-link contact__input">Contact Us</button>
          <span className={`contact__newsletter ${active ? "active" : ""}`}>
            {error}
          </span>
        </div>
      </form>
    </section>
  );
};

export default Contact;
