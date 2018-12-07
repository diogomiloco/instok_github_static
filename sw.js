importScripts('/instok_github_static/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/instok_github_static/_nuxt/0ad37ee274205990c8fe.js",
    "revision": "38ddc0a6f0a978fd613c4aee871f0218"
  },
  {
    "url": "/instok_github_static/_nuxt/1885a429c8469a59ec84.js",
    "revision": "27e4d500823513b69732bc3af363cd44"
  },
  {
    "url": "/instok_github_static/_nuxt/2d38ce9259f8a77cd64b.js",
    "revision": "a0486795b347baff05a5d436c3e7abae"
  },
  {
    "url": "/instok_github_static/_nuxt/9f9d27d7894fd16d58b4.js",
    "revision": "d91bbf5c5eddcb37d00d608d4bc1416b"
  },
  {
    "url": "/instok_github_static/_nuxt/c034d99103b574ad55b3.js",
    "revision": "53609ddc2ac4b0bc05012ac0c7612665"
  },
  {
    "url": "/instok_github_static/_nuxt/d6aaed6986c084ebe837.js",
    "revision": "966502527ef6e9c5d6a932aff29d2ff1"
  },
  {
    "url": "/instok_github_static/_nuxt/d8d4cfd777b5f030b58b.js",
    "revision": "5739755a173ea3a99c7dc4cca5b841b0"
  },
  {
    "url": "/instok_github_static/_nuxt/fc3f3bdea35b91d0a6cc.js",
    "revision": "2c7a4e2a9a16a75f95b4538177b1978d"
  }
], {
  "cacheId": "instok_fakedoor",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/instok_github_static/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/instok_github_static/.*'), workbox.strategies.networkFirst({}), 'GET')
