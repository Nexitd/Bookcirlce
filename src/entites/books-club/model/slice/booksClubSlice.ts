import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { BookClubCategoriesTypeDefinition, BookClubType } from 'shared/types';
import img1 from 'assets/images/des.png';
import img2 from 'assets/images/img.png';
import img3 from 'assets/images/img2.png';

// Убрать потом фотографии если врдгу тут появится бэкенд

type initialStateType = {
  clubs: BookClubType[];
  myClubs: BookClubType[];
  categories: BookClubCategoriesTypeDefinition[];
};

// TODO Не забыть разширить общий тип для книжных клубов, чтобы
// можно было использовать этот слайс при разработки полной страницы клуба

export const booksClubSlice = createSlice({
  name: 'books_club',
  initialState: {
    categories: [
      BookClubCategoriesTypeDefinition.art,
      BookClubCategoriesTypeDefinition.business,
      BookClubCategoriesTypeDefinition.design,
      BookClubCategoriesTypeDefinition.literature,
      BookClubCategoriesTypeDefinition.programming,
      BookClubCategoriesTypeDefinition.psychology,
      BookClubCategoriesTypeDefinition.scientific,
      BookClubCategoriesTypeDefinition.self_development,
    ],
    clubs: [
      {
        id: 1,
        title: 'DesignBook',
        meeting_type: 'online',
        image: img1,
        address: 'Санкт-Петербург',
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
          'Добро пожаловать в книжный клуб о веб-дизайне! Мы будем изучать самые передовые методы веб-дизайна, изучать лучшие практики и разбираться в современных тенденциях. В книжном клубе вы найдете много интересных книг, которые помогут вам углубиться в мир веб-дизайна и получить новые знания!',
        category: [
          BookClubCategoriesTypeDefinition.design,
          BookClubCategoriesTypeDefinition.self_development,
        ],
      },
      {
        id: 2,
        title: 'Mind hack',
        meeting_type: 'online',
        image: img2,
        address: 'Санкт-Петербург',
        members: [
          {
            id: 1,
            name: 'Иван',
            surname: 'Артемов',
            sex: 'мужской',
            email: 'test2@gmail.com',
            birth_date: new Date().toUTCString(),
            role: 1,
          },
        ],
        description:
          'Каждый месяц читаем и разбираем  главные книги в жанре научпоп по психологии, астрофизике, биологии и другим важным темам.',
        category: [
          BookClubCategoriesTypeDefinition.scientific,
          BookClubCategoriesTypeDefinition.self_development,
        ],
      },
      {
        id: 3,
        title: 'ЛитСфера',
        meeting_type: 'online',
        image: img3,
        address: 'Санкт-Петербург',
        members: [],
        description:
          'Каждый месяц читаем и разбираем  главные книги в жанре научпоп по психологии, астрофизике, биологии и другим важным темам.',
        category: [BookClubCategoriesTypeDefinition.literature],
      },
      {
        id: 4,
        title: 'Mind hack',
        meeting_type: 'online',
        image: img2,
        address: 'Санкт-Петербург',
        members: [
          {
            id: 1,
            name: 'Иван',
            surname: 'Артемов',
            sex: 'мужской',
            email: 'test2@gmail.com',
            birth_date: new Date().toUTCString(),
            role: 1,
          },
        ],
        description:
          'Каждый месяц читаем и разбираем  главные книги в жанре научпоп по психологии, астрофизике, биологии и другим важным темам.',
        category: [
          BookClubCategoriesTypeDefinition.scientific,
          BookClubCategoriesTypeDefinition.self_development,
        ],
      },
    ],
    myClubs: [
      {
        id: 1,
        title: 'DesignBook',
        meeting_type: 'online',
        address: 'Санкт-Петербург',
        image: img1,
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
          'Добро пожаловать в книжный клуб о веб-дизайне! Мы будем изучать самые передовые методы веб-дизайна, изучать лучшие практики и разбираться в современных тенденциях. В книжном клубе вы найдете много интересных книг, которые помогут вам углубиться в мир веб-дизайна и получить новые знания!',
        category: [
          BookClubCategoriesTypeDefinition.design,
          BookClubCategoriesTypeDefinition.self_development,
        ],
      },
      {
        id: 2,
        title: 'ЛитСфера',
        meeting_type: 'online',
        image: img3,
        address: 'Санкт-Петербург',
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
          'Каждый месяц читаем и разбираем  главные книги в жанре научпоп по психологии, астрофизике, биологии и другим важным темам.',
        category: [BookClubCategoriesTypeDefinition.literature],
      },
      {
        id: 3,
        title: 'ЛитСфера',
        meeting_type: 'online',
        image: img3,
        address: 'Санкт-Петербург',
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
          'Каждый месяц читаем и разбираем  главные книги в жанре научпоп по психологии, астрофизике, биологии и другим важным темам.',
        category: [BookClubCategoriesTypeDefinition.literature],
      },
      {
        id: 4,
        title: 'ЛитСфера',
        meeting_type: 'online',
        image: img3,
        address: 'Санкт-Петербург',
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
          'Каждый месяц читаем и разбираем  главные книги в жанре научпоп по психологии, астрофизике, биологии и другим важным темам.',
        category: [BookClubCategoriesTypeDefinition.literature],
      },
    ],
  } as initialStateType,
  reducers: {
    connetToClub: (state, { payload }: PayloadAction<BookClubType>) => {
      state.myClubs.push(payload);
    },

    leaveFromClub: (state, { payload }: PayloadAction<number>) => {
      state.myClubs = state.myClubs.filter((el) => el.id !== payload);
    },
  },
});

export const { connetToClub, leaveFromClub } = booksClubSlice.actions;

export default booksClubSlice.reducer;
