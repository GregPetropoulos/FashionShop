import path from 'path';
import express from 'express';
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import uploadRoutes from './routes/uploadRoutes.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import colors from 'colors';
dotenv.config();
import connectDB from './config/db.js';

const PORT = process.env.PORT || 5000;

//* CONNECT MONGODB
connectDB();

const app = express();

// * REQUEST BODY PARSER MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//* COOKIE PARSER MIDDLEWARE--allows us to access request.cookies
app.use(cookieParser());

//* TEST ROUTE
// app.get('/', (req, res) => {
//   res.send('API IS RUNNING');
// });

// * ROUTES
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);

//* UPLOAD ROUTE
app.use('/api/upload', uploadRoutes);

// *PAYPAL-ROUTE
app.get('/api/config/paypal', (req, res) => res.send({ clientId: process.env.PAYPAL_CLIENT_ID }));

//*SET THE UPLOAD FOLDER THAT IMAGES ARE BEING UPLOADED TO AS STATIC FOLDER
const __dirname = path.resolve(); //set dirname to current folder
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));

//*FOR DEPLOYMENT
if (process.env.NODE_ENV === 'production') {
  // After npm run build is ran, set build folder to be static folder,
  app.use(express.static(path.join(__dirname, '/frontend/build')));

  //Any route that is not api will be redirected to index.html
  //Load the index.html in the frontend build folder, if not an api route
  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  );
} else {
  app.get('/', (req, res) => {
    res.send('API IS RUNNING IN DEV ENVIRONMENT...');
  });
}
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server running on ${PORT}`));
