import Restaurant from "../models/Restaurant.js";

export const getRestaurants = async (req, res) => {
    try {
        const restaurants = await Restaurant.find();
        res.json(restaurants);
    }   catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
};

export const getRestaurant = async (req, res) => {
    const { id } = req.params;
    const restaurant = await Restaurant.findById(id);

    if (restaurant) {
        return res.json(restaurant);
    }

    res.status(404).json({message: "not found"});
};

export const createRestaurant = async (req, res) => {
    const restaurant = new Restaurant(req.body);
    await restaurant.save();
    res.status(201).json(restaurant);
};

export const updateRestaurant = async (req, res) => {
    const {id} = req.params;
    const restaurant = await Restaurant.findByIdAndUpdate(id, req.body);
    res.status(201).json(restaurant);
};

export const deleteRestaurant = async (req, res) => {
    try {
        const  { id } = req.params;
        const deleted = await Restaurant.findByIdAndDelete(id);

        if (deleted) {
            return res.status(200).send("Restaurant deleted");
        }

        throw new Error("Restaurant not found!");
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
};

export const getRestaurantByName = async (req, res) => {
    try {
        const {name } = req.params

        const restaurant = await Restaurant.find({ name: name})

        res.json(restaurant)
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
}

