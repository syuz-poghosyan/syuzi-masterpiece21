const express = require("express");
const app = express();


const PORT = 5001;


//Middleware
//app.set('view engine', 'ejs');
//app.use(express.json());
//app.use(cookieParser());


app.get("/", (req, res)=>{
	res.send('Hello lovely people of Armenia!!');
})


//app.get('/login', (req, res)=>{
	//res.render('login')
//})

//app.post('/login', (req, res)=>{
	//let token = req.body.token;
	//console.log(token);
//})

app.listen(PORT, () =>{
	console.log(`Server running on port ${PORT}`);
	//console.log("Server Started on:" + PORT)
})