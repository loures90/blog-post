import app from "./app.js"
import { userRouter } from "./router/user.js"

app.use('/blogpost',userRouter)