import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';
import legacy from '@vitejs/plugin-legacy';
import svgr from 'vite-plugin-svgr';
import Inspect from 'vite-plugin-inspect';
import Unfonts from 'unplugin-fonts/vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import removeConsole from 'vite-plugin-remove-console';
import generouted from '@generouted/react-router/plugin';

import path from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const isDevelopment = mode === 'development';

  return {
    plugins: [
      react(),
      legacy({
        targets: ['defaults', 'not IE 11'],
      }),
      svgr({
        svgrOptions: {},
      }),
      Inspect(),
      Unfonts({
        google: {
          families: [
            'Roboto',
            {
              name: 'Roboto',
              defer: true,
              styles: 'wght@400;500;700',
            },
          ],
          preconnect: false,
          display: 'block',
          text: 'base',
          injectTo: 'head-prepend',
        },
      }),
      tsconfigPaths(),
      removeConsole(),
      generouted(),
    ],
    server: {
      port: 3000,
      open: true,
    },
    resolve: {
      alias: {
        '~': path.resolve(__dirname, 'src'),
      },
    },
    define: {
      WEB_VERSION: env.BASE_APP_VERSION,
    },
    envPrefix: 'BASE_',
    css: {
      devSourcemap: isDevelopment,
    },
    esbuild: {
      jsxInject: `import React from 'react'`,
    },
  };
});
