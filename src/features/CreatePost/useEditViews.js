import { useMutation, useQueryClient } from "@tanstack/react-query";
// import { createEditCabin } from "../../services/apiCabins";
import { updateView } from "../../services/apiPosts";
import { toast } from "react-hot-toast";

function useEditViews() {
  const queryClient = useQueryClient();

  const { isLoading: isUpdating, mutate: ViewInc } = useMutation({
    mutationFn: ({ id, view }) => updateView(id, view),
    onSuccess: () => {
      queryClient.invalidateQueries({
        //Query key from where are we fetch data in this we fetch data in Cabin table
        queryKey: ["posts"],
      });
    },
    OnError: (err) => toast.error(err.message),
  });

  return { isUpdating, ViewInc };
}

export default useEditViews;
