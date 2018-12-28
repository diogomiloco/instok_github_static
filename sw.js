importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/354cee100b8ea7895f88.js",
    "revision": "37b94835cca98cc0d545888fea44c3e8"
  },
  {
    "url": "/_nuxt/5a3428f17570fec65deb.js",
    "revision": "5eba5365f588b02620de16110a0d12bc"
  },
  {
    "url": "/_nuxt/9f9d27d7894fd16d58b4.js",
    "revision": "d91bbf5c5eddcb37d00d608d4bc1416b"
  },
  {
    "url": "/_nuxt/ba4443350ad2b1af224e.js",
    "revision": "bf5eae20ef798ac151fccc7616a02331"
  },
  {
    "url": "/_nuxt/bb0ecb17e581edda02b1.js",
    "revision": "40dd9754f985f3d5921ad8dca7c5d745"
  },
  {
    "url": "/_nuxt/c2cc87a30f806714f4b1.js",
    "revision": "7b3fb01f755538d948dc17cf1fcf3e33"
  },
  {
    "url": "/_nuxt/c51315ab92ce90bf6b0c.js",
    "revision": "f8573b1fccc16b7be82337bf4812e045"
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
