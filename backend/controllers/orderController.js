import Order from '../models/orderModel.js'


// @desc  Create new Order
// @route POST /api/orders
// @access Private
const addOrderItems =async(req, res)=>{

  try {
    const {
      orderItems, 
      shippingAddress, 
      paymentMethod, 
      itemsPrice, 
      taxPrice,
      shippingPrice,
      totalPrice
    } = req.body

    if (orderItems && orderItems.length===0){
      res.status(400).json({
        message: "No item has been selected"
      })
      return 
    } else{
      const order = new Order ({
        user: req.user.id,
        orderItems, 
        shippingAddress, 
        paymentMethod, 
        itemsPrice, 
        taxPrice,
        shippingPrice,
        totalPrice
      })
      const createOrder = await order.save()

      if (createOrder){
        res.json({
          _id: createOrder._id
        })
      } else {
        res.status(400).json({
          message: '_id not found'
        })
      }
    }

  } catch (error) {
    res.status(404).json({
      message: 'Order could not be placed, server error',
      systemMessage: error
    })
  }
}

// @desc  Get order by ID
// @route GET /api/orders/:id
// @access Private
const getOrderById =async(req, res)=>{
  try {
    const order = await Order.findById(req.params.id).populate('user', 'name email')
  if (order){
    res.json(order)
  } else {
    res.status(400).json({
      message: "Server error, order not found"
    })
  }

  } catch (error) {
    res.status(400).json({
      message: 'Order not found'
    })
  }
}

// @desc  Update order to paid
// @route put /api/orders/:id/pay
// @access Private
const updateOrderToPaid =async(req, res)=>{
  try {
    const order = await Order.findById(req.params.id)
  if (order){
    //This payment method is for PayPal. Another payment method will likely different varriables
    order.isPaid = true
    order.paidAt = Date.now()
    order.paymentResult = {
      id: req.body.id,
      status: req.body.status,
      update_time: req.body.update_time,
      email_address: req.body.payer.email_address
    }

    const updatedOrder = await order.save()

    res.json(updatedOrder)

  } else {
    res.status(400).json({
      message: "Server error, order could not be updated"
    })
  }

  } catch (error) {
    res.status(400).json({
      message: 'Order could not be updated'
    })
  }
}



// @desc  Get logged in user orders
// @route put /api/orders/myorders
// @access Private
const getMyOrders =async(req, res)=>{
  try {
    const order = await Order.find({user: req.user.id})
    res.json(order)

  } catch (error) {
    res.status(400).json({
      message: 'Order could not be updated'
    })
  }
}




export {addOrderItems, getOrderById, updateOrderToPaid, getMyOrders}