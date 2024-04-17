const webpack = require('webpack');
const nextConfig = {
  images: {
    domains: ['staging.showmates.in'],
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Pushing the ProvidePlugin into the plugins array of the webpack config
    config.plugins.push(
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
      })
    );

    return config; // You need to return the modified config
  },
};
module.exports = nextConfig;
