import Product from "../models/product"
import slugify from "slugify";

export const list = async (req, res) => {
    try {
        const product = await Product.find().exec();
        res.json(product);
    } catch (error) {
        res.status(400).json({
            message: "Show sản phẩm không thành công"
        })
    }
    
};
export const detail = async (req,res) => {
    try {
        const product = await Product.findOne({_id : req.params.id}).exec();
        res.json(product)
    } catch (error) {
        res.status(400).json({
            message: "Show sản phẩm không thành công"
        })
    }
    
};
export const add = async (req, res) => {
    req.body.slug = slugify(req.body.name)
    try {
        const product = await new Product(req.body).save();
        res.json(product);
    } catch (error) {
        res.status(400).json({
            message: "Thêm sản phẩm không thành công"
        })
    }
};
export const remove = async (req,res) => {
    try {
        const product = await new Product.findOneAndDelete({_id : req.params.id}).exec();
        res.json(product)
    } catch (error) {
        res.status(400).json({
            message: "Thêm sản phẩm không thành công"
        })
    }
};
export const updated = async (req,res) => {
    const condition = {_id: req.params.id};
    const update = req.body;
    const optional = { new : true}
    try {
        const newProduct = await new Product.findOneAndUpdate(condition, update, optional).exec();
        res.json(newProduct)
    } catch (error) {
        res.status(400).json({
            message: "Thêm sản phẩm không thành công"
        })
    }
};