import { Task } from '../models'

// Controllers should not be coupled to express (req, res, next)
export const TaskController = {
	async saveTask({ title, description }) {
		try {
			const newTask = new Task({
				title,
				description
			})

			return await newTask.save()
		} catch (err) {
			throw err
		}
	},
	async getAll() {
		try {
			return await Task.find({}).exec()
		} catch (err) {
			throw err
		}
	},
	async getById({ id }) {
		try {
			return await Task.findById(id)
		} catch (err) {
			throw err
		}
	}
}
