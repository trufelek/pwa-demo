// service worker
self.addEventListener('install', function (event) {
    console.log('SW installed');
    event.waitUntil(
        caches.open('static')
            .then(function (cache) {
                cache.addAll([
                    './',
                    'index.html',
                    'src/js/app.js',
                    'src/css/app.css',
                    'src/img/dog-sit.png',
                    'src/img/dog-stand.png',
                    'https://fonts.googleapis.com/css?family=Lobster'
                ]);
            })
    );
});

self.addEventListener('activate', function () {
    console.log('SW active');
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
            .then(function(res) {
                if (res) {
                    return res;
                } else {
                    return fetch(event.request);
                }
            })
    );
});