import { getUserContext } from "../user.context.js";
import { UserRepository } from "./user.repository.js";
import { verifyHash } from "#common/helpers/hash.helpers.js";
import { User } from "../user.model.js";
import { ObjectId } from "mongodb";

export const mongoDBRepository: UserRepository = {
    getUser: async (email: string, password: string) => {
        const user = await getUserContext().findOne({email});
        return (await verifyHash(password, user?.password))
            ? ({
                _id: user._id,
                email: user.email,
                role: user.role
            } as User) : null;
    },
    getUserById: async (id: string) => await getUserContext().findOne(
        {
            _id: new ObjectId(id),
        },
        {
            projection: {
                email: 1,
                role: 1,
            },
        }
    ),
};