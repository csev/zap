self.addEventListener('install', function(event) {
  console.log("Perform install steps");
});

self.addEventListener('activate', function(event) {
  console.log("Activated");
});

self.addEventListener('fetch', event => {
  event.respondWith(customHeaderRequestFetch(event))
})

function customHeaderRequestFetch(event) {
  // decide for yourself which values you provide to mode and credentials
  const newRequest = new Request(event.request, {
    // https://developer.mozilla.org/en-US/docs/Web/API/Request/mode
    mode: 'cors',
    // https://developer.mozilla.org/en-US/docs/Web/API/Request/credentials#syntax
    credentials: 'same-origin',
    headers: {
      'x-my-custom-header': 'The Most Amazing Header Ever'
    }
  })
  console.log('Returning 2.');
    // newRequest.headers['X-Chuck'] = "42";
  console.log(newRequest);
  return fetch(newRequest)
}

/*

self.addEventListener('fetch', function(event) {
    console.log('Yada url ', event.request.url);
    console.log(self);
    console.log('Event');
    console.log(event);
    event.request.headers['X-Chuck'] = "42";
    console.log('Yada 1');
    console.log(event);
    return;
});
*/

console.log('Zap');

// https://www.sjoerdlangkemper.nl/2021/01/06/adding-headers-to-image-request-using-service-workers/
