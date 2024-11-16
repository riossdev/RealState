import express from "express";
import  userRouter  from "./routes/userRoutes.js";

const app = express();
const Port = 4000;

app.set('view engine', 'pug')
app.set('views', './views')

app.use(express.static('public'))

app.use('/auth', userRouter);

app.listen(Port, () => {
  console.log(`Server is running on port  ${Port}`);
});
