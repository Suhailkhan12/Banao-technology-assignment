import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditCabin } from "../../services/apiCabins";
import { toast } from "react-hot-toast";

function useEditCabin() {
  const queryClient = useQueryClient();

  const { isLoading: isEditing, mutate: editCabin } = useMutation({
    mutationFn: ({ newCabinData, id }) => createEditCabin(newCabinData, id),
    onSuccess: () => {
      toast.success("cabin Succesfully Edited");
      queryClient.invalidateQueries({
        //Query key from where are we fetch data in this we fetch data in Cabin table
        queryKey: ["cabins"],
      });
    },
    OnError: (err) => toast.error(err.message),
  });

  return { isEditing, editCabin };
}

export default useEditCabin;
