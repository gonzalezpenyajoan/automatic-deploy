import { userRepository } from "#dals/index.js";
import { Router } from "express";
import { mapUserFromModelToApi } from "./user.mappers.js";

export const userAPI = Router();

userAPI.get('/', async (req, res, next) => {
    try {
        const user = await userRepository.getUserById(req.userSession.id);
        res.send(mapUserFromModelToApi(user));
    } catch (error) {
        next(error);
    }
})