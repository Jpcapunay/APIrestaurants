import mongoose from "mongoose";

const Schema = mongoose.Schema

let RestaurantSchema = new Schema({
    brewery_type: { type: String},
    name: { type: String},
    brewery_type: { type: String},
    address_1: {type: String},
    address_2: {type: String},
    address_3: {type: String},
    city: { type: String},
    state_province: {type: String},
    postal_code: {type: String},
    country: {type: String},
    longitude: {type: String},
    latitude: {type: String},
    phone: {type: String},
    website_url: {type: String},
    state: {type: String},
    street: {type: String},
});

export default mongoose.model("restarants", RestaurantSchema);