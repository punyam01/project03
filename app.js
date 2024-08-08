import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'

const app = express()

// declaring values for accepting values
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
  })
)

app.use(express.json({ limit: '16kb' }))
app.use(express.urlencoded({ extended: true, limit: '16kb' }))
app.use(express.static('public'))
app.use(cookieParser())

// routers definition

import movieRouter from './routes/movie.routes.js'
import authRouter from './routes/auth.routes.js'
app.use('/api/v1/movies', movieRouter)
app.use(`api/v1/users`, authRouter)
app.all(`*`, (req, res, next) => {
  res.status(401).json({
    status: `failed`,
    message: `page not found`
  })
})

export { app }
