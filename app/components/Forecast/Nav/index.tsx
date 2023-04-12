/** @format */

import { Dispatch, SetStateAction } from "react";
import styles from "./style.module.css";
import Cross from "/public/icons/cross.svg";

interface Props {
  view: string;
  setView: Dispatch<SetStateAction<string>>;
  windowWidth: number;
  setData: Dispatch<SetStateAction<any>>;
}

export default function Nav({ view, setView, windowWidth, setData }: Props) {
  const itemClass = (val: string) => {
    if (view === val) return [styles.item, styles.itemActive].join(" ");
    return styles.item;
  };

  return (
    <>
      <nav className={styles.nav}>
        {windowWidth <= 1024 && (
          <div className={styles.closer}>
            <Cross
              onClick={() => {
                setData(null);
              }}
            />
          </div>
        )}
        <span className={itemClass("today")} onClick={() => setView("today")}>
          Aujourd&apos;hui
        </span>
        <span
          className={itemClass("nextDays")}
          onClick={() => setView("nextDays")}
        >
          3 jours
        </span>
      </nav>
    </>
  );
}
