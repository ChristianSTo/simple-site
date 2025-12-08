import "../blocks/community.css";
import communityTeam from "../assets/images/community-team.jpg";
import calendar from "../assets/images/calendar.svg";
import users from "../assets/images/usersTwo.svg";
function Community() {
  return (
    <section className="community">
      <h2 className="community__h2">
        OUInvest Social Hour: Women Empowering Women
      </h2>
      <img
        className="community__image"
        src={communityTeam}
        alt="community of women united together"
      ></img>
      <p className="community__paragraph">
        A monthly event series for Black women who want to take control of their
        money, connect with community, and grow generational wealth — together.
        Because investing should celebrate us, not exclude us.
      </p>
      <div className="community__info">
        <p className="community__info-item">
          <img
            className="community__icon"
            src={calendar}
            alt="calendar icon"
          ></img>
          Last Thursday monthly
        </p>
        <p className="community__info-item">
          <img
            className="community__icon"
            src={users}
            alt="2 people icon"
          ></img>
          Last Virtual & In-person options
        </p>
      </div>
      <button className="community__button"> Sign up for next meetup</button>
    </section>
  );
}

export default Community;
