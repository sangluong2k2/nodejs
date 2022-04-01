import { checkAuth, isAuth, requireSignin, isAdmin } from '../middleware/checkAuth';
import { Router } from 'express';
import { add, remove, detail, list, updated } from '../controllers/product';
import { userById } from '../controllers/user';
const router = Router();

router.get("/products", checkAuth, list )
router.get("/products/:id", detail )
router.post("/products",checkAuth, add )
router.delete("/products/:id", remove )
router.put("/products/:id", updated )

router.param("userId", userById)

export default router;