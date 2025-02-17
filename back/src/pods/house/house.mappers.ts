import * as model from "#dals/index.js";
import * as apiModel from "./house.api-model.js";

export const mapHouseFromModelToAPI = (house: model.House): apiModel.House => {
    house.reviews.sort((review1, review2) => - compareDates(review1.date, review2.date))
    return {
        id: house._id,
        name: house.name,
        image: house.images.picture_url,
        description: house.description,
        address: house.address.street,
        beds: house.beds,
        bathrooms: house.bathrooms,
        latest_reviews: house.reviews.slice(0,5)
    }
};

function compareDates (date1: Date, date2: Date) {
    if (date1 < date2) return -1;
    else if (date1 === date2) return 0;
    else return 1;
}

export const mapHouseListFromModelToAPI = (houseList: model.House[]): apiModel.House[] => {
    return houseList.map(mapHouseFromModelToAPI);
}

export const mapHouseFromAPIToModel = (house: apiModel.House): model.House => {
    return {
        _id: house.id,
        name: house.name,
        images: {
            picture_url: house.image
        },
        description: house.description,
        address: {
            street: house.address
        },
        beds: house.beds,
        bathrooms: house.bathrooms,
        reviews: house.latest_reviews
    }
}