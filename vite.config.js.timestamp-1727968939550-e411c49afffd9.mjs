// vite.config.js
import { defineConfig } from "file:///C:/Users/NikhilPS/Downloads/modernize-react-free-v3/package/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/NikhilPS/Downloads/modernize-react-free-v3/package/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { resolve } from "path";
import fs from "fs/promises";
import svgr from "file:///C:/Users/NikhilPS/Downloads/modernize-react-free-v3/package/node_modules/@svgr/rollup/dist/index.js";
var __vite_injected_original_dirname = "C:\\Users\\NikhilPS\\Downloads\\modernize-react-free-v3\\package";
var vite_config_default = defineConfig({
  resolve: {
    alias: {
      src: resolve(__vite_injected_original_dirname, "src")
    }
  },
  esbuild: {
    loader: "jsx",
    include: /src\/.*\.jsx?$/,
    exclude: []
  },
  optimizeDeps: {
    esbuildOptions: {
      plugins: [
        {
          name: "load-js-files-as-jsx",
          setup(build) {
            build.onLoad({ filter: /src\\.*\.js$/ }, async (args) => ({
              loader: "jsx",
              contents: await fs.readFile(args.path, "utf8")
            }));
          }
        }
      ]
    }
  },
  // plugins: [react(),svgr({
  //   exportAsDefault: true
  // })],
  plugins: [svgr(), react()]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxOaWtoaWxQU1xcXFxEb3dubG9hZHNcXFxcbW9kZXJuaXplLXJlYWN0LWZyZWUtdjNcXFxccGFja2FnZVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcTmlraGlsUFNcXFxcRG93bmxvYWRzXFxcXG1vZGVybml6ZS1yZWFjdC1mcmVlLXYzXFxcXHBhY2thZ2VcXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL05pa2hpbFBTL0Rvd25sb2Fkcy9tb2Rlcm5pemUtcmVhY3QtZnJlZS12My9wYWNrYWdlL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcclxuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdFwiO1xyXG5pbXBvcnQgeyByZXNvbHZlIH0gZnJvbSBcInBhdGhcIjtcclxuaW1wb3J0IGZzIGZyb20gXCJmcy9wcm9taXNlc1wiO1xyXG5pbXBvcnQgc3ZnciBmcm9tIFwiQHN2Z3Ivcm9sbHVwXCI7XHJcbi8vIGltcG9ydCBzdmdyIGZyb20gJ3ZpdGUtcGx1Z2luLXN2Z3InXHJcblxyXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIHJlc29sdmU6IHtcclxuICAgIGFsaWFzOiB7XHJcbiAgICAgIHNyYzogcmVzb2x2ZShfX2Rpcm5hbWUsIFwic3JjXCIpLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGVzYnVpbGQ6IHtcclxuICAgIGxvYWRlcjogXCJqc3hcIixcclxuICAgIGluY2x1ZGU6IC9zcmNcXC8uKlxcLmpzeD8kLyxcclxuICAgIGV4Y2x1ZGU6IFtdLFxyXG4gIH0sXHJcbiAgb3B0aW1pemVEZXBzOiB7XHJcbiAgICBlc2J1aWxkT3B0aW9uczoge1xyXG4gICAgICBwbHVnaW5zOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZTogXCJsb2FkLWpzLWZpbGVzLWFzLWpzeFwiLFxyXG4gICAgICAgICAgc2V0dXAoYnVpbGQpIHtcclxuICAgICAgICAgICAgYnVpbGQub25Mb2FkKHsgZmlsdGVyOiAvc3JjXFxcXC4qXFwuanMkLyB9LCBhc3luYyAoYXJncykgPT4gKHtcclxuICAgICAgICAgICAgICBsb2FkZXI6IFwianN4XCIsXHJcbiAgICAgICAgICAgICAgY29udGVudHM6IGF3YWl0IGZzLnJlYWRGaWxlKGFyZ3MucGF0aCwgXCJ1dGY4XCIpLFxyXG4gICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gIH0sXHJcblxyXG4gIC8vIHBsdWdpbnM6IFtyZWFjdCgpLHN2Z3Ioe1xyXG4gIC8vICAgZXhwb3J0QXNEZWZhdWx0OiB0cnVlXHJcbiAgLy8gfSldLFxyXG5cclxuICBwbHVnaW5zOiBbc3ZncigpLCByZWFjdCgpXSxcclxufSk7XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBK1csU0FBUyxvQkFBb0I7QUFDNVksT0FBTyxXQUFXO0FBQ2xCLFNBQVMsZUFBZTtBQUN4QixPQUFPLFFBQVE7QUFDZixPQUFPLFVBQVU7QUFKakIsSUFBTSxtQ0FBbUM7QUFRekMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsS0FBSyxRQUFRLGtDQUFXLEtBQUs7QUFBQSxJQUMvQjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLFFBQVE7QUFBQSxJQUNSLFNBQVM7QUFBQSxJQUNULFNBQVMsQ0FBQztBQUFBLEVBQ1o7QUFBQSxFQUNBLGNBQWM7QUFBQSxJQUNaLGdCQUFnQjtBQUFBLE1BQ2QsU0FBUztBQUFBLFFBQ1A7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLE1BQU0sT0FBTztBQUNYLGtCQUFNLE9BQU8sRUFBRSxRQUFRLGVBQWUsR0FBRyxPQUFPLFVBQVU7QUFBQSxjQUN4RCxRQUFRO0FBQUEsY0FDUixVQUFVLE1BQU0sR0FBRyxTQUFTLEtBQUssTUFBTSxNQUFNO0FBQUEsWUFDL0MsRUFBRTtBQUFBLFVBQ0o7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFNQSxTQUFTLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQztBQUMzQixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
