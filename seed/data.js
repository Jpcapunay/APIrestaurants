import db from "../db/connection.js";
import Restaurant from "../models/Restaurant.js";
import restaurants from "./restaurants.json" assert { type: "json" };
import chalk from "chalk";

const insertData = async () => {

   await db.dropDatabase();

   await Restaurant.create(restaurants);
   console.log(chalk.greenBright("Restaurants created!"));

   await db.close();
};

insertData();