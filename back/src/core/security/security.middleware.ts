import jwt from 'jsonwebtoken';
import { UserSession, Role } from '#core/models/index.js';
import { RequestHandler } from 'express';
import { ENV } from '#core/constants/env.constants.js';
import { verifyJWT } from '#common/helpers/jwt.helpers.js';

export const authenticationMiddleware: RequestHandler = async (req, res, next) => {
    try {
        const [, token] = req.cookies.authorization?.split(" ") || [];
        const userSession = await verifyJWT<UserSession>(token, ENV.AUTH_SECRET);
        req.userSession = userSession;
        next();
    } catch (error) {
        res.clearCookie('authorization');
        res.sendStatus(401);
    }
};

const isAuthorized = (currentRole: Role, allowedRoles: Role[]) =>
    Boolean(currentRole) && allowedRoles?.some((role) => currentRole === role);

export const authorizationMiddleware = (allowedRoles: Role[]): RequestHandler => async (req, res, next) => {
    if(isAuthorized(req.userSession?.role, allowedRoles)) {
        next();
    } else {
        res.sendStatus(403);
    }
};