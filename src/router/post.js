import express from 'express';
import createPostController from '../controller/post/create.js'
export const postRouter = express.Router();


postRouter.post('/', createPostController)
// postRouter.patch('/edit', createController)
// postRouter.delete('/', createController)
// postRouter.get('/', createController)
// postRouter.get('/:id', getPostController)

