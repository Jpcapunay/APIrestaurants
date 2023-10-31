import { Router } from "express";
import restaurantRoutes from "./restaurants.js";
const router = Router()

router.get("/", (req, res) => res.send("API route"));

router.use("/restaurants", restaurantRoutes);

export default router;