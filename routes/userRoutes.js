import express from 'express'
import { formLogin, formRegistro } from '../controllers/userControllers.js'

const router = express.Router()

router.get('/login', formLogin)
router.get('/registro', formRegistro)

export default router