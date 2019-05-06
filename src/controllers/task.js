import { Task } from '../models'

// Controllers should not be coupled to express (req, res, next)
export const TaskController = {
	async saveTask({ title, description }) {
		const newTask = new Task({
			title,
			description
		})

		return await newTask.save()
	},
	async getAll() {
		return await Task.find({}).exec()
	},
	async getById({ id }) {
		return await Task.findById(id)
	}
}
