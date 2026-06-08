export interface IRegisterUser {
   email: string;
   firstName: string;
   lastName: string;
   address: string;
   dateOfBirth: Date;
   password: string;
}

export interface ILoginUser {
  email: string;
  password: string;
}

export interface IJwtPayload {
  id: string;
}