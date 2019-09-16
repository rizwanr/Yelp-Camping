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

app.get('/camping', (req, res) => {
  res.render('camping')
})