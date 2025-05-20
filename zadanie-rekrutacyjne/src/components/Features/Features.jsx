import { useState } from "react";
import "./Features.css";

const Features = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const features = ["Simple Bookmarking", "Speedy Searching", "Easy Sharing"];

  return (
    <section id="features" className="features section">
      <div className="features__header">
        <h2 className="header">Features</h2>
        <p>
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>
      </div>
      <ul className="features__list">
        {features.map((feature, index) => (
          <li
            key={index}
            className={`features__list__el ${
              activeIndex === index && "active"
            }`}
            onClick={() => setActiveIndex(index)}
          >
            {feature}
          </li>
        ))}
      </ul>
      <div className="features__feature">
        <div className="feature__image">
          <img
            src={`./images/illustration-features-tab-${activeIndex + 1}.svg`}
            alt={`Feature illustration ${activeIndex + 1}`}
            className="section-img"
          />
          <div className="rounded-bg" />
        </div>
        <div className="feature__image__info">
          <h3 className="header">Bookmark in one click</h3>
          <p>
            Organize your bookmarks however you like. Our simple drag-and-drop
            interface gives you complete control over how you manage you
            favorite sites.
          </p>
          <button className="btn btn-primary">More info</button>
        </div>
      </div>
    </section>
  );
};

export default Features;
