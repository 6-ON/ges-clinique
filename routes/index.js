import { Router,json } from "express";
import chefRoutes from "./ChefRoutes";
import AuthRoutes from "./AuthRoutes";
const router = Router();
router.use(json())
router.use("/chefs", chefRoutes);
router.use("/auth", AuthRoutes)

export default router;
