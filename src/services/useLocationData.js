import { useLocationApi } from "./useLocationApi";

export function useLocationData() {
  const addresses = [
    "19 Balonne Street New South Wales 2443",
    "3886 Wellington Street Toronto, Ontario M9C 3J5",
    " 13 Colorado Way Rhyd-y-fro SA8 9GA",
  ];
  const result = useLocationApi(addresses);

  const locationData = result.map((res) => ({
    isLoading: res.isPending,
    data: res.data,
  }));
  const [australia, canada, uk] = locationData;

  return {
    australia,
    canada,
    uk,
  };
}
