import app from "./app.js"
import { postRouter } from "./router/post.js"
import { userRouter } from "./router/user.js"

app.use('/blogpost',userRouter)
app.use('/blogpost', postRouter)