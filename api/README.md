# Back-end/API

## Contents:
RESTful API (routes, controllers, packages)

## Files
**controllers:**  
Contains the admin and users' controllers. Essentially, here we implement the logic of the API. 

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
The code of the modules that we have downloaded.




# API code documentation   
## Admin Endpoints
### ...HEALTHCHECK...
**Endpoint:**    
{baseURL}/admin/healthcheck  
https://localhost:9103/interoperability/api/admin/healthcheck  

**Goal:**     
Confirms end-to-end connectivity between the user and the database.  

**Functionality:**        
If connected, backend returns:    
"status": "OK", "dbconnection": "mongodb://127.0.0.1:27017/databaseSoftEng"  

If not connected, backend returns:    
"status": "failed", "dbconnection": "mongodb://127.0.0.1:27017/databaseSoftEng"  

### ...UPDATE PASSES...  
**Endpoint:**      
{baseURL}/admin/updatepasses  
https://localhost:9103/interoperability/api/admin/updatepasses  

**Goal:**     
Updates the database table dedicated to the events of passes through the operators' tolls.

**Functionality:**     
Inserts the events of passes through the operators' tolls to the collection named passes.  
Input is a csv named passes.csv which is required by the admin.js file(current file).    
Also, the csvtojson module is required in order to convert the input csv file to   
json format and make us able to parse data with the help of colParser, in their required format.  
We don't want timestamp and charge to be added as strings but as dates and floats.  
 
**Error handling:**      
if successful, it returns:        
"status": "OK"   
if unsuccessful, it returns:    
"status": "failed", "error": err    
(err is the description of the error)   

### ...RESET PASSES...  
**Endpoint:**      
{baseURL}/admin/resetpasses  
https://localhost:9103/interoperability/api/admin/resetpasses    

**Goal:**      
Deletes every element in the database table dedicated to the events of passes through the operators' tolls.  

**Functionality:**      
Deletes the events of passes through the operators' tolls of the collection named passes.      
Gives the following warning,    
"WARNING: Going to delete all passes data in 10s.    
          Hit Ctrl-C if you have changed your mind!"       
before it deletes all data regarding passes.    

**Error handling:**      
if successful, it returns:       
"status": "OK"  
if unsuccessful, it returns:    
"status": "failed", "error": err    
(err is the description of the error)   

### ...RESET STATIONS...
**Endpoint:**      
{baseURL}/admin/resetstations  
https://localhost:9103/interoperability/api/admin/resetstations    
 
**Goal:**     
Resets the database table dedicated to the operators' stations.  

**Functionality:**      
Deletes old station data and inserts the new station data to the collection named stations.  
inserting the new. Input is a csv named stations.csv which is required by the admin.js file(current file).    
Also, the csvtojson module is required in order to convert the input csv file to  
json format and make us able to parse data with the help of colParser, in their required format.  

**Error handling:**      
if successful, it returns:       
"status": "OK"   
if unsuccessful, it returns:    
"status": "failed", "error": err    
(err is the description of the error)  

### ...RESET VEHICLES...
**Endpoint:**      
{baseURL}/admin/resetvehices  
https://localhost:9103/interoperability/api/admin/resetvehicles  
 
**Goal:**      
Resets the database table dedicated to the registered vehicles.  

**Functionality:**      
Deletes old vehicle data and inserts the new registered vehicles to the collection named vehicles.  
Input is a csv named stations.csv which is required by the admin.js file(current file).  
Also, the csvtojson module is required in order to convert the input csv file to  
json format and make us able to parse data with the help of colParser, in their required format.  

**Error handling:**      
if successful, it returns:       
"status": "OK"   
if unsuccessful, it returns:    
"status": "failed", "error": err      
(err is the description of the error)   

## Operational Endpoints
### ...PASSES PER STATION...   
**Goal:**    
Returns a list containing the analysis of passes through a toll station,
during a given period of time. 

**Endpoint:**       
{baseURL}/PassesPerStation/:stationID/:date_from/:date_to  
https://localhost:9103/interoperability/api/PassesPerStation/:stationID/:date_from/:date_to  

