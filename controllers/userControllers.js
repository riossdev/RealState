import { check, validationResult} from "express-validator"

import User from "../models/User.js"

const formLogin = (req, res) =>{
  res.render('auth/login', {
    pagina: 'Iniciar Sesión',
  })
}
const formRegistro = ( req, res) =>{
  res.render('auth/registro', {
    pagina: 'Crear Cuenta'
  })
}

const registro = async( req, res) =>{

  await check('nombre').notEmpty().withMessage("Debes ingresar un nombre").run(req)
  await check('email').isEmail().withMessage("Debes ingresar un Email Valido").run(req)
  await check('password').isLength({min: 6}).withMessage("Debes ingresar un password de al menos 6 caracteres").run(req)
  await check('confirmar_password')
    .custom((value, { req }) => {
        return value.toLowerCase() === req.body.password.toLowerCase();
    })
    .withMessage('Las contraseñas no coinciden')
    .run(req);
  

  let resultado = validationResult(req)

  // verificar que el registro no este vacio
  if(!resultado.isEmpty()){
    return res.render('auth/registro', {
      pagina:'Crear Cuenta',
      errores: resultado.array(),
      usuario: {
        nombre : req.body.nombre,
        email : req.body.email
      }
    })
  }

 
  
  //verificar que el usuario no exista
  const { nombre, email, password } = req.body
  const usuarioExiste = await User.findOne({ where : { email }})

  if(usuarioExiste){
    return res.render('auth/registro', {
      pagina:'Crear Cuenta',
      errores: [{msg: "El usuario ya esta registrado"}],
      usuario: {
        nombre : req.body.nombre,
        email : req.body.email
      }
    })
  }

  // const usuario  = await User.create(req.body)
  // res.json(usuario)
   //Almacenar Un usuario
   await User.create({
    nombre,
    email,
    password,
    token: '123',
  })
  
}

const formOlvidePassword = ( req, res) =>{
  res.render('auth/olvidePassword', {
    pagina: 'Recupera tu acceso a Bienes Raices '
  })
}

export { 
  formLogin,
  formRegistro,
  registro,
  formOlvidePassword
}