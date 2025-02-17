import { dbServer } from "#core/servers/db.server.js";
import { House } from "./house.model.js";

export const getHouseContext = () => dbServer?.db?.collection<House>('listingsAndReviews');