import Australia from "../features/Locations/Australia";
import Canada from "../features/Locations/Canada";
import Uk from "../features/Locations/Uk";
import { useLocationData } from "../services/useLocationData";
// import { useLocationApi } from "../services/useLocationApi";

function Locations() {
  // const { isLoading } = useLocationApi("");
  const { australia, canada, uk } = useLocationData();
  const { isLoading: isLoadingAust } = australia;
  const { isLoading: isLoadingCanada } = canada;
  const { isLoading: isLoadingUk } = uk;

  const isLoadingData = isLoadingAust && isLoadingCanada && isLoadingUk;
  if (isLoadingData) return <p>Loading</p>;
  return (
    <div>
      <Canada />
      <Australia />
      <Uk />
    </div>
  );
}

export default Locations;
