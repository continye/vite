import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  base: '/vite.github.io',
 server:{
            // port:3000,
            // strictPort:true
            open:"index.html"
        },
  plugins: [],
  define: {
    "process.env": {
      DASHSCOPE_API_KEY: process.env.DASHSCOPE_API_KEY,
    },
  },
});
