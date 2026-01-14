export const config = { runtime: 'edge' };

export default async function (req) {
  const country = (req.headers.get('x-vercel-ip-country') || '').toUpperCase();
  const url = new URL(req.url);

  // If visitor is from Ecuador and not already on /ec, redirect to /ec
  if (country === 'EC' && !url.pathname.startsWith('/ec')) {
    return Response.redirect(`${url.origin}/ec${url.pathname}${url.search}`, 302);
  }

  // Otherwise, proceed to serve the original site (rewrite to /index.html)
  // Serve the index HTML so SPA will handle routes (this keeps behavior simple)
  const origin = url.origin;
  const indexUrl = `${origin}/index.html`;
  const res = await fetch(indexUrl, { headers: { 'x-middleware-bypass': '1' } });
  return res;
}