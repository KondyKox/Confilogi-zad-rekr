import { useState } from "react";
import "./FAQ.css";
import { faqs } from "../../constants/faq";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(-1);

  const toggleActiveIndex = (index) => {
    if (index === activeIndex) {
      setActiveIndex(-1);
      return;
    }
    setActiveIndex(index);
  };

  return (
    <section className="faqs section">
      <div className="faqs__hero">
        <h2 className="header">Frequently Asked Questions</h2>
        <p>
          Here are some of our FAQs. If you have any other questions you'd like
          answered please feek free to email us.
        </p>
      </div>
      <ul className="faqs__container">
        {faqs.map((faq, index) => (
          <li
            key={index}
            className="faq"
            onClick={() => toggleActiveIndex(index)}
          >
            <div className="faq__question">
              <span>{faq.question}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="12"
                className={`faq__arrow ${
                  activeIndex === index ? "active" : ""
                }`}
              >
                <path fill="none" strokeWidth="3" d="M1 1l8 8 8-8" />
              </svg>
            </div>
            <p
              className={`faq__answer ${activeIndex === index ? "active" : ""}`}
            >
              {faq.answer}
            </p>
          </li>
        ))}
      </ul>
      <button className="btn btn-primary">More info</button>
    </section>
  );
};

export default FAQ;
