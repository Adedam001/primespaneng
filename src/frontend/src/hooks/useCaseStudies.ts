import { createActor } from "@/backend";
import type { CaseStudy, ContactFormData, ContactSubmission } from "@/types";
import { useActor } from "@caffeineai/core-infrastructure";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export function useCaseStudies() {
  const { actor, isFetching } = useActor(createActor);
  return useQuery<CaseStudy[]>({
    queryKey: ["caseStudies"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getCaseStudies() as Promise<CaseStudy[]>;
    },
    enabled: !!actor && !isFetching,
    staleTime: 5 * 60 * 1000,
  });
}

export function useCaseStudy(id: bigint | undefined) {
  const { actor, isFetching } = useActor(createActor);
  return useQuery<CaseStudy | null>({
    queryKey: ["caseStudy", id?.toString()],
    queryFn: async () => {
      if (!actor || id === undefined) return null;
      return actor.getCaseStudy(id) as Promise<CaseStudy | null>;
    },
    enabled: !!actor && !isFetching && id !== undefined,
    staleTime: 5 * 60 * 1000,
  });
}

export function useFeaturedCaseStudies() {
  const { actor, isFetching } = useActor(createActor);
  return useQuery<CaseStudy[]>({
    queryKey: ["featuredCaseStudies"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getFeaturedCaseStudies() as Promise<CaseStudy[]>;
    },
    enabled: !!actor && !isFetching,
    staleTime: 5 * 60 * 1000,
  });
}

export function useSubmitContact() {
  const { actor } = useActor(createActor);
  const queryClient = useQueryClient();
  return useMutation<ContactSubmission, Error, ContactFormData>({
    mutationFn: async (data: ContactFormData) => {
      if (!actor) throw new Error("Actor not available");
      return actor.submitContact(
        data.name,
        data.company,
        data.email,
        data.projectScope,
      ) as Promise<ContactSubmission>;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["contactSubmissions"] });
    },
  });
}
