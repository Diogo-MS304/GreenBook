const CACHE_NAME = "flora-shell-v3";
const APP_SHELL = [
    "./",
    "./index.html",
    "./manifest.webmanifest",
    "./assets/icons/flora.svg",
    "./assets/icons/apple-touch-icon.png",
    "./assets/icons/flora-192.png",
    "./assets/icons/flora-512.png",
    "./assets/icons/flora-maskable-512.png"
];

self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL))
    );
    self.skipWaiting();
});

self.addEventListener("activate", (event) => {
    event.waitUntil(
        caches.keys().then((keys) => Promise.all(
            keys
                .filter((key) => key.startsWith("flora-shell-") && key !== CACHE_NAME)
                .map((key) => caches.delete(key))
        ))
    );
    self.clients.claim();
});

self.addEventListener("fetch", (event) => {
    const request = event.request;
    const url = new URL(request.url);

    if (request.method !== "GET" || url.origin !== self.location.origin) {
        return;
    }

    if (request.mode === "navigate") {
        event.respondWith(
            fetch(request).catch(() => caches.match("./index.html"))
        );
        return;
    }

    event.respondWith(
        caches.match(request).then((cachedResponse) => cachedResponse || fetch(request))
    );
});