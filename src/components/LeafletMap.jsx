/* eslint-disable react/prop-types */
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

function LeafletMap({ longitude, latitude }) {
  return (
    <div className="mt-5 ">
      <div className="w-full h-40">
        <MapContainer center={[latitude, longitude]} zoom={9} style={{ height: '100%', width: '100%', zIndex: 0 }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[latitude, longitude]}>
            <Popup>A sample marker in Leaflet!</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
}

export default LeafletMap;
