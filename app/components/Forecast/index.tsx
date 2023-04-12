/** @format */
import { useState, Dispatch, SetStateAction } from "react";
import Image from "next/image";

import moment from "moment";
import "moment/locale/fr";

import styles from "./style.module.css";
import globalStyles from "../../global.module.css";

import IconDroplet from "/public/icons/droplet.svg";
import IconLocation from "/public/icons/location.svg";
import IconWind from "/public/icons/wind.svg";

import Nav from "../Nav";
import HourlyInfos from "../HourlyInfos";
import FollowingDays from "../FollowingDays";

interface Props {
  data: any;
  city: string;
  windowWidth: number;
  setData: Dispatch<SetStateAction<any>>;
}

export default function Forecast({ data, city, windowWidth, setData }: Props) {
  const [view, setView] = useState("today");

  return (
    <div className={styles.wrapper}>
      <Nav
        view={view}
        setView={setView}
        windowWidth={windowWidth}
        setData={setData}
      />
      {view === "today" ? (
        <>
          <div>
            <span className={globalStyles.title}>{city}</span>
            <div className={styles.content_date}>
              <span
                className={[globalStyles.text, globalStyles.text_medium].join(
                  " "
                )}
              >
                {moment().locale("fr").format("dddd")}&#160;
              </span>
              <span
                className={[globalStyles.text, globalStyles.text_medium].join(
                  " "
                )}
              >
                {moment().locale("fr").format("LL")}
              </span>
            </div>
            <div className={globalStyles.flexRow}>
              <span
                className={[
                  styles.content_mainInfos,
                  globalStyles.text,
                  globalStyles["w-33"],
                ].join(" ")}
              >
                <span className={globalStyles.text_large}>
                  {data.daily[0].temp.day.toFixed(0)}°
                </span>
                <span className={globalStyles.flexRow}>
                  <span
                    className={globalStyles.min}
                    style={{ marginRight: "6px" }}
                  >
                    {data.daily[0].temp.min.toFixed(0)}°
                  </span>
                  <span className={globalStyles.max}>
                    {data.daily[0].temp.max.toFixed(0)}°
                  </span>
                </span>
                <span>Ress. {data.daily[0].feels_like.day.toFixed(0)}°</span>
                <span>UV {data.daily[0].uvi.toFixed(0)}</span>
              </span>
              <div
                className={[globalStyles.flexCol, globalStyles["w-66"]].join(
                  " "
                )}
              >
                <Image
                  src={`https://openweathermap.org/img/wn/${data.daily[0].weather[0].icon}@2x.png`}
                  alt="weather icon"
                  width={100}
                  height={100}
                  quality={100}
                />
                <span
                  className={[
                    globalStyles.text,
                    globalStyles.text_medium,
                    globalStyles.center,
                  ].join(" ")}
                  style={{ transform: "translateY(-16px)", maxWidth: 120 }}
                >
                  {data.daily[0].weather[0].description}
                </span>
              </div>
            </div>
          </div>
          <div className={styles.content_windInfos}>
            <span
              className={[
                globalStyles.text,
                styles.content_windInfos_text,
              ].join(" ")}
            >
              <div className={styles.content_windInfos_picto}>
                <IconDroplet />
              </div>
              {data.daily[0].humidity}%
            </span>
            <span
              className={[
                globalStyles.text,
                styles.content_windInfos_text,
              ].join(" ")}
            >
              <div className={styles.content_windInfos_picto}>
                <IconWind />
              </div>
              {data.daily[0].wind_speed.toFixed(0)} km/h
              <div
                className={styles.content_windInfos_picto}
                style={{
                  transform: `rotate(${data.daily[0].wind_deg - 45}deg)`,
                }}
              >
                <IconLocation />
              </div>
            </span>
          </div>
          <HourlyInfos
            data={data.hourly.filter((el: any, i: number) => i < 12)}
          />
        </>
      ) : (
        <FollowingDays
          data={data.daily.filter((el: any, i: number) => i < 3)}
        />
      )}
    </div>
  );
}
