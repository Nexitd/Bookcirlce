import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { StreamItemMessageType } from 'shared/types';

type initialStateType = {
  messages: StreamItemMessageType[];
};

export const streamSlice = createSlice({
  name: 'stream',
  initialState: {
    messages: [
      {
        id: 1,
        name: 'Александр',
        surname: 'Александров',
        message: 'Привет!',
      },
      {
        id: 2,
        name: 'Андрей',
        surname: 'Андреев',
        message: 'Привет!',
      },
      {
        id: 3,
        name: 'Александр',
        surname: 'Александров',
        message: 'Как дела?',
      },
      {
        id: 4,
        name: 'Андрей',
        surname: 'Андреев',
        message: 'Нормально! А у тебя как дела?',
      },
    ],
  } as initialStateType,
  reducers: {
    createMessage: (
      state,
      { payload }: PayloadAction<StreamItemMessageType>
    ) => {
      const lastEl: StreamItemMessageType | any= state.messages.pop();

      state.messages.push({
        id: ++lastEl.id,
        ...payload,
      });
    },
  },
});

export const { createMessage } = streamSlice.actions;

export default streamSlice.reducer;
