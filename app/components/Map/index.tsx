/** @format */

import { Dispatch, SetStateAction, useMemo, useState } from "react";

import MapSVG from "/public/map.svg";
import "./style.css";

interface Props {
  selectCity: Dispatch<SetStateAction<string>>;
  data: any;
  windowWidth: number;
}

export default function Map({ selectCity, data, windowWidth }: Props) {
  const [zoom, setZoom] = useState(1);

  const content = useMemo(() => {
    let svgClassName = "";
    if (data) svgClassName += "offset";
    return (
      <MapSVG
        id="map-svg"
        className={svgClassName}
        onClick={(event: React.ChangeEvent<SVGElement>) => {
          if (event.target.ariaLabel) selectCity(event.target.ariaLabel);
        }}
      />
    );
  }, [data, selectCity]);

  const contentMobile = useMemo(() => {
    return (
      <div className="map-mobile" style={{ transform: `scale(${zoom})` }}>
        {content}
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
        <div className="mobile-container">
          <div className="zoom-btn">
            <span onClick={() => handleZoom("up")}>+</span>
            <span onClick={() => handleZoom("down")}>-</span>
          </div>
          {contentMobile}
        </div>
      ) : (
        content
      )}
    </>
  );
}
