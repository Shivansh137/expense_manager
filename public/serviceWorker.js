let chacheName = "appCache";

self.addEventListener("install",(event)=>{
    event.waitUntil(
        caches.open(chacheName).then((cache)=>{
            cache.addAll([
                '/assets/index-B_5mOc2D.js',
                '/assets/index-CO_jszTE.css',
                '/index.html',
                '/'
            ])
        })
    )
})

self.addEventListener('fetch', (event)=>{
    event.respondWith(async () =>{
        const cachedRes = await caches.match(event.request);
        if(cachedRes) return cachedRes;

        return fetch(event.request);
    })
})
