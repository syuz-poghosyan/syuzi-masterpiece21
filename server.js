const express = require("express");
const app = express();
const cookieParser = require('cookie-parser');

app.use(express.static("public"));

//Google Auth
const {OAuth2Client} = require('google-auth-library');
const CLIENT_ID = '766622694795-iv0d9qnj0l8md1sca2aalk2fn0uvs7v5.apps.googleusercontent.com';
const client = new OAuth2Client(CLIENT_ID);



const PORT = 5001;


// Middleware
app.set('view engine', 'ejs');
app.use(express.json());
app.use(cookieParser());


app.get("/", (req, res)=>{
	res.render('index');
})


app.get('/login', (req, res)=>{
	res.render('login');
})

app.post('/login', (req, res)=>{
	let token = req.body.token;
	console.log(token);
	async function verify() {
	const ticket = await client.verifyIdToken({
      idToken: token,
      audience: CLIENT_ID,  
  });
  const payload = ticket.getPayload();
  const userid = payload['sub'];
  console.log(payload);
}
verify()
.then(()=>{
	res.cookie('session-token', token);
    res.send('success');
})
.catch(console.error);
})


app.get('/index', checkAuthenticated, (req, res)=>{
	let user = req.user;
  console.log(user);
	res.render('index', {user});
})


app.get('/protectedroute', checkAuthenticated, (req, res)=>{
	res.render('protectedroute');
})


app.get('/logout', (req, res)=>{
  console.log("Logout");
	res.clearCookie('session-token');
  let token = req.cookies['session-token'];
    console.log("bbbaaa");
console.log(token);
console.log("bbbaaa");
	res.redirect('/login');
})


function checkAuthenticated(req, res, next){

    let token = req.cookies['session-token'];
    if(typeof token == 'undefined'){
      console.log('User not logged in. Redirecting to login.');
      res.redirect('/login');
    }else{
console.log(token);

    let user = {};
    async function verify() {

        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: CLIENT_ID,  // Specify the CLIENT_ID of the app that accesses the backend
        });
        const payload = ticket.getPayload();
        user.name = payload.name;
        user.email = payload.email;
        user.picture = payload.picture;
      }
      verify()
      .then(()=>{
          req.user = user;
          next();
      })
      .catch(err=>{
        console.log(err);
          res.redirect('/login');
      })
    }
    

}



app.listen(PORT, () =>{
	console.log(`Server running on port ${PORT}`);
})


app.get("/admin", checkAuthenticated, (req, res) => {
	res.render("admin");
})

app.get("/edit_book", checkAuthenticated, (req, res) => {
	res.render("edit_book");
})

app.get("/edit_dance", checkAuthenticated, (req, res) => {
	res.render("edit_dance");
})

app.get("/book_form", checkAuthenticated, (req, res) => {
  res.render("book_form");
})

app.get("/dance_form", checkAuthenticated, (req, res) => {
  res.render("dance_form");
})