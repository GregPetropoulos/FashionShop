import express from 'express';
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
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
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server running on ${PORT}`));
