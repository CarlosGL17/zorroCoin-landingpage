const withImages = require('next-images');
const { i18n } = require('./next-i18next.config');

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n,
  swcMinify: true,
  compress: true,
  optimizeFonts: true,
  images: {
    disableStaticImages: true,
  },
}

module.exports = withImages(withBundleAnalyzer(nextConfig))
