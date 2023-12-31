const express = require('express')
const app = express()
const port=process.env.PORT || 3000


app.get('/',(req,res)=>{
    res.type('text/plain')
    res.send('Meadowlark')
})


app.get('/about',(req,res)=>{
    res.type('text/plain')
    res.send('About Meadowlark')
})


app.use((req,res)=>{
    res.type('text/plain')
    res.status(404)
    res.send('404 - Not Found')
})



app.use((err,req,res,next)=>{
    console.error(err.message)
    res.type('text/plain')
    res.status(500)
    res.send('500 - error server')
})

app.listen(port,()=>console.log(
    `express started on http://localhost:${port};`+
    `press Ctrl-C`
))
