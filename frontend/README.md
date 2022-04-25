# Front-end

Front-end data presentation in web environment. 


## Contents

The use case of debt settlements between the operators is implemented.

The User should be able to see the exact amount of money he owes to other Toll operators or they owe him for the month October, 2020 - Use Case "Balance".
```diff 
-  If the User - Toll Operator balance is red then the User owes the Operator that specific amount of money.
```
```diff 
+  If the User - Toll Operator balance is green then the Operator owes the User that specific amount of money.
```
In any other case no one owes money to anyone.


## Setup

* npm install (to install packages)
* npm start (to initiate the frontend at http://localhost:3000)

## Files

**App.js:**  
It is the 'root' file that sets the routes for each Page of the front-end.


**index.js:**  
It uses the App Component.

**User.js:**  
It is the first Page of the UI in which the User enters the system.

**Operator.js:**  
It is the second Page of the UI in which the User chooses the Operator of his interest.

**Balance.js:**  
It is the third Page of the UI in which the User sees the balance with the Operator he chose. 

**Data.js:**  
It includes the names and the IDs of each Operator.

## Library used
React JS
