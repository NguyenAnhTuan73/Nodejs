const express = require('express');

const app = express();
const port = 8888;
app.get('/', (req, res)=>{
    res.send('Hello every body');
})
app.listen(port, () => {
    console.log(`Server is running in port ${port}`)
})