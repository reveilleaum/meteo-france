/** @format */

const API_URL = process.env.OPENWEATHERMAP_API_URL;
const APP_ID = process.env.OPENWEATHERMAP_API_KEY;

export const getGeo = async (city: string) => {
  const response = await fetch(
    `${API_URL}/geo/1.0/direct?q=${city}&appid=${APP_ID}`,
    { method: "GET" }
  );
  return response.json();
};

export const getForecast = async (lat: number, lon: number) => {
  const response = await fetch(
    `${API_URL}/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${APP_ID}`,
    { method: "GET" }
  );
  return response.json();
};
