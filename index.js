const express = require('express');
const members = require('./Members');
const app = express();
const logger = require('./middleware/logger')
const PORT = 5000 || process.env.PORT;


// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(logger) 
app.get('/', (req , res)=>{
    res.send('hello world !!!!')
}),

app.use('/api/members', require('./routes/api/members'))
app.listen(PORT , ()=>{console.log('app listen in port 5000')})