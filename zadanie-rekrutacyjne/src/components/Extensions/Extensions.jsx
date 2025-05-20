import { extensions } from "../../constants/extensions";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import "./Extensions.css";

const Extensions = () => {
  const isDesktop = useMediaQuery("(max-width: 1440px)");

  return (
    <section className="extensions section">
      <div className="extensions__hero">
        <h2 className="header">Download the extension</h2>
        <p>
          We've got more browsers in the pipeline. Please do let us know if
          you've got a favourite you'd like to prioritize.
        </p>
      </div>
      <div className="extensions__container">
        {extensions.map((extension, index) => (
          <div
            key={index}
            className="extension"
            style={{
              marginTop: !isDesktop ? `${50 * index}px` : undefined,
            }}
          >
            <div className="extension__info">
              <img
                src={`./images/logo-${extension.name.toLocaleLowerCase()}.svg`}
                alt={extension.name}
                className="extension__image"
              />
              <h4 className="social-header">Add to {extension.name}</h4>
              <p>Minimum version {extension.version}</p>
            </div>
            <img
              src="./images/bg-dots.svg"
              alt="Background dots"
              className="bg-dots"
            />
            <button className="btn btn-primary">Add & Install Extension</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Extensions;
