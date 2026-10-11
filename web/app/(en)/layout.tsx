import { archivo, lexend } from "@/lib/fonts";
import "../globals.css";

export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${archivo.variable} ${lexend.variable}`}>
      <body>{children}</body>
    </html>
  );
}
