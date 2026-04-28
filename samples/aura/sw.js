self.addEventListener('install', (e) => {
  self.skipWaiting(); // Force the waiting service worker to become the active service worker.
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(keyList.map((key) => {
        console.log('🧹 [ServiceWorker] Removing corrupt cache:', key);
        return caches.delete(key);
      }));
    })
  );
  
  self.registration.unregister()
    .then(function() {
      console.log('🧹 [ServiceWorker] Self-destruct complete. Reloading clients...');
      return self.clients.matchAll();
    })
    .then(function(clients) {
      clients.forEach(client => {
        if (client.url && "navigate" in client) {
          client.navigate(client.url);
        }
      });
    });
});
