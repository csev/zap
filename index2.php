<h1>Hello</h1>
<a href="index2.php">Click</a>
    <script>
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/zap/sw.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
console.log(registration);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

    </script>
<hr>
<img src="csev.jpg">
<hr>
<pre>
<?php
print_r(getallheaders());
?>
</pre>
