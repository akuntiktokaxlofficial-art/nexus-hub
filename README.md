# NEXUS HUB — Official Community Website

Next.js 14 (App Router) · React · TypeScript · Tailwind CSS · Lucide React · Framer Motion

## Jalankan
```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # cek build production
```

## Konfigurasi (src/config)
| File | Isi |
|---|---|
| `site.ts` | `WEBSITE_NAME`, `WHATSAPP_URL`, `GET_KEY_URL`, semua teks utama |
| `navigation.ts` | menu navbar & footer |
| `features.ts` | 4 kartu fitur |
| `changelog.ts` | daftar update (tambah di paling atas, entry pertama otomatis badge NEW) |
| `about.ts` | poin ringkas di section About |

Ganti link Safelink / WhatsApp cukup di `site.ts`.

## Deploy ke Vercel
**Via GitHub (disarankan)**
1. `git init && git add . && git commit -m "init"` lalu push ke repo GitHub.
2. vercel.com → Add New → Project → import repo.
3. Framework otomatis terdeteksi Next.js. Klik Deploy.

**Via CLI**
```bash
npm i -g vercel
vercel --prod
```
