const express = require('express')
const methodOverride = require('method-override')
const app = express()

const PORT = 5000

app.set('view engine', 'ejs')
app.use(methodOverride('_method'))

const carRentals = require('models/car_rentals.js')

app.get('/', (req,res) => {
	res.send('<h1>Hey</h1>')
})


app.listen(PORT, console.log(`Listening on ${PORT}`))