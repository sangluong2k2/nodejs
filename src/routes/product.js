import { checkAuth } from '../middleware/checkAuth';
import { Router } from 'express';
import { add, remove, detail, list, updated } from '../controllers/product';

const router = Router();

router.get("/products", checkAuth, list )
router.get("/product/:id", detail )
router.post("/products",checkAuth, add )
router.delete("/product/:id", remove )
router.put("/product/:id", updated )

export default router;