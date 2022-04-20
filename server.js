const express = require('express')
const methodOverride = require('method-override')
const app = express()

const PORT = 6000

app.set('view engine', 'ejs')
app.use(methodOverride('_method'))

const carRentals = require('./models/car_rentals.js')


// main page
app.get('/', (req,res) => {
	res.send('<h1>Hey</h1>')
})


// rentals page
app.get('/rentals', (req,res) => {
	const context = { carRentals }
	res.render('index', context)
})

// individual rentals page
app.get('/rentals/:id', (req,res) => {
	const context = {
		carRentals: carRentals[req.params.id],
		carNum: req.params.id
	}
	res.render('show', context)
})

//edit page
app.get('/rentals/:id/edit', (req, res) => {
	const context = {
		carRentals: carRentals[req.params.id],
		carNum: req.params.id
	}
	res.render('edit', context)
})

// edit push to individual page
app.put('/rentals/:id', (req,res) => {
	carRentals[req.params.id] = req.body
	res.redirect(`/rentals/${req.params.id}`)
})

// delete page
app.delete('/rentals/:id', (req,res) => {
	carRentals.splice(req.params.id, 1)
	res.redirect('/rentals')
})



app.listen(PORT, console.log(`Listening on ${PORT}`))