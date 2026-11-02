const CACHE_NAME = 'medatlas-cache-v1';
const PRECACHE_URLS = [
  './',
  'index.html',
  'device-library.html',
  'about.html',
  'styles.css',
  'about.css',
  'theme.js',
  'app.js',
  'about.js',
  'assets/medatlas-favicon.svg',
  'assets/medatlas-doctor-hero.webp',
  'assets/medatlas-category-photo-sheet.webp',
  'assets/founder-ankush-kumar.webp'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(PRECACHE_URLS)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.map(k => {
        if (k !== CACHE_NAME) return caches.delete(k);
      }))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  // Only handle GET requests for same origin or fonts
  if (event.request.method !== 'GET') return;

  // Network first for HTML navigation
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request).then(response => {
        if (response.status === 200) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        }
        return response;
      }).catch(() => caches.match(event.request) || caches.match('index.html'))
    );
    return;
  }

  // Cache first for static local assets and fonts
  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;
      return fetch(event.request).then(response => {
        if (response.status === 200 && (url.origin === location.origin || url.hostname.includes('fonts.g'))) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        }
        return response;
      });
    })
  );
});
