import "../blocks/features.css";
import bullseye from "../assets/images/goal.svg";
import puzzle from "../assets/images/puzzle.svg";
import people from "../assets/images/users.svg";
import chart from "../assets/images/chart-no-axes-combined.svg";

function Features() {
  return (
    <section className="features">
      <h2 className="features__h2">
        Everything you need to build
        <span className="features__span"> generational wealth.</span>
      </h2>
      <div className="features__grid">
        <div className="features__item">
          <img className="features__icon" src={bullseye} alt="bullseye"></img>
          <p className="features__title">Financial Education</p>
          <p className="features__paragraph">
            Access comprehensive learning resources, from beginner basics to
            advanced investment strategies.
          </p>
        </div>
        <div className="features__item">
          <img className="features__icon" src={bullseye} alt="bullseye"></img>
          <p className="features__title">Financial Education</p>
          <p className="features__paragraph">
            Access comprehensive learning resources, from beginner basics to
            advanced investment strategies.
          </p>
        </div>
        <div className="features__item">
          <img className="features__icon" src={bullseye} alt="bullseye"></img>
          <p className="features__title">Financial Education</p>
          <p className="features__paragraph">
            Access comprehensive learning resources, from beginner basics to
            advanced investment strategies.
          </p>
        </div>
        <div className="features__item">
          <img className="features__icon" src={bullseye} alt="bullseye"></img>
          <p className="features__title">Financial Education</p>
          <p className="features__paragraph">
            Access comprehensive learning resources, from beginner basics to
            advanced investment strategies.
          </p>
        </div>
        <div className="features__item">
          <img className="features__icon" src={bullseye} alt="bullseye"></img>
          <p className="features__title">Financial Education</p>
          <p className="features__paragraph">
            Access comprehensive learning resources, from beginner basics to
            advanced investment strategies.
          </p>
        </div>
        <div className="features__item">
          <img className="features__icon" src={bullseye} alt="bullseye"></img>
          <p className="features__title">Financial Education</p>
          <p className="features__paragraph">
            Access comprehensive learning resources, from beginner basics to
            advanced investment strategies.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Features;
