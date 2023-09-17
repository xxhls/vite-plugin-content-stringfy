import { Plugin } from "vite";
import * as path from "path";

export type PluginOptions = {
	files?: string[]
}

const DEFAULT_OPTIONS: PluginOptions = {
	files: ["xml", "htm", "html"]
};

export default (options: PluginOptions = {}): Plugin => {
	const opts: PluginOptions = Object.assign({}, DEFAULT_OPTIONS, options);

	const transforms: {
		[key: string]: any
	} = {};

	const loadTransform = function (key: string) {
		if (transforms[key]) {
			return transforms[key].default;
		}
		transforms[key] = require(path.join(__dirname, "./src/main.ts"));
		return transforms[key].default;
	};

	return {
		name: "vite:content",
		async transform(code: string, id: string) {
			const file_suffix = id.split(".").pop();
			if (file_suffix && opts.files?.includes(file_suffix as string)) {
				return loadTransform("content")(opts, code, id);
			}
			return null;
		},
	};
};
