import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  publicPath: '/vite.github.io',
  server: {
    host: "0.0.0.0",
    hmr: true,
    proxy: {
      "/compatible-mode/v1": {
        target: "https://dashscope.aliyuncs.com",
        changeOrigin: true,
        secure: false,
      },
    },
    // 屏蔽命令窗口的文件访问限制警告
    fs: {
      strict: false,
    },
  },
  plugins: [],
  define: {
    "process.env": {
      DASHSCOPE_API_KEY: process.env.DASHSCOPE_API_KEY,
    },
  },
});
