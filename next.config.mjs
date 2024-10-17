// Import the bundle analyzer using the ES module syntax
import withBundleAnalyzer from '@next/bundle-analyzer';

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.pinimg.com',
      },
      {
        protocol:'https',
        hostname:'https://tinypng.com',
      },
      {
        protocol: 'https',
        hostname: 'www.youtube.com',
      },
      {
        protocol: 'https',
        hostname: 'in.pinterest.com',
      },
      {
        protocol: 'https',
        hostname: 'restcountries.com',
      },
      {
        protocol: 'https',
        hostname: 'assets.nesscoindustries.com',
      },
      {
        protocol: 'https',
        hostname: 'www.nesscoindia.com',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
    ],
  },
  swcMinify: true,
  // experimental: {
  //   optimizePackageImports: [
  //     '@mantine/core',     // Add Mantine components
  //     '@mantine/hooks',    // Add Mantine hooks
  //     'lodash',            // Add Lodash for tree shaking
  //   ],  // List any additional packages you'd like to optimize
  // }
};

// Initialize the bundle analyzer
const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

// Export the configuration with the bundle analyzer applied
export default bundleAnalyzer(nextConfig);
