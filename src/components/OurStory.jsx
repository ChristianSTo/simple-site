import "../blocks/ourstory.css";
import founderPresent from "../assets/images/founder-presentation.jpg";
function OurStory() {
  return (
    <section className="story">
      <div className="sotry__text">
        <h1 className="story__h1">Our Why: The Missed Microsoft Moment</h1>
        <p className="story__paragraph">
          Back in 1993, my dad dreamed of opening his own store. He worked hard,
          saved every dollar — and passed up a chance to invest in Microsoft.
          Not because he didn't believe in the future, but because no one ever
          taught him how to invest. No one explained the market, risk, or what
          "buy and hold" meant. That $1,000 he didn't invest could've changed
          everything — but instead, it sparked something bigger. OUInvest was
          born from that gap — to make wealth-building knowledge accessible to
          everyone. So the next dream — whether it's a business, a home, or
          freedom — actually gets funded.
        </p>
      </div>
      <img
        className="story__image"
        src={founderPresent}
        alt="Our founder, Bridge, presenting her story"
      ></img>
    </section>
  );
}

export default OurStory;
