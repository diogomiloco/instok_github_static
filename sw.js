importScripts('/instok_github_static/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/instok_github_static/_nuxt/21f09b8f505b53893605.js",
    "revision": "adeea1274cf4645de4bdd0436752c530"
  },
  {
    "url": "/instok_github_static/_nuxt/354cee100b8ea7895f88.js",
    "revision": "37b94835cca98cc0d545888fea44c3e8"
  },
  {
    "url": "/instok_github_static/_nuxt/9f9d27d7894fd16d58b4.js",
    "revision": "d91bbf5c5eddcb37d00d608d4bc1416b"
  },
  {
    "url": "/instok_github_static/_nuxt/bb0ecb17e581edda02b1.js",
    "revision": "40dd9754f985f3d5921ad8dca7c5d745"
  },
  {
    "url": "/instok_github_static/_nuxt/c2cc87a30f806714f4b1.js",
    "revision": "7b3fb01f755538d948dc17cf1fcf3e33"
  },
  {
    "url": "/instok_github_static/_nuxt/c51315ab92ce90bf6b0c.js",
    "revision": "f8573b1fccc16b7be82337bf4812e045"
  },
  {
    "url": "/instok_github_static/_nuxt/d651659d7a6456a96171.js",
    "revision": "56d73d7ffc1fb31fd5cce5a9a7b2506e"
  },
  {
    "url": "/instok_github_static/_nuxt/d73901119a65514c79e5.js",
    "revision": "aca1a07b5d8d7fda3d855a876db49b49"
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
