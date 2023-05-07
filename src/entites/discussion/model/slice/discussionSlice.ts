import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { DiscussionMessageType, DiscussionType } from 'shared/types';
import avatar from 'assets/images/avatar.png';

type initialStateType = {
  discussions: DiscussionType[];
};

// исходные данные

export const discussionSlice = createSlice({
  name: 'discussion',
  initialState: {
    discussions: [
      {
        id: 1,
        title: 'Какие принципы из книги наиболее полезны?',
        description:
          'Какие принципы и идеи из книги вы считаете наиболее полезными для веб-дизайна? Было бы интересно услышать мнение других участников!',
        discussion_tag: 'Дизайн привычных вещей” Дон Норман',
        creation_time: new Date().toUTCString(),
        user: {
          name: 'Александр',
          surname: 'Александров',
          avatar: avatar,
        },
        members: [
          {
            name: 'Александр',
            surname: 'Александров',
            avatar: avatar,
          },
          { name: 'Артем', surname: 'Петров', avatar: avatar },
        ],
        messages: [
          {
            id: 1,
            message_date: new Date().toUTCString(),
            message:
              'Также в книге много примеров того, как использовать принципы эргономики и психологии в дизайне, что также может быть полезным при создании сайтов и приложений. В целом, я считаю, что любая книга о дизайне может дать ценные идеи и вдохновение для работы.',
            likes: 123,
            replyes: 123,
            user: {
              name: 'Валерия',
              surname: 'Алексеева',
              avatar: avatar,
            },
          },
        ],
      },
    ],
  } as initialStateType,
  reducers: {
    // создание нового коммента. Принимаем сам коммент и id 
    createNewComment: (
      state,
      { payload }: PayloadAction<{ message: DiscussionMessageType; id: number }>
    ) => {
      // находим нужное обсуждение по id и в массив с комментами пушим новый коммент, который пришел
      state.discussions = state.discussions.map((el) => {
        if (el.id === payload.id) {
          el.messages.push(payload.message);
        }

        return el;
      });
    },
  },
});

export default discussionSlice.reducer;
