// next.config.mjs

import webpack from 'webpack';

const nextConfig = {
  output: "export",
  async headers() {
    return [
      {
        source: '/(.*).(png|jpg|jpeg|gif|ico|css|js)', // Add any additional file types if needed
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, must-revalidate',
          },
        ],
      },
    ];
  },
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
    unoptimized: true, // Disable Image Optimization
  },
};

export default nextConfig;
