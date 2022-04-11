import { Router } from "express";
import { addCart, listCart, listCarts, removeCart, updateCart } from "../controllers/cart";
const { updatecart } = require('../controllers/order')
const router = Router()

router.get("/api/card" , listCart)
router.post("/api/cards" , addCart)
router.get('/api/cards/:user', listCarts)
router.delete('/api/card/:id', removeCart)
router.put('/api/cards/update/:user', updateCart)

export default router