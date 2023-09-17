import { PluginOptions } from "../index";

export default function transform(
	options: PluginOptions = {},
	code: string,
	id: string,
) {
	return {
		code: `var data = ${JSON.stringify(code)};\nexport default data;`
	};
}
