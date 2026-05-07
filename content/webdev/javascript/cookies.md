## title

Cookies

## question

Cookies

## answer

A cookie is a piece of data that a server can store on a user's browser. Cookies are typically used for session management, personalization, or tracking. Users may change browser settings to accept/decline cookies.

<br/>

A server can send cookies by using the `Set-Cookie` header in a response. After the client receives this response, subsequent requests from the browser will automatically include these stored cookies in the `Cookie` header.

<br/>

Cookie Attributes

- `Expires` and `Max-age` determine when the cookie will be deleted
- `Secure` allows the cookie to only be sent to the server over the HTTPS protocol
- `HttpOnly` denies cookie access via the JavaScript `Document.cookie` API
- `Domain` determines whether subdomains will receive the cookie
- `Path` sends the cookie if the requested URL matches
- `SameSite` determines if the cookie can be sent from a cross-origin request
    - `Strict`: only send the cookie if the request is from the origin site
    - `Lax`: allow sending the cookie if the user navigates to the origin site from an external site. This is the default setting.
    - `None`: allows cross-site requests but only through HTTPS. The `Secure` attribute must also be set.
