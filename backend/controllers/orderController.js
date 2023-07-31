import asyncHandler from '../middleware/asyncHandler.js';
import Order from '../models/orderModel.js';

// @desc    Create new order
// @route   POST /api/orders
// @access  PRIVATE
const addOrderItems = asyncHandler(async (req, res) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body;
  if (orderItems && orderItems.length === 0) {
    res.status(400);
    throw new Error('No order items');
  } else {
    const order = new Order({
      orderItems: orderItems.map((x) => ({
        ...x,
        product: x._id,
        _id: undefined,
      })),
      user: req.user._id,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
    });
    const createOrder = await order.save();
    res.status(201).json(createOrder);
  }
});

// @desc    Get logged in user order
// @route   GET /api/orders/mine
// @access  PRIVATE
const getMyOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({ user: req.user._id });
  res.status(200).json(orders);
});

// @desc    Update order to paid
// @route   PUT /api/orders/:/id/pay
// @access  PRIVATE
const updateOrderToPaid = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);
  if (order) {
    (order.isPaid = true),
      (order.paidAt = Date.now()),
      //comes from paypal below
      (order.paymentResult = {
        id: req.body.id,
        status: req.body.status,
        update_time: req.body.update_time,
        email_address: req.body.payer.email_address,
      });
    const updateOrder = await order.save(); //save to db
    res.status(200).json(updateOrder); //respond with updated order
  } else {
    res.stats(404);
    throw new Error('Order not found');
  }
});

// @desc    Get order by id
// @route   PUT /api/orders/:id
// @access  PRIVATE
const getOrderById = asyncHandler(async (req, res) => {
  //using .id because it's in the url and not directly from db as ._id
  //using populate to add name and email from the user collection to the order
  const order = await Order.findById(req.params.id).populate('user', 'name email');
  if (order) {
    res.status(200).json(order);
  } else {
    res.status(404);
    throw new Error('Order not found');
  }
});

//* ADMIN
// *======================
// *======================

// @desc     Update order to delivered
// @route   GET /api/orders/:id/deliver
// @access  PRIVATE/Admin
const updateOrderToDelivered = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);
  if (order) {
    order.isDelivered = true;
    order.deliveredAt = Date.now();
    const updateOrder = await order.save();
    res.status(200).json(updateOrder);
  } else {
    res.status(404);
    throw new Error('Order not found');
  }
});

// @desc    Get all orders
// @route   GET /api/orders
// @access  PRIVATE/Admin
const getOrders = asyncHandler(async (req, res) => {
  // Find all orders, populate from the user collection the id and name
  const orders = await Order.find({}).populate('user', 'id name');
  res.status(200).json(orders);
});
//* ADMIN
// *======================
// *======================

export {
  addOrderItems,
  getMyOrders,
  getOrderById,
  updateOrderToPaid,
  updateOrderToDelivered,
  getOrders,
};
