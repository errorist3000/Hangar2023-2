const withGraphql = require('next-plugin-graphql')

module.exports = withGraphql({
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    })

    return config
  },

  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
})
