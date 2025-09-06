import type { NextConfig } from 'next';

const config: NextConfig = {
  transpilePackages: ['@repo/ui'],
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

export { config };
