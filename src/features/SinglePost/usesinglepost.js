import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getSinglePost } from "../../services/apiPosts";
// import { getBooking } from "../../services/apiBookings";

export function useSinglePost() {
  const { postId } = useParams();

  const {
    isLoading,
    data: singlePost,
    error,
  } = useQuery({
    queryKey: ["posts", postId],
    queryFn: () => getSinglePost(postId),
    retry: false,
  });

  return { isLoading, error, singlePost };
}
