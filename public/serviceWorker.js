let chacheName = "appCache";

self.addEventListener("install",(event)=>{
    event.waitUntil(
        caches.open(chacheName).then((cache)=>{
            cache.addAll([
                '/assets/index-P6LYkqov.js',
                '/assets/index-Obk6xh9Z.css',
                '/index.html',
                '/'
            ])
        })
    )
})

self.addEventListener('fetch', (event)=>{
    event.respondWith(
        caches.match(event.request).then((res)=>{
            if(res) return res
        })
    )
})
