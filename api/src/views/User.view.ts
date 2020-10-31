
import { Users } from "src/entities/user.entity";

interface Token {
    access_token: string;
}

export class UserView {

    public static returnView(user: Users, token: Token) {
        const { id, firstName, lastName, email, } = user;
        const accessToken = token.access_token;
        return { id, firstName, lastName, email, accessToken };
    };
}