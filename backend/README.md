# Back-end

## Contents
Application's source code for insertion, management and access of data (backend). Input data and dumps(backups), also located here.  
Used Node js, Express js and MongoDB.


## Setup
* npm init (to create packages)   
* In package.json, in test:…, we added "start":"nodemon index.js"  
(in order to use "npm start" to start the application with nodemon)    
* In order to set up https server(cert+key)  
openssl req -nodes -new -x509 -keyout server.key -out server.cert


## Files
**app.js:**   
Defines and exports routes via the express.js framework.

**index.js:**  
Establishes database's connection and if it is successful, it also establishes https server.

**package.json:**  
Saves the technologies and their versions that are being used in the project.

**package-lock.json:**  
Same but with more details.

**node_modules:**  
The code of the modules that we have downloaded.

**models:**  
Implements the models (Passes.js, Stations.js, Vehicles.js) of the json NoSQL shema (can be found in doc) that we designed for the app.

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


## Database dump(bson)
For database dump (one folder, bson files for each collection, json files to aid data restoration):  
* brew services start mongodb-community@5.0 in command line (terminal)  
* mongodump  
(in system command line (terminal) in ./backend, where the database connection takes place)(creates dump folder with the back up of the db's data)   

*Note: bson is a binary-encoded serialization of JSON documents*  

For database restoration from bson dump:  
<pre>
mongorestore  
(in system command line (terminal) in ./backend, where the database connection takes place)
(restores db's backed data, which are located in dump folder)   
</pre>

*Careful: mongorestore can create a new database or add data to an existing database. If restoring documents to an existing database and collection and existing documents have the same value _id field as the to-be-restored documents, mongorestore will not overwrite those documents. For each one of those documents a failure will be counted in the failures returned by mongorestore.*


## Database dump(json)  
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
