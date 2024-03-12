import "./leftaside.scss";
// import Image from "../../assets/post.png";
import Eye from "../../assets/visibility.svg";
import Share from "../../assets/Vectorthree.svg";
import { useState } from "react";
import useEditViews from "../CreatePost/useEditViews";

function Leftsidecard({ post }) {
  const { id, title, topic, description, image, profiles, views } = post;
  const { avatar, full_name, fullname, avatar_url } = profiles;

  const [view, setView] = useState(views);

  const { ViewInc } = useEditViews();

  function updatingView() {
    // console.log(id);
    setView((v) => v + 1);
    // console.log(view);
    ViewInc({ id, view });
  }

  return (
    <div className="postcontent">
      <div className="postcontent__image">
        <img src={image} alt="none" className="postcontent__image--photo" />
      </div>

      <div className="paddingsetup">
        <div className="postcontent__topic">{topic}</div>
        <div className="postcontent__title">
          <span className="postcontent__title--t">{title}</span>
          <span>...</span>
        </div>
        <div className="postcontent__desc">
          <span>{description.slice(0, 70)}...</span>
        </div>
        <div className="postcontent__user">
          <div className="postcontent__user--info">
            <div className="postcontent__user--image">
              <img
                className="postcontent__user--photo"
                src={avatar || avatar_url}
                alt=""
              />
            </div>
            <div className="postcontent__user--name">
              {full_name || fullname}
            </div>
          </div>
          <div className="postcontent__user--share">
            <div className="postcontent__user--views" onClick={updatingView}>
              <img src={Eye} alt="eye" />
              <spna>{views} views</spna>
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
