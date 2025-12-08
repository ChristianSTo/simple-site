import "../blocks/join.css";

function Join() {
  return (
    <section className="join">
      <h2 className="join__h2">
        Be the First to Try <span className="join__span">OUInvest</span>.
      </h2>
      <div className="join__container">
        <div className="join__info">
          <p className="join__item">Access to the prototype</p>
          <p className="join__item">Access to the prototype</p>
          <p className="join__item">Access to the prototype</p>
          <p className="join__item">Access to the prototype</p>
        </div>
        <div className="join__sign">
          <p className="join__subtext">Join The Movement — Get Early Access</p>
          <button className="join__button">Sign Up</button>
        </div>
      </div>
    </section>
  );
}

export default Join;
