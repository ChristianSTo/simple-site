import "../blocks/join.css";

function Join() {
  return (
    <section className="join">
      <h2 className="join__h2">
        Be the First to Try <span className="join__span">O</span>UInvest.
      </h2>
      <div className="join__container">
        <div className="join__info">
          <p className="join__item">Access to the prototype</p>
          <p className="join__item">Behind-the-scenes updates</p>
          <p className="join__item">A private feedback group</p>
          <p className="join__item">
            Influencer cred for shaping a mission-led product
          </p>
        </div>
        <div className="join__sign">
          <p className="join__subtext">Join The Movement — Get Early Access</p>
          <button className="join__button">Sign Up</button>
        </div>
      </div>
      <a
        className="join__video-link"
        href="https://www.youtube.com/watch?v=ywvjcUO8MUk&t=2s"
        target="_blank"
      >
        Watch a Demo ➔
      </a>
      <div className="join__movement">
        <div className="join__text">
          <h2 className="join__h2">Join the Movement.</h2>
          <p className="join__paragraph">
            Whether you want to invest in our mission or support our community,
            there's a way for you to make an impact.
          </p>
        </div>
        <div className="join__options">
          <div className="join__option">
            <img className="join__image" src="" alt=""></img>
            <p className="join__subheading">Investor Interest</p>
            <p className="join__paragraph">
              Interested in investing in OUInvest or exploring partnership
              opportunities? Let's connect and build the future of wealth equity
              together.
            </p>
            <button className="join__button">Express Interest</button>
          </div>
          <div className="join__option">
            <img className="join__image" src="" alt=""></img>
            <p className="join__subheading">Make a Donation</p>
            <p className="join__paragraph">
              Support our mission to empower underrepresented investors. Every
              dollar helps us expand access and create financial education.
            </p>
            <button className="join__button">Support Us</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Join;
