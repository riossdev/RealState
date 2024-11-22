

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

export {
  formLogin,
  formRegistro
}