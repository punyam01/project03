import express from 'express'
import { signin, signup } from '../controllers/user.controllers.js'
const router = express.Router()

router.route(`/signin`).get(signin)
router.route(`/signup`).post(signup)
export default router
