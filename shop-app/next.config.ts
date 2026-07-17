import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The shop is proxied from comcofgroup.com via rewrites in the static
  // site's vercel.json. Routes here live at /shop, /account, /admin so the
  // public URLs match with no basePath juggling. The same app can later be
  // served directly at shop.comcofgroup.com by attaching the domain to this
  // Vercel project; a small redirect map would translate /shop/* to /*.
  poweredByHeader: false,
  reactStrictMode: true,
  async redirects() {
    return [
      { source: "/", destination: "/shop", permanent: false },
    ];
  },
};

export default nextConfig;
