// Js/data/projects-data.js
// Master Registry for all 3D Projects
// -----------------------------------------------------------------------------------------
// 📌 3D PROJECT ASSET NAMING INSTRUCTIONS:
// Inside Assets/3DProjects/[category]/[id]/ :
//   1. Thumbnail (for carousels):        ${id}_thumb.webp     (e.g. Axe_thumb.webp)
//   2. Cover (for showcase modal banner):${id}_Cover.webp     (e.g. Axe_Cover.webp)
//   3. Render Images (showcase gallery): ${id}(1).webp to ${id}(rendersCount).webp
//                                        (e.g. Axe(1).webp, Axe(2).webp ... Axe(5).webp)
// -----------------------------------------------------------------------------------------

const PROJECTS_DATA = {
  // ==========================================
  // 1. MELEE WEAPONS
  // ==========================================
  "Axe": {
    id: "Axe",
    title: "Medieval Axe",
    subtitle: "Hero Asset",
    category: "melee",
    folder: "Assets/3DProjects/melee/Axe/",
    sketchfabId: "4f44adf8b1ad461bbda0008ec2ac4343",
    rendersCount: 5
  },
  "Hammer": {
    id: "Hammer",
    title: "Medieval Hammer",
    subtitle: "Hero Asset",
    category: "melee",
    folder: "Assets/3DProjects/melee/Hammer/",
    sketchfabId: "c210605ff49347ad8049d22e22a000a2",
    rendersCount: 5
  },
  "katana1": {
    id: "katana1",
    title: "Samurai Tachi",
    subtitle: "Japanese Blade",
    category: "melee",
    folder: "Assets/3DProjects/melee/katana1/",
    sketchfabId: null,
    rendersCount: 5
  },
  "katana2": {
    id: "katana2",
    title: "Katana Sword",
    subtitle: "Japanese Blade",
    category: "melee",
    folder: "Assets/3DProjects/melee/katana2/",
    sketchfabId: null,
    rendersCount: 5
  },
  "FireSword": {
    id: "FireSword",
    title: "FireSword",
    subtitle: "Elemental Weapon",
    category: "melee",
    folder: "Assets/3DProjects/melee/FireSword/",
    sketchfabId: null,
    rendersCount: 5
  },
  "Royal": {
    id: "Royal",
    title: "Royal Sword",
    subtitle: "Noble Steel",
    category: "melee",
    folder: "Assets/3DProjects/melee/Royal/",
    sketchfabId: null,
    rendersCount: 5
  },
  "Dagger": {
    id: "Dagger",
    title: "Dagger",
    subtitle: "Stealth Blade",
    category: "melee",
    folder: "Assets/3DProjects/melee/Dagger/",
    sketchfabId: null,
    rendersCount: 5
  },
  "SunSword": {
    id: "SunSword",
    title: "SunSword",
    subtitle: "Solar Edge",
    category: "melee",
    folder: "Assets/3DProjects/melee/SunSword/",
    sketchfabId: null,
    rendersCount: 5
  },
  "DaggerP": {
    id: "DaggerP",
    title: "Dagger",
    subtitle: "Precision Blade",
    category: "melee",
    folder: "Assets/3DProjects/melee/DaggerP/",
    sketchfabId: null,
    rendersCount: 5
  },
  "Bats": {
    id: "Bats",
    title: "Scrap Bats",
    subtitle: "Post-Apocalyptic Weapon",
    category: "melee",
    folder: "Assets/3DProjects/melee/Bats/",
    sketchfabId: null,
    rendersCount: 5
  },
  "Bow": {
    id: "Bow",
    title: "Bow",
    subtitle: "Ranged Weapon",
    category: "melee",
    folder: "Assets/3DProjects/melee/Bow/",
    sketchfabId: null,
    rendersCount: 5
  },

  // ==========================================
  // 2. FIREARMS & TACTICAL
  // ==========================================
  "Handgun_Scifi": {
    id: "Handgun_Scifi",
    title: "Sci-fi Handgun",
    subtitle: "Futuristic Sidearm",
    category: "firearms",
    folder: "Assets/3DProjects/firearms/Handgun_Scifi/",
    sketchfabId: null,
    rendersCount: 5
  },
  "SR": {
    id: "SR",
    title: "Sniper Rifle",
    subtitle: "Long Range Precision",
    category: "firearms",
    folder: "Assets/3DProjects/firearms/SR/",
    sketchfabId: null,
    rendersCount: 5
  },
  "MilitaryCrate": {
    id: "MilitaryCrate",
    title: "Military Crate",
    subtitle: "Tactical Supply",
    category: "firearms",
    folder: "Assets/3DProjects/firearms/MilitaryCrate/",
    sketchfabId: null,
    rendersCount: 5
  },
  "MilitaryRadio": {
    id: "MilitaryRadio",
    title: "Military Radio",
    subtitle: "Comm Equipment",
    category: "firearms",
    folder: "Assets/3DProjects/firearms/MilitaryRadio/",
    sketchfabId: null,
    rendersCount: 5
  },
  "Granada": {
    id: "Granada",
    title: "Sci-fi Grenade",
    subtitle: "Energy Explosive",
    category: "firearms",
    folder: "Assets/3DProjects/firearms/Granada/",
    sketchfabId: null,
    rendersCount: 5
  },
  "Grenade_M67": {
    id: "Grenade_M67",
    title: "M67 Grenade",
    subtitle: "Standard Ordnance",
    category: "firearms",
    folder: "Assets/3DProjects/firearms/Grenade_M67/",
    sketchfabId: null,
    rendersCount: 5
  },
  "Mortar": {
    id: "Mortar",
    title: "Mortar",
    subtitle: "Artillery Unit",
    category: "firearms",
    folder: "Assets/3DProjects/firearms/Mortar/",
    sketchfabId: null,
    rendersCount: 5
  },

  // ==========================================
  // 3. ENVIRONMENT & PROPS
  // ==========================================
  "Windmill": {
    id: "Windmill",
    title: "Windmill",
    subtitle: "Environment Structure",
    category: "props",
    folder: "Assets/3DProjects/props/Windmill/",
    sketchfabId: null,
    rendersCount: 5
  },
  "Shoes": {
    id: "Shoes",
    title: "Shoes",
    subtitle: "Apparel Model",
    category: "props",
    folder: "Assets/3DProjects/props/Shoes/",
    sketchfabId: null,
    rendersCount: 5
  },
  "MusicBox": {
    id: "MusicBox",
    title: "Music Box",
    subtitle: "Vintage Prop",
    category: "props",
    folder: "Assets/3DProjects/props/MusicBox/",
    sketchfabId: null,
    rendersCount: 5
  },
  "Pooltable": {
    id: "Pooltable",
    title: "Pool Table",
    subtitle: "Indoor Prop",
    category: "props",
    folder: "Assets/3DProjects/props/Pooltable/",
    sketchfabId: null,
    rendersCount: 5
  },
  "Barrel": {
    id: "Barrel",
    title: "Toxic Barrel",
    subtitle: "Industrial Hazard",
    category: "props",
    folder: "Assets/3DProjects/props/Barrel/",
    sketchfabId: null,
    rendersCount: 5
  }
};

// Export globally for browser access
if (typeof window !== 'undefined') {
  window.PROJECTS_DATA = PROJECTS_DATA;
  window.PROJECTS_3D = PROJECTS_DATA; // Backwards compatibility alias
}
