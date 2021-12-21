import Product from '../models/productModel.js'


// @desc  Fetch all products
// @route GET /api/products
// @access Public
const getProducts =async(req, res)=>{

  try {
    const products = await Product.find({})
    res.json(products)
  } catch (error) {
    res.status(404).json({
      message: 'Failed to fetch data',
      systemMessage: error
    })
  }
}

// @desc  Fetch a single product
// @route GET /api/products/:id
// @access Public
const getProductById=async (req, res)=>{

  try {
    const product = await Product.findById(req.params.id)
    res.json(product)
  } catch (error) {
    res.status(404).json({
      message: 'Failed to fetch data',
      systemMessage: error 
    })
  }
}

export {getProducts, getProductById}
