import {
  Action,
  ThunkAction,
  combineReducers,
  configureStore,
} from '@reduxjs/toolkit';
import { AuthModel } from 'entites/auth';
import { BookModel } from 'entites/books';
import { BooksClubsModel } from 'entites/books-club';
import { DiscussionModel } from 'entites/discussion';
import { MeetModel } from 'entites/meets';
import { NotificationModel } from 'entites/notification';
import { PolModel } from 'entites/pols';
import { StreamModel } from 'entites/stream';

// соединяем все части с моками в один большой объект

const rootReducer = combineReducers({
  auth: AuthModel.authSlice.reducer,
  notification: NotificationModel.notificationSlice.reducer,
  meets: MeetModel.meetSlice.reducer,
  books_club: BooksClubsModel.booksClubSlice.reducer,
  stream: StreamModel.streamSlice.reducer,
  book: BookModel.bookSlice.reducer,
  discussion: DiscussionModel.discussionSlice.reducer,
  pol: PolModel.PolSlice.reducer
});

// конфигурируем стор и отключаем сериализацию данных

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// берем тип стейта, чтобы понимать какие там данные

export type RootState = ReturnType<typeof rootReducer>;

// тот же момент, что и со стейтом, только с диспатчем. Чтобы мы могли понимать
// какие функции у нас есть

export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
