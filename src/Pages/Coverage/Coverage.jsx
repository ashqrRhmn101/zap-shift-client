import React, { useRef } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useLoaderData } from "react-router";

const Coverage = () => {
  //   const position = [23.6850, 90.3563];
  const position = [23.777176, 90.399452];
  const serviceCenters = useLoaderData();
  // console.log(serviceCenters);
  const mapRef = useRef(null);

  const handleSearch = (e) => {
    e.preventDefault();
    const location = e.target.location.value;
    const district = serviceCenters.find((c) =>
      c.district.toLowerCase().includes(location.toLowerCase())
    );
    if (district) {
      // const coord = [district.latitude, district.longitude, district, district.city]
      const coord = [district.latitude, district.longitude];
      console.log(coord);
      mapRef.current.flyTo(coord, 12);
    }
  };

  return (
    <div className="bg-white rounded-2xl mt-10 mb-10 pt-7 pb-10 px-14 h-auto w-full container">
      <div>
        <h1 className="text-3xl font-bold text-secondary mb-5">
          We are available in 64 districts
        </h1>
        <div className="border-b-1 border-gray-300 border-dashed pb-5">
          {/* Search */}
          <form onSubmit={handleSearch}>
            <label className="input">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
              <input
                type="search"
                className="grow"
                name="location"
                placeholder="Search"
              />
            </label>
          </form>
        </div>

        <h2 className="text-2xl font-bold text-secondary mt-5">
          We deliver almost all over Bangladesh
        </h2>
      </div>

      <MapContainer
        center={position}
        zoom={7}
        scrollWheelZoom={false}
        className="h-[600px] py-10 mt-10 mx-auto"
        ref={mapRef}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {serviceCenters.map((center) => (
          <Marker position={[center.latitude, center.longitude]}>
            <Popup>
              <strong>{center.district}</strong> <br /> Service Area:{" "}
              <strong>{center.covered_area.join(", ")}</strong>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Coverage;
