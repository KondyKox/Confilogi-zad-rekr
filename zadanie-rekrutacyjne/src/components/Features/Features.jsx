import { useState } from "react";
import "./Features.css";
import { features } from "../../constants/features";

const Features = () => {
  const [activeIndex, setActiveIndex] = useState(0);

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
            {feature.title}
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
          <h3 className="header">{features[activeIndex].header}</h3>
          <p>{features[activeIndex].description}</p>
          <button className="btn btn-primary">More info</button>
        </div>
      </div>
    </section>
  );
};

export default Features;
