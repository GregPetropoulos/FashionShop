import mongoose from 'mongoose';
import User from './models/userModel.js';
import Product from './models/productModel.js';
import Order from './models/orderModel.js';
import dotenv from 'dotenv';
import colors from 'colors';
import users from './data/users.js';
import products from './data/products.js';
import connectDB from './config/db.js';

dotenv.config();
await connectDB();

const importData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();
    const createdUsers = await User.insertMany(users);
    const adminUser = createdUsers[0]._id; //this is grabbing the first user in the seed data which is an admin user

    // adding adminUser to each product in MOCK data
    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser };
    });
    //Adding mock products with adminUser to DB
    await Product.insertMany(sampleProducts);
    console.log('Data Imported!'.green.inverse);
    process.exit();
  } catch (err) {
    console.error(`${err}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();
    console.log('Data Destroyed!'.red.inverse);
    process.exit();
  } catch (err) {
    console.error(`${err}`.red.inverse);
    process.exit(1);
  }
};
// console.log(process.argv)

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}
