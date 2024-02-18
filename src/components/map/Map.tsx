import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
interface Props {
  popupText:string;
  center:{lat:number, lon:number};
  zoom?: number;
}
function Map({popupText,zoom, center:{lat, lon}}: Props) {
  return (
    <div>
      <MapContainer center={[lat, lon]} zoom={zoom} scrollWheelZoom={false} className="h-[400px] w-full">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[lat, lon]}>
          <Popup>
            <b>{popupText}</b>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default Map;
