const express = require('express')
const expressHandlebars = require('express-handlebars').engine
const app = express()

app.engine('handlebars', expressHandlebars({
    defaultLayout:'main',
}))
app.set('view engine', 'handlebars')
app.use(express.static(__dirname + '/public'))
const port = process.env.PORT || 3000

app.get('/', (req, res) => res.render('home'))

const fortunes = [
    "Conquer your fears or they will conquer you",
    "Rivers need springs.",
    "Do not fears what you don't know.",
    "You will have a pleasant suprise.",
    "Whenever possible, keepit simple.",
]
app.get('/about', (req, res) => {
    const randomFortune = fortune[Math.floor(Math.random()*fortunes.length)]
})

app.use((req, res) => {
    res.status(404)
    res.render('404')
})

app.use((err, req, res, next) => {
    console.error(err.message)
    res.status(500)
    res.render('500')
})

app.listen(port, () => console.log(
    `Express started on http://localhost:${port});` +
    `press Ctrl-C to terminate`
))