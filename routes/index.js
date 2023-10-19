import { Router,json } from "express";
import chefRoutes from "./ChefRoutes";
import ReclamationRoutes from "./ReclamationRoutes";
import EmployeeRoutes from "./EmployeeRoutes";
import technicienRoutes from "./TechnicienRoutes";
const router = Router();
router.use(json())
router.use("/Reclamations", ReclamationRoutes);
router.use("/Employees", EmployeeRoutes);
router.use("/chefs", chefRoutes);
router.use("/techniciens", technicienRoutes);

export default router;
