

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
const formOlvidePassword = ( req, res) =>{
  res.render('auth/olvidePassword', {
    pagina: 'Recupera tu acceso a Bienes Raices '
  })
}

export {
  formLogin,
  formRegistro,
  formOlvidePassword
}