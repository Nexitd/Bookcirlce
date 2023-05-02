import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { MeetType, UserFullInfoType } from 'shared/types';
import avatar from 'assets/images/Ellipse 1.png';

type MeetStateType = {
  meets: MeetType[];
  calendar__meets: MeetType[] | any;
};

export const meetSlice = createSlice({
  name: 'meet',
  initialState: {
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
    ],
  } as MeetStateType,
  reducers: {
    // отписаться от встречи
    unsubscribeToMeet: (
      state,
      { payload }: PayloadAction<{ currentUserId: number; meetId: number }>
    ) => {
      state.calendar__meets = [
        ...state.calendar__meets.map((el: any) => {
          if (el.id === payload.meetId) {
            el.members = el.members.filter(
              (elem: any) => elem.id !== payload.currentUserId
            );
          }

          return el;
        }),
      ];
    },

    subscribeToMeet: (
      state,
      {
        payload,
      }: PayloadAction<{ currentUser: UserFullInfoType; meetId: number }>
    ) => {
      state.meets = state.meets.map((el) => {
        if (el.id === payload.meetId) {
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

    // получить встречу по дате из календаря

    getMeetByDate: (state, { payload }: PayloadAction<Date | string>) => {
      state.calendar__meets = [
        ...state.meets.filter((el) => el.meeting_date === payload),
      ];
    },
  },
});

export const { unsubscribeToMeet, getMeetByDate, subscribeToMeet } = meetSlice.actions;

export default meetSlice.reducer;
