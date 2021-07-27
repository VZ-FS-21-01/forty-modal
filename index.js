const express = require('express')
const fetch = require('node-fetch');
const app = express()
const PORT = process.env.PORT || 3000

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('index', { title: "Home" })
})
app.get('/gin', (req, res) => {
    fetch('http://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin')
        .then(data => data.json())
        .then(data => {
            // console.log(data.drinks)
            res.render('drinks', { title: "Gin", drinks: data.drinks })
        })
})

// Jetzt können wir alle routen genauso machen, nur der API Call und der title ändern sich.

app.listen(PORT, () => console.log(`http://localhost:${PORT}`))
