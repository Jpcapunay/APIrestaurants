import {Router} from 'express';
import * as controllers from "../controllers/restaurants.js";

const router = Router();

router.get("/", controllers.getRestaurants);
router.get("/:id", controllers.getRestaurant);
router.post("/", controllers.createRestaurant);
router.put("/:id", controllers.updateRestaurant);
router.delete("/:id", controllers.deleteRestaurant);

router.get("/name/:name", controllers.getRestaurantByName)

export default router;
