### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Ans:
getElementsByClassName : Method to select a specific element by class.
getElementById :   Method to select multiple element by id.
quarySelector  :   Method to select the first matching element using with CSS selectors.
querySelectorAll : Method to select the all matching element using with CSS selectors.

### 2. How do you create and insert a new element into the DOM?
Ans:
A new element is created with document.createElement() and added to the DOM with appendChild() or append().

### 3. What is Event Bubbling? And how does it work?
Ans:
Event Bubbling is a process where when an event occurs in a child element, that event propagates upward step by step to its parent → grandparent → document.

### 4. What is Event Delegation in JavaScript? Why is it useful?
Ans:
Event Delegation is a method where an event listener is placed on their common parent element instead of providing separate events for multiple child elements.


### 5. What is the difference between preventDefault() and stopPropagation() methods?
Ans:
preventDefault() stops the default action, and stopPropagation() stops event bubbling.

