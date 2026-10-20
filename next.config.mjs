/** @type {import('next').NextConfig} */
const nextConfig = {
  // The landing page used to live at /with-map and /without-map; old ad / WhatsApp links land on / (query strings kept).
  async redirects() {
    return [
      { source: "/with-map", destination: "/", permanent: true },
      { source: "/without-map", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
