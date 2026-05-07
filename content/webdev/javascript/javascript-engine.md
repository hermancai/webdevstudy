## title

JavaScript engine

## question

JavaScript engine

## answer

A JavaScript engine is a program that translates JavaScript source code into machine code for execution. All modern browsers have a JavaScript engine. For example, Google Chrome uses the V8 engine, which is also used by Node.js.

<br/>

Modern JavaScript engines use JIT ("just in time") compilation to translate and execute JavaScript. The process generally goes as follows:

- A parser uses the JavaScript source code to create an Abstract Syntax Tree (AST).
- The AST is used to generate bytecode, an intermediate representation of the source code.
- An interpreter translates the bytecode into machine code for immediate execution.
- Executed code is profiled (tracked and analyzed) for possible optimizations.
- The JIT compiler takes chunks of code that are run often (aka "hot paths") and generates optimized machine code, which will be used for subsequent execution.

An engine also contains a call stack and memory heap.

- The call stack is a data structure for managing function calls. The stack stores the execution context (i.e. variables, scope, `this`) of each function. The stack can also store primitive values.

- The memory heap is unstructured memory for storing dynamic data such as functions, objects, and arrays. The heap is where memory allocation and garbage collection occur.
