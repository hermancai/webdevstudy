## title

Event loop

## question

Event loop

## answer

The event loop is a mechanism in the JavaScript runtime for handling asychronous operations. The loop involves the call stack and the callback queue. One iteration (tick) of the loop goes as follows:

- The tick starts when the call stack is empty.
- The first message from the queue is moved to the call stack for execution.
- The function in the call stack may call other functions or put more messages into the queue. Everything will be handled synchronously while the initial function remains in the call stack.
- The tick ends when the call stack is empty again.

Ticks can last varying amounts of time depending on the number of operations that need to be processed.
