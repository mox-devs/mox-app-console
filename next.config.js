/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['s3.amazonaws.com'],
    minimumCacheTTL: 60
  },
  compiler: {
    styledComponents: true
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/login',
        permanent: true
      }
    ]
  }
}

module.exports = nextConfig
