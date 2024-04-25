import { useInview } from "../../hooks/useInview";
import { useLocationData } from "../../services/useLocationData";
import Headings from "../../ui/Headings";
import { BigFlex, SmallFlex } from "../AboutItems/AboutFlex";
import MapContainer from "./MapContainer";

function Uk() {
  const { ref, style } = useInview();

  const { uk } = useLocationData();

  const { isLoading, data } = uk;

  if (isLoading) return;

  const { location } = data[0]?.geometry || {};
  const { lat, lng } = location;

  const coords = [lat, lng];

  return (
    <div
      className="flex flex-col-reverse lg:flex-row sm:gap-8"
      ref={ref}
      style={style}
    >
      <BigFlex
        className=" bg-peach-200 bg-opacity-50 justify-center px-8 sm:px-20 lg:px-10 xl:px-56 py-4gap-10 "
        type="location"
      >
        <Headings className="text-peach-600 text-center md:text-start mb-10">
          {" "}
          United Kingdom
        </Headings>
        <div className="flex flex-col md:flex-row gap-4 md:justify-between justify-center items-center">
          <ul className="flex flex-col  items-center md:items-start">
            <li className="font-bold"> Designo Central Office</li>
            <li> 13 Colorado Way</li>
            <li> Rhyd-y-fro SA8 9GA</li>
          </ul>
          <ul className="flex flex-col  items-center md:items-start">
            <li className="font-bold">Contact</li>
            <li> P : 078 3115 1400</li>
            <li> M : contact@designo.uk</li>
          </ul>
        </div>
      </BigFlex>
      <SmallFlex
        type="location"
        // img="/assets/locations/desktop/image-map-united-kingdom.png"
      >
        <MapContainer position={coords} />
      </SmallFlex>
    </div>
  );
}

export default Uk;
