## title

WeakMap and WeakSet

## question

`WeakMap` and `WeakSet`

## answer

Objects take up memory, and can be accessed via references. As long as at least one reference to an object exists, the object will not be garbage collected by the JavaScript engine. `WeakMap` and `WeakSet` are data structures that store references to objects, but do not block garbage collection if no other references outside of the structure exist.

<br/>

`WeakMap` holds key-value pairs. The keys must be objects, not primitives. If there are no references to the object outside of the WeakMap, the object will be automatically removed from the WeakMap. `WeakSet` is similar except it must store objects. Both data structures do not support iteration or size because the behavior of garbage collection is not guaranteed.

<br/>

One use case for a WeakMap is to cache calculated data related to an object, reducing redundant processing. Once the associated object is removed, the WeakMap will also be cleaned up. This is better than using a traditional Map because the Map will keep the object reference, preventing garbage collection and taking up memory.
