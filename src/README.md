Technology Stock

A simple and responsive web application where users can explore different technologies and add their favorite technologies to their stock. Users can also manage their selected technologies by removing individual items or clearing all selected items.


1. Explore Technologies:

Users can see different technologies with their name, category, level, rating, badge, and description.

2. Add to Stock:

Users can add a technology to their stock. Once added, the button changes to "Added to Stock" so the same technology cannot be added again.

3. Manage Stock:

Users can view their selected technologies, remove individual technologies, or remove all selected technologies from their stock.

 # Technologies Used
 React
 TypeScript
 Tailwind CSS
 Vite
 React Icons
 React Toastify


 React Questions & Answers

#Answer-1
JSX lets us write HTML-like code inside JavaScript.
It makes creating React UI easier.

#Answer-2
Props are data passed from a parent to a child.
State is data that belongs to a component and can change.

#Answer-3
useState is used to store and change data.
I used it to store the technologies and selected technologies.

#Answer-4
useEffect runs code when a component loads or changes.
I used it to load the technology data from the JSON file when the page loaded.

#Answer-5
A key helps React identify each item in a list.
It helps React update the list correctly.


#Answer-6
Conditional rendering means showing something based on a condition.
I used it to show an empty message when there are no selected technologies.


#Answer-7
We pass data from parent to child using props.
A child can send something to the parent by calling a function passed through props.