import { Router } from 'express'

import rootRoutes from './root.routes'
import tasksRoutes from './tasks.routes'

const router = Router()

router.use('/', rootRoutes)
router.use('/task', tasksRoutes)

export default router
