import { Router } from 'express'
import { TaskController } from '../controllers'

const router = Router()

const handler = promise => async (req, res, next) => {
	try {
		const result = await promise({ ...req.params, ...req.body })
		res.json(result || { ok: true })
	} catch (err) {
		res.status(500).json({
			ok: false,
			err
		})
	}
}

router
	.route('/')
	.get(handler(TaskController.getAll))
	.post(handler(TaskController.saveTask))

router.route('/:id').get(handler(TaskController.getById))

export default router
