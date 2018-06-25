interface IUser {
    username: string;
    password: string;
    // optional prop declaration
    email?: string;
}

let admin: IUser = {
    password: "1234",
    username: "prem",
};
