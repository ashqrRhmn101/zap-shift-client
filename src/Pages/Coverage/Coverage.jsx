import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useLoaderData } from "react-router";

const Coverage = () => {
//   const position = [23.6850, 90.3563];
  const position = [23.777176, 90.399452];
  const serviceCenters = useLoaderData();
  console.log(serviceCenters)

  return (
    <div className="bg-white rounded-2xl mt-10 mb-10 pt-7 px-14 h-[700px] w-full container">
        <div>
            <h1 className="text-3xl font-bold text-secondary">We are available in 64 districts</h1>
            <div className="border-b-2 border-dashed">
                <input type="search" name="" id="" />
            </div>
        </div>
      <MapContainer
        center={position}
        zoom={7}
        scrollWheelZoom={false}
        className="h-[500px] py-10 mt-10 mx-auto"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A petty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
      ,
    </div>
  );
};

export default Coverage;
