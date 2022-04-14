const mongoose = require('mongoose')

// const bookSchema = mongoose.Schema({
// 	title: String,
// 	author: String,
// 	pages: Number,
// 	released: Date
// })

const bookSchema = mongoose.Schema({
	title: {
		type: String,
		required: true,
		unique: true
	},
	author: {
		type: String,
		maxLength: 50
	},
	pages: {
		type: Number,
		max: 7000
	},
	inStock: {
		type: Boolean,
		default: true
	},
	genre: {
		type: String,
		enum: ['Fiction', 'History']
	}
})

const Book = mongoose.model('Book', bookSchema)

// 'mongodb://localhost/<name of the database>'
// id the db does not exist yet it get's created
// mongoose.connect('mongodb://localhost/mongoose-intro')
// 	.then(() => console.log('connected'))
// 	.catch(err => console.log(err))


// C - create
// create a book 
// Book.create({
// 	title: 'Snowcrash',
// 	author: 'Neal Stephenson'
// })
// 	.then(bookFromDB => console.log(bookFromDB))
// 	.catch(err => console.log(err))


// this also creates books - but you can pass an array
// Book.insertMany()

// R - read

// get all the books from the db 
// Book.find()
// 	.then(allBooks => console.log(allBooks))
// 	.catch(err => console.log(err))

// you can also pass a query object to find()
// Book.find({ author: 'Neal Stephenson' })
// 	.then(allBooks => console.log(allBooks))
// 	.catch(err => console.log(err))

// findOne() - to get only one document (the first one that matches)
// Book.findOne({ author: 'Neal Stephenson' })
// 	.then(book => console.log(book))

// retrieve a book by it's id
// Book.findById('a mongo object id')

// U - update 

// if you want to have the updated book returned you need to add 
// {new: true} as a third parameter
// Book.findOneAndUpdate({ title: 'Snowcrash' }, { pages: 300 }, { new: true })
// 	.then(updatedBook => console.log(updatedBook))
// 	.catch(err => console.log(err))

// findByIdAndUpdate()
// updateMany() 

// D - delete
// Book.findOneAndDelete({ title: 'Snowcrash' })
// 	.then(deletedBook => console.log(deletedBook))
// 	.catch(err => console.log(err))

// findByIdAndDelete

const userSchema = mongoose.Schema({
	name: {
		type: String,
		set: value => {
			return value
				.split(' ')
				.map(str => str[0].toUpperCase() + str.slice(1).toLowerCase())
				.join(' ')
		}
	}
})
const User = mongoose.model('User', userSchema)
User.create({ name: 'joHn pEter miller' })
	.then(user => {
		console.log(user)
		// this closes the connection
		mongoose.connection.close()
	})
	.catch(err => console.log(err))