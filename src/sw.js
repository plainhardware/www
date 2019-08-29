var CACHE_NAME = process.env.VERSION || 'v1';
var urlsToCache = [
    '/',
    'index.' + process.env.VERSION + '.css',
    'index.' + process.env.VERSION + '.js',
    'vendors~index.' + process.env.VERSION + '.js',
    'manifest.json',
    'static/assets/favicon.ico',
    'static/assets/android-chrome-32x32.png',
    'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap',
    'https://fonts.googleapis.com/icon?family=Material+Icons',
    'https://unpkg.com/react@16.9.0/umd/react.production.min.js',
    'https://unpkg.com/react-dom@16.9.0/umd/react-dom.production.min.js'
];

const createCache = () => caches.open(CACHE_NAME)
const preCache = cache => cache.addAll(urlsToCache)
const installHandler = event => event.waitUntil(createCache().then(preCache))

const getCacheList = () => caches.keys()
const isOtherCache = cacheName => cacheName !== CACHE_NAME
const filterList = cacheList => cacheList.filter(isOtherCache)
const cleanCache = cacheList => Promise.all(filterList(cacheList).map(cacheName => caches.delete(cacheName)))
const activateHandler = event => event.waitUntil(getCacheList().then(cleanCache))


const fetchHandler = (event) => {
    event.respondWith(
        caches.match(event.request)
        .then((response) => {
            return response || fetch(event.request)
                .then(response => {
                    if (/^https:\/\/www\.gstatic\.com/.test(event.request.url)) {
                        return caches.open(CACHE_NAME).then(cache => {
                            cache.put(event.request, response.clone());
                            return response;
                        })
                    }
                    return response
                });
        })
    );
}
self.addEventListener('install', installHandler)
self.addEventListener('activate', activateHandler)
self.addEventListener('fetch', fetchHandler);