import express from 'express'
import routes from './routes'

const app = express()

// Settings
app.set('port', process.env.PORT || 3000)

// Middlewares
app.use(express.json())

// Routes
app.use('/', routes)

export default app
