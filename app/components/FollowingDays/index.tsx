/** @format */

import moment from "moment";
import "moment/locale/fr";

import Image from "next/image";
import styles from "./style.module.css";
import globalStyles from "../../global.module.css";

import IconDroplet from "/public/icons/droplet.svg";

import { Key } from "react";

interface Props {
  data: any;
}

export default function FollowingDays({ data }: Props) {
  return (
    <div className={styles.container}>
      {data.map((day: any, i: Key) => {
        return (
          <div key={i} className={styles.forcastRow}>
            <div className={globalStyles["w-50"]}>
              <p className={[globalStyles.span, globalStyles.bold].join(" ")}>
                {moment(day.dt * 1000)
                  .locale("fr")
                  .format("dddd")}
              </p>
              <span
                className={[globalStyles.span, globalStyles.text_small].join(
                  " "
                )}
              >
                {day.weather[0].description}
              </span>
            </div>
            <div
              className={[globalStyles.flexRow, globalStyles["w-50"]].join(" ")}
            >
              <div
                className={[globalStyles["w-33"], globalStyles.flexStart].join(
                  " "
                )}
              >
                <div className={styles.content_windInfos_picto}>
                  <IconDroplet />
                </div>
                <span
                  className={[
                    globalStyles.span,
                    styles.center,
                    globalStyles.text_small,
                  ].join(" ")}
                >
                  {day.humidity}%
                </span>
              </div>
              <div
                className={[globalStyles["w-33"], globalStyles.flexCenter].join(
                  " "
                )}
              >
                <Image
                  src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                  alt="weather icon"
                  width={50}
                  height={50}
                  quality={100}
                />
              </div>
              <div
                className={[globalStyles["w-33"], globalStyles.flexEnd].join(
                  " "
                )}
              >
                <span
                  className={[
                    globalStyles.span,
                    styles.center,
                    globalStyles.max,
                  ].join(" ")}
                >
                  {day.temp.max.toFixed(0)}°
                </span>
                <span
                  className={[
                    globalStyles.span,
                    styles.center,
                    globalStyles.min,
                  ].join(" ")}
                >
                  {day.temp.min.toFixed(0)}°
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
