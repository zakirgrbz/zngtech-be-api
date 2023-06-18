import express from 'express';
import sellRepository from '../repository/sell-repository.js';
const router = express.Router();

router.get('/', async (req, res, next) => {
   try {
      const userId = req.query.userId; // /?userId=something
      const order = req.query.order; // Get order from query parameter
      let posts;
      if (userId) {
         posts = await sellRepository.getPostsByUserId(userId, order);
      } else {
         posts = await sellRepository.getAllPosts(order);
      }
      return res.status(200).send(posts);
   } catch (error) {
      return next({ status: 404, message: error });
   }
});

// Create a new post
router.post('/', async (req, res, next) => {
   try {
      const { body } = req;
      const newPost = await sellRepository.createSellNow(body);
      return res.send(newPost);
   } catch (error) {
      return next({ status: 500, message: error.message });
   }
});

export default router;
