import express from 'express'
import { 
  addOrderItems, 
  getMyOrders, 
  getOrderById, 
  updateOrderToPaid, 
  getOrders,
  updateOrderToDelivered
} from '../controllers/orderController.js'
import { protect, admin } from '../middleware/authMiddleware.js'

const router = express.Router()

router.route('/'). post(protect, addOrderItems).get(protect, admin, getOrders)
router.get('/myorders', protect, getMyOrders)
router.get('/:id', protect, getOrderById)
router.put('/:id/pay', protect, updateOrderToPaid)
router.put('/:id/delivered', protect, admin, updateOrderToDelivered)

export default router