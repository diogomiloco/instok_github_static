importScripts('/instok_github_static/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/instok_github_static/_nuxt/2d38ce9259f8a77cd64b.js",
    "revision": "a0486795b347baff05a5d436c3e7abae"
  },
  {
    "url": "/instok_github_static/_nuxt/84a641d0b52cd546e687.js",
    "revision": "d9ef83ba2730d6f4c1100abaf4910fe4"
  },
  {
    "url": "/instok_github_static/_nuxt/9f9d27d7894fd16d58b4.js",
    "revision": "d91bbf5c5eddcb37d00d608d4bc1416b"
  },
  {
    "url": "/instok_github_static/_nuxt/a328180336f2e3a09165.js",
    "revision": "8823c6e4d1db6c91aeca09ab0b326103"
  },
  {
    "url": "/instok_github_static/_nuxt/b903e42718ca67e71865.js",
    "revision": "6bf6e506c054685e262fb10fecb4b8d3"
  },
  {
    "url": "/instok_github_static/_nuxt/ced0f7efabfa7d12add1.js",
    "revision": "46d5a988e6485e1db1bef7709efeb3fb"
  },
  {
    "url": "/instok_github_static/_nuxt/d8d4cfd777b5f030b58b.js",
    "revision": "5739755a173ea3a99c7dc4cca5b841b0"
  },
  {
    "url": "/instok_github_static/_nuxt/e6091aa89b35e4d08939.js",
    "revision": "1410ce4f142118646fd14e1f4ff2fa67"
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
