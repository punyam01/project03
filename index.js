import 'dotenv/config'
import express from 'express'
import connectDb from './db/dbconnector.js'
const app = express()

connectDb()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`SERVER IS RUNNING AT PORT:  ${process.env.PORT} `)
    })
  })
  .catch(err => {
    console.log(`DATABASE CONNECTION FAILED :`, err)
  })
