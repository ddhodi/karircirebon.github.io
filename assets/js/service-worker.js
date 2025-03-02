self.addEventListener("install", (event) => {
    event.waitUntil(
      caches.open("app-cache").then((cache) => {
        return cache.addAll([
          "/",
          "/index.html",
          "/assets/css/styles.css",
          "/assets/js/script.js",
          "/assets/icon/logo.png",
        ]);
      })
    );
  });
  
  self.addEventListener("fetch", (event) => {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  });
  