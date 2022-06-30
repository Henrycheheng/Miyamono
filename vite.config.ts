import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteCompression from 'vite-plugin-compression'
import path from 'path'
/** @type {import('vite').UserConfig} */

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteCompression({
      verbose: true,
      disable: false,
      threshold: 10240,
      algorithm: 'gzip',
      ext: '.gz',
    }),
  ],
  // 引用别名
  resolve: {
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@context': path.resolve(__dirname, 'src/context'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@interface': path.resolve(__dirname, 'src/interface'),
      '@middleware': path.resolve(__dirname, 'src/middleware'),
      '@module': path.resolve(__dirname, 'src/module'),
      '@router': path.resolve(__dirname, 'src/router'),
      '@services': path.resolve(__dirname, 'src/services'),
      '@api': path.resolve(__dirname, 'src/services/api'),
      '@store': path.resolve(__dirname, 'src/store'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@view': path.resolve(__dirname, 'src/view'),
    },
  },
  // 配置全局注入样式，不需要任何引入可以直接使用全局scss定义的变量
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/assets/style/main.scss";',
      },
    },
  },
  server: {
    host: '0.0.0.0',
    port: 3000,
    open: true,
    https: false,
    proxy: {},
  },
  // 生产环境去除debugger,console
  build: {
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
})
