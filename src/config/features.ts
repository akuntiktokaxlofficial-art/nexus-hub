import { Gauge, Rocket, ShieldCheck, Zap, type LucideIcon } from "lucide-react";

export type Feature = {
  title: string;
  description: string;
  icon: LucideIcon;
};

/** Edit / tambah fitur di sini. */
export const features: Feature[] = [
  { title: "Auto Farm", description: "Farm lebih cepat dan efisien.", icon: Zap },
  {
    title: "Anti Guard",
    description: "Sistem perlindungan dan stabilitas.",
    icon: ShieldCheck,
  },
  {
    title: "Update Berkala",
    description: "Informasi update terbaru.",
    icon: Rocket,
  },
  {
    title: "Performa Optimal",
    description: "Pengalaman penggunaan lebih ringan.",
    icon: Gauge,
  },
];
