const withImages = require('next-images');

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compress: true,
  ssr: true,
  optimizeFonts: true,
  images: {
    disableStaticImages: true,
  },
}

module.exports = withImages(withBundleAnalyzer(nextConfig))
