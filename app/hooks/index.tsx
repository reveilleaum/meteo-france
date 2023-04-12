/** @format */

import { useEffect, useState } from "react";

export const useWindowSize = () => {
  const isSSR = !process.browser;
  const [windowSize, setWindowSize] = useState({
    windowWidth: isSSR ? 1200 : window.innerWidth,
    windowHeight: isSSR ? 800 : window.innerHeight,
  });

  const changeWindowSize = () => {
    setWindowSize({
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", changeWindowSize);

    return () => {
      window.removeEventListener("resize", changeWindowSize);
    };
  }, []);

  return windowSize;
};
