module.exports = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    domains: ['lastfm.freetls.fastly.net'],
  },
  async redirects() {
    return [
      {
        source: '/github',
        destination: 'https://github.com/lawrencemillard',
        permanent: true,
      },
      {
        source: '/twitter',
        destination: 'https://twitter.com/lrsypen',
        permanent: true,
      },
      {
        source: '/discord',
        destination: 'https://discord.com/users/1276934328055762975',
        permanent: true,
      },
    ]
  },
}
