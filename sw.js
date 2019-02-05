importScripts('./_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "./_nuxt/1d65bd66556991301bcf.js",
    "revision": "a5ec02b14b8ef377348e3ef2b086651f"
  },
  {
    "url": "./_nuxt/9cd366861d03b890a62b.js",
    "revision": "d7469844925251a28a105323fb98f089"
  },
  {
    "url": "./_nuxt/9f461312e3da725c7dc4.js",
    "revision": "db0289328ad8e2ad59f968397c799c28"
  },
  {
    "url": "./_nuxt/9f9d27d7894fd16d58b4.js",
    "revision": "d91bbf5c5eddcb37d00d608d4bc1416b"
  },
  {
    "url": "./_nuxt/aa90fed4c11ddec48f5b.js",
    "revision": "64e7a450c2e1cb2b7276c71b5b9e7ad0"
  },
  {
    "url": "./_nuxt/d0ca035e877b7384986d.js",
    "revision": "16aaa52a15e4a08d06686565dff079d1"
  },
  {
    "url": "./_nuxt/d651659d7a6456a96171.js",
    "revision": "56d73d7ffc1fb31fd5cce5a9a7b2506e"
  },
  {
    "url": "./_nuxt/dc08e38b2a8ec5e256c9.js",
    "revision": "bde06e3ee990a9e00ef9d7a957fcd71f"
  }
], {
  "cacheId": "instok",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('./_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('./.*'), workbox.strategies.cacheFirst({}), 'GET')
