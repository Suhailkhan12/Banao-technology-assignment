import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { getrelatedPost } from "../../services/apiPosts";

function useRelatedPost() {
  const [param] = useSearchParams();
  const topic = param.get("topic");

  const {
    isLoading,
    data: relatedPost,
    error,
  } = useQuery({
    queryKey: ["posts", topic],
    queryFn: () => getrelatedPost(topic),
    retry: false,
  });

  return { isLoading, error, relatedPost };
}

export default useRelatedPost;