e.g.   
      To show results in json format
      https://localhost:9103/interoperability/api/PassesPerStation/AO01/20190404/20200404  
      To export results to csv  
      https://localhost:9103/interoperability/api/PassesPerStation/AO01/20190404/20200404?format=csv  
      To export results to json file(always exports json except if csv is requested)  
      https://localhost:9103/interoperability/api/PassesPerStation/AO01/20190404/20200404?format=json   
 
**Functionality:**     
Parses data from URL which define the user's request. These data are used
to perform the right query to retrieve the requested data from the database, 
which are then stored in "filtered". Then, the data are transfered to the list
"passes", which contains the correct names of the requested domains(names of columns).   
Afterwards, the extra data needed are calculated and added to the result.  
If the results aren't requested to be returned in a file, the endpoint returns
a json object, which contains a list of json objects.  
If the results are requested to be returned in csv file format, then an auxiliary
array is used, "passesArr", in order to be able to organise the data in columns
in the csv file. Else, if any other type of file is requested, a json file is
returned, which contains a json object which contains a list of json objects.  
The instruction return is used so that the function is exited and new requests can
be made.

**Error handling:**     
if successful, it returns:      
"status": "OK"  
if unsuccessful, it returns:   
"status": "failed", "error": err   
(err is the description of the error)  

### ...PASSES ANALYSIS...
**Goal:**    
Returns list containing the analysis of the passes that happened with the operator's 2 tags at the 
toll stations of operator 1, during a given period of time.

**Endpoint:**    
{baseURL}/PassesAnalysis/:op1_ID/:op2_ID/:date_from/:date_to
https://localhost:9103/interoperability/api/PassesAnalysis/:op1_ID/:op2_ID/:date_from/:date_to
 
e.g.   
      To show results in json format  
      https://localhost:9103/interoperability/api/PassesPerStation/AO01/20190404/20200404  
      To export results to csv  
      https://localhost:9103/interoperability/api/PassesAnalysis/AO/OO/20200404/20210404?format=csv  
      To export results to json file(always exports json except if csv is requested)  
      https://localhost:9103/interoperability/api/PassesAnalysis/AO/OO/20200404/20210404?format=json  
 
**Functionality:**     
Parses data from URL which define the user's request. These data are used
to perform the right query to retrieve the requested data from the database, 
which are then stored in "filtered". Then, the data are transfered to the list
"passes", which contains the correct names of the requested domains(names of columns).
Afterwards, the extra data needed are calculated and added to the result.  
If the results aren't requested to be returned in a file, the endpoint returns
a json object which contains a list of json objects.   
If the results are requested to be returned in csv file format, then an auxiliary
array is used, "passesArr", in order to be able to organise the data in columns
in the csv file. Else, if any other type of file is requested, a json file is
returned, which contains a json obect which contains a list of json objects.  
The instruction return is used so that the function is exited and new requests can
be made.

**Error handling:**   
if successful, it returns:     
"status": "OK" 
if unsuccessful, it returns:  
"status": "failed", "error": err  
(err is the description of the error)

### ...PASSES COST...
**Goal:**    
Returns the number of passes with the operator's 2 tags at the operator's 1 toll stations, and also 
their cost. Their cost is the amount that the operator 2 owes to the operator 1, for the given period 
of time.

**Endpoint:**    
{baseURL}/PassesCost/:op1_ID/:op2_ID/:date_from/:date_to
https://localhost:9103/interoperability/api/PassesCost/:op1_ID/:op2_ID/:date_from/:date_to

e.g.   
      To show results in json format  
      https://localhost:9103/interoperability/api/PassesCost/AO/OO/20200404/20210404  
      To export results to csv  
      https://localhost:9103/interoperability/api/PassesCost/AO/OO/20200404/20210404?format=csv  
      To export results to json file(always exports json except if csv is requested)  
      https://localhost:9103/interoperability/api/PassesCost/AO/OO/20200404/20210404?format=json  
 
