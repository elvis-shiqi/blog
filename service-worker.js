/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "5f54ec40dd217d08960cc7b891c3b0e7"
  },
  {
    "url": "assets/css/0.styles.c285421f.css",
    "revision": "88457d3b897ab5e9aba4b810ccfb2113"
  },
  {
    "url": "assets/fonts/iconfont.938fa69e.woff",
    "revision": "938fa69ea89bccb0f20d643cc5f07cbe"
  },
  {
    "url": "assets/fonts/iconfont.ecabaf00.ttf",
    "revision": "ecabaf00c2c5be9907d524bb21a0f0dc"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.c8a6a01e.js",
    "revision": "dede168b3d0d0902ade041d0547e07ec"
  },
  {
    "url": "assets/js/10.a631ee47.js",
    "revision": "bb3f764721dd46d8862e6000dea65e8a"
  },
  {
    "url": "assets/js/11.9596d8cf.js",
    "revision": "8299b9fb1aee7fa7f4d0089faee38bbc"
  },
  {
    "url": "assets/js/12.b03a252c.js",
    "revision": "97fe3a5a658b992ebf05aa1e006a9805"
  },
  {
    "url": "assets/js/13.a233e05d.js",
    "revision": "0808ba4ce1867b73934c9629d7953fe3"
  },
  {
    "url": "assets/js/14.8b00c929.js",
    "revision": "80c40b3274e93502a32ce7cdc9ebfa6c"
  },
  {
    "url": "assets/js/15.f49b65c6.js",
    "revision": "9475fbb66f5a7857921949694342f6b2"
  },
  {
    "url": "assets/js/16.005fc751.js",
    "revision": "4d9120af568e911f006f47c973e9f482"
  },
  {
    "url": "assets/js/17.3aaa6f82.js",
    "revision": "ac91a3aea5bc7e005473a7af2bb1e84b"
  },
  {
    "url": "assets/js/18.a4d3205a.js",
    "revision": "862011ce360fed56e5d7ea0e5efbe2ee"
  },
  {
    "url": "assets/js/19.c35904cb.js",
    "revision": "c818c9c9d4266486f78d9b7dbc73d0df"
  },
  {
    "url": "assets/js/20.f1ffb635.js",
    "revision": "46d2ecda625c8f7cc7b33d44ba8aaff2"
  },
  {
    "url": "assets/js/21.1295604b.js",
    "revision": "147d58954c0720580e39d3aece689f70"
  },
  {
    "url": "assets/js/22.e64e59ec.js",
    "revision": "340c9c47f9414e39c7ae6c535c554a66"
  },
  {
    "url": "assets/js/23.68fc6c9c.js",
    "revision": "1ab0189b895ba82caea1815790be73ac"
  },
  {
    "url": "assets/js/24.edce0c02.js",
    "revision": "0e543cdadea67c04066ca35de82c9420"
  },
  {
    "url": "assets/js/25.74f65f4b.js",
    "revision": "e6091b2a83ef9cc7bd1ad78d9ddd3cf5"
  },
  {
    "url": "assets/js/26.0fb1799a.js",
    "revision": "a9aa06e196ffea357a88bbb12d600fd0"
  },
  {
    "url": "assets/js/27.d48531e6.js",
    "revision": "612bd56f26379e5a81df1d8edb202023"
  },
  {
    "url": "assets/js/28.41b56a2d.js",
    "revision": "30c6b988226cf7e98d7992f7c65ddcbb"
  },
  {
    "url": "assets/js/3.d42a166c.js",
    "revision": "94811eb7fad10c9bc5e63d12738ba261"
  },
  {
    "url": "assets/js/4.3a927af6.js",
    "revision": "386a34be56e1353c35288b9ad6de0e32"
  },
  {
    "url": "assets/js/5.499e72f4.js",
    "revision": "b555152f06d5ba461ee55207cbf33bc6"
  },
  {
    "url": "assets/js/6.a9135347.js",
    "revision": "aacfc3ab38c1e2e833675ba0ca4cf166"
  },
  {
    "url": "assets/js/7.25bf4f1e.js",
    "revision": "27cde83459847a3418e9c1c93d919877"
  },
  {
    "url": "assets/js/8.495be0f3.js",
    "revision": "500b5f4cadfdfc829553d7018649905e"
  },
  {
    "url": "assets/js/9.25f9d941.js",
    "revision": "f58253dff5ac1be18581fde6dff6bd69"
  },
  {
    "url": "assets/js/app.18fbf850.js",
    "revision": "8617383608e68758567614e1827a82c1"
  },
  {
    "url": "categories/index.html",
    "revision": "16581b8f4579ccbde74cfd6e28da7634"
  },
  {
    "url": "handbook/ECMAScript/5.html",
    "revision": "33ee9723158fec7cec0dac2c9f055def"
  },
  {
    "url": "handbook/ECMAScript/6.html",
    "revision": "c176f40962807f0d9385ec087b599e13"
  },
  {
    "url": "handbook/ECMAScript/7.html",
    "revision": "78c28985812ba9d4abe9c51004ca71ac"
  },
  {
    "url": "handbook/ECMAScript/8.html",
    "revision": "bddc36651a4594bb312a1b2c1d10d46f"
  },
  {
    "url": "handbook/Electron/Base.html",
    "revision": "4dea61095f9836bfbf4139a8cea4279f"
  },
  {
    "url": "handbook/Electron/Mac.html",
    "revision": "ad685a9227a33c39ebbdc7df06e0453d"
  },
  {
    "url": "handbook/Electron/Windows.html",
    "revision": "70d43d97f3fd348b1e30af4a5234929f"
  },
  {
    "url": "handbook/Git/Common.html",
    "revision": "88f76467fb33897be5b4a73e1bc07e6d"
  },
  {
    "url": "handbook/JavaScript/eventloop.html",
    "revision": "c6e22289e74b001de6afd8dae5e3db1a"
  },
  {
    "url": "handbook/JavaScript/extend.html",
    "revision": "7da2d7b4c8a803e6e42303778b31f661"
  },
  {
    "url": "handbook/Node/Base.html",
    "revision": "144701c531f927f50bc45a4e880e6973"
  },
  {
    "url": "handbook/PowerOptimize/Base.html",
    "revision": "ef881986baa78ad7f9ec156482a98f05"
  },
  {
    "url": "handbook/React/17.html",
    "revision": "6b932df383c4fe11a3f7794da6406359"
  },
  {
    "url": "handbook/TypeScript/BaseType.html",
    "revision": "73e081a0e84dbe87f8470ed4beddca4c"
  },
  {
    "url": "handbook/Vue/2.html",
    "revision": "a6c136a6b458b9409575d6525db2209f"
  },
  {
    "url": "handbook/Vue/3.html",
    "revision": "e1d68609502f48a295298c5b6df9b688"
  },
  {
    "url": "handbook/Webpack/Base.html",
    "revision": "c0c788c5c2b243006895e6e630ef92ff"
  },
  {
    "url": "index.html",
    "revision": "956aca193853713830f43899bc2d701a"
  },
  {
    "url": "tag/index.html",
    "revision": "fd53552152c7b82a7c744efbb1c562b0"
  },
  {
    "url": "timeline/index.html",
    "revision": "00fb4e6b84ce52391c313f5e8db620c6"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
