import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import eslint from 'vite-plugin-eslint';
import path from 'path';
import url from 'url';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    eslint({
      cache: false,
      include: ['./src/**/*.js', './src/**/*.jsx'],
      exclude: [],
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/'),
      components: `${path.resolve(__dirname, './src/components/')}`,
      public: `${path.resolve(__dirname, './public/')}`,
      pages: path.resolve(__dirname, './src/pages'),
      types: `${path.resolve(__dirname, './src/@types')}`,
      stores: `${path.resolve(__dirname, './src/stores/')}`,
    },
  },
});
