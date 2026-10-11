export type Lang = "en" | "id";

export const HOME_PATH: Record<Lang, string> = { en: "/", id: "/id/" };

const en = {
  meta: {
    title: "Cloudline Coffee Roasters, Kemang",
    description:
      "Specialty coffee roasted in Kemang, South Jakarta. Buy whole beans, visit the bar, or order wholesale for your café.",
  },
  nav: {
    beans: "Beans",
    roastery: "Roastery",
    bar: "The bar",
    events: "Events",
    wholesale: "Wholesale",
    menu: "Menu",
    close: "Close",
    switchTo: "Bahasa Indonesia",
    switchShort: "ID",
  },
  hero: {
    titleTop: "Roasted",
    titleBottom: "in Kemang",
    lede: "We roast our own beans, sell them by the bag, and brew them across the bar on Jl. Kemang Selatan.",
    shop: "Shop the beans",
    visit: "Plan a visit",
    hoursShort: "Weekdays 8–21, weekends 7–21",
  },
  status: {
    open: (close: string) => `Open now, until ${close}`,
    closed: (open: string, today: boolean) =>
      today ? `Closed, opens at ${open}` : `Closed, opens tomorrow at ${open}`,
  },
  roastery: {
    title: "For the people behind every cup",
    body: [
      "Green coffee comes in by the sack, from Huila and Chiriquí to Gicumbi, Gayo and Malino. We roast it ourselves, then pour it at our own bar.",
      "Our labels name the farm or processor wherever we can, because they did most of the work.",
    ],
    award: "Indonesia Coffee Roasting Champion",
    awardYear: "2025",
    sacksAlt: "Jute sacks of green coffee from Colombia, Brazil and El Salvador stacked on shelves",
    shelfAlt: "Shelf with Cloudline bags in coloured labels under a row of trophies",
  },
  beans: {
    title: "Beans on the shelf",
    lede: "Whole beans, roasted here. Each bag wears its own colour, matched to how it tastes.",
    process: "Process",
    origin: "Origin",
    variety: "Variety",
    altitude: "Altitude",
    producer: "Producer",
    notes: "Tastes like",
    notesBlack: "Black",
    notesWithMilk: "With milk",
    size: "Bag",
    buyOn: (store: string) => `Buy on ${store}`,
  },
  bar: {
    title: "Come by the bar",
    body: "Espresso, filter and cake, with local and imported coffees on the grinder. Ask the barista what came out of the roaster this week.",
    address: "Address",
    hours: "Hours",
    weekdays: "Monday to Friday",
    weekends: "Saturday and Sunday",
    parking: "There's no car parking, so plan on a drop-off.",
    directions: "Open in Google Maps",
    pourAlt: "Barista pouring a filter coffee into a pink dripper",
    barAlt: "Barista pulling an espresso shot behind the bar",
    frontAlt: "The front terrace with a blue Cloudline sign board",
  },
  events: {
    title: "Cuppings, guest brewers and late nights",
    body: "We open the table for public cuppings, Ramadan evenings with guest baristas, and pop-ups around Jakarta. New dates go up on Instagram first.",
    follow: `Follow @cloudlinecoffeeroasters`,
    posters: [
      { src: "/posters/public-cupping.webp", w: 853, h: 1117, alt: "Poster: Public Cupping, open for everyone, 1 to 4 October at Grand Galaxy Park" },
      { src: "/posters/moreh-navy.webp", w: 790, h: 1007, alt: "Poster: Moreh Ramadhan in the cloud with Bayu Prawiro, Sunday 8 March, 6 to 10 pm" },
      { src: "/posters/brewkasi.webp", w: 853, h: 985, alt: "Poster: Cloudline at the Brewkasi event, Grand Galaxy Park Mall" },
      { src: "/posters/moreh-green.webp", w: 993, h: 938, alt: "Poster: Moreh Ramadhan in the cloud with Fakhri Murad, 28 February, 6 to 11 pm, local and exotic coffee and cake" },
    ],
  },
  wholesale: {
    title: "Roasting for your café",
    body: "Cafés, offices and event organisers can order our roasts in bulk. Tell us what you brew, how much you go through in a week, and the flavours your regulars come back for. We'll work out a roast and a delivery rhythm with you.",
    asks: ["What you brew: espresso, filter, or both", "Roughly how many kilos a week", "When you need the first delivery"],
    cta: "Message us on Instagram",
  },
  footer: {
    tagline: "Under God is how we play.",
    rights: "Cloudline Coffee Roasters",
  },
};

export type Dict = typeof en;

const id: Dict = {
  meta: {
    title: "Cloudline Coffee Roasters, Kemang",
    description:
      "Kopi spesialti yang disangrai di Kemang, Jakarta Selatan. Beli biji utuh, mampir ke bar, atau pesan grosir untuk kafemu.",
  },
  nav: {
    beans: "Biji kopi",
    roastery: "Roastery",
    bar: "Bar",
    events: "Acara",
    wholesale: "Grosir",
    menu: "Menu",
    close: "Tutup",
    switchTo: "English",
    switchShort: "EN",
  },
  hero: {
    titleTop: "Disangrai",
    titleBottom: "di Kemang",
    lede: "Kami menyangrai biji kopi sendiri, menjualnya per kantong, dan menyeduhnya langsung di bar kami di Jl. Kemang Selatan.",
    shop: "Lihat biji kopi",
    visit: "Rencanakan kunjungan",
    hoursShort: "Senin–Jumat 8–21, akhir pekan 7–21",
  },
  status: {
    open: (close: string) => `Buka sekarang, sampai ${close}`,
    closed: (open: string, today: boolean) =>
      today ? `Tutup, buka pukul ${open}` : `Tutup, buka besok pukul ${open}`,
  },
  roastery: {
    title: "For the people behind every cup",
    body: [
      "Green bean datang per karung, dari Huila dan Chiriquí sampai Gicumbi, Gayo, dan Malino. Kami sangrai sendiri, lalu kami seduh di bar kami sendiri.",
      "Label kami mencantumkan nama kebun atau prosesornya sebisa mungkin, karena merekalah yang paling banyak bekerja.",
    ],
    award: "Indonesia Coffee Roasting Champion",
    awardYear: "2025",
    sacksAlt: "Karung goni berisi green bean dari Kolombia, Brasil, dan El Salvador di rak",
    shelfAlt: "Rak berisi kantong Cloudline berlabel warna-warni di bawah deretan trofi",
  },
  beans: {
    title: "Biji kopi di rak kami",
    lede: "Biji utuh, disangrai di sini. Setiap kantong punya warnanya sendiri, disesuaikan dengan rasanya.",
    process: "Proses",
    origin: "Asal",
    variety: "Varietas",
    altitude: "Ketinggian",
    producer: "Produsen",
    notes: "Rasanya",
    notesBlack: "Hitam",
    notesWithMilk: "Dengan susu",
    size: "Kantong",
    buyOn: (store: string) => `Beli di ${store}`,
  },
  bar: {
    title: "Mampir ke bar",
    body: "Espresso, filter, dan kue, dengan kopi lokal dan impor di grinder. Tanya barista apa yang baru keluar dari roaster minggu ini.",
    address: "Alamat",
    hours: "Jam buka",
    weekdays: "Senin sampai Jumat",
    weekends: "Sabtu dan Minggu",
    parking: "Tidak ada parkir mobil, jadi sebaiknya diantar.",
    directions: "Buka di Google Maps",
    pourAlt: "Barista menuang kopi filter ke dripper merah muda",
    barAlt: "Barista mengekstrak espresso di balik bar",
    frontAlt: "Teras depan dengan papan Cloudline berwarna biru",
  },
  events: {
    title: "Cupping, barista tamu, dan malam panjang",
    body: "Kami membuka meja untuk public cupping, malam Ramadan bersama barista tamu, dan pop-up di sekitar Jakarta. Jadwal baru selalu diumumkan dulu di Instagram.",
    follow: `Ikuti @cloudlinecoffeeroasters`,
    posters: [
      { src: "/posters/public-cupping.webp", w: 853, h: 1117, alt: "Poster: Public Cupping, terbuka untuk umum, 1 sampai 4 Oktober di Grand Galaxy Park" },
      { src: "/posters/moreh-navy.webp", w: 790, h: 1007, alt: "Poster: Moreh Ramadhan in the cloud bersama Bayu Prawiro, Minggu 8 Maret, pukul 18–22" },
      { src: "/posters/brewkasi.webp", w: 853, h: 985, alt: "Poster: Cloudline di acara Brewkasi, Grand Galaxy Park Mall" },
      { src: "/posters/moreh-green.webp", w: 993, h: 938, alt: "Poster: Moreh Ramadhan in the cloud bersama Fakhri Murad, 28 Februari, pukul 18–23, kopi lokal dan eksotis serta kue" },
    ],
  },
  wholesale: {
    title: "Sangrai untuk kafemu",
    body: "Kafe, kantor, dan penyelenggara acara bisa memesan kopi kami dalam jumlah besar. Ceritakan apa yang kamu seduh, berapa banyak yang habis dalam seminggu, dan rasa yang dicari pelangganmu. Kami susun profil sangrai dan jadwal kirimnya bersama kamu.",
    asks: ["Yang kamu seduh: espresso, filter, atau keduanya", "Kira-kira berapa kilo per minggu", "Kapan pengiriman pertama dibutuhkan"],
    cta: "Kirim pesan di Instagram",
  },
  footer: {
    tagline: "Under God is how we play.",
    rights: "Cloudline Coffee Roasters",
  },
};

export const DICTS: Record<Lang, Dict> = { en, id };
