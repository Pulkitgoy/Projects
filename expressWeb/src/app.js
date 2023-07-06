const express = require('express');
const path =require('path');
const app = express();
const port = process.env.PORT ||3000;

//public static path
const static_path=path.join(__dirname,"../public");

// app.set('view engine', 'hbs');
// app.engine('html', require('hbs').__express);
app.use(express.static(static_path));
// app.get(route,callback) for home page route= "" or "/"
app.get("",(req,res)=>{
    res.render('index.html');
})
 
app.get("about",(req,res)=>{
    res.render('about.html');
})
app.get("weather",(req,res)=>{
    res.render('weather.html');
})
app.get("*",(req,res)=>{
    res.render("404 go back");
})

app.listen(port,()=>{
    console.log(`This braces are important ${port}`);
})