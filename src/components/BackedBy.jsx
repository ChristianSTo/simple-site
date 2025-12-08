import "../blocks/backedBy.css";
import acceleratorOne from "../assets/images/accelerator1.png";
import acceleratorTwo from "../assets/images/accelerator2.png";
import acceleratorThree from "../assets/images/accelerator3.png";
import partnerOne from "../assets/images/partner1.png";
import partnerTwo from "../assets/images/partner2.png";
import partnerThree from "../assets/images/partner3.png";

function BackedBy() {
  return (
    <section className="backed">
      <h2 className="backed__h2">Backed by Industry Leaders.</h2>
      <p className="backed__paragraph">
        Proud participants of leading accelerator programs and trusted by
        industry partners.
      </p>
      <div className="backed__participants">
        <p className="backed__participant-type">
          <img className="backed__icon" src="" alt=""></img>
          Accelerators
        </p>
        <div className="backed__images">
          <img
            className="backed__participant-image"
            src={acceleratorOne}
            alt=""
          ></img>
          <img
            className="backed__participant-image"
            src={acceleratorTwo}
            alt=""
          ></img>
          <img
            className="backed__participant-image"
            src={acceleratorThree}
            alt=""
          ></img>
        </div>
        <p className="backed__participant-type">
          <img className="backed__icon" src="" alt=""></img>
          Partners
        </p>
        <div className="backed__images">
          <img
            className="backed__participant-image"
            src={partnerOne}
            alt=""
          ></img>
          <img
            className="backed__participant-image"
            src={partnerTwo}
            alt=""
          ></img>
          <img
            className="backed__participant-image"
            src={partnerThree}
            alt=""
          ></img>
        </div>
      </div>
    </section>
  );
}

export default BackedBy;
