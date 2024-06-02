import express from 'express';
import { createPost, deletePost, getPost, getPosts, updatePost } from '../controllers/postController.js';

const router = express.Router();



// adding logging middleware
// const logger = ((req, res, next) => {
//     console.log(`${req.method} ${req.protocol}://${req.get('host')}${req.originalUrl}`
//     );
//     next();
// })
// just add logger as 2nd arg if you want to use it in router level
// router.get('/', logger, (req, res)=>{

// get all posts
router.get('/',getPosts )

// get post by ID
router.get('/:id',getPost)

// create a new post
router.post('/',createPost)


// update post
router.put('/:id',updatePost)


// Delete post
router.delete('/:id',deletePost)

export default router