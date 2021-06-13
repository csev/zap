console.log('worker.js');
this.addEventListener('install', function(event) {
    event.waitUntil(self.skipWaiting());
    console.log('[SW] serviceworker installed!');
});

/*
self.addEventListener('activate', function(event) {
    event.waitUntil(self.clients.claim());
    console.log('[SW] serviceworker ready!');
});
*/

this.addEventListener('activate', function(event) {
console.log('Claiming control');
return self.clients.claim();
});

this.addEventListener("fetch", event => {
  console.log('workerfetch');
  console.log(event.request.url);
   const newRequest = new Request(event.request, {
        headers: {"Authorization": "Bearer XXX-my-token"},
        mode: "cors"
    });
    return fetch(newRequest);

});

console.log('worker.js 2');
