importScripts('/instok_github_static/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/instok_github_static/_nuxt/03c3ed30827fa730acd4.js",
    "revision": "87eb0d89b63c343733c7a79facd16661"
  },
  {
    "url": "/instok_github_static/_nuxt/2ec6e974f0e7c9868e96.js",
    "revision": "6187cc19feaf4091d5232479512f8ccf"
  },
  {
    "url": "/instok_github_static/_nuxt/362719f0a6685b7c2f21.js",
    "revision": "8a2791fb66a1057ab2df10cd3806b8c9"
  },
  {
    "url": "/instok_github_static/_nuxt/5a1df667c2ff5d140118.js",
    "revision": "2fb03a3ecba8cb335812ede19f20d4f4"
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
