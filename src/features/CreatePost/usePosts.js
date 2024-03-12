import { useQuery } from "@tanstack/react-query";
import { getPosts } from "../../services/apiPosts";

function usePosts() {
  const {
    isLoading,
    data: posts,
    errors,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });

  return { isLoading, posts, errors };
}

export default usePosts;
