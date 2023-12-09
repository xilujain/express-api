const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('welcome to express-api')
})
app.get('/names', (req, res) => {
    res.send({
        names:[
            {id: 1, name: 'lujain'},
            {id: 2, name: 'bushra'},
            {id: 3, name: 'lama'}
        ]
    })
})

app.listen(3002, () => {
    console.log('server is running')
})