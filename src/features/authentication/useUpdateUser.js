import { useMutation, useQueryClient } from "@tanstack/react-query";

import { toast } from "react-hot-toast";
import { updateCurrentUser } from "../../services/apiAuth";

function useUpdateUser() {
  const queryClient = useQueryClient();

  const { isLoading: isUpdating, mutate: updateUser } = useMutation({
    mutationFn: updateCurrentUser,
    onSuccess: () => {
      toast.success("User account succefully Updated");
      queryClient.invalidateQueries({
        //Query key from where are we fetch data in this we fetch data in Cabin table
        queryKey: ["user"],
      });
    },
    OnError: (err) => toast.error(err.message),
  });

  return { isUpdating, updateUser };
}

export default useUpdateUser;
