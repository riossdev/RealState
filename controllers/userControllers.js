

const formLogin = (req, res) =>{
  res.render('auth/login', {
    autenticado: true
  })
}
const formRegistro = ( req, res) =>{
  res.render('auth/registro')
}

export {
  formLogin,
  formRegistro
}