const express = require('express')
const app = express()
const expressHandlebars = require('express-handlebars').engine;
const port=process.env.PORT || 3000

const products=[
    {name:'Produc1',image:'/img/product1.jpeg'},
    {name:'Produc2',image:'/img/product2.jpeg'},
]

app.engine('handlebars',expressHandlebars({
    defaultLayout:'main'
}))


app.set('view engine','handlebars')
app.use(express.static(__dirname+'/public'))



app.get('/',(req,res)=>{
    res.render('home', {title :'home page', message:'welcome to our website!'})
});


app.get('/about',(req,res)=>{
    res.render('about', {title :'about us', message:'learn more about our company'})
});

app.get('/product',(req,res)=>{
    res.render('products',{products})
})
app.use((req,res)=>{
    res.status(404).render('404', {title :'home page'})
});

app.use((err,req,res,next)=>{
   console.error(err.stack)
    res.status(500).render('500', {title :'500 error server'})
});

app.listen(port, () => {
    console.log(`Express đã bắt đầu trên http://localhost:${port}`);
});

