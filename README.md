# Toll Interoperability
## Software Engineering Project
The goal of this project is to develop a software that will calculate the debt settlement between 7 toll operators, for a specific time period.


## Tech stack  
MERN stack

* MongoDB
* Express js
* React js
* Node js


## How I set up the project  
In terminal:  
<pre>
brew install node
</pre>

In main folder TL21-91: 
<pre>
npm install --save express  
npm install --save-dev nodemon  
npm install --save-dev body-parser  
npm install --save mongoose  
npm i --save csvtojson             (csvtojson module is a comprehensive nodejs csv parser
                                    to convert csv to json or column arrays)
npm install moment                 (in order to handle dates in the required format)  


npm install -g jsdoc               (optional)(globally)
npm install --save-dev jsdoc       (optional)(locally)
</pre>

In backend: 
<pre>
* npm init (to create packages)   
* In package.json, in test:…, I added "start":"nodemon index.js"  
(in order to use "npm start" to start the application with nodemon)    
* In order to set up https server(cert+key)  
openssl req -nodes -new -x509 -keyout server.key -out server.cert
Then go to postman setting and turn of SSL certificate verification.
</pre>
*Note: Backend can be run with https but frontend can't because of error message:*  
*Error: Connection is not private*  
*So, frontend runs with http.*

In api:  
<pre>
npm init (to create packages)  
</pre>

For testing in testing:  
<pre>
npm install supertest --save-dev
npm install mocha chai --save-dev
npm install request --save-dev
</pre>

in package json in testing:   
<pre>
"main": "../backend/index.js"  
"scripts": {  
    "start": "/Users/nicolas/DesktopSofteng_latest/backend/index.js",  
    "watch": "cross-env NODE_PATH=Softeng_latest nodemon",  
    "test": "set NODE_ENV=/Users/nicolas/Desktop/Softeng_latest/test-api && nodemon --exec mocha /Users/nicolas/Desktop/Softeng_latest/test-api/**_test.js --timeout 1000000"  
  }  
</pre>
  
## How to setup the project 
<pre>
* create folder in Desktop(e.g. TL21-91)
* open terminal
* cd ./Desktop
* cd ./TL21-91
* git clone https://github.com/ntua/TL21-91.git
* open Visual Studio Code and drag folder inside
* open another terminal tab
* brew services start mongodb-community@5.0
* open terminal in Visual Studio Code
* cd backend
* npm install
* cd api
* npm install
* cd frontend
* npm install
* cd testing
* npm install  
* when finished: brew services stop mongodb-community@5.0
</pre>

## How to run the project  
<pre>
* brew services start mongodb-community@5.0  
* cd backend
* npm install
* cd api
* npm install
* in postman: http://localhost:9103/interoperability/api/admin/updatepasses (fill database)
* cd backend
* npm start
* open new terminal
* cd frontend
* npm start
* when finished: brew services stop mongodb-community@5.0
</pre>

