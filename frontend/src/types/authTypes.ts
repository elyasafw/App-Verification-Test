export type MaritalStatus = "single" | "married" | "divorced";

export type SignUpUser = {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    password: string;
    city: string;
    address: string;
    age: number;
    maritalStatus: MaritalStatus;
    birthDate: string;
};

export type LoginUser = {
    phone: string;
    password: string;
};
