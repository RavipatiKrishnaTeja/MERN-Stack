Js is synchronous in nature
which means it execute one line of code at a time.

but if a line of code take longer period of time , the below code should wait
until the code execution is completed.

in order to avoid this behaviour we will be converted js into asynchronous code.

In order to convert to asynchronous way, js alone isn't enough,
we have WEB browser API's which will help it to convert into asynchronous

WEB API's makes js asynchronous programming possible.
WEB browser will give use certain methods which will alow us to use WEB browser API.

1. setTimeout.
2. setInterval.
3. Local Storage.
4. fetch

---

1. stack order.
2. queue order.
3. web api.

event loop
stack ---> web api (browser)---> queue ---> stack

// data types

1. primitive data type ( pass by value) --->it stores exact value (immutable--> we cannot change internal elements)
   a. number
   b. boolean
   c. string
   d. null
   e. undefined

2. non primitive data type ( pass by reference) --->it stores address ( mutable--> we can change internal elements)
   a. array.
   b. function.
   c. object.
