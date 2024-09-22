import 'cookie';
import 'kleur/colors';
import 'es-module-lexer';
import './chunks/astro-designed-error-pages_BqoW7IuU.mjs';
import { d as decodeKey } from './chunks/astro/server_DdwkNl9N.mjs';
import 'clsx';
import { compile } from 'path-to-regexp';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    const path = toPath(sanitizedParams);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///home/fgomez/opt/astro/rincondeduendes-daisyui/","adapterName":"@astrojs/vercel/serverless","routes":[{"file":"juguetes/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/juguetes","isIndex":true,"type":"page","pattern":"^\\/juguetes\\/?$","segments":[[{"content":"juguetes","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/juguetes/index.astro","pathname":"/juguetes","prerender":true,"fallbackRoutes":[],"distURL":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"libros/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/libros","isIndex":true,"type":"page","pattern":"^\\/libros\\/?$","segments":[[{"content":"libros","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/libros/index.astro","pathname":"/libros","prerender":true,"fallbackRoutes":[],"distURL":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"nuestro-objetivo/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/nuestro-objetivo","isIndex":true,"type":"page","pattern":"^\\/nuestro-objetivo\\/?$","segments":[[{"content":"nuestro-objetivo","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/nuestro-objetivo/index.astro","pathname":"/nuestro-objetivo","prerender":true,"fallbackRoutes":[],"distURL":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/home/fgomez/opt/astro/rincondeduendes-daisyui/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/home/fgomez/opt/astro/rincondeduendes-daisyui/src/pages/juguetes/index.astro",{"propagation":"none","containsHead":true}],["/home/fgomez/opt/astro/rincondeduendes-daisyui/src/pages/libros/index.astro",{"propagation":"none","containsHead":true}],["/home/fgomez/opt/astro/rincondeduendes-daisyui/src/pages/nuestro-objetivo/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:src/pages/nuestro-objetivo/index@_@astro":"pages/nuestro-objetivo.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:src/pages/juguetes/index@_@astro":"pages/juguetes.astro.mjs","\u0000@astro-page:src/pages/libros/index@_@astro":"pages/libros.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","/home/fgomez/opt/astro/rincondeduendes-daisyui/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_BkR_XoPb.mjs","/home/fgomez/opt/astro/rincondeduendes-daisyui/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_EVCPqZNt.mjs","\u0000@astrojs-manifest":"manifest_CtyobbtL.mjs","@astrojs/react/client.js":"_astro/client.5I5BMcNS.js","/home/fgomez/opt/astro/rincondeduendes-daisyui/src/components/NavBar.astro?astro&type=script&index=0&lang.ts":"_astro/NavBar.astro_astro_type_script_index_0_lang.D1bfBaiX.js","/home/fgomez/opt/astro/rincondeduendes-daisyui/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts":"_astro/ClientRouter.astro_astro_type_script_index_0_lang.CmkSwYHY.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/home/fgomez/opt/astro/rincondeduendes-daisyui/src/components/NavBar.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"astro:page-load\",()=>{const n=document.getElementById(\"menu-toggle\"),e=document.getElementById(\"mobile-menu\");if(!n||!e){console.error(\"Elementos no encontrados\");return}n.addEventListener(\"click\",()=>{e.style.display===\"none\"||!e.style.display?e.style.display=\"flex\":e.style.display=\"none\"})});"]],"assets":["/_astro/creativas_2.CIEyHBoA.jpg","/_astro/creativas_5.BP-Xoog-.jpg","/_astro/creativas_10.C1zn7ZjN.jpg","/_astro/creativas_7.DK60v4za.jpg","/_astro/portada_libreria2.D-yv0vTI.png","/_astro/creativas_8.c0nKO4jJ.jpg","/_astro/Cover.B5PZXAok.png","/_astro/LOGO.B_rJGv6W.svg","/_astro/index.BaflUiTG.css","/Cover.png","/favicon.ico","/favicon.svg","/_astro/ClientRouter.astro_astro_type_script_index_0_lang.CmkSwYHY.js","/_astro/client.5I5BMcNS.js","/juguetes/index.html","/libros/index.html","/nuestro-objetivo/index.html","/index.html"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"NfM+Oyc+9uOXABUpmA/dug6pwmx1ipMn0oiBabqvF/E=","envGetSecretEnabled":true});

export { manifest };
