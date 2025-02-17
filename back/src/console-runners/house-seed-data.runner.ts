import { getHouseContext } from '#dals/house/house.context.js';
import { db } from '#dals/mock-data.js';

export const run = async () => {
    await getHouseContext().insertMany(db.houses);
}