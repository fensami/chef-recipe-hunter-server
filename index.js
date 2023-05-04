const express = require('express')
const app = express()
const cors = require('cors')

const foodian = require('./data/foodian.json')
const chefdata = require('./data/chefdata.json')
const randomfoods = require('./data/randomfoods.json')

const port = process.env.PORT || 5000;

app.use(cors())

app.get('/', (req, res) => {
    res.send('Foodian is running...')
})
app.get('/foodian', (req, res) => {
    res.send(foodian)
})
app.get('/randomfoods', (req, res) => {
    res.send(randomfoods)
})

app.get('/chefdata', (req, res) => {
    res.send(chefdata)
})
app.get('/chefdata/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);
    const selectedData = chefdata.find(d=> d.id === id);
    res.send(selectedData)
})

app.listen(port, () => {
    console.log(`foodian api is running on port: ${port}`);
})