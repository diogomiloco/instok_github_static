importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/6895af1f223385814b5f.js",
    "revision": "ae9d3ffcd93b3362cb53149c55bd56d9"
  },
  {
    "url": "/_nuxt/6c57de968145da1b3818.js",
    "revision": "ef57ad28eb6db37deef9222f2a14d853"
  },
  {
    "url": "/_nuxt/9f9477469885bd552cd3.js",
    "revision": "045baeec5a06b78e2c0975018999405a"
  },
  {
    "url": "/_nuxt/9f9d27d7894fd16d58b4.js",
    "revision": "d91bbf5c5eddcb37d00d608d4bc1416b"
  },
  {
    "url": "/_nuxt/bdf61e9c33da79b0690b.js",
    "revision": "1b0caa4f3fe8adc2431918c8f513b64f"
  },
  {
    "url": "/_nuxt/c18f67813bcb0c049b55.js",
    "revision": "cadead34b5ea9a1c99070ed9ea06a7f9"
  },
  {
    "url": "/_nuxt/d4cf50c63ff645a8ac54.js",
    "revision": "7bc9419b58eaf643f9882af7c7790145"
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
