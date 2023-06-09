/** @format */

import "reset-css/reset.css";
import "./style/index.css";
import "./style/variables.css";

export const metadata = {
  title: "App meteo Matthieu",
  description: "Test technique Meteo France",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
