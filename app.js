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
app.use('/api/v1/movies', movieRouter)
console.log('hi thwere')

export { app }
