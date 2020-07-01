## Money Saver application

This a application that lets user calculate their monthly expenses.  Application can be accessed at: https://money-expense-saver.herokuapp.com/

![screenshot](https://i.gyazo.com/b9b64d77fc5f137e8c118aba402ec117.png)

### Technological approach

Libraries used:

- Redux (React-redux)
- React Material (Basic UI)

I decided to approach this assignment with simplicity in mind so i used Redux(React-redux) to create a global store for the app where all the information is stored and then distributed to all components. Keeping them decoupled and independent from eachother. I decided to leave out other suggested libraries because i felt like they were unnecessary for the minimum features needed for the app. I believe in using libraries when they solve a problem i might face during development.

Component structure is as follows:

![screenshot](https://i.gyazo.com/e2f07995a9410d7e49f28e882520fd6e.png)

Cost editing and deleting functionality is inside the Cost component that is also used to render cost element in the list. However when user clicks edit button the component goes it into edit mode and lets user change data. With this i tried to limit the amount of components needed and because as of now (or as far as my knowledge goes) react does not support custom event emitting from components this means i cant transmit state data from child components without using redux global store. I felt like it was unnecessary layer of abstraction i chose afromentioned approach instead.
