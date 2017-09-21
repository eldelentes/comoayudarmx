self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open('comoayudar-v1').then(function (cache) {
      return cache.addAll([
        './'
      ]).then(function () {
        self.skipWaiting()
      })
    })
  )
})

self.addEventListener('fetch', function (event) {
  if (event.request.method !== 'GET' && event.request.url.substring(0, 4) !== 'http') {
    return
  }
  event.respondWith(
    caches.match(event.request).then(function (cached) {
      var networked = fetch(event.request)
        .then(fetchedFromNetwork, unableToResolve)
        .catch(unableToResolve)

      return cached || networked

      function fetchedFromNetwork (response) {
        var cacheCopy = response.clone()
        caches.open('comoayudar-v1').then(function add (cache) {
          cache.put(event.request, cacheCopy)
        })
        return response
      }

      function unableToResolve () {
        return new Response('<h1>Service Unavailable</h1>', {
          status: 503,
          statusText: 'Service Unavailable',
          headers: new Headers({
            'Content-Type': 'text/html'
          })
        })
      }
    })
  )
})
