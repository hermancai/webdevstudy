## title

localStorage and sessionStorage

## question

`localStorage` and `sessionStorage`

## answer

`localStorage` and `sessionStorage` are both properties of the global `window` object. The property allows access to a `Storage` object, which corresponds to the web page's current origin (protocol, domain, and port). Behavior for `file:` URLs (i.e. local files) is undefined.

<br/>

Data can be stored as key-value pairs. The `Storage` object provides these properties: `length`, `key()`, `getItem()`, `setItem()`, `removeItem()`, and `clear()`.

<br/>

Data in `localStorage` does not expire. However, data loaded into `localStorage` during a "private" browsing session will be cleared when all private browser tabs are closed.

<br/>

Data in `sessionStorage` is cleared when the page session ends. When a new tab is opened, a unique page session is created for that particular tab. A session lasts as long as the tab is open, and persists across page reload/restore. Opening tabs with the same URL will create a new `sessionStorage`, and duplicating a tab will copy the original tab's `sessionStorage`.
