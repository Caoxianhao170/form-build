console.log('serviceWorker.js is running');
self.addEventListener('install', function(event) {
  // Perform install steps
  caches.open('v1').then(function(cache) {
    return cache.addAll([]);
  })
});

self.addEventListener('activate', function(event) {
  // Perform activate steps

})
self.addEventListener( 'fetch', function(event) {
  // Perform fetch steps
})