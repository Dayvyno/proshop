import express from 'express'
const router = express.Router()
import { 
  authUser, 
  getUserProfile, 
  registerUser, 
  UpdateUserProfile,
  getUsersByAdmin
} from "../controllers/userController.js";
import { protect, admin} from '../middleware/authMiddleware.js';


router.post('/', registerUser).get('/', protect, admin, getUsersByAdmin)
router.post('/login', authUser)
router.get('/profile', protect, getUserProfile)
router.put('/profile', protect, UpdateUserProfile)


export default router