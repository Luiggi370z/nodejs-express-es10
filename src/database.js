import Mongoose from 'mongoose'

const attachConnectionEvents = mediator => {
	let conn = Mongoose.connection

	conn.on('error', err => mediator.emit('db.error', err))
	mediator.emit('db.ready', conn)
}

export const connect = async mediator => {
	console.log('connecting...')
	try {
		await Mongoose.connect('mongodb://localhost/node-restapis10', {
			useNewUrlParser: true
		})
		attachConnectionEvents(mediator)
	} catch (err) {
		return mediator.emit('db.connection.error', err)
	}
}
