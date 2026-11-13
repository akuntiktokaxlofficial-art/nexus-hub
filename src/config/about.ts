import { Bell, MessagesSquare, Users, type LucideIcon } from "lucide-react";

export type Highlight = { title: string; description: string; icon: LucideIcon };

/** Poin ringkas tanpa angka statistik. */
export const aboutHighlights: Highlight[] = [
  { title: "Komunitas Roblox", description: "Dibuat untuk para pemain", icon: Users },
  { title: "Info & Update", description: "Kabar terbaru dari project", icon: Bell },
  { title: "Saluran WhatsApp", description: "Pengumuman resmi", icon: MessagesSquare },
];
