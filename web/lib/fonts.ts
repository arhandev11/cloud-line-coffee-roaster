import { Archivo, Lexend } from "next/font/google";

export const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-archivo",
});

export const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-lexend",
});
