# Comcof Group — Website & Digital Commerce

The Commerce of Coffee. Live at [comcofgroup.com](https://comcofgroup.com).

## Repository structure

- Root: static marketing site (HTML + `assets/`), deployed as Vercel
  project `comcof-group-website`; push `main` to deploy.
- `careers/` + `tools/build-jobs.js`: careers pages generated from role
  data (`node tools/build-jobs.js` after editing roles).
- `shop-app/`: Comcof Shop, a Next.js 15 + TypeScript application,
  deployed as Vercel project `comcof-shop` and mounted at
  comcofgroup.com/shop (plus /account, /admin) via rewrites in
  `vercel.json`.
- `supabase/migrations/`: commerce database schema (PostgreSQL + RLS).
- `docs/`: architecture, launch checklist, and operational docs.

## Commands

```
# Marketing site: edit HTML, then
vercel deploy --prod            # or push main (auto-deploy)

# Shop app
cd shop-app
npm install
npm run dev                     # local development
npm run build                   # production build + typecheck
vercel deploy --prod --yes      # deploy (project comcof-shop)
```

## Environment

The shop runs in LAUNCH mode with no env vars (honest states, email
ordering). To activate database-backed commerce, copy
`shop-app/.env.example` values into the `comcof-shop` Vercel project and
apply the Supabase migrations. Never commit secrets.

See `docs/architecture.md` and `docs/launch-checklist.md`.
