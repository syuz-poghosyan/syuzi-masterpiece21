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


app.get("/", checkAuthenticated, (req, res)=>{
	res.render('login');
})


app.get('/index', checkAuthenticated, (req, res)=>{
	res.render('index');
})

app.post('/login', checkAuthenticated, (req, res)=>{
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
}).
catch(console.error);
})


app.get('/', checkAuthenticated, (req, res)=>{
	let user = req.user;
	res.render('index', {user});
})


app.get('/protectedroute', checkAuthenticated, (req, res)=>{
	res.render('protectedroute');
})


app.get('/logout', checkAuthenticated, (req, res)=>{
	res.claerCookie('session-token');
	res.redirect('/');
})


function checkAuthenticated(req, res, next){

    let token = req.cookies['session-token'];

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
          res.redirect('/login')
      })

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