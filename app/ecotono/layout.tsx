import type { Metadata } from "next";
import "./ecotono.css";

export const metadata: Metadata = {
  title: "Ecotono Travel Co. — Donde los mundos se encuentran",
  description:
    "Asesoría de viajes curada, con precisión de campo. Diseñamos cada viaje en el punto exacto donde lo conocido se encuentra con lo inesperado.",
};

export default function EcotonoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
