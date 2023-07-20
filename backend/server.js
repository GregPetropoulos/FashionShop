import express from 'express';
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import dotenv from 'dotenv';
import colors from 'colors';
dotenv.config();
import connectDB from './config/db.js';

const PORT = process.env.PORT || 5000;
connectDB(); // Connect to MongoDB
const app = express();
// app.get('/', (req, res) => {
//   res.send('API IS RUNNING');
// });

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server running on ${PORT}`));
