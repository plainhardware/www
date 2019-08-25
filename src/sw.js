var CACHE_NAME = process.env.VERSION || 'v1';
var urlsToCache = [
    '/',
    'index.' + process.env.VERSION + '.css',
    'index.' + process.env.VERSION + '.js',
    'vendors~index.' + process.env.VERSION + '.js',
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

self.addEventListener('install', installHandler)
self.addEventListener('activate', activateHandler)

self.addEventListener('fetch', event => {
    console.log('fetch', event)
});