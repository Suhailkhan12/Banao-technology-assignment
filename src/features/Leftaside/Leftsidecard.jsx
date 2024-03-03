import "./leftaside.scss";
import Image from "../../assets/post.png";
import Eye from "../../assets/visibility.svg";
import Share from "../../assets/Vectorthree.svg";

function Leftsidecard() {
  return (
    <div className="postcontent">
      <div className="postcontent__image">
        <img src={Image} alt="none" className="postcontent__image--photo" />
      </div>

      <div className="paddingsetup">
        <div className="postcontent__topic">✍️ Article</div>
        <div className="postcontent__title">
          <span className="postcontent__title--t">
            What if famous brands had regular fonts? Meet RegulaBrands!
          </span>
          <span>...</span>
        </div>
        <div className="postcontent__desc">
          <span>
            I’ve worked in UX for the better part of a decade. From now on, I
            plan to rei…
          </span>
        </div>
        <div className="postcontent__user">
          <div className="postcontent__user--info">
            <div className="postcontent__user--image">
              <img
                className="postcontent__user--photo"
                src="https://i.ibb.co/cNs5QNs/IMG-20170514-WA0003.jpg"
                alt=""
              />
            </div>
            <div className="postcontent__user--name">Siddarth</div>
          </div>
          <div className="postcontent__user--share">
            <div className="postcontent__user--views">
              <img src={Eye} alt="eye" />
              <spna>1.4 k views</spna>
            </div>
            <div className="postcontent__user--sharebutton">
              <img src={Share} alt="share" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Leftsidecard;
