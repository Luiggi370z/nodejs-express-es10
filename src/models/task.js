import mongoose from 'mongoose'

const TaskSchema = new mongoose.Schema({
	title: {
		type: String,
		required: [true, 'Task title is required']
	},
	description: {
		type: String
	}
})

export const Task = mongoose.model('Task', TaskSchema)
