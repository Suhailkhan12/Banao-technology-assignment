import "./singlepost.scss";

import Leftsidecard from "../Leftaside/Leftsidecard";
import { useSinglePost } from "./usesinglepost";
import useRelatedPost from "./useRelatedPost";

function SinglePost() {
  const {
    isLoading: singlepostLoading,
    // error: singlePostError,
    singlePost = {},
  } = useSinglePost();

  const {
    isLoading: relatedpostLoading,
    // error: relatedPostError,
    relatedPost,
  } = useRelatedPost();

  console.log(relatedPost);

  const { id, image, topic, title, description } = singlePost;

  if (singlepostLoading || relatedpostLoading) return null;

  return (
    <>
      <div className="postheader">
        <div className="postheader__imagecontainer">
          <img
            src={image}
            alt={id}
            className="postheader__imagecontainer--image"
          />
        </div>
        <div className="postheader__content">
          <span className="heading-2">{title}</span>
          <span className="heading-4">{topic}</span>
        </div>
      </div>
      <div className="singlepostcontent mb-toplg">
        <span className="singlepostcontent__typo heading-4">{description}</span>
      </div>

      <div className="relatedpost">
        <div className="relatedpost__title heading-2">Realted Post</div>
        <div className="relatedpost__content">
          {relatedPost.map((post) => (
            <Leftsidecard post={post} key={post.id} />
          ))}
        </div>
      </div>
    </>
  );
}

export default SinglePost;
