// next.config.mjs

import webpack from 'webpack';

const nextConfig = {
  webpack: (config) => {
    // Add jQuery as a global variable
    config.plugins.push(
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
      })
    );
    return config;
  },
  images: {
    domains: ['cdn.sanity.io'], 
  },
};

export default nextConfig;