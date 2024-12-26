import express from "express";
import  userRouter  from "./routes/userRoutes.js";
import db from "./config/db.js";

const app = express();
const Port = 4000;

app.use(express.urlencoded({extended: true}))

// conexion a al BB
try {
  await db.authenticate();
  db.sync()
  console.log("Conexion exitosa a la base de datos");
} catch (error) {
  console.log(error)
}

// Habiliatr pug
app.set('view engine', 'pug')
app.set('views', './views')

// carpeta Publica
app.use(express.static('public'))

//routing
app.use('/auth', userRouter);

app.listen(Port, () => {
  console.log(`Server is running on port  ${Port}`);
});
