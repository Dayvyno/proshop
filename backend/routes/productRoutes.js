import express from 'express'
// import asyncHandler from 'express-async-handler'
const router = express.Router()
import Product from '../models/productModel.js'
import {getProducts, getProductById} from '../controllers/productController.js'

router.route('/').get(getProducts)
router.route('/:id').get(getProductById)

export default router


// try {
//   const products = await Product.find({})
//   res.json(products)
// } catch (error) {
//   res.status(404).json(`Error Message: Not Found: ${error}`)
// }

// try {
//   const product = await Product.findById(req.params.id)
//   res.json(product)
// } catch (error) {
//   res.status(404).json(`Error Message: Not Found: ${error}`)
// }