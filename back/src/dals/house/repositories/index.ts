import { mockRepository } from "./house.mock-repository.js";
import { mongoDBRepository } from "./house.mongodb-repository.js";
import { ENV } from "#core/constants/env.constants.js";

export const houseRepository = ENV.IS_API_MOCK ? mockRepository : mongoDBRepository;
