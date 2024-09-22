import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_CxjDLs_S.mjs';
import { manifest } from './manifest_CtyobbtL.mjs';
import { onRequest } from './_noop-middleware.mjs';

const serverIslandMap = new Map([
]);;

const _page0 = () => import('./pages/juguetes.astro.mjs');
const _page1 = () => import('./pages/libros.astro.mjs');
const _page2 = () => import('./pages/nuestro-objetivo.astro.mjs');
const _page3 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["src/pages/juguetes/index.astro", _page0],
    ["src/pages/libros/index.astro", _page1],
    ["src/pages/nuestro-objetivo/index.astro", _page2],
    ["src/pages/index.astro", _page3]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "b76d5805-ca3c-42ac-8a0f-c16acf2321ea",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
