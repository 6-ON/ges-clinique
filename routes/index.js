import { Router,json } from "express";
import chefRoutes from "./ChefRoutes";
import technicienRoutes from "./TechnicienRoutes";
import serviceRoutes from "./ServiceRoutes";

const router = Router();
router.use(json())

router.use("/chefs", chefRoutes);
router.use("/services", serviceRoutes);
router.use("/techniciens", technicienRoutes);



export default router;
