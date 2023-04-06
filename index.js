const express = require('express')
const app = express() //app declaration
const port = 3000

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/profile', (req, res) => {
    res.send(`You're at your profile page`)
})

app.get('/message', (req, res) => {
    res.send(`Have a nice day!`)
})

app.get('/message1', (req, res) => {
    res.send(`You can do this!`)
})


app.use(express.static('public'))

const calculatorRoutes = require('./routes/calculatorRoute')
app.use('/calculator', calculatorRoutes)

let userRoutes = require('./routes/userRoutes')
app.use('/api/users', userRoutes)