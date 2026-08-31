import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  // Vinext prerender returns 308 for nested routes when true; keep false unless tested.
  trailingSlash: false,
};

export default nextConfig;
