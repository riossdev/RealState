import express from 'express'
import { formLogin, formRegistro, formOlvidePassword, registro } from '../controllers/userControllers.js'

const router = express.Router()

router.get('/login', formLogin)
router.get('/registro', formRegistro)
router.post('/registrar', registro)
router.get('/olvidepassword', formOlvidePassword)

export default router