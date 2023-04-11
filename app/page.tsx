/** @format */

"use client";

import { Inter } from "next/font/google";
import styles from "./global.module.css";

import Map from "./components/Map";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={inter.className}>Hello !</h1>
      <Map />
    </main>
  );
}
