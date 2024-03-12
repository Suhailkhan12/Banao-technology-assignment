import Spinner from "../../ui/Spinner";
import usePosts from "../CreatePost/usePosts";
import Leftsidecard from "./Leftsidecard";
import "./leftaside.scss";

function Leftaside() {
  const { isLoading, posts, errors } = usePosts();

  if (isLoading) return <Spinner />;

  return (
    <aside className="left">
      {posts.map((post) => (
        <Leftsidecard post={post} key={post.id} />
      ))}
    </aside>
  );
}

export default Leftaside;
