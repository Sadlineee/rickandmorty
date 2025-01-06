import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  compiler: {
    styledComponents: true
  },
  images: {
    domains: ['rickandmortyapi.com']
  }
}

export default nextConfig