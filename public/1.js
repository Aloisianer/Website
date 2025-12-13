const CACHE_NAME = "rickroll-video-cache-v1";
const VIDEO_URL = "/1.mp4";

self.addEventListener("install", () => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(clients.claim());
});

self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);

  if (url.pathname === VIDEO_URL) {
    event.respondWith(
      caches.open(CACHE_NAME).then(async (cache) => {
        return await cache.match(event.request).then(async (response) => {
          if (response) {
            return response;
          }
          return await fetch(event.request).then((networkResponse) => {
            cache.put(event.request, networkResponse.clone());
            return networkResponse;
          });
        });
      }),
    );
  }
});
