import {
  Action,
  ThunkAction,
  combineReducers,
  configureStore,
} from '@reduxjs/toolkit';
import { AuthModel } from 'entites/auth';
import { BooksClubsModel } from 'entites/books-club';
import { MeetModel } from 'entites/meets';
import { NotificationModel } from 'entites/notification';
import { StreamModel } from 'entites/stream';

const rootReducer = combineReducers({
  auth: AuthModel.authSlice.reducer,
  notification: NotificationModel.notificationSlice.reducer,
  meets: MeetModel.meetSlice.reducer,
  books_club: BooksClubsModel.booksClubSlice.reducer,
  stream: StreamModel.streamSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
