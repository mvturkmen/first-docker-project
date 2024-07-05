const express = require('express');

const app = express();

app.get('/', (req,res) => {
    res.send('I have avoided unnecesary build');
})

app.listen(8080, () =>{
    console.log('listning on port 8080')
})