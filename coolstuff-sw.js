const CACHE_NAME = 'video-cache';
const VIDEO_URL = '/video.mp4';

self.addEventListener('fetch', (event) => {
    if (event.request.url.includes(VIDEO_URL)) {
        event.respondWith(
            caches.match(event.request)
                .then(cachedResponse => cachedResponse || fetch(event.request))
        );
    }
});