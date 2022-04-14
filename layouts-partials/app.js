const express = require('express')
const app = express()
const hbs = require('hbs')

// this sets hbs as a templating engine for this express app
app.set('view engine', 'hbs')

// // this enables us to use partials in handlebars  
hbs.registerPartials(__dirname + '/views/partials')

const movies = require('./movies')
app.get('/', function (req, res) {
	res.render('movies', { movieList: movies, doctitle: 'Movies' })
})

app.get('/about', function (req, res) {
	// layout: false disables the layout for this route
	res.render('about', { title: 'About', layout: false })
})

app.get('/godfather', function (req, res) {
	// get the movie godfather from the array
	const godfather = movies.find(function (movie) {
		return movie.title === 'The Godfather'
	})
	console.log(godfather)
	res.render('movieDetails', { movie: godfather, doctitle: 'Detail Page' })
})

app.listen(3000, function () {
	console.log('server listening')
})