import { Router } from 'express'
import { TaskController } from '../controllers'
import handler from './controllerHandler'

const router = Router()

router
  .route('/')
  .get(handler(TaskController.getAll))
  .post(handler(TaskController.saveTask))

router.route('/:id').get(handler(TaskController.getById))

export default router
