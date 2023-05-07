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

// начальные данные. users - массив всех пользователей в приложении, currentUser - текущий юзер, который
// сейчас находится в приложеннии. choosedModel - параметр для модальных окон, чтобы можно было сделать
// переключение между окнами авторизации, регистрации и восстановлением пароля. isError - произошла ли ошибка
// isSuccess - успешно ли всё прошло. isAuth - флаг, отвечающий за то, авторизован пользователь или нет

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
      id: 2,
      name: 'Иван',
      surname: 'Артемов',
      sex: 'мужской',
      password: '123456',
      email: 'test2@gmail.com',
      birth_date: new Date().toUTCString(),
      role: 2,
    },
    isError: false,
    isSuccess: false,
    isAuth: true,
    choosedModel: 'auth',
  } as initialStateType,
  reducers: {
    // регистрация. Принимаем модель нового пользователя, проверяем нет ли еще такого пользователя
    // еелси нет, то пушим нового пользователя в общий массив и потом меняем флаги

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

    // логин. проверяем подходит емейл и пароль. Если всё нормально пропускаем пользователя
    // дальше в приложение и меням соответствующие флаги, в противной случае
    // оставляем его неавторизованным

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

    // изменение модальных окон (авторизация, регистрация и восстановление пароля)

    changeUserModel: (state, { payload }: PayloadAction<UserFullInfoType>) => {
      state.users = state.users.map((el) => {
        if (el.id === payload.id) {
          el = payload;
        }

        return el;
      });

      state.currentUser = payload;
    },

    // меняем пароль, находим нужного юзера и меняем ему поле с паролем на введенный

    changeUserPassword: (
      state,
      { payload }: PayloadAction<{ password?: string; id: number }>
    ) => {
      state.users = state.users.map((el) => {
        if (el.id === payload.id) {
          el.password = payload.password;
        }

        return el;
      });

      state.currentUser.password = payload.password;
    },

    // удаляем пользователя

    deleteUser: (state, { payload }: PayloadAction<number>) => {
      state.users = state.users.filter((el) => el.id !== payload);
      state.currentUser = {};
      state.isAuth = false;
      state.isSuccess = false;
      state.isError = false;
      state.choosedModel = 'auth';
    },

    // выход из приложения

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
      state.choosedModel = payload;
    },
  },
});

// экспорт функций

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
