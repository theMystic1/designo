import { MapContainer as Map, TileLayer, Marker, Popup } from "react-leaflet";

function MapContainer({ position }) {
  // const position = [51.505, -0.9];

  return (
    <Map center={position} zoom={13} scrollWheelZoom={true} className="h-full">
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup className="text-xl">Our office is right here</Popup>
      </Marker>
    </Map>
  );
}

export default MapContainer;
