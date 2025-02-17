import { Role } from "#core/models/role.model.js";

export interface User {
    email: string;
    role: Role;
    avatar: string;
}