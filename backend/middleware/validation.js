import { body } from 'express-validator';

export const validateRegistration = [
  body('username', 'Username is required and must be between 3 and 20 characters')
    .notEmpty()
    .trim()
    .isLength({ min: 3, max: 20 }),
  
  body('email', 'Please include a valid email')
    .isEmail()
    .normalizeEmail(),
  
  body('password', 'Password is required and must be at least 6 characters')
    .isLength({ min: 6 }),
];

export const validateLogin = [
  body('email', 'Please include a valid email')
    .isEmail()
    .normalizeEmail(),

  body('password', 'Password is required')
    .exists(),
];
