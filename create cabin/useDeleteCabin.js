import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCabin as deleteCabinApi } from "../../services/apiCabins";
import { toast } from "react-hot-toast";

export function useDeleteCabin() {
  // hooks for assessing query client in App.js for reload data to show OnSuccess
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteCabin } = useMutation({
    mutationFn: (id) => deleteCabinApi(id),
    onSuccess: () => {
      toast.success("cabin Succesfully deleted");
      queryClient.invalidateQueries({
        //Query key from where are we fetch data in this we fetch data in Cabin table
        queryKey: ["cabins"],
      });
    },
    OnError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteCabin };
}
