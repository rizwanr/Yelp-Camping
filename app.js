const express = require("express");
const app = express();
const path = require('path')
const PORT = process.env.PORT || 3000
const bodyParser = require('body-parser')
//const hbs = require('hbs')

const viewPath = path.join(__dirname, './views')
const partialsPath = path.join(__dirname, './views/partials')

/*
To handle HTTP POST request in Express.js version 4 and above, you need to install middleware module called body-parser.
body-parser extract the entire body portion of an incoming request stream and exposes it on req.body.
The middleware was a part of Express.js earlier but now you have to install it separately.
This body-parser module parses the JSON, buffer, string and URL encoded data submitted using HTTP POST request. */

let campgrounds = [{
    name: 'Salmon Creek',
    image: 'https://pixabay.com/get/52e3d3404a55af14f6da8c7dda793f7f1636dfe2564c704c73277dd59644c65c_340.png',
  },
  {
    name: 'Mayburne Ave',
    image: 'https://pixabay.com/get/5fe8d1434852b108f5d084609620367d1c3ed9e04e50744f7d297ad59e4ec1_340.jpg'
  }
]


app.use(bodyParser.urlencoded({
  extended: true
}))

// Set Handlebars.
var exphbs = require("express-handlebars");
//set the default layout to main.hbs - which in turn shows the landing and campgrounds page
app.engine("handlebars", exphbs({
  defaultLayout: "main"
}));
app.set("view engine", "handlebars");


app.get('/', (req, res) => {
  res.render('landing')
})

app.get('/campgrounds', (req, res) => {

  //pass the campgrounds array as an object in the res.render method
  res.render('campgrounds', {
    campgrounds: campgrounds
  })
})

//when you hit the camgrounds/new route, it shows you the form, the form has action to post /campgrounds to where it post the data.
app.get('/campgrounds/new', (req, res) => {
  res.render('newcampgrounds')
})


app.post('/campgrounds', (req, res) => {
  //{ name: 'asdasd', 'imageURL ': 'asdas' }
  //we get this due to body-parser
  console.log(req.body)
  const name = req.body.name;
  const imageURL = req.body.imageURL;


  campgrounds.push({
    name: name,
    image: imageURL
  })
  res.redirect('/campgrounds')

})

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`)
})