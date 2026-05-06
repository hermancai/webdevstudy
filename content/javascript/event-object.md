## title

Event object

## question

Event object

## answer

On the browser, HTML elements may have event listeners attached. When an event happens, an event object is automatically passed to the event handler function. This object represents the event and provides properties/methods for managing the event.

```js
function handleEvent(event) {
    event.preventDefault();
    event.target.style.backgroundColor = "blue";
}

someElement.addEventLister("click", handleEvent);
```
