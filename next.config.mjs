/** @type {import('next').NextConfig} */
const securityHeaders = [
  // Stops other sites from putting your page in an <iframe> (clickjacking).
  { key: 'X-Frame-Options', value: 'DENY' },
  // Stops browsers from MIME-sniffing responses into something they aren't.
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  // Forces HTTPS for 2 years on any browser that has visited the site.
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
  // Sends the origin (not the full URL) as Referer to other sites.
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  // Locks down browser features the site doesn't need.
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()' },
];

const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      { protocol: 'https', hostname: '*.supabase.co' },
    ],
  },
  poweredByHeader: false,
  async headers() {
    return [{ source: '/:path*', headers: securityHeaders }];
  },
};

export default nextConfig;
