/** @format */

import { getGeo, getForecast } from "../../api/openweathermap";
import MapSVG from "/public/map.svg";
import "./style.css";

export default function Map() {
  const selectCity = (city: string) => {
    getGeo(city).then((res) => {
      const lat = res[0].lat;
      const lon = res[0].lon;
      getForecast(lat, lon).then((res) => {
        console.log(res);
      });
    });
  };

  return (
    <MapSVG
      id="map-svg"
      onClick={(event: React.ChangeEvent<SVGElement>) => {
        if (event.target.ariaLabel) selectCity(event.target.ariaLabel);
      }}
    />
  );
}
