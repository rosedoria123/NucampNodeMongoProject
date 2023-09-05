const express = require('express');
const router = express.Router();
const postsController = require('../controllers/postsController');

// Routes for Posts resource
router.get('/', postsController.getAllPosts);
router.get('/:postId', postsController.getPostById);
router.post('/', postsController.createPost);
router.put('/:postId', postsController.updatePost);
router.delete('/:postId', postsController.deletePost);

module.exports = router;
