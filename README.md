##Money Saver application

This a application that lets user calculate their monthly expenses.

###Technological approach

I decided to approach this assignment with simplicity in mind so i used Redux(React-redux) to create a global store for the app where all the information is stored and then distributed to all components. Keeping them decoupled and independent from eachother.

Component structure is as follows:

AddCost
Cost
CostList

Cost editing and deleting functionality is inside the Cost component that is also used to render cost element in the list. However when user clicks edit button the component goes it into edit mode and lets user change data.

NOTE: select field shows values as blank but internally the value is still remembered.
