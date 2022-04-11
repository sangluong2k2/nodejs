import order from "../models/order";
import cart from "../models/cart";

export const listOrder = async (req, res) => {
    const listOrder = await order.find().exec()
    res.json(listOrder)
}
 
export const listOrderWeb = async (req, res) => {
    const listOrders = await order.find({user:req.params.user}).exec();
    res.json(listOrders)
}

export const addOrder = async (req,res) => {
    const AddOrder = await new order(req.body).save();
    res.json(AddOrder)
}
