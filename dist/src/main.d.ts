import { PluginOptions } from "../index";
export default function transform(options: PluginOptions | undefined, code: string, id: string): {
    code: string;
};
