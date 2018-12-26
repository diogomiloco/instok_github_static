importScripts('/instok_github_static/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/instok_github_static/_nuxt/145626dcd251908d848e.js",
    "revision": "3209aa7609a7f8ca13df3861706c10b0"
  },
  {
    "url": "/instok_github_static/_nuxt/18b4ff1a1928f71baa47.js",
    "revision": "5788768fb0de4cb9c94f0f3616748722"
  },
  {
    "url": "/instok_github_static/_nuxt/204f203481c421715ee0.js",
    "revision": "c981fdb757c4f95270c65788a6500c2d"
  },
  {
    "url": "/instok_github_static/_nuxt/4045c84209c80cfdb41a.js",
    "revision": "bd6c8ef1758ec49b7f95a432a69e0900"
  },
  {
    "url": "/instok_github_static/_nuxt/778c6a14bbe2cb9a66e4.js",
    "revision": "a191edd0f291dbb9c255ece344ef996e"
  },
  {
    "url": "/instok_github_static/_nuxt/8545b4a9af34ccd6ae56.js",
    "revision": "c764997393d8ff230b426be3113db72a"
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