## Tools    
* Visual Studio Code  
* Postman (API requests)  
* Robo3T (db visualisation)  
* Visual Paradigm (UML and BPMN diagrams)  
* Youtrack (agile project management) 
* JSON schema diagram formation (https://nosqldbm.ru/) 
* Github (duh)


## Code Documentation
Written using Javascript documentation format:  
<pre>
/**    
 *   
 * documentation  
 *   
 */  
</pre>
One way to access it, is via Visual Studio Code.   
It can also be found in the api's README.md file under the title: API code documentation.  
Lastly, JSDoc can be used.

# The following parts of the project's general README.md (that you are currently reading) can be found in their respective folders

## Backend
**app.js:**   
Defines and exports routes via the express.js framework.

**index.js:**  
Establishes database's connection and if it is successful, it also establishes https server.

**package.json:**  
Saves the technologies and their versions that are being used in the project.

**package-lock.json:**  
Same but with more details.

**node_modules:**  
The code of the modules that I have downloaded.

**models:**  
Implements the models (Passes.js, Stations.js, Vehicles.js) of the json NoSQL shema (can be found in doc) that I designed for the app.

**MongoDB:**  
Contains connect-verify.js that verifies database's connection.

**ssl cert:**  
Contais certificate and key of the https server

**passes.csv, stations.csv, vehicles.csv:**  
Input data given, passes.csv modified to give extra info. The other two are raw.

**dump:**  
bson dump(backup)

**passes_dump.json, stations_dump.json, vehicles_dump.json:**
json dumps(backups of each collection)


## REST API
**controllers:**  
Contains the admin and users' controllers. Essentially, here I implement the logic of the API. 

**routes:** All routes that are being used in the project, which are:  

**admin**
* /interoperability/api/admin/healthcheck
* /interoperability/api/admin/resetpasses
* /interoperability/api/admin/resetstations
* /interoperability/api/admin/resetvehicles

**user(toll operator)**
* /interoperability/api/PassesPerStation/:stationID/:date_from/:date_to
* /interoperability/api/PassesAnalysis/:op1_ID/:op2_ID/:date_from/:date_to
* /interoperability/api/PassesCost/:op1_ID/:op2_ID/:date_from/:date_to
* /interoperability/api/ChargesBy/:op_ID/:date_from/:date_to

**package.json:**  
Saves the technologies and their versions that are being used in the project.

**package-lock.json:**  
Same but with more details.

**node_modules:**  
The code of the modules that I have downloaded.


## Frontend  
Implements the use case of debt settlements between the operators.  
Front-end data presentation in web environment. 


### Contents

The use case of debt settlements between the operators is implemented.

The User should be able to see the exact amount of money he owes to other Toll operators or they owe him for the month October, 2020 - Use Case "Balance".
```diff 
-  If the User - Toll Operator balance is red then the User owes the Operator that specific amount of money.
```
```diff 
+  If the User - Toll Operator balance is green then the Operator owes the User that specific amount of money.
```
In any other case no one owes money to anyone.


### Setup

* npm install (to install packages)
* npm start (to initiate the frontend at http://localhost:3000)

### Files

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

### Library used
React JS

## Database  
Comments:  
- Database models are located in backend.
- Main use of model Passes; Stations and Vehicles have been added for the sake of completeness.
- Json schema was used.
- MongoDB (document database) was chosen.
- Database connection verification process is located in MongoBD folder in backend.  

### dump(bson)
For database dump (one folder, bson files for each collection, json files to aid data restoration): 
<pre>
* brew services start mongodb-community@5.0 in command line (terminal)  
* mongodump  
(in system command line (terminal) in ./backend, where the database connection takes place)
(creates dump folder with the back up of the db's data)   
</pre> 
*Note: bson is a binary-encoded serialization of JSON documents*  
 

For database restoration from bson dump:
<pre>
mongorestore  
(in system command line (terminal) in ./backend, where the database connection takes place)
(restores db's backed data, which are located in dump folder)   
</pre>
*Careful: mongorestore can create a new database or add data to an existing database. If restoring documents to an existing database and collection and existing documents have the same value _id field as the to-be-restored documents, mongorestore will not overwrite those documents. For each one of those documents a failure will be counted in the failures returned by mongorestore.*


### dump(json)   
Json database dump (one json file creation for each collection):  
<pre>
* brew services start mongodb-community@5.0 in command line (terminal)  
* mongoexport/mongoimport
(in system command line (terminal) in ./backend, where the database connection takes place)
(creates dump folder with the back up of the db's data)    
</pre>  

To be precise:  
<pre>
* mongoexport --db databaseSoftEng --collection passes --pretty --out passes_dump.json   
* mongoexport --db databaseSoftEng --collection stations --pretty --out stations_dump.json  
* mongoexport --db databaseSoftEng --collection vehicles --pretty --out vehicles_dump.json      
</pre>  

For database restoration from json dump:    
<pre>
* mongoimport --db databaseSoftEng --collection passes --file passes_dump.json  
* mongoimport --db databaseSoftEng --collection stations --file stations_dump.json  
* mongoimport --db databaseSoftEng --collection vehicles --file vehicles_dump.json  
</pre>  

## testing
<pre>
- Each endpoint tested for (res.status==200)
- Verification that the requested attributes are returned, done as well.
- The results have been crosschecked with the data in the given xlsx.
</pre>  


## Project's Documentation

Contents:

- One Visual Paradigm file with the requested diagrams:  
  * bpmn - stakeholder: transp auth  
  * activity diagram - stakeholder: transp auth  
  * use case diagram: stakeholder transp auth  
  * activity diagram: use case - debt settlement  
  * deployment diagram  
  * component diagram  
  * sequence diagram  
  * bak file (backup)  
- One SRS doc - Software Requirements Specification.
- One StRS doc - Stakeholders Requirements Specification.
- Json NoSQL schema:  
  The json nosql schema was designed using the site: https://nosqldbm.ru/  
  The json schema is uploaded in json form.  
  A second option is to load the jsonfinal.xml file in order to see the schema (that can also be seen in the screenshot).  
  Then press view json to see the json format.


