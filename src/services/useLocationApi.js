import { useQueries } from "@tanstack/react-query";
import { fetchLocation } from "./fetchLocation";

export function useLocationApi(addressesArray) {
  const result = useQueries({
    queries: addressesArray.map((address) => {
      return {
        queryKey: ["location", address],
        queryFn: () => fetchLocation(address),
      };
    }),
  });

  return result;
}
