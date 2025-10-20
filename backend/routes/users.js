   import express from 'express';
   import User from '../models/User.js';

   const router = express.Router();

   // @route   GET api/v1/users
   // @desc    Get all users
   // @access  Public
   router.get('/', async (req, res) => {
     try {
       // We use .select('-password') to ensure we never send back user passwords.
       const users = await User.find().select('-password');
       res.json(users);
     } catch (err) {
       console.error(err.message);
       res.status(500).send('Server Error');
     }
   });

   export default router;
   

