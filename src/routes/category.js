import { Router } from "express";
import { create, list, read, removecate } from "../controllers/category";
import { checkAuth } from "../middleware/checkAuth";

const router = Router();

router.get("/categories", list);
router.post('/categories', create);
router.get('/categories/:slug', read);
router.delete('/categories/:id', removecate)
export default router