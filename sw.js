importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0d599a6345e6244e2dbd.js",
    "revision": "febede52c8a1676ec5024f466f9419ad"
  },
  {
    "url": "/_nuxt/654acb4db706e5be32ec.js",
    "revision": "18551f7b0f77651487d4499df15c9608"
  },
  {
    "url": "/_nuxt/73ad5c167785cf440210.js",
    "revision": "cbce77103900c312be493c082582ed83"
  },
  {
    "url": "/_nuxt/87389449b3c8f2fa3361.js",
    "revision": "39c5dffb812a99a421a1d7d0e0dd4719"
  },
  {
    "url": "/_nuxt/9f9d27d7894fd16d58b4.js",
    "revision": "d91bbf5c5eddcb37d00d608d4bc1416b"
  },
  {
    "url": "/_nuxt/b0a725583ce5311448eb.js",
    "revision": "4d50e6db1ec9f38cf98075b9821c45ce"
  },
  {
    "url": "/_nuxt/b7b9b6b0687242e2fefc.js",
    "revision": "8b4725e4308e964c256c6eda5e605fb5"
  },
  {
    "url": "/_nuxt/d651659d7a6456a96171.js",
    "revision": "56d73d7ffc1fb31fd5cce5a9a7b2506e"
  }
], {
  "cacheId": "instok",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
