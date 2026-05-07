## title

defer and async in HTML

## question

`defer` and `async` in HTML

## answer

When processing HTML, the browser downloads and executes code in script tags. This will block the rendering of HTML until the code fully runs, which creates a slow user experience.

<br/>

Setting the `defer` attribute in a script allows the browser to load the script in the background without blocking HTML. When the DOM is ready, the deferred script will execute. Deferred scripts keep relative order. This means that given two deferred scripts, the first script will always execute first even if the second script loads faster.

<br/>

The `async` attribute also allows a script to be non-blocking. Async scripts will run immediately after loading, without waiting for the DOM or any other script.
