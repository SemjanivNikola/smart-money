import { LanguageEnum } from "../enums/GeneralEnums";

export type UserSignInType = {
  email: string;
  password: string;
};

export interface IUser {
  firstName: string;
  lastName: string;
  username: string;
  language: LanguageEnum;
  darkMode: boolean;
}
