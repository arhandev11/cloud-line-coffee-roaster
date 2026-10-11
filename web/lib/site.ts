// Facts that don't change between languages: where the bar is, when it's open,
// where people can buy. Taken from the A-board, event posters and bag labels.

export const INSTAGRAM_HANDLE = "cloudlinecoffeeroasters";
export const INSTAGRAM_URL = `https://www.instagram.com/${INSTAGRAM_HANDLE}/`;
export const INSTAGRAM_DM_URL = `https://ig.me/m/${INSTAGRAM_HANDLE}`;

export const ADDRESS = "Jl. Kemang Selatan I no 10, South Jakarta";
export const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent("Cloudline Coffee Roasters, Jl. Kemang Selatan I No.10, Jakarta Selatan");

// Opening hours in Asia/Jakarta, 24h. 0 = Sunday.
export const HOURS: Record<number, { open: number; close: number }> = {
  0: { open: 7, close: 21 },
  1: { open: 8, close: 21 },
  2: { open: 8, close: 21 },
  3: { open: 8, close: 21 },
  4: { open: 8, close: 21 },
  5: { open: 8, close: 21 },
  6: { open: 7, close: 21 },
};

// TODO: replace with the real store pages once the client sends them.
export const MARKETPLACES = [
  { name: "Tokopedia", href: "https://www.tokopedia.com/" },
  { name: "Shopee", href: "https://shopee.co.id/" },
] as const;
