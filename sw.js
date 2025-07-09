
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open("soma-ai-cache").then((cache) =>
      cache.addAll(["/", "/index.html", "/soma_icon.png"])
    )
  );
});
self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});
