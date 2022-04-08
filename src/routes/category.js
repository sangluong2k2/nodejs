import { Router } from "express";
import { create, get, list, read, removecate, update } from "../controllers/category";
import { checkAuth } from "../middleware/checkAuth";

const router = Router();

router.get("/categories", list);
router.get("/categories/:id", get)
router.post('/categories', create);
router.get('/category/:slug', read);
router.delete('/categories/:id', removecate)
router.put("/categories/:id/edit", update)
export default router