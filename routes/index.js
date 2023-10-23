import { Router,json } from "express";
import chefRoutes from "./ChefRoutes";

import ReclamationRoutes from "./ReclamationRoutes";
import ReservationRoutes from "./ReservationRoutes";
import EmployeeRoutes from "./EmployeeRoutes";

import ClientRoutes from "./ClientRoutes";

import AuthRoutes from "./AuthRoutes";
import technicienRoutes from "./TechnicienRoutes";
import serviceRoutes from "./ServiceRoutes";
import factureRoutes from "./FactureRoutes";
import succursaleRoutes from "./SuccursaleRoutes";
import adminRoutes from "./AdminRoutes";
import entrepriseRoutes from "./EntrepriseRoutes";
import { RequireRoles, authenticate } from "../middlewares";

const router = Router();
router.use(json())
router.use("/auth", AuthRoutes);
router.use(authenticate);
router.use("/reclamations", ReclamationRoutes);
router.use("/reservations", ReservationRoutes);
router.use("/employees", EmployeeRoutes);
router.use("/chefs", chefRoutes);

router.use("/services", serviceRoutes);
router.use("/factures",factureRoutes);
router.use("/succursales",succursaleRoutes);
router.use("/techniciens", technicienRoutes);
router.use("/clients", ClientRoutes);
router.use("/entreprises", entrepriseRoutes);
router.use("/admins",RequireRoles(["superadmin"]), adminRoutes);





export default router;
