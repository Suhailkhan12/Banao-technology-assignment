import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { createPost } from "../../services/apiPosts";

function useCreatePost() {
  const queryClient = useQueryClient();

  const { isLoading: isCreating, mutate: CreatePostNew } = useMutation({
    mutationFn: (newPost) => createPost(newPost),
    onSuccess: () => {
      toast.success("Post Succesfully created");
      queryClient.invalidateQueries({
        //Query key from where are we fetch data in this we fetch data in Cabin table
        queryKey: ["posts"],
      });
    },
    OnError: (err) => toast.error(err.message),
  });

  return { isCreating, CreatePostNew };
}

export default useCreatePost;
