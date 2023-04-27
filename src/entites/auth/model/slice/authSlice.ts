import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  UserAuthDataType,
  UserFullInfoType,
  UserRegistrationDataType,
} from 'shared/types';
import avatar from 'assets/images/Ellipse 1.png';

type initialStateType = {
  users: any[];
  isAuth: boolean;
  currentUser: (UserFullInfoType & { password: string }) | any;
  isError: boolean;
  isSuccess: boolean;
  choosedModel: 'auth' | 'registration' | 'remember';
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    users: [
      {
        id: 1,
        name: 'Иван',
        surname: 'Иванов',
        sex: 'мужской',
        password: '12345',
        email: 'test@gmail.com',
        avatar: avatar,
        birth_date: new Date().toUTCString(),
        role: 1,
      },
      {
        id: 2,
        name: 'Иван',
        surname: 'Артемов',
        sex: 'мужской',
        password: '123456',
        email: 'test2@gmail.com',
        birth_date: new Date().toUTCString(),
        role: 2,
      },
      {
        id: 3,
        name: 'Иван',
        surname: 'Артемов',
        sex: 'мужской',
        password: '123456',
        avatar: avatar,
        email: 'test2@gmail.com',
        birth_date: new Date().toUTCString(),
        role: 1,
      },
    ],
    currentUser: {
      id: 1,
      name: 'Иван',
      surname: 'Иванов',
      sex: 'мужской',
      password: '12345',
      avatar: avatar,
      email: 'test@gmail.com',
      birth_date: new Date().toUTCString(),
      role: 1,
    },
    isError: false,
    isSuccess: false,
    isAuth: true,
    choosedModel: 'auth',
  } as initialStateType,
  reducers: {
    // регистрация

    createNewUser: (
      state,
      { payload }: PayloadAction<UserRegistrationDataType>
    ) => {
      const isEmailUniq = state.users.find((el) => el.email === payload.email);

      if (!isEmailUniq) {
        state.users.push(payload);
        state.isSuccess = true;
        state.isError = false;
      } else {
        state.isSuccess = false;
        state.isError = true;
      }
    },

    // логин

    authByUser: (state, { payload }: PayloadAction<UserAuthDataType>) => {
      const currUser = state.users.filter(
        (el) => el.email === payload.email && el.password === payload.password
      );

      if (currUser.length) {
        state.currentUser = currUser[0];
        state.isAuth = true;
        state.isError = false;
      } else {
        state.isError = true;
      }
    },

    changeUserModel: (state, { payload }: PayloadAction<UserFullInfoType>) => {
      state.users = state.users.map((el) => {
        if (el.id === payload.id) {
          el = payload;
        }

        return el;
      });

      state.currentUser = payload;
    },

    changeUserPassword: (
      state,
      { payload }: PayloadAction<{ password: string; id: number }>
    ) => {
      state.users = state.users.map((el) => {
        if (el.id === payload.id) {
          el.password = payload.password;
        }

        return el;
      });

      state.currentUser.password = payload.password;
    },

    deleteUser: (state, { payload }: PayloadAction<number>) => {
      state.users = state.users.filter((el) => el.id !== payload);
      state.currentUser = {};
      state.isAuth = false;
      state.isSuccess = false;
      state.isError = false;
      state.choosedModel = 'auth';
    },

    logOut: (state) => {
      state.isAuth = false;
      state.isSuccess = false;
      state.isError = false;
      state.choosedModel = 'auth';
    },

    // переключение типов окон 'вход/регестрация/восстановление пароля'

    setModalType: (
      state,
      { payload }: PayloadAction<'auth' | 'remember' | 'registration'>
    ) => {
      console.log(payload);

      state.choosedModel = payload;
    },
  },
});

export const {
  createNewUser,
  authByUser,
  setModalType,
  logOut,
  changeUserModel,
  deleteUser,
  changeUserPassword,
} = authSlice.actions;

export default authSlice.reducer;
