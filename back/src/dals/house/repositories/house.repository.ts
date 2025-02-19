import { House, Review } from "../house.model.js";

export interface HouseRepository {
    getHouseList: (page?: Number, pageSize?: Number, countryCode?: String) => Promise<House[]>;
    getHouse: (id: String) => Promise<House>;
    saveHouse: (house: House) => Promise<House>;
    deleteHouse: (id: String) => Promise<Boolean>;
    postReview: (id: String, review) => Promise<Review>;
    updateHouse: (house: House) => Promise<House>;
}