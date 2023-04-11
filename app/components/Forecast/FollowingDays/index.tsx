/** @format */

import moment from "moment";
import "moment/locale/fr";

import Image from "next/image";
import styles from "./style.module.css";

import IconDroplet from "/public/icons/droplet.svg";

import { Key } from "react";

interface Props {
  parentStyles: any;
  data: any;
}

export default function FollowingDays({ parentStyles, data }: Props) {
  return (
    <div className={styles.container}>
      {data.map((day: any, i: Key) => {
        return (
          <div key={i} className={styles.forcastRow}>
            <div className={parentStyles["w-50"]}>
              <p className={[parentStyles.span, parentStyles.bold].join(" ")}>
                {moment(day.dt * 1000)
                  .locale("fr")
                  .format("dddd")}
              </p>
              <span
                className={[parentStyles.span, parentStyles.text_small].join(
                  " "
                )}
              >
                {day.weather[0].description}
              </span>
            </div>
            <div
              className={[parentStyles.flexRow, parentStyles["w-50"]].join(" ")}
            >
              <div className={[parentStyles["w-33"], styles.left].join(" ")}>
                <div className={styles.content_windInfos_picto}>
                  <IconDroplet />
                </div>
                <span
                  className={[
                    parentStyles.span,
                    styles.center,
                    parentStyles.text_small,
                  ].join(" ")}
                >
                  {day.humidity}%
                </span>
              </div>
              <div className={[parentStyles["w-33"], styles.center].join(" ")}>
                <Image
                  src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                  alt="weather icon"
                  width={50}
                  height={50}
                  quality={100}
                />
              </div>
              <div className={[parentStyles["w-33"], styles.right].join(" ")}>
                <span
                  className={[
                    parentStyles.span,
                    styles.center,
                    parentStyles.max,
                  ].join(" ")}
                >
                  {day.temp.max.toFixed(0)}°
                </span>
                <span
                  className={[
                    parentStyles.span,
                    styles.center,
                    parentStyles.min,
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
