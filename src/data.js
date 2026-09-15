// ============================================================
//  EDIT EVERYTHING ABOUT YOUR PORTFOLIO FROM THIS ONE FILE
// ============================================================

// ---- BRAND / IDENTITY --------------------------------------
export const brand = {
  name: "Varma Visuals",
  editor: "Megavarman",
  role: "Freelance Video Editor",

  // Add your photo to public/profile.jpg
  // photo: "../public/img/profile.jpeg",
  // photo: "../public/img/profile1.png",
  photo: "/img/profile1.png",

  tagline: "I TURN RAW FOOTAGE INTO STORIES WORTH WATCHING.",

  intro:
    "| Video Editor Crafting stories through pacing, emotion, and visual detail.",

  introOne:
    "I'm a freelance video editor who transforms raw footage into polished, purposeful films — for creators, brands, and businesses who care about how their story is told.",

  description:
    "My work spans real estate films, brand promotions, testimonials, event coverage, and social media content, always shaped around rhythm, emotional flow, and visual consistency.",

  closing:
    "You bring the vision. I bring the craft to shape it into something people remember.",
};

// ---- CONTACT / SOCIAL --------------------------------------
// Leave a value as "" to hide that link.
export const contact = {
  email: "megavarmans18@gmail.com",
  whatsapp: "918754851304", // digits only, with country code
  instagram: "", // e.g. "https://instagram.com/yourhandle"
  linkedin: "", // e.g. "https://linkedin.com/in/yourprofile"
  location: "Available worldwide · Remote",
};

// ---- STATS (hero strip) ------------------------------------
export const stats = [
  { value: "6+", label: "Years editing" },
  { value: "4", label: "Core specialties" },
  { value: "18h", label: "From fastest turnaround" },
];

// ---- SERVICES ----------------------------------------------
// `icon` maps to an inline SVG in Services.jsx:
//   building | megaphone | calendar | people | mobile
export const services = [
  {
    icon: "building",
    title: "Real Estate Videos",
    body: "Property walkthroughs and drone footage editing with cinematic color grading to showcase luxury listings.",
  },
  {
    icon: "megaphone",
    title: "Promotional Content",
    featured: true,
    body: "Fast-paced, engaging brand campaigns with motion graphics and dynamic transitions that convert viewers.",
  },
  {
    icon: "calendar",
    title: "Event Highlights",
    body: "Multi-camera corporate event recaps with professional pacing that captures the true energy of the moment.",
  },
  {
    icon: "people",
    title: "Testimonials",
    body: "Clean, professional testimonial edits with polished sound design and emotional storytelling.",
  },
  {
    icon: "mobile",
    title: "Social Media Reels",
    body: "Vertical edits optimized for TikTok, Shorts, and Reels with subtitles, fast cuts, and maximum engagement.",
  },
];

// ---- TOOLS (icons live in public/tools/<icon>.<type>) ------
export const tools = [
  { name: "Premiere Pro", icon: "premiere", type: "svg" },
  { name: "After Effects", icon: "aftereffects", type: "svg" },
  { name: "Media Encoder", icon: "mediaencoder", type: "svg" },
  { name: "DaVinci Resolve", icon: "davinci", type: "png" },
];

// ---- PORTFOLIO VIDEOS --------------------------------------
// Paste your Dropbox share links in `urls`. The "?...&dl=0" tail is converted
// automatically to a direct, streamable link. Empty urls -> "coming soon".
export const videos = [
  {
    urls: [
      "https://www.dropbox.com/scl/fi/rllxv389mr5ao13phyfpn/1.mp4?rlkey=9414i6zii74eiqebjddppy3br&st=1wtbbi1o&dl=0",
      "https://www.dropbox.com/scl/fi/69c8uob5gvkhqlff4b5zs/3.mp4?rlkey=w2o0dr2jzmltwukuhno1fwcps&st=55tymvx6&dl=0",
      "https://www.dropbox.com/scl/fi/mtdqncrogj6na2opejnnn/4.mp4?rlkey=u2hyto8d3hk0c94yrcwgjqdy3&st=ule9ahdf&dl=0",
    ],
    category: "Real Estate",
    title: "Property Walkthrough",
    tags: ["Drone", "Color Grade"],
  },
  {
    urls: [
      "https://www.dropbox.com/scl/fi/nrtt5e9e9m6em4j9k98fp/scripted-caption.mp4?rlkey=i7xmmse5ockzbru7lc4vbhenr&st=p7sc9gyc&dl=0",
    ],
    category: "Promotional",
    title: "Brand Promo",
    tags: ["Motion Graphics", "Fast Cut"],
  },
  {
    urls: [],
    category: "Testimonial",
    title: "Client Testimonial",
    tags: ["Storytelling", "Clean Cuts"],
  },
  {
    urls: [],
    category: "Corporate Event",
    title: "Event Highlight Reel",
    tags: ["Multi-Cam", "Highlights"],
  },
];

// ---- PACKAGES ----------------------------------------------
export const packages = [
  {
    name: "Basic",
    tagline: "Clean, professional edits",
    delivery: "18 hrs delivery",
    featured: false,
    features: [
      "Cut-to-cut editing & trimming",
      "Color correction",
      "Basic audio cleanup",
      "Simple transitions",
      "Background music",
    ],
  },
  {
    name: "Standard",
    tagline: "Everything in Basic, elevated",
    delivery: "30 hrs delivery",
    featured: true,
    features: [
      "Beat-synced editing & speed ramps",
      "Smooth transitions",
      "Audio & Noise cleanup",
      "Motion titles & Logo branding",
      "Sound effects & cinematic pacing",
    ],
  },
  {
    name: "Premium",
    tagline: "Full creative treatment",
    delivery: "48 hrs delivery",
    featured: false,
    features: [
      "Cinematic storytelling & pacing",
      "Advanced motion graphics & VFX",
      "Professional color grading",
      "Advanced audio design",
      "Motion tracking & branded callouts",
    ],
  },
];

export const pricingNote =
  "Up to 3 revision rounds included · Rush delivery available at +30%";
