const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['http://localhost:3000/'],
  },
  env: {
    customKey: 'value',
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = { fs: false };
    }
    return config;
  },
  async headers() {
    return [
      {
        source: '/about',
        headers: [
          {
            key: 'X-Custom-Header',
            value: 'my-value',
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/old-route',
        destination: '/new-route',
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `http://localhost:3000/*`,
      },
    ];
  },
};

module.exports = nextConfig;
