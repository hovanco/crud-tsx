// file editUser and addUser have the same attribute-interface{}

export interface IBaseUser {
  name: string;
  profession: string;
  age: number | string;
}
export interface IUser extends IBaseUser {
  id: number;
}
