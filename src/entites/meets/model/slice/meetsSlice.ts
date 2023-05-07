import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { MeetType, UserFullInfoType } from 'shared/types';
import avatar from 'assets/images/Ellipse 1.png';
import moment from 'moment';

type MeetStateType = {
  meets: MeetType[];
  calendar__meets: MeetType[] | any;
  myMeet: MeetType[];
};

export const meetSlice = createSlice({
  name: 'meet',
  initialState: {
    // просто встречи
    meets: [
      {
        id: 1,
        title: 'Дизайн привычных вещей',
        title_tag: '“Дизайн привычных вещей” Дон Норман',
        meeting_date: new Date(2023, 3, 17).toUTCString(),
        members: [
          {
            id: 1,
            name: 'Иван',
            surname: 'Артемов',
            avatar: avatar,
            sex: 'мужской',
            email: 'test2@gmail.com',
            birth_date: new Date().toUTCString(),
            role: 2,
          },
          {
            id: 2,
            name: ' Олег',
            surname: 'Артемов',
            sex: 'мужской',
            avatar: avatar,
            email: 'test2@gmail.com',
            birth_date: new Date().toUTCString(),
            role: 2,
          },
        ],
        description:
          'Обсудим знаменитую книгу Дона Нормана о том как создавать интуитивный дизайн, который нравится людям.',
        meeting_type: 'online',
      },
      {
        id: 2,
        title: 'Дизайн привычных вещей',
        title_tag: '“Дизайн привычных вещей” Дон Норман',
        meeting_date: new Date().toUTCString(),
        members: [
          {
            id: 2,
            name: 'Иван',
            surname: 'Артемов',
            sex: 'мужской',
            email: 'test2@gmail.com',
            birth_date: new Date().toUTCString(),
            role: 2,
          },
        ],
        description:
          'Обсудим знаменитую книгу Дона Нормана о том как создавать интуитивный дизайн, который нравится людям.',
        meeting_type: 'online',
      },
    ],
    // встречи для календаря
    calendar__meets: [
      {
        id: 1,
        title: 'Дизайн привычных вещей',
        title_tag: '“Дизайн привычных вещей” Дон Норман',
        meeting_date: new Date().toUTCString(),
        members: [
          {
            id: 2,
            name: 'Иван',
            surname: 'Артемов',
            sex: 'мужской',
            email: 'test2@gmail.com',
            birth_date: new Date().toUTCString(),
            role: 2,
          },
        ],
        description:
          'Обсудим знаменитую книгу Дона Нормана о том как создавать интуитивный дизайн, который нравится людям.',
        meeting_type: 'online',
      },
      {
        id: 2,
        title: 'Дизайн вещей',
        title_tag: '“Дизайн привычных вещей” Дон Норман',
        meeting_date: new Date(2023, 6, 17).toUTCString(),
        members: [
          {
            id: 1,
            name: 'Иван',
            surname: 'Иванов',
            sex: 'мужской',
            email: 'test@gmail.com',
            birth_date: new Date().toUTCString(),
            role: 1,
          },
        ],
        description:
          'Обсудим знаменитую книгу Дона Нормана о том как создавать интуитивный дизайн, который нравится людям.',
        meeting_type: 'online',
      },
    ],
    myMeet: [],
  } as MeetStateType,
  reducers: {
    // отписаться от встречи. Принимаем id текущего юзера и id встречи
    unsubscribeToMeet: (
      state,
      { payload }: PayloadAction<{ currentUserId: number; meetId: number }>
    ) => {
      // из массива моиВстречи убираем элемент, у которого id равен тому, что пришел
      state.myMeet = state.myMeet.filter((el) => el.id !== payload.meetId);
      state.calendar__meets = [
        ...state.calendar__meets.map((el: any) => {
          // если id === тому что пришел
          if (el.id === payload.meetId) {
            // из списка с участниками убираем текущего юзера
            el.members = el.members.filter(
              (elem: any) => elem.id !== payload.currentUserId
            );
          }

          return el;
        }),
      ];
    },

    // подписка на встречу. Принимаем текущего юзера и id встречи
    subscribeToMeet: (
      state,
      {
        payload,
      }: PayloadAction<{ currentUser: UserFullInfoType; meetId: number }>
    ) => {
      state.meets = state.meets.map((el) => {
        // если id === тому что пришел
        if (el.id === payload.meetId) {
          // в массив с участниками добавляем нашего юзера
          el.members.push(payload.currentUser);
        }

        return el;
      });

      state.calendar__meets = state.meets.map((el) => {
        const isUserInMeet = el.members.filter(
          (elem) => elem.id === payload.currentUser.id
        );

        if (isUserInMeet.length !== 0) return el;

        return [];
      });
    },

    // получение встречи. id юзер принимаеем и возвращаем только те встречи, где в массиве
    // участников находится наш юзер
    getMyMeets: (state, { payload }: PayloadAction<number>) => {
      state.myMeet = state.meets.filter((el) => {
        const usersArr = el.members.filter((elem) => elem.id === payload);

        if (usersArr.length !== 0) return el;
      });
    },

    // получить встречу по дате из календаря. принимаем дату и юзера

    getMeetByDate: (
      state,
      {
        payload,
      }: PayloadAction<{ date: Date | string; user: UserFullInfoType }>
    ) => {
      state.myMeet = [
        ...state.calendar__meets.filter((el: MeetType) => {
          // возвращаем только тех пользователей, которые являются нашим юзером
          // мы все это делаем в массиве с вчтречами
          const validUsers = el.members.filter(
            (elem) => elem.id === payload.user.id
          );

          // если у нас есть хоть один такой юзер и при этом дата встречи ===
          // дате пришедшей, то возвращаем элемент
          if (
            validUsers.length !== 0 &&
            moment(el.meeting_date).format('DD.MM.YYYY') ===
              moment(payload.date).format('DD.MM.YYYY')
          )
            return el;
        }),
      ];
    },
  },
});

export const { unsubscribeToMeet, getMeetByDate, subscribeToMeet, getMyMeets } =
  meetSlice.actions;

export default meetSlice.reducer;
