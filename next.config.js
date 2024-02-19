/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  i18n: {
    locales: ['uk', 'en'],
    defaultLocale: 'uk',
    localeDetection: false,
  },

  transpilePackages: ['@ionic/react', '@ionic/core', '@stencil/core', 'ionicons'],

};

// export default nextConfig;

// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  sw: 'service-worker.js',
});

// module.exports = withPWA(nextConfig);
//

const withLess = require('next-with-less');
const withPlugins = require('next-compose-plugins');
const plugins = [[withLess, {}]];

module.exports = withPlugins(plugins, nextConfig);

// const withTM = require('next-transpile-modules')([
//   '@ionic/react',
//   '@ionic/core',
//   '@stencil/core',
//   'ionicons',
// ]);

// module.exports = withTM(nextConfig);

// module.exports = withPWA(withTM(nextConfig));

// module.exports = nextConfig;
// export default nextConfig;
