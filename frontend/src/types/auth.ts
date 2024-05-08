declare interface User {
    id?: number;
    email: string;
    password: string;
    name: string;
    phone : string;
}

declare interface LoginUser extends Pick<User, "email" | "password"> {}