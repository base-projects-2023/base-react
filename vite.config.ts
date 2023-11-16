import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';
import legacy from '@vitejs/plugin-legacy';
import svgr from 'vite-plugin-svgr';
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
    ],
    server: {
      port: 3000,
    },
    resolve: {
      alias: {
        '~': path.resolve(__dirname, 'src'),
      },
    },
    define: {
      WEB_VERSION: env.WEB_VERSION,
    },
    envPrefix: '',
    css: {
      devSourcemap: isDevelopment,
    },
    esbuild: {
      jsxInject: `import React from 'react'`,
    },
  };
});
