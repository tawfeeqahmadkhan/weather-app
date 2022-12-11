const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;
const static_path= path.join(__dirname,('../public'))
app.use(express.static(static_path));
app.set('view engine', 'hbs');
app.get("/", (req, res)=>{
	res.render('index')
});
app.get("/index", (req, res)=>{
	res.render('index')
});
app.get("/weather", (req, res)=>{
	res.render('weather')
});
app.get("/about", (req, res)=>{
	res.render('about')
});
app.get("*", (req, res)=>{
	res.send('404 no page found')
});
app.listen(port, '127.0.0.1', ()=>{
	
	console.log(`server is runinng on port ${port}`)
	
})