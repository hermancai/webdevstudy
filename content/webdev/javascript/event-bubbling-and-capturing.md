## title

Event bubbling and capturing

## question

Event bubbling and capturing

## answer

Event bubbling is how a browser handles events in nested elements.

```html
<div id="container">
    <button>Click<button>
</div>
```

```js
const container = document.getElementById("container");
container.addEventListener("click", (event) => {
    console.log("Clicked on container");
});
```

Upon clicking the button, a click event will trigger for both elements, starting with the inner most element (the button) and "bubbling" outwards.

<br/>

Event capturing is the opposite behavior of event bubbling, so events will trigger from the least nested element and move inwards to the most nested. Event capturing is disabled by default and can be enabled via the options passed into `addEventListener()`.

<br/>

To prevent event bubbling/capturing, use `stopPropagation()`. This method is available in the event object passed through event handler functions.
