import { User, userRepository } from "#dals/index.js";
import { Router } from "express";
import jwt from 'jsonwebtoken';
import { UserSession } from "#core/models/user-session.model.js";
import { ENV } from "#core/constants/env.constants.js";

export const securityAPI = Router();

securityAPI.post('/login', async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await userRepository.getUser(email, password);
        if (user) {
            const userSession: UserSession = {
                id: user._id.toHexString(),
                role: user.role
            };
            const token = jwt.sign(userSession, ENV.AUTH_SECRET, {
                expiresIn: '1d',
                algorithm: 'HS256'
            });
            res.cookie('authorization', `Bearer ${token}`, {
                httpOnly: true,
                secure: ENV.IS_PRODUCTION
            });
            res.sendStatus(204);
        } else {
            res.clearCookie('authorization');
            res.sendStatus(401);
        }
    } catch (error) {
        next(error);
    }
})
.post('/logout', async (req, res) => {
    res.clearCookie('authorization');
    res.sendStatus(200);
})