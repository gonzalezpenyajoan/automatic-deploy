import express from "express";
import path from "node:path";
import { ENV } from "./core/constants/index.js";
import { authenticationMiddleware } from "#core/security/security.middleware.js";
import {createRestApiServer, dbServer} from './core/servers/index.js';
import { logErrorRequestMiddleware, logRequestMiddleware } from "./common/middlewares/logger.middlewares.js";
import { houseAPI } from "./pods/house/index.js";
import { securityAPI } from "#pods/security/security.api.js";
import { userAPI } from "#pods/user/user.api.js";

const app = createRestApiServer();

app.use("/", express.static(path.resolve(import.meta.dirname, ENV.STATIC_FILES_PATH)));

app.use(logRequestMiddleware);

app.use('/api/security', securityAPI);
app.use('/api/houses', authenticationMiddleware, houseAPI);
app.use('/api/users', authenticationMiddleware, userAPI);

app.use(logErrorRequestMiddleware);

app.listen(ENV.PORT, async() => { 
    if(!ENV.IS_API_MOCK) {
        await dbServer.connect(ENV.MONGODB_URL);
        console.log('Running DB');
    } else {
        console.log('Running Mock API');
    }
    console.log(`Server ready at port ${ENV.PORT}`);
})