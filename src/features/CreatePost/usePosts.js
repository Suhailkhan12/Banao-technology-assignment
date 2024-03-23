import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getPosts } from "../../services/apiPosts";
import { useSearchParams } from "react-router-dom";

function usePosts() {
  const [searchParams] = useSearchParams();

  // FILTER
  const filterValue = searchParams.get("topic");
  const filter =
    !filterValue || filterValue === "all"
      ? null
      : { field: "topic", value: filterValue };
  // { field: "totalPrice", value: 5000, method: "gte" };

  const {
    isLoading,
    data: posts,
    errors,
  } = useQuery({
    queryKey: ["posts", filter],
    queryFn: () => getPosts({ filter }),
  });

  return { isLoading, posts, errors };
}

export default usePosts;
