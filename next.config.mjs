/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
 * This is especially useful for Docker builds.
 */
!process.env.SKIP_ENV_VALIDATION && (await import('./env.mjs'))

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
        pathname: `/images/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/**`,
      }
    ],
  },

  experimental: {
    taint: true,
  },

  redirects() {
    return [
      {
        "source": "/twitter",
        "destination": "https://x.com/pfx95",
        "permanent": true
      },
      {
        "source": "/x",
        "destination": "https://x.com/pfx95",
        "permanent": true
      },
      // {
      //   "source": "/youtube",
      //   "destination": "https://youtube.com/@calicastle",
      //   "permanent": true
      // },
      {
        "source": "/tg",
        "destination": "https://t.me/xuf_95",
        "permanent": true
      },
      // {
      //   "source": "/linkedin",
      //   "destination": "https://www.linkedin.com/in/calicastle/",
      //   "permanent": true
      // },
      {
        "source": "/github",
        "destination": "https://github.com/xuf-95",
        "permanent": true
      },
      // {
      //   "source": "/bilibili",
      //   "destination": "https://space.bilibili.com/8350251",
      //   "permanent": true
      // }
    ]
  },

  rewrites() {
    return [
      {
        source: '/feed',
        destination: '/feed.xml',
      },
      {
        source: '/rss',
        destination: '/feed.xml',
      },
      {
        source: '/rss.xml',
        destination: '/feed.xml',
      },
    ]
  },


  eslint: {
    // 在生产构建时忽略 ESLint 错误
    ignoreDuringBuilds: true,
  },
}

export default nextConfig