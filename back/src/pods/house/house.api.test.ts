import supertest from 'supertest';
import { createRestApiServer, dbServer } from '#core/servers/index.js';
import { ENV } from '#core/constants/env.constants.js';
import { houseAPI } from './house.api.js';
import { getHouseContext } from '#dals/house/house.context.js';
import { db } from '#dals/mock-data.js';
import { getUserContext } from '#dals/user/user.context.js';

describe("pods/house/house.api tests", () => {
    beforeAll(async () => {
        await dbServer.connect(ENV.MONGODB_URL);
    });

    beforeEach(async () => {
        await getHouseContext().insertMany(db.houses);
        await getUserContext().insertMany(db.users);
    });

    afterEach(async () => {
        await getHouseContext().deleteMany({});
        await getUserContext().deleteMany({});
    });

    afterAll(async () => {
        await dbServer.disconnect();
    });

    describe("get house list", () => {

        const app = createRestApiServer();
        app.use(houseAPI);

        it("returns the whole houseList when it requests endpoint without query params", async () => {
            // Given
            const route = '/';

            // When
            const response = await supertest(app).get(route);

            // Then
            expect(response.statusCode).toEqual(200);
            expect(response.body).toHaveLength(6);

        });
    });
    
    describe("insert House", () => {
        it("returns 201 when admin inserts new book", async () => {
            // Given
            const app = createRestApiServer();
            app.use((req, res, next) => {
                req.userSession = {
                    id: '1',
                    role: 'admin'
                };
                next();
            });
            app.use(houseAPI);

            const house = db.houses.at(0);

            const route = `/${house._id}/reviews`;
            const newReviewBody = {
                "listing_id": "1234123",
                "reviewer_id": "09870988",
                "reviewer_name": "Joan GP",
                "comments": "Test Comment"
            }

            // When
            const response = await supertest(app).post(route).send(newReviewBody);

            // Then
            expect(response.statusCode).toEqual(201);
            expect(response.body._id).toEqual(expect.any(String));
            expect(response.body.date).toEqual(expect.any(String));
            expect(response.body.listing_id).toEqual(newReviewBody.listing_id);
            expect(response.body.reviewer_id).toEqual(newReviewBody.reviewer_id);
            expect(response.body.reviewer_name).toEqual(newReviewBody.reviewer_name);
            expect(response.body.comments).toEqual(newReviewBody.comments);
        });
        it("returns 403 when standard user inserts new book", async () => {
            // Given
            const app = createRestApiServer();
            app.use((req, res, next) => {
                req.userSession = {
                    id: '1',
                    role: 'standard-user'
                };
                next();
            });
            app.use(houseAPI);

            const house = db.houses.at(0);

            const route = `/${house._id}/reviews`;
            const newReviewBody = {
                "listing_id": "1234123",
                "reviewer_id": "09870988",
                "reviewer_name": "Joan GP",
                "comments": "Test Comment"
            }

            // When
            const response = await supertest(app).post(route).send(newReviewBody);

            // Then
            expect(response.statusCode).toEqual(403);
        });
    });
});