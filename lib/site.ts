// The public URL of the site. On Vercel, set NEXT_PUBLIC_SITE_URL to your final domain
// (for example https://aaronalonzo.com). Until then it falls back to the Vercel URL.
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");
