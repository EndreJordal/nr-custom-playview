const CACHE_NAME = "nr-playview-v20";

// Relative (not root-absolute) so this works whether the site is served
// from a domain root (Netlify) or a subpath (GitHub Pages project sites,
// e.g. /nr-custom-playview/) — these resolve against sw.js's own URL.
const CORE_ASSETS = [
  "./",
  "./index.html",
  "./app.js",
  "./strats.js",
  "./styles.css",
  "./melee.png",
  "./ranged.png",
  "./manifest.webmanifest",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/apple-touch-icon.png",
  "./icons/favicon-32.png",
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(CORE_ASSETS)),
  );
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches
      .keys()
      .then(keys =>
        Promise.all(
          keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key)),
        ),
      ),
  );
  self.clients.claim();
});

// Cache-first for our own static assets only — cross-origin requests (e.g.
// the Google Fonts CSS/font files) are left alone and go straight to network.
self.addEventListener("fetch", event => {
  const url = new URL(event.request.url);
  if (event.request.method !== "GET" || url.origin !== self.location.origin) {
    return;
  }

  event.respondWith(
    caches.match(event.request).then(cached => cached || fetch(event.request)),
  );
});
