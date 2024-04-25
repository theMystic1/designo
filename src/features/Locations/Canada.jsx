import { useInview } from "../../hooks/useInview";
import { useLocationData } from "../../services/useLocationData";
import Headings from "../../ui/Headings";
import { BigFlex, SmallFlex } from "../AboutItems/AboutFlex";
import MapContainer from "./MapContainer";

function Canada() {
  const { ref, style } = useInview();
  const { canada } = useLocationData();

  const { isLoading, data } = canada;

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
      <BigFlex className=" bg-peach-200 bg-opacity-50 justify-center px-8 sm:px-20 lg:px-10 xl:px-56 py-4gap-10 ">
        <Headings className="text-peach-600 mb-10 text-center md:text-start ">
          Canada
        </Headings>
        <div className="flex flex-col md:flex-row gap-4 md:justify-between justify-center items-center">
          <ul className="flex flex-col  items-center md:items-start">
            {" "}
            <li className="font-bold"> Designo Central Office</li>
            <li>3886 Wellington Street</li>
            <li>Toronto, Ontario M9C 3J5</li>
          </ul>
          <ul className="flex flex-col  items-center md:items-start">
            {" "}
            <li className="font-bold">Contact</li>
            <li>P : +1 253-863-8967</li>
            <li>M : contact@designo.co</li>
          </ul>
        </div>
      </BigFlex>

      <SmallFlex
        type="location"
        // img="/assets/locations/desktop/image-map-canada.png"
      >
        <MapContainer position={coords} />
      </SmallFlex>
    </div>
  );
}

export default Canada;
