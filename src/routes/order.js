import { Router } from "express";
import { addOrder, detailInfo, listdeltail, listOrder, listOrderWeb, updatenew, updatestatus } from "../controllers/order";

const router = Router();

router.get("/orders", listOrder)
router.get("/ordersweb/:user", listOrderWeb)
router.post("/order", addOrder)
router.put("/order/:user", updatenew)
router.put("/order/:id/update", updatestatus)
router.get("/orders/:id", listdeltail)
router.get("/orderss/:id", detailInfo)

export default router