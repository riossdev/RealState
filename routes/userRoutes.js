import express from 'express'
import { formLogin, formRegistro, formOlvidePassword } from '../controllers/userControllers.js'

const router = express.Router()

router.get('/login', formLogin)
router.get('/registro', formRegistro)
router.get('/olvidepassword', formOlvidePassword)

export default router