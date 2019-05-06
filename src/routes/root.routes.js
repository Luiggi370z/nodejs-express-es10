import { Router } from 'express'

const router = Router()

router.route('/').get((req, res) => {
	res.send('Welcome to home page!! 👍')
})

export default router
