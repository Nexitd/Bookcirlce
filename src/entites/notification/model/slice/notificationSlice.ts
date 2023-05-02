import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { NotificationType } from 'shared/types';

type notificationSliceType = {
  notifications: NotificationType[];
  filtered_notifications: NotificationType[];
};

export const notificationSlice = createSlice({
  name: 'notification',
  initialState: {
    notifications: [
      {
        id: 1,
        title: 'Новый участник в клубе',
        club: 'DesignBook',
        description: 'Александр Александров стал участником книжного клуба',
        date: new Date(),
        notification_type: 'new',
        notification_category: 'new_user',
      },
      {
        id: 2,
        title: 'Участник клуба зарегистрировался на встречу',
        club: 'DesignBook',
        description:
          'Александр Александров будет участвовать во встрече книжного клуба',
        date: new Date(),
        notification_type: 'old',
        notification_category: 'new_user',
      },
      {
        id: 3,
        title: 'Участник клуба проголосовал в опросе',
        club: 'DesignBook',
        description:
          'Александр Александров проголосовал в опросе “Выбираем дату следующей встречи”',
        date: new Date(),
        notification_type: 'old',
        notification_category: 'new_user',
      },
      {
        id: 4,
        title: 'Участник клуба проголосовал в опросе',
        club: 'DesignBook',
        description:
          'Александр Александров проголосовал в опросе “Выбираем дату следующей встречи”',
        date: new Date(),
        notification_type: 'new',
        notification_category: 'new_user',
      },
      {
        id: 5,
        title: 'sdfdsfsdf',
        club: 'DesignBook',
        description:
          'Александр Александров проголосовал в опросе “Выбираем дату следующей встречи”',
        date: new Date(),
        notification_type: 'new',
        notification_category: 'new_user',
      },
      {
        id: 6,
        title: 'Участник клуба проголосовал в sdfdsfds',
        club: 'DesignBook',
        description:
          'Александр Александров проголосовал в опросе “Выбираем дату следующей встречи”',
        date: new Date(),
        notification_type: 'new',
        notification_category: 'new_user',
      },
      {
        id: 7,
        title: 'Участник клуба dfgdfgdfbdfvd в опросе',
        club: 'DesignBook',
        description:
          'Александр Александров проголосовал в опросе “Выбираем дату следующей встречи”',
        date: new Date(),
        notification_type: 'new',
        notification_category: 'new_user',
      },
      {
        id: 8,
        title: 'Участник клуба sdvsdvsdv в опросе',
        club: 'DesignBook',
        description:
          'Александр Александров проголосовал в опросе “Выбираем дату следующей встречи”',
        date: new Date(),
        notification_type: 'new',
        notification_category: 'new_user',
      },
      {
        id: 9,
        title: 'Участник клуба проголосовал в опросе',
        club: 'DesignBook',
        description:
          'Александр Александров проголосовал в опросе “Выбираем дату следующей встречи”',
        date: new Date(),
        notification_type: 'old',
        notification_category: 'new_user',
      },
      {
        id: 10,
        title: 'Участник клуба sdfejoiervoer в опросе',
        club: 'DesignBook',
        description:
          'Александр Александров проголосовал в опросе “Выбираем дату следующей встречи”',
        date: new Date(),
        notification_type: 'new',
        notification_category: 'new_user',
      },
    ],
    filtered_notifications: [],
  } as notificationSliceType,
  reducers: {
    // создание уведомления
    createNewNotification: (
      state,
      { payload }: PayloadAction<NotificationType>
    ) => {
      state.notifications.push(payload);
    },

    // изменение типа с нового на просмотренный и наоборот

    changeNotificationType: (
      state,
      { payload }: PayloadAction<string>
    ) => {
      state.filtered_notifications = state.notifications.filter(
        (el) => el.notification_type === payload
      );
    },

    // удаление уведомления

    removeNotification: (state, { payload }: PayloadAction<number>) => {
      state.filtered_notifications = state.filtered_notifications.filter(
        (el) => el.id !== payload
      );
    },
  },
});

export const {
  createNewNotification,
  changeNotificationType,
  removeNotification,
} = notificationSlice.actions;

export default notificationSlice.reducer;
