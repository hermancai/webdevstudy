## title

Event delegation

## question

Event delegation

## answer

Event delegation is a pattern based on event bubbling. Delegation allows containing elements to handle nested elements. Consider the following HTML:

```html
<div id="container">
    <button>1</button>
    <button>2</button>
    <button>3</button>
</div>
```

Suppose each button should have a click event listener that changes the clicked button's background color. Instead of adding an event to each button, a single event can be added to the container div:

```js
const container = document.getElementById("container");
container.addEventListener("click", (event) => {
    event.target.style.backgroundColor = "blue";
});
```

NOTE: The event object contains these properties: `event.target` and `event.currentTarget`. <br/>`event.target` refers to the element that received the click event (i.e. the inner most element). `event.currentTarget` refers to the element that the event handler is attached to. This is why even though the container has the event listener, only the buttons are changed because the function uses `event.target`.
