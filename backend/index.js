/************************************** application's requirements 1 **************************************/
const app = require('./app');
const path = require('path');
// var fs = require('fs');
// var https = require('https');
const mongoose = require('mongoose');
/**********************************************************************************************************/

// SSL server key and certificate retrieval for the https server's setup
// var privateKey  = fs.readFileSync('/Users/nicolas/Desktop/Softeng_latest/backend/sslcert/server.key', 'utf8');
// var certificate = fs.readFileSync('/Users/nicolas/Desktop/Softeng_latest/backend/sslcert/server.cert', 'utf8');


//var credentials = {key: privateKey, cert: certificate};
//var httpsServer = https.createServer(credentials, app);
 
// server creation and setup
/**
 * Secure Sockets Layer (SSL) is a standard security technology
 * for establishing an encrypted link between a server and a client. 
*/
// const sslServer = https.createServer(
//   {
//       key: fs.readFileSync(path.join(__dirname, './sslcert', 'server.key')),
//       cert: fs.readFileSync(path.join(__dirname, './sslcert', 'server.cert'))
//   }, app)
// const port = 9103;

// use of default headers, no need to set headers

// database and server connection
mongoose
  .connect(
    'mongodb://127.0.0.1:27017/databaseSoftEng'
  )
  .then(result => {
    console.log('Database connection: mongodb://127.0.0.1:27017/databaseSoftEng')
    app.listen(9103, () => {
      console.log('Server on port: ' + 9103)
      })

    // if database is connected successfully, the server starts listening
    //sslServer.listen(port, () => console.log(`https server running on port ${port}`))
  })
  .catch(err => console.log("Not connected to database"));

// exports app so that it can be seen by testing tools and so the testing
// tools can use the file and have the server and the database
// connection take place
module.exports=app;