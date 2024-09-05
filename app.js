const express = require('express')
const productos  = require('./routes/routes')
const bodyParse = require('body-parser')

const app = express()

app.use(bodyParse.json());
app.use(bodyParse.urlencoded({
    extended: true
}))


app.use('/producto', productos)


const PORT = process.env.PORT || 3000; 

app.listen(PORT, () => { 
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`); 
});
