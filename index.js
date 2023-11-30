const express = require('express')
const app = express()
const port = 8001


//use express router
app.use('/',require('./routes'));


app.listen(port, (err) => {
    if(err){
        console.log(`Error in running server,${err}`);
    }
  console.log(`Example app listening on port ${port}`)
});