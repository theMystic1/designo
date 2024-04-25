import { useInview } from "../../hooks/useInview";
import { useLocationData } from "../../services/useLocationData";
import Headings from "../../ui/Headings";
import { BigFlex, SmallFlex } from "../AboutItems/AboutFlex";
import MapContainer from "./MapContainer";

function Australia() {
  const { ref, style } = useInview();
  const { australia } = useLocationData();

  const { isLoading, data } = australia;

  if (isLoading) return;

  const { location } = data[0]?.geometry || {};
  const { lat, lng } = location;

  const coords = [lat, lng];

  return (
    <div
      className="flex flex-col-reverse lg:flex-row-reverse sm:gap-8 my-20"
      ref={ref}
      style={style}
    >
      <BigFlex className=" bg-peach-200 bg-opacity-50 justify-center px-8 sm:px-20 lg:px-10 xl:px-56 py-4gap-10 ">
        <Headings className="text-peach-600 mb-10 text-center md:text-start ">
          Australia
        </Headings>
        <div className="flex flex-col md:flex-row gap-4 md:justify-between justify-center items-center">
          <ul className="flex flex-col  items-center md:items-start">
            <li className="font-bold"> Designo AU Office</li>
            <li> 19 Balonne Street</li>
            <li> New South Wales 2443</li>
          </ul>
          <ul className="flex flex-col  items-center md:items-start">
            <li className="font-bold">Contact</li>
            <li> P : (02) 6720 9092 </li>
            <li> M : contact@designo.au</li>
          </ul>
        </div>
      </BigFlex>

      <SmallFlex type="location">
        {/* Pass coordinates as an array */}
        <MapContainer position={coords} />
      </SmallFlex>
    </div>
  );
}

export default Australia;
