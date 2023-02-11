const express = require('express')
const app = express()
const port = 3000
const port1 = 8000


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/profile', (req, res) => {
    res.send(`You're at your profile page`)
})

app.listen(port, () => {
    console.log(`Example app listening
at http://localhost:${port}`)
})

app.listen(port1, () => {
    console.log(`Example app listening
at http://localhost:${port1}`)
})

const swaggerUi = require('swagger-ui-express');
swaggerDocument = require('./swagger.json');
app.use(
    '/api-docs',
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocument)
);