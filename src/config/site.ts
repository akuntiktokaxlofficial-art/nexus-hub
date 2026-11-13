/**
 * Konfigurasi global NEXUS HUB.
 * Ganti link / teks cukup di file ini, semua tombol ikut berubah.
 */
export const WEBSITE_NAME = "NEXUS HUB";
export const WHATSAPP_URL =
  "https://whatsapp.com/channel/0029VbEbBdNHQbS4AvTSjF2C";
export const GET_KEY_URL = "https://sfl.gl/F787";

export const siteConfig = {
  name: WEBSITE_NAME,
  tagline: "One Community, Endless Possibilities.",
  description:
    "Selamat datang di Nexus Hub, komunitas untuk para Roblox enthusiast. Temukan informasi terbaru, update script, fitur menarik, dan pengalaman terbaik bersama komunitas kami.",
  about: {
    title: "ABOUT NEXUS HUB",
    description:
      "Nexus Hub adalah komunitas yang dibangun untuk para pemain Roblox. Kami hadir sebagai tempat berbagi informasi, perkembangan project, update, dan berbagai hal menarik seputar komunitas.",
  },
  community: {
    title: "OUR COMMUNITY",
    description:
      "Bergabunglah dengan saluran WhatsApp resmi Nexus Hub untuk mendapatkan informasi terbaru, update, pengumuman, dan informasi penting lainnya.",
  },
  cta: {
    title: "READY TO GET STARTED?",
    description:
      "Dapatkan akses key sekarang dan nikmati pengalaman terbaik bersama Nexus!",
  },
  footerNote: "Built for our community.",
} as const;
