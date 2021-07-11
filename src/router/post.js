import express from 'express';
import createPostController from '../controller/post/create.js'
import deletePostContoller from '../controller/post/delete.js';
import editPostContoller from '../controller/post/edit.js';
import getAllPostsContoller from '../controller/post/getAll.js';
import getPostContoller from '../controller/post/getPost.js';

export const postRouter = express.Router();

postRouter.post('/', createPostController)
postRouter.patch('/edit', editPostContoller)
postRouter.delete('/', deletePostContoller)
postRouter.get('/', getAllPostsContoller)
postRouter.get('/:id', getPostContoller)

