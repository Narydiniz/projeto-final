const express = require('express');
const bodyParser = require('body-parser');
const path = require('path'); 

const app = express();
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

const PORT = 5000;
app.listen(PORT,()=>{
    console.log(`Servidor rodando na ${PORT}`);
});
