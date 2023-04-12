/** @format */
import Image from "next/image";

import moment from "moment";
import "moment/locale/fr";

import styles from "./style.module.css";
import globalStyles from "../../global.module.css";

import Chart from "../Chart";
import { Key } from "react";

interface Props {
  data: any;
}

export default function HourlyInfos({ data }: Props) {
  return (
    <div className={styles.content_hourlyInfos}>
      <Chart hourly={data} />
      <div className={styles.content_hourlyInfos_items}>
        {data.map((hour: any, i: Key) => {
          return (
            <div key={i} className={styles.content_hourlyInfos_item}>
              <span className={globalStyles.span}>{hour.temp.toFixed(0)}°</span>
              <Image
                src={`https://openweathermap.org/img/wn/${hour.weather[0].icon}@2x.png`}
                alt="weather icon"
                width={50}
                height={50}
                quality={100}
              />
              <span className={globalStyles.span}>
                {moment(hour.dt * 1000).format("HH:mm")}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
