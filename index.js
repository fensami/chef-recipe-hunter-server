const express = require('express')
const app = express()
const cors = require('cors')

const foodian = require('./data/foodian.json')
const chefdata = require('./data/chefdata.json')

const port = process.env.PORT || 5000;

app.use(cors())

app.get('/', (req, res) => {
    res.send('Foodian is running...')
})
app.get('/foodian', (req, res) => {
    res.send(foodian)
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


// app.get('/categories', (req, res) => {
//     res.send(categories)
// })
// app.get('/news', (req, res) => {
//     res.send(news);
// })
// app.get('/news/:id', (req, res) => {
//     const id = req.params.id;
//     // console.log(id);
//     const selectedNews = news.find(n => n._id === id)
//     res.send(selectedNews)
// })
// app.get('/categories/:id', (req, res) => {
//     const id = parseInt(req.params.id);
//     // console.log(id);
//     if (id == 0) {
//         res.send(news)
//     }
//     else {
//         const categoryNews = news.filter(n => parseInt(n.category_id) === id)
//         res.send(categoryNews)

//     }


// })