import {React,  useEffect }  from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import Sidebar from "../components/Sidebar";
import { useMap } from "react-leaflet";
import { dataUMKM } from "../dataUMKM";
import L from "leaflet";
// FIX ICON LEAFLET
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

const createCircleIcon = (color) =>
  new L.DivIcon({
    html: `<div style="
      background:${color};
      width:16px;
      height:16px;
      border-radius:50%;
      border:3px solid white;
      box-shadow:0 0 6px rgba(0,0,0,.3);
    "></div>`,
    className: "",
    iconSize: [16, 16],
  });

const iconByKategori = {
  Jasa: createCircleIcon("#3b82f6"),
  Kuliner: createCircleIcon("#ef4444"),
  Perdagangan: createCircleIcon("#22c55e"),
};


export default function PetaUMKM() {
  return (
    <div className="p-4 sm:p-6">
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <MapContainer
          center={[-6.9932, 110.4203]}
          zoom={12}
          style={{ height: "75vh", width: "100%" }}
        >
          <TileLayer
            attribution="© OpenStreetMap contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {dataUMKM.map((umkm) => (
            <Marker
              key={umkm.id}
              position={[umkm.latitude, umkm.longitude]}
              icon={iconByKategori[umkm.kategori]}
            >
              <Popup>
                <strong>{umkm.nama}</strong>
                <br />
                Kecamatan: {umkm.kecamatan}
                <br />
                Kategori: {umkm.kategori}
                <br />
                Status: {umkm.status}
                <br />
                Tahun: {umkm.tahun}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
}
