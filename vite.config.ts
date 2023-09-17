import { defineConfig } from "vite";
import * as path from "path";

export default defineConfig({
	root: path.join(__dirname),
	base: "/",
	mode: "development",
	publicDir: path.join(__dirname, "./public"),
	cacheDir: "node_modules/.vite",
	resolve: {
		alias: {
			"@": path.join(__dirname, "./")
		},
		extensions: [".ts"]
	},
	css: {},
	json: {
		namedExports: true,
		stringify: true
	},
	logLevel: "info",
	clearScreen: false,
	appType: "spa",
	server: {},
	build: {
		target: "modules",
		modulePreload: {
			polyfill: true
		},
		outDir: path.join(__dirname, "./dist"),
		assetsDir: "assets",
		assetsInlineLimit: 4096,
		cssCodeSplit: true,
		sourcemap: true,
		lib: {
			entry: path.join(__dirname, "./index.ts"),
			name: "alaskan"
		},
		manifest: true,
		ssrManifest: false,
		ssr: false,
		minify: "esbuild",
		emptyOutDir: true,
		copyPublicDir: true,
		reportCompressedSize: false,
		chunkSizeWarningLimit: 500,
		watch: null
	},
});
