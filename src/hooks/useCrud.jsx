import { useNavigate } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import assignErrors from "../utils/assignErrors";

export function useCrud({ service, entityName, redirectPath }) {
  const navigate = useNavigate();

  const getAll = useQuery({
    queryKey: [entityName],
    queryFn: service.getAll,
  });

  const create = useMutation({
    mutationFn: service.create,
    onSuccess: (res) => {
      toast.success(res.message);
    },
    onError: (error) => {
      console.log(error);
      toast.error(
        "Failed to create " + entityName + ": " + error.response.data.message
      );
    },
  });

  const getById = (id) =>
    useQuery({
      queryKey: [entityName, id],
      queryFn: () => service.getById(id),
      enabled: !!id,
    });

  const update = useMutation({
    mutationFn: ({ id, ...data }) => service.update(id, data),
    onSuccess: (res) => {
      toast.success(res.message);
      setTimeout(() => {
        navigate(redirectPath);
      }, 1000);
    },
    onError: (error) => {
      console.log(error);
      toast.error(
        "Failed to update " + entityName + ": " + error.response.data.message
      );
    },
  });

  const remove = useMutation({
    mutationFn: service.remove,
    onSuccess: (res) => {
      toast.success(res.message);
      setTimeout(() => {
        navigate(redirectPath);
      }, 1000);
    },
    onError: (error) => {
      console.log(error);
      toast.error(
        "Failed to delete " + entityName + ": " + error.response.data.message
      );
    },
  });

  assignErrors(create);
  assignErrors(update);
  assignErrors(remove);

  return { getAll, create, getById, update, remove };
}
