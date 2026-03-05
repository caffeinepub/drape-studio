import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useActor } from "./useActor";

export function useSubmitInquiry() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      name,
      phone,
      location,
      requirement,
    }: {
      name: string;
      phone: string;
      location: string;
      requirement: string;
    }) => {
      if (!actor) throw new Error("Backend not available");
      return actor.submitInquiry(name, phone, location, requirement);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["inquiries"] });
    },
  });
}
