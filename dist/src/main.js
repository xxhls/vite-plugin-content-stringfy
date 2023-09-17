"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function transform(options = {}, code, id) {
    return {
        code: `var data = ${JSON.stringify(code)};\nexport default data;`
    };
}
exports.default = transform;
