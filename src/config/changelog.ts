export type ChangelogEntry = {
  version: string;
  date: string;
  title: string;
  description: string;
};

/**
 * Tambah update baru di PALING ATAS array.
 * Entry pertama otomatis diberi badge NEW.
 * NOTE: tanggal v2.0.0 dan v1.9.5 masih data sementara, silakan ganti.
 */
export const changelog: ChangelogEntry[] = [
  {
    version: "v2.0.1",
    date: "13 Nov 2026",
    title: "Improved Performance",
    description:
      "Kami telah meningkatkan performa script dan memperbaiki beberapa bug.",
  },
  {
    version: "v2.0.0",
    date: "Oct 2026",
    title: "New UI & More Features",
    description: "Tampilan baru dan penambahan berbagai fitur.",
  },
  {
    version: "v1.9.5",
    date: "Sep 2026",
    title: "Bug Fixes",
    description: "Perbaikan bug dan peningkatan stabilitas.",
  },
];
