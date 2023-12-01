const express = require('express')
const app = express()
const port = 8001
const expressLayouts = require('express-ejs-layouts');

app.use(expressLayouts);
app.use(express.static('./assets'));
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);
//use express router
app.use('/',require('./routes'));
app.set('view engine','ejs');
app.set('views','./views');


app.listen(port, (err) => {
    if(err){
        console.log(`Error in running server,${err}`);
    }
  console.log(`Example app listening on port ${port}`)
});