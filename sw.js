importScripts('/instok_github_static/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/instok_github_static/_nuxt/006e41be59f9f7421b0a.js",
    "revision": "ac915123fea2891ab0193a345f041383"
  },
  {
    "url": "/instok_github_static/_nuxt/226ba6d1e05bd1721613.js",
    "revision": "fbe07f9a4b20e5448a60bf91708af534"
  },
  {
    "url": "/instok_github_static/_nuxt/2d38ce9259f8a77cd64b.js",
    "revision": "a0486795b347baff05a5d436c3e7abae"
  },
  {
    "url": "/instok_github_static/_nuxt/3ef9688134712408af64.js",
    "revision": "aeb49264a1dfdecebf55d788a69787ec"
  },
  {
    "url": "/instok_github_static/_nuxt/91a8d857ef39dc588b0f.js",
    "revision": "85efcf99ecbc2347f493f1749a20c262"
  },
  {
    "url": "/instok_github_static/_nuxt/9f9d27d7894fd16d58b4.js",
    "revision": "d91bbf5c5eddcb37d00d608d4bc1416b"
  },
  {
    "url": "/instok_github_static/_nuxt/cc082506ff6be38c23fd.js",
    "revision": "321f287be57c2650dd86b0e14bb5d79a"
  },
  {
    "url": "/instok_github_static/_nuxt/d8d4cfd777b5f030b58b.js",
    "revision": "5739755a173ea3a99c7dc4cca5b841b0"
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
