var express = require('express')
const app = express();
const port = 3000
 var mongoose = require('mongoose')
 mongoose.connect('mongodb://localhost/subscribers', { useNewUrlParser: true })
 var db = mongoose.connection
 
 db.on('error',(err) => console.error("connection error;",err))

 db.once('open',() => console.log(`connecected to database;`))

 app.use(express.json())


 
  const subscribersRoter = require('./routes/subscribers')
 




 app.listen(port,()=> console.log(`Listening on port  ${port}`))
