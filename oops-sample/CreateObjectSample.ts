interface IUser {
    // optional prop declaration
    email?: string;
    password: string;
    username: string;
   // Dynamic property /undefined property
    [prop: string]: any;
}

let admin: IUser = {
    email: "premprakashrohan@gmail.com",
    password: "1234",
    username: "prem",
    // below is caused by [prop: string]: any;
    v: "Hello",
    v1: "xyz",
    v2: "xyz",
    v3: "xyz",
    v4: "xyz",
    v5: "xyz",
    v6: "xyz",
};
