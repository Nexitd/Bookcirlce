import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { StreamItemMessageType, StreamType } from 'shared/types';
import avatar from 'assets/images/Ellipse 1.png';

type initialStateType = {
  stream: StreamType;
};
// моки
export const streamSlice = createSlice({
  name: 'stream',
  initialState: {
    stream: {
      id: 1,
      streamTitle: 'Дизайн привынчых вещей',
      messages: [
        {
          id: 1,
          name: 'Иван',
          surname: 'Иванов',
          message: 'Привет!',
        },
        {
          id: 2,
          name: 'Иван',
          surname: 'Артемов',
          message: 'Привет!',
        },
        {
          id: 3,
          name: 'Иван',
          surname: 'Иванов',
          message: 'Как у вас дела?? Всем отличного времяпрепровождения',
        },
        {
          id: 4,
          name: 'Иван',
          surname: 'Иванов',
          message: 'Как у вас дела?? Всем отличного времяпрепровождения',
        },
        {
          id: 5,
          name: 'Иван',
          surname: 'Иванов',
          message: 'Как у вас дела?? Всем отличного времяпрепровождения',
        },
        {
          id: 6,
          name: 'Иван',
          surname: 'Иванов',
          message: 'Как у вас дела?? Всем отличного времяпрепровождения',
        },
        {
          id: 7,
          name: 'Иван',
          surname: 'Иванов',
          message: 'Как у вас дела?? Всем отличного времяпрепровождения',
        },
        {
          id: 8,
          name: 'Иван',
          surname: 'Иванов',
          message: 'Как у вас дела?? Всем отличного времяпрепровождения',
        },
        {
          id: 9,
          name: 'Иван',
          surname: 'Иванов',
          message: 'Как у вас дела?? Всем отличного времяпрепровождения',
        },
      ],
      // учатсники стрима
      members: [
        {
          id: 1,
          name: 'Иван',
          surname: 'Иванов',
          sex: 'мужской',
          avatar: avatar,
          email: 'test@gmail.com',
          birth_date: new Date().toUTCString(),
          role: 1,
        },
        {
          id: 2,
          name: 'Иван',
          surname: 'Артемов',
          avatar: avatar,
          sex: 'мужской',
          email: 'test2@gmail.com',
          birth_date: new Date().toUTCString(),
          role: 2,
        },
        {
          id: 3,
          name: 'Иван',
          surname: 'Артемов',
          avatar: avatar,
          sex: 'мужской',
          email: 'test2@gmail.com',
          birth_date: new Date().toUTCString(),
          role: 1,
        },
        {
          id: 4,
          name: 'Иван',
          surname: 'Артемов',
          avatar: avatar,
          sex: 'мужской',
          email: 'test2@gmail.com',
          birth_date: new Date().toUTCString(),
          role: 1,
        },
        {
          id: 5,
          name: 'Иван',
          surname: 'Артемов',
          avatar: avatar,
          sex: 'мужской',
          email: 'test2@gmail.com',
          birth_date: new Date().toUTCString(),
          role: 1,
        },
      ],
      isGoing: true,
    },
  } as initialStateType,
  reducers: {
    // создание сообщения.
    createMessage: (
      state,
      { payload }: PayloadAction<StreamItemMessageType>
    ) => {
      // Берем последний id сообщения для автоматической генерации
      let lastStreamMessageId =
        state.stream.messages[state.stream.messages.length - 1].id;

      // в массив с сообщениями добавляем наш автоматически сгенерированный id
      // и структуру сообщения, которая пришла к нам
      state.stream.messages.push({
        id: ++lastStreamMessageId,
        ...payload,
      });
    },

    // меняем статус начал стрима
    changeStreamOnlineStatus: (state) => {
      state.stream.isGoing = !state.stream.isGoing;
    },
  },
});

export const { createMessage, changeStreamOnlineStatus } = streamSlice.actions;

export default streamSlice.reducer;