**Functionality:**     
Parses data from URL which define the user's request. These data are used
to perform the right query to retrieve the requested data from the database, 
which are then stored in "filtered". Then the extra data needed are calculated 
and added to the result.  
If the results aren't requested to be returned in a file, the endpoint returns
a json object.  
If the results are requested to be returned in csv file format, then an auxiliary
array is used, "passesArr", in order to be able to organise the data in columns
in the csv file. Else, if any other type of file is requested, a json file is
returned, which contains a json object.   
The instruction return is used so that the function is exited and new requests can
be made.

**Error handling:**    
if successful, it returns:     
"status": "OK" 
if unsuccessful, it returns:  
"status": "failed", "error": err  
(err is the description of the error)

### ...CHARGES BY...     
**Goal:**  
Returns the number of passes that happened at the toll stations of one specific operator, by the tags 
of every other toll operator, as well as the cost of those passes. The cost is the amount that each
operator owes to the operator that owns those toll stations, for the given period of time.

**Endpoint:**  
{baseURL}/ChargesBy/:op_ID/:date_from/:date_to   
https://localhost:9103/interoperability/api//ChargesBy/:op_ID/:date_from/:date_to   
 
e.g.   
      To show results in json format  
      https://localhost:9103/interoperability/api/ChargesBy/KO/20201001/20201031    
      To export results to csv   
      https://localhost:9103/interoperability/api/ChargesBy/KO/20201001/20201031?format=csv  
      To export results to json file(always exports json except if csv is requested)  
      https://localhost:9103/interoperability/api/ChargesBy/KO/20201001/20201031?format=json      
 
**Functionality:**     
Parses data from URL which define the user's request. These data are used
to perform the right query to retrieve the requested data from the database, 
which are then stored in "filtered".   
Afterwards the extra data needed are calculated and added to the result.   
If the results aren't requested to be returned in a file, the endpoint returns
a json object, which contains a list of json objects.    
If the results are requested to be returned in csv file format, then an auxiliary
array is used, "passesArr", in order to be able to organise the data in columns
in the csv file. Else, if any other type of file is requested, a json file is
returned, which contains a json object which contains a list of json objects.  
The instruction return is used so that the function is exited and new requests can
be made.

**Error handling:**    
if successful, it returns:     
"status": "OK" 
if unsuccessful, it returns:  
"status": "failed", "error": err  
(err is the description of the error)


### ...DEBT SETTLEMENT...
Goal:  
Calculate debt settlement between two operators:  
How much does op1_ID owe to or is owed to by op2_ID

Endpoint:  
{baseURL}/DebtSettlement/:op1_ID/:op2_ID/:date_from/:date_to
https://localhost:9103/interoperability/api/DebtSettlement/:op1_ID/:op2_ID/:date_from/:date_to
e.g.   
      To show results in json format  
      https://localhost:9103/interoperability/api/DebtSettlement/OO/AO/20201001/20201101 
      To export results to csv   
      https://localhost:9103/interoperability/api/DebtSettlement/OO/AO/20201001/20201101?format=csv  
      To export results to json file(always exports json except if csv is requested)  
     hhttps://localhost:9103/interoperability/api/DebtSettlement/OO/AO/20201001/20201101?format=json      
 
Functionality:   
Similar to the rest of the endpoints. Two queries are performed to find how much does op2_ID owes to 
op1_ID and the opposite. The debt settlement is calculated and returned. The result is how much does 
operator 1 owes to/is owed to by operator 2. Thus, a negative result means that operator 1 owes to 
operator 2, while a positive result that the operator 1 is owed to by the operator 2. Also, this 
endpoint returns the number of passes of the operator's 2 tags (through the operator's 1 toll 
stations), and the opposite.
 
Error handling:  
if successful, it returns:     
"status": "OK" 
if unsuccessful, it returns:  
"status": "failed", "error": err  
(err is the description of the error)


### ...ALL CHARGES BY...
Was supposed to make all calculations for the debt settlements at once, once a month,
when the debt settlements are supposed to take place. We decided to not use it but it might 
prove useful in future versions. Instead, we decided to calculate the debt settlements on demand,
when a frontend request is made for a specific operator duo. With the second approach we
are able to genrate results, between any dates given by the user.   
In conclusion, the following is an  auxiliary endpoint that calculates and isolates 
all charges_by (4rth endpoint's) results.


