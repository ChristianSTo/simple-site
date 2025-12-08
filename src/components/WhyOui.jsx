import "../blocks/why.css";
import solution from "../assets/images/message-square-plus.svg";
import warning from "../assets/images/message-square-warning.svg";

function WhyOui() {
  return (
    <section className="why">
      <h2 className="why__h2">
        Why <span className="why__span">OUInvest</span> Exists
      </h2>
      <div className="why__container">
        <div className="why__idea">
          <p className="why__idea-title">
            {" "}
            <img
              className="why__icon"
              src={warning}
              alt="warning exclamation mark symbol"
            ></img>
            The Problem
          </p>
          <p className="why__idea-paragraph">
            Traditional investing platforms weren't built with us in mind—too
            complex, too exclusive, and frankly, too boring.
          </p>
        </div>
        <div className="why__idea">
          <p className="why__idea-title">
            {" "}
            <img
              className="why__icon"
              src={solution}
              alt="solution check symbol"
            ></img>
            The OUInvest Solution
          </p>
          <p className="why__idea-paragraph">
            We make investing simple, culturally relevant, and actually fun for
            people who've been left out of the wealth-building conversation.
          </p>
        </div>
      </div>
      {/* <h2 className="why__h2">How We're Different</h2>
      <div className="why__container">
        <div className="why__idea">
          <p className="why__idea-title">
            <img
              className="why__icon"
              src={bullseye}
              alt="bullseye symbol"
            ></img>
            A Community-Driven Approach
          </p>
          <p className="why__idea-paragraph">
            A supportive community where underrepresented investors learn, grow,
            and build wealth together
          </p>
        </div>
        <div className="why__idea">
          <p className="why__idea-title">
            <img
              className="why__icon"
              src={puzzle}
              alt="puzzle quiz symbol"
            ></img>
            "What type of investor are you?" quizzes
          </p>
          <p className="why__idea-paragraph">
            Discover your investor personality and get matched with suitable
            opportunities
          </p>
        </div>
        <div className="why__idea">
          <p className="why__idea-title">
            <img
              className="why__icon"
              src={people}
              alt="people paired together symbol"
            ></img>
            Inclusive financial education
          </p>
          <p className="why__idea-paragraph">
            Resources that speak your language, not Wall Street jargon
          </p>
        </div>
        <div className="why__idea">
          <p className="why__idea-title">
            <img
              className="why__icon"
              src={chart}
              alt="rising chart symbol"
            ></img>
            Real-talk risk analysis
          </p>
          <p className="why__idea-paragraph">
            Straightforward explanations with no fluff or false promises
          </p>
        </div>
      </div> */}
    </section>
  );
}

export default WhyOui;
