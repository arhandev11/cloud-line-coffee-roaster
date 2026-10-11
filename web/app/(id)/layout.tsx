import { archivo, lexend } from "@/lib/fonts";
import "../globals.css";

export default function IndonesianLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${archivo.variable} ${lexend.variable}`}>
      <body>{children}</body>
    </html>
  );
}
