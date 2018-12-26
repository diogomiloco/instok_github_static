importScripts('/instok_github_static/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/instok_github_static/_nuxt/028ae3904ba914609311.js",
    "revision": "85ebcd4e21ef46d5fd6310a754e34916"
  },
  {
    "url": "/instok_github_static/_nuxt/145626dcd251908d848e.js",
    "revision": "3209aa7609a7f8ca13df3861706c10b0"
  },
  {
    "url": "/instok_github_static/_nuxt/204f203481c421715ee0.js",
    "revision": "c981fdb757c4f95270c65788a6500c2d"
  },
  {
    "url": "/instok_github_static/_nuxt/647e4ce74c3b6f61c5e9.js",
    "revision": "61961aba85d00b1001ac777ad7741de6"
  },
  {
    "url": "/instok_github_static/_nuxt/778c6a14bbe2cb9a66e4.js",
    "revision": "a191edd0f291dbb9c255ece344ef996e"
  },
  {
    "url": "/instok_github_static/_nuxt/9f9d27d7894fd16d58b4.js",
    "revision": "d91bbf5c5eddcb37d00d608d4bc1416b"
  },
  {
    "url": "/instok_github_static/_nuxt/d651659d7a6456a96171.js",
    "revision": "56d73d7ffc1fb31fd5cce5a9a7b2506e"
  },
  {
    "url": "/instok_github_static/_nuxt/f62d26e5b660bb5d7c30.js",
    "revision": "43d846bff68c1e7588c7e055f8467e03"
  }
], {
  "cacheId": "instok",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/instok_github_static/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/instok_github_static/.*'), workbox.strategies.networkFirst({}), 'GET')
