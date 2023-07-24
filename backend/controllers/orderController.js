import asyncHandler from '../middleware/asyncHandler.js';
import Order from '../models/orderModel.js';

// @desc    Create new order
// @route   POST /api/orders
// @access  PRIVATE
const addOrderItems = asyncHandler(async (req, res) => {
  res.send('add order items');
});

// @desc    Get logged in user order
// @route   GET /api/orders/mine
// @access  PRIVATE
const getMyOrders = asyncHandler(async (req, res) => {
  res.send('get my orders');
});



// @desc    Update order to paid
// @route   GET /api/orders/:/id/pay
// @access  PRIVATE
const updateOrderToPaid = asyncHandler(async (req, res) => {
  res.send('update order to paid');
});
//* ADMIN
// *======================
// *======================
// @desc    Get order by id
// @route   GET /api/orders/:id
// @access  PRIVATE/Admin
const getOrderById = asyncHandler(async (req, res) => {
  res.send('get order by id');
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
