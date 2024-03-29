import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { NotificationType } from 'shared/types';

type notificationSliceType = {
  notifications: NotificationType[];
  filtered_notifications: NotificationType[];
};

// исходные данные
export const notificationSlice = createSlice({
  name: 'notification',
  initialState: {
    // массив с уведомлениями
    notifications: [
      {
        id: 1,
        title: 'Новый участник в клубе',
        club: 'DesignBook',
        description: 'Александр Александров стал участником книжного клуба',
        date: new Date(),
        notification_type: 'new',
        notification_category: 'new_user',
        message_type: '',
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
        message_type: 'meet',
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
        message_type: 'pol',
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
        message_type: 'pol',
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
        message_type: 'pol',
      },
    ],
    filtered_notifications: [],
  } as notificationSliceType,
  reducers: {
    // создание уведомления в массив пушим новую модель уведомления
    createNewNotification: (
      state,
      { payload }: PayloadAction<NotificationType>
    ) => {
      state.notifications.push(payload);
    },

    // изменение типа с нового на просмотренный и наоборот

    changeNotificationType: (state, { payload }: PayloadAction<string>) => {
      // в массив отфильтрованных уведомлений возвращаем только те, у которых тип равен тому
      // что пришел
      state.filtered_notifications = state.notifications.filter(
        (el) => el.notification_type === payload
      );
    },

    // удаление уведомления. Удаляем уведомление с конкретным id

    removeNotification: (state, { payload }: PayloadAction<number>) => {
      state.filtered_notifications = state.filtered_notifications.filter(
        (el) => el.id !== payload
      );
    },
  },
});

// экспорт

export const {
  createNewNotification,
  changeNotificationType,
  removeNotification,
} = notificationSlice.actions;

export default notificationSlice.reducer;
