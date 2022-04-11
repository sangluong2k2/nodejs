import express from "express";
import productRouter from "./routes/product";
import mongoose from "mongoose";
import categoryRouter from "./routes/category";
import authRouter from "./routes/auth";
import orderRouter from "./routes/order";
import CartRouter from "./routes/cart"

import cors from 'cors';

const app = express();

app.use(express.json())
app.use(cors());

app.use("/api", productRouter);
app.use("/api", categoryRouter);
app.use("/api", authRouter);
app.use("/api", orderRouter);
app.use("/api", CartRouter)

mongoose.connect("mongodb://localhost:27017/nodejs")
    .then(() => console.log("connect db thanh cong"))
    .catch((error) => console.log(error))
    
const PORT = 8000

app.listen(PORT, () => {
    console.log(`Server running port ${PORT}`)
}); 