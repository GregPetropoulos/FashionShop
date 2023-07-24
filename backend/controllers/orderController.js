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
// @route   GET /api/orders/:/id/pay
// @access  PRIVATE
const updateOrderToPaid = asyncHandler(async (req, res) => {});
//* ADMIN
// *======================
// *======================
// @desc    Get order by id
// @route   GET /api/orders/:id
// @access  PRIVATE/Admin
const getOrderById = asyncHandler(async (req, res) => {
  //using .id because it's in the url and not directly from db as ._id
  //using populate to add name and eamil from the user collection to the order
  const order = await Order.findById(req.params.id).populate('user', 'name email');
  if (order) {
    res.status(200).json(order);
  } else {
    res.status(404);
    throw new Error('Order not found');
  }
});
// @desc     Update order to delivered
// @route   GET /api/orders/:id/deliver
// @access  PRIVATE/Admin
const updateOrderToDelivered = asyncHandler(async (req, res) => {
  res.send('update order delivered, admin action');
});

// @desc    Get all orders
// @route   GET /api/orders
// @access  PRIVATE/Admin
const getOrders = asyncHandler(async (req, res) => {
  res.send('get all orders, admin action');
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
