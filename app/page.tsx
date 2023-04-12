/** @format */

"use client";

import { useEffect, useState } from "react";
import { getGeo, getForecast } from "./api/openweathermap";

import Map from "./components/Map";
import Forecast from "./components/Forecast";

import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ subsets: ["latin"] });

export default function Home() {
  const [forecastData, setForecastData] = useState(null);
  const [city, setCity] = useState("");
  const [windowWidth, setWindowWidth] = useState(0);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (city) {
      getGeo(city).then((res) => {
        const lat = res[0].lat;
        const lon = res[0].lon;
        getForecast(lat, lon).then((res) => {
          setForecastData(res);
        });
      });
    }
  }, [city]);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    setTimeout(() => {
      setDisplay(1);
    }, 200);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <main className={montserrat.className}>
      {display ? (
        <>
          {windowWidth <= 1024 && !forecastData && (
            <h1>
              Zoomez et cliquez sur une ville pour afficher les prévisions
            </h1>
          )}
          {((windowWidth <= 1024 && !forecastData) || windowWidth > 1024) && (
            <Map
              selectCity={setCity}
              data={forecastData}
              windowWidth={windowWidth}
            />
          )}
          {forecastData && (
            <Forecast
              data={forecastData}
              city={city}
              windowWidth={windowWidth}
              setData={setForecastData}
            />
          )}
        </>
      ) : null}
    </main>
  );
}
