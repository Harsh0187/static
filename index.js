const express = require('express');

const port = 8080;

const app = express();

const path = require('path');

console.log(path.join(__dirname,"/public"));

app.set('view engine','ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/',(req,res) => {
    return res.render('index');
})

app.get('/charts',(req,res) => {
    return res.render('charts');
})

app.get('/widgets',(req,res) => {
    return res.render('widgets');
})

app.get('/tables',(req,res) => {
    return res.render('tables');
})

app.get('/fullwidth',(req,res) => {
    return res.render('grid');
})

app.get('/form-basic',(req,res) => {
    return res.render('form-basic');
})

app.get('/form-wizard',(req,res) => {
    return res.render('form-wizard');
})

app.get('/button',(req,res) => {
    return res.render('pages-button');
})

app.get('/icon-material',(req,res) => {
    return res.render('icon-material');
})

app.get('/icon-fontawesome',(req,res) => {
    return res.render('icon-fontawesome');
})

app.get('/elements',(req,res) => {
    return res.render('Elements');
})

app.get('/Dashboard',(req,res) => {
    return res.render('index2');
})

app.get('/pages-gallery',(req,res) => {
    return res.render('pages-gallery');
})

app.get('/pages-calendar',(req,res) => {
    return res.render('pages-calendar');
})

app.get('/pages-invoice',(req,res) => {
    return res.render('pages-invoice');
})

app.get('/pages-chat',(req,res) => {
    return res.render('pages-chat');
})

app.get('/login',(req,res) => {
    return res.render('login');
})

app.get('/register',(req,res) => {
    return res.render('register');
})

app.get('/403',(req,res) => {
    return res.render('error-403');
})

app.get('/404',(req,res) => {
    return res.render('error-404');
})

app.get('/405',(req,res) => {
    return res.render('error-405');
})

app.get('/500',(req,res) => {
    return res.render('error-500');
})

app.listen(port,(err)=>{
    if(err)
    {
        console.log(err);
    }
    console.log("Server is running in port :- "+port);
})