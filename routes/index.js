import { Router,json } from "express";
import chefRoutes from "./ChefRoutes";
import AuthRoutes from "./AuthRoutes";
import technicienRoutes from "./TechnicienRoutes";
import serviceRoutes from "./ServiceRoutes";
import factureRoutes from "./FactureRoutes";
import succursaleRoutes from "./SuccursaleRoutes";

const router = Router();
router.use(json())

router.use("/chefs", chefRoutes);
router.use("/auth", AuthRoutes)
router.use("/services", serviceRoutes);
router.use("/factures",factureRoutes);
router.use("/succursales",succursaleRoutes);
router.use("/techniciens", technicienRoutes);



export default router;
