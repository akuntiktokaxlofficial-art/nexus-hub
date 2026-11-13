import { ArrowUpRight, Key } from "lucide-react";
import { GET_KEY_URL, WHATSAPP_URL } from "@/config/site";
import WhatsAppIcon from "./WhatsAppIcon";

type Props = { className?: string; label?: string };

/** Semua tombol Get Key memakai GET_KEY_URL dan terbuka di tab baru. */
export function GetKeyButton({ className = "", label = "GET KEY" }: Props) {
  return (
    <a
      href={GET_KEY_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn-primary ${className}`}
    >
      <Key className="h-4 w-4" aria-hidden="true" />
      {label}
      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
    </a>
  );
}

/** Semua tombol WhatsApp memakai WHATSAPP_URL. */
export function WhatsAppButton({
  className = "",
  label = "JOIN WHATSAPP",
}: Props) {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn-outline ${className}`}
    >
      <WhatsAppIcon className="h-4 w-4" />
      {label}
      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
    </a>
  );
}
