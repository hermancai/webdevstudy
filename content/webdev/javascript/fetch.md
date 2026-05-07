## title

fetch()

## question

`fetch()`

## answer

`fetch()` is a global function for requesting network resources. The function returns a promise, which resolves into a `Response` object when the network response is complete. The promise only rejects when the request fails. This means a valid response will be considered fulfilled regardless of the returned HTTP status.

<br/>

`fetch()` takes in a URL or `Request` object that points to the desired network resource. Options can also be passed, containing properties such as body, credentials, headers, and method.

<br/>

The returned `Response` object includes information about the response such as the HTTP status and the body, which contains the content of the requested resource. `Response.json()` can be used to parse the body into valid JSON.

```js
(async () => {
    const response = await fetch("https://someurl.com/resource", {
        method: "GET",
    });
    const responseJSON = await response.json();
})();
```
