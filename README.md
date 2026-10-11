# Cloudline Coffee Roasters

Website for Cloudline Coffee Roasters, a specialty coffee roaster with its own bar on Jl. Kemang Selatan, South Jakarta. One page in two languages: English at `/`, Indonesian at `/id/`.

Live at https://cloudline.heybouma.com

## Layout

- `web/` is the Next.js app (App Router, Tailwind v4, static export).
- `image.png` is the mascot logo as delivered (PNG, white background). `web/public/logo/` holds the cut-out versions the site uses: the mascot layer and the bubble letters split out so they can roll in on load.
- `product/` holds the bag labels each bean card's colours were sampled from.
- The screenshots in the root are the client's photos and event posters; cropped web copies live in `web/public/photos/` and `web/public/posters/`.

Copy for both languages is in `web/lib/i18n.ts`, the beans in `web/lib/beans.ts`, and address, hours and marketplace links in `web/lib/site.ts`.

## Commands

Run from `web/`:

```bash
bun install
bun run dev     # http://localhost:3000
bun run build   # static site in web/out/
```

## Deploying

On the server, from the checkout at `/var/www/html/cloudline.heybouma.com`:

```bash
./deploy.sh
```

It pulls, installs, refuses to continue on high or critical audit findings, builds, and swaps the new build into `web/out.live/`, which nginx serves. The previous build stays in `web/out.prev/`.
