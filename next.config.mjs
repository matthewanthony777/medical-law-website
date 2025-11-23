// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove output: 'export' since it's causing Server Actions conflicts
  
  // Keep webpack config for media files
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(mp4|webm)$/i,
      use: {
        loader: 'file-loader',
        options: {
          publicPath: '/_next',
          name: 'static/media/[name].[hash].[ext]',
        },
      },
    });
    return config;
  }
};

export default nextConfig;