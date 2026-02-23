1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans:- These term are explained bellow
--> getElementById:- This is used to search ans element by its id in DOM. 
--> getElementsByClassName:- This is used to search ans element by its class name in DOM. 
--> querySelector:- This is used to search Element using class or id like in css. If there is multiple element it select the first one. 

--> querySelectorAll:- This is used to search All Element using class or id like in css.

2. How do you create and insert a new element into the DOM?

Ans:- All the step is written bellow

1. Create a new element using document.createElement()
2. Add content (text or HTML) to the element using innerText or innerHTML
3. Set attributes or classes if needed
4. Select the parent element where you want to insert the new element
5. Insert the element into the DOM using appendChild(), append().

3. What is Event Bubbling? And how does it work?

Ans:- Event Bubbling is a process where an event starts from the target element and then propagates upward to its parent elements in the DOM. It works by triggering the event handler on the clicked element first, then moving up through its ancestors until it reaches the root.

4. What is Event Delegation in JavaScript? Why is it useful?

Ans:- Event Delegation is a technique where you attach a single event listener to a parent element instead of adding separate listeners to multiple child elements.

5. What is the difference between preventDefault() and stopPropagation() methods?

Ans:- preventDefault():- stops the browser’s default action.

stopPropagation():- stops the event from bubbling to parent elements in the DOM.