import { HouseRepository } from "./house.repository.js";
import { House, Review } from "../house.model.js";
import { db } from "../../mock-data.js";
import { createId } from "#common/helpers/id.helper.js";

const insertHouse = (house: House) => {
    const _id = createId();
    const newHouse: House = {
        ...house,
        _id
    };

    db.houses.push(newHouse);
    return newHouse;
};

const insertReview = (houseId: String, review) => {
    const house = db.houses.find((h) => h._id === houseId);
    if (!house){
        throw new Error('Unable to find parent reference');
    }
    const newReview: Review = {
        ...review,
        _id: createId(),
        date: new Date()
    };
    const newHouse: House = { ...house };
    newHouse.reviews.push(newReview);

    db.houses.map((h) => (h._id === newHouse._id ? { ...h, ...newHouse } : h));
    return newReview;
};

const updateHouse = (house: House) => {
    db.houses = db.houses.map((h) => (h._id === house._id ? { ...h, ...house } : h));
    return house;
};

const paginateHouseList = (houseList: House[], page: number, pageSize: number) : House [] => {
    let paginatedHouseList = [...houseList];
    if (page && pageSize) {
        const startIndex = (page -1) * pageSize;
        const endIndex = Math.min(startIndex + pageSize, paginatedHouseList.length);
        paginatedHouseList = paginatedHouseList.slice(startIndex, endIndex);
    }
    return paginatedHouseList;
};

export const mockRepository: HouseRepository = {
    getHouseList: async (page?: number, pageSize?: number) => paginateHouseList(db.houses, page, pageSize),
    getHouse: async (id: string) => db.houses.find((h) => h._id === id),
    saveHouse: async (house: House) => db.houses.some((h) => h._id === house._id) ? updateHouse(house) : insertHouse(house),
    deleteHouse: async (id: string): Promise<Boolean> => {
        const exists = db.houses.some((h) => h._id === id);
        db.houses = db.houses.filter((h) => h._id !== id);
        return exists;
    },
    postReview: async (id: string, review) => insertReview(id, review),
    updateHouse: async (house: House) => updateHouse(house)
}