import Contact from "../Contact/Contact";
import Extensions from "../Extensions/Extensions";
import FAQ from "../FAQ/FAQ";
import Features from "../Features/Features";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./App.css";

function App() {
  return (
    <main>
      <Navbar />
      {/* Hero */}
      <header className="hero section">
        <div className="hero__panel">
          <h1 className="header">A Simple Bookmark Manager</h1>
          <p className="hero__description">
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </p>
          <div className="hero__btn__container">
            <button className="btn btn-primary">Get it on Chrome</button>
            <button className="btn btn-secondary">Get it on Firefox</button>
          </div>
        </div>
        <div className="hero__image">
          <img
            src="./images/illustration-hero.svg"
            alt="Hero image"
            className="section-img"
          />
          <div className="rounded-bg" />
        </div>
      </header>

      <Features />
      <Extensions />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
