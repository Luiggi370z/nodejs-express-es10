import '@babel/polyfill'
import { EventEmitter } from 'events'
import app from './server'
import { connect } from './database'

const mediator = new EventEmitter()

async function main() {
	const port = app.get('port')

	await app.listen(port)
	console.log(`Server listening on port ${port} 👀`)
}

mediator.on('db.ready', async connection => {
	console.log('Database is ready 👍🏼')
	await main()
})

mediator.on('db.error', err => {
	console.log('Database Error 🐛')
	throw err
})

mediator.on('db.connection.error', err => {
	console.log('Database connection Error 🐛')
	throw err
})

connect(mediator)
