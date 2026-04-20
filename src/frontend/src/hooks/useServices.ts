import { createActor } from "@/backend";
import type { Service } from "@/types";
import { useActor } from "@caffeineai/core-infrastructure";
import { useQuery } from "@tanstack/react-query";

export function useServices() {
  const { actor, isFetching } = useActor(createActor);
  return useQuery<Service[]>({
    queryKey: ["services"],
    queryFn: async () => {
      if (!actor) return [];
      const result = await actor.getServices();
      return result as Service[];
    },
    enabled: !!actor && !isFetching,
    staleTime: 5 * 60 * 1000,
  });
}

export function useService(id: bigint | undefined) {
  const { actor, isFetching } = useActor(createActor);
  return useQuery<Service | null>({
    queryKey: ["service", id?.toString()],
    queryFn: async () => {
      if (!actor || id === undefined) return null;
      const services = await actor.getServices();
      return (services as Service[]).find((s) => s.id === id) ?? null;
    },
    enabled: !!actor && !isFetching && id !== undefined,
    staleTime: 5 * 60 * 1000,
  });
}
