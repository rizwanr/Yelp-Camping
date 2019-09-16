const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000

app.set("view engine", "hbs");





app.listen(PORT, () => {
  console.log(`listening on ${PORT}`)
})


app.get('/', (req, res) => {
  res.render('landing')
})

app.get('/campgrounds', (req, res) => {
  let campgrounds = [{
    name: 'Salmon Creek',
    image: 'https:pixabay.com/get/52e3d3404a55af14f6da8c7dda793f7f1636dfe2564c704c73277ed69348c459_340.png'
  }]
  //pass the campgrounds array as an object in the res.render method
  res.render('campgrounds', {
    campgrounds: campgrounds
  })
})