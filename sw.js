self.addEventListener('fetch', function(event) {
    console.log('Yada');
    const newRequest = new Request(event.request, {
        headers: {"Authorization": "Bearer XXX-my-token"},
        mode: "cors"
    });
    console.log('Yada 1');
    return fetch(newRequest);
});

console.log('Zap');

// https://www.sjoerdlangkemper.nl/2021/01/06/adding-headers-to-image-request-using-service-workers/
