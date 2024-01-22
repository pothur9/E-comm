import mongoose from "mongoose";
import { connectToDatabase } from "./dbConnect";
const adminSchema = new mongoose.Schema({
    username: String,
    password: String
});

export const Admin = mongoose.models.Admin || mongoose.model('Admin', adminSchema);

const addProductSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: String,
    image: String
})

export const addProduct = mongoose.models.products || mongoose.model('products', addProductSchema);

