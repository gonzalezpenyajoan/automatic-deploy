import { Review } from "#dals/house/house.model.js";

export interface House {
    id: String;
    name: String;
    image: String;
    description: String;
    address: String;
    beds: Number;
    bathrooms: Number;
    latest_reviews: Review[];
}