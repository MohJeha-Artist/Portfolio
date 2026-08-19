// Js/data/graphics-data.js
// Master Registry for all 2D Graphics, Brand Identities, and Logos
// -----------------------------------------------------------------------------------------
// 📌 2D BRAND & LOGO ASSET NAMING INSTRUCTIONS:
// Inside Assets/Graphics/Logos/[folder]/ :
//   1. Logo Image (centerpiece):         ${folder}_logo.webp  (e.g. Brand_logo.webp)
//   2. Card Thumbnail (mobile swiper):   ${folder}_Thumb.webp (e.g. Brand_Thumb.webp)
//   3. Mockup Stack (tiles & modal):     ${folder}_Stack.webp (e.g. Brand_Stack.webp)
//   4. Presentation Renders (gallery):   ${folder} (1).webp to ${folder} (rendersCount).webp
//                                        (e.g. Brand (1).webp ... Brand (9).webp)
// -----------------------------------------------------------------------------------------

const BRANDS_DATA = {
  "Brand": {
    key: "Brand",
    name: "Brand Portfolio",
    folder: "Brand",
    glow: "#ff3366",
    rendersCount: 9
  },
  "DigitalWorld": {
    key: "DigitalWorld",
    name: "Digital World",
    folder: "DigitalWorld",
    glow: "#00d2ff",
    rendersCount: 2
  },
  "Dabbous": {
    key: "Dabbous",
    name: "Dabbous Brand",
    folder: "Dabbous",
    glow: "#ff9900",
    rendersCount: 2
  },
  "Atelier": {
    key: "Atelier",
    name: "Atelier Studio",
    folder: "Atelier",
    glow: "#c0a250",
    rendersCount: 2
  },
  "Arz": {
    key: "Arz",
    name: "Arz Cultural",
    folder: "Arz",
    glow: "#ffe058",
    rendersCount: 4
  },
  "SIS": {
    key: "SIS",
    name: "SIS Enterprise",
    folder: "SIS",
    glow: "#f8d079",
    rendersCount: 2
  },
  "EarthLinks": {
    key: "EarthLinks",
    name: "EarthLinks Tech",
    folder: "EarthLinks",
    glow: "#00e5ff",
    rendersCount: 1
  },
  "AbuSalah": {
    key: "AbuSalah",
    name: "Abu Salah Monogram",
    folder: "AbuSalah",
    glow: "#e61f3a",
    rendersCount: 1
  },
  "BirlesikZirve": {
    key: "BirlesikZirve",
    name: "Birleşik Zirve",
    folder: "BirlesikZirve",
    glow: "#ffaa00",
    rendersCount: 1
  },
  "ibnbalad": {
    key: "ibnbalad",
    name: "Ibn Balad Cultural",
    folder: "ibnbalad",
    glow: "#2aaee2",
    rendersCount: 1
  },
  "Lebaniz": {
    key: "Lebaniz",
    name: "Lebaniz Studio",
    folder: "Lebaniz",
    glow: "#e11d48",
    rendersCount: 1
  },
  "NanoStitch": {
    key: "NanoStitch",
    name: "NanoStitch",
    folder: "NanoStitch",
    glow: "#6366f1",
    rendersCount: 1
  },
  "Nova": {
    key: "Nova",
    name: "Nova Media Studio",
    folder: "Nova",
    glow: "#066a7c",
    rendersCount: 1
  },
  "Sirius": {
    key: "Sirius",
    name: "Sirius Emblem",
    folder: "Sirius",
    glow: "#a855f7",
    rendersCount: 1
  },
  "SummerLive": {
    key: "SummerLive",
    name: "Summer Live",
    folder: "SummerLive",
    glow: "#f97316",
    rendersCount: 1
  },
  "Vistamar": {
    key: "Vistamar",
    name: "Vistamar Resort",
    folder: "Vistamar",
    glow: "#ffd000",
    rendersCount: 1
  }
};

// Aliases for convenient case-insensitive lookups
BRANDS_DATA["Abusalah"] = BRANDS_DATA["AbuSalah"];
BRANDS_DATA["Summer"] = BRANDS_DATA["SummerLive"];
BRANDS_DATA["vistamar"] = BRANDS_DATA["Vistamar"];

// Masonry Mockups Exact List (Zero 404s)
const GRAPHICS_MASONRY = [
  { file: "graphics_(Arz Con).webp", title: "Arz Consulting" },
  { file: "graphics_(Arz Cont).webp", title: "Arz Identity" },
  { file: "122.webp", title: "WEEEEEEEE" },
  { file: "graphics (2).webp" },
  { file: "graphics (3).webp" },
  { file: "graphics (4).webp" },
  { file: "graphics (5).webp" },
  { file: "graphics (6).webp" },
  { file: "graphics (7).webp" },
  { file: "graphics (8).webp" },
  { file: "graphics (9).webp" },
  { file: "graphics (10).webp" },
  { file: "graphics (11).webp" },
  { file: "graphics (12).webp" },
  { file: "graphics (13).webp" },
  { file: "graphics (14).webp" },
  { file: "graphics (15).webp" },
  { file: "graphics (16).webp" }
];

// Export to window
if (typeof window !== 'undefined') {
  window.BRANDS_DATA = BRANDS_DATA;
  window.GRAPHICS_DATA = BRANDS_DATA;
  window.GRAPHICS_MASONRY = GRAPHICS_MASONRY;
}
