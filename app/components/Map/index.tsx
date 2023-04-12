/** @format */

import { Dispatch, SetStateAction, useCallback, useState } from "react";

import MapSVG from "/public/map.svg";
import styles from "./style.module.css";

interface Props {
  selectCity: Dispatch<SetStateAction<string>>;
  data: any;
  windowWidth: number;
}

export default function Map({ selectCity, data, windowWidth }: Props) {
  const [zoom, setZoom] = useState(1);

  const content = useCallback(() => {
    let svgClassName = null;
    if (data) svgClassName = styles.offset;
    return (
      <MapSVG
        className={[svgClassName, styles.mapSvg].join(" ")}
        onClick={(event: React.ChangeEvent<SVGElement>) => {
          if (event.target.ariaLabel) selectCity(event.target.ariaLabel);
        }}
      />
    );
  }, [data, selectCity]);

  const contentMobile = useCallback(() => {
    return (
      <div className={styles.mapMobile} style={{ transform: `scale(${zoom})` }}>
        {content()}
      </div>
    );
  }, [zoom, content]);

  const handleZoom = (z: string) => {
    if (z === "up") {
      setZoom(zoom + 0.3);
    }
    if (z === "down" && zoom !== 1) {
      setZoom(zoom - 0.3);
    }
  };

  return (
    <>
      {windowWidth < 720 ? (
        <div className={styles.mobileContainer}>
          <div className={styles.zoomBtn}>
            <span onClick={() => handleZoom("up")}>+</span>
            <span onClick={() => handleZoom("down")}>-</span>
          </div>
          {contentMobile()}
        </div>
      ) : (
        content()
      )}
    </>
  );
}
