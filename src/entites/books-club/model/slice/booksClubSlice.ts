import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import {
  BookClubCategoriesTypeDefinition,
  BookClubType,
  DiscussionMessageType,
  FullBookClubInfoType,
  UserFullInfoType,
} from 'shared/types';
import img1 from 'assets/images/des.png';
import img2 from 'assets/images/img.png';
import img3 from 'assets/images/img2.png';

import image1 from 'assets/images/books/pic1.png';
import image2 from 'assets/images/books/pic2.png';
import image3 from 'assets/images/books/pic3.png';
import image4 from 'assets/images/books/pic4.png';

import avatar from 'assets/images/avatar.png';

// Убрать потом фотографии если вдргуг тут появится бэкенд

// типы для стейта clubs - это все клубы в принципе
// myClubs - только мои клубы
// categories - категории в глубах (научпоп и тд)
// fullBookClubInfo - полная информация о клубе со всеми остальными моделями (опросы, обусждения и тд)
// filtered_data - данные после фильтрации, тут в основном используется только для книг, чтобы по типу их разделить

type initialStateType = {
  clubs: BookClubType[];
  myClubs: BookClubType[];
  categories: BookClubCategoriesTypeDefinition[];
  fullBookClubInfo: FullBookClubInfoType[];
  filtered_data: any;
};

export const booksClubSlice = createSlice({
  name: 'books_club',
  initialState: {
    filtered_data: [],
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
        books: [
          {
            id: 1,
            title: 'Дизайн привычных вещей',
            rate: 4.9,
            author: 'Дон Норман',
            image: image1,
          },
          {
            id: 2,
            title: 'Дизайн мышление',
            rate: 4,
            author: 'Тим Браун',
            image: image2,
          },
          {
            id: 3,
            title: 'Рисовый штурм',
            rate: 3.9,
            author: 'Майкл Микалко',
            image: image3,
          },
          {
            id: 4,
            title: 'О шрифте',
            rate: 4.3,
            author: 'Эрик Шпикерманн',
            image: image4,
          },
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
        books: [
          {
            id: 1,
            title: 'Рисовый штурм',
            rate: 3.9,
            author: 'Майкл Микалко',
            image: image3,
          },
          {
            id: 2,
            title: 'О шрифте',
            rate: 4.3,
            author: 'Эрик Шпикерманн',
            image: image4,
          },
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
        books: [
          {
            id: 1,
            title: 'Дизайн привычных вещей',
            rate: 4.9,
            author: 'Дон Норман',
            image: image1,
          },
          {
            id: 2,
            title: 'Дизайн мышление',
            rate: 4,
            author: 'Тим Браун',
            image: image2,
          },
          {
            id: 3,
            title: 'Рисовый штурм',
            rate: 3.9,
            author: 'Майкл Микалко',
            image: image3,
          },
          {
            id: 4,
            title: 'О шрифте',
            rate: 4.3,
            author: 'Эрик Шпикерманн',
            image: image4,
          },
        ],
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
        books: [
          {
            id: 2,
            title: 'Дизайн мышление',
            rate: 4,
            author: 'Тим Браун',
            image: image2,
          },
          {
            id: 3,
            title: 'Рисовый штурм',
            rate: 3.9,
            author: 'Майкл Микалко',
            image: image3,
          },
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
        books: [],
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
        books: [
          {
            id: 1,
            title: 'Рисовый штурм',
            rate: 3.9,
            author: 'Майкл Микалко',
            image: image3,
          },
          {
            id: 2,
            title: 'О шрифте',
            rate: 4.3,
            author: 'Эрик Шпикерманн',
            image: image4,
          },
        ],
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
        books: [
          {
            id: 1,
            title: 'Дизайн привычных вещей',
            rate: 4.9,
            author: 'Дон Норман',
            image: image1,
          },
          {
            id: 2,
            title: 'Рисовый штурм',
            rate: 3.9,
            author: 'Майкл Микалко',
            image: image3,
          },
        ],
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
        books: [
          {
            id: 2,
            title: 'Дизайн мышление',
            rate: 4,
            author: 'Тим Браун',
            image: image2,
          },
          {
            id: 3,
            title: 'Рисовый штурм',
            rate: 3.9,
            author: 'Майкл Микалко',
            image: image3,
          },
        ],
      },
    ],
    fullBookClubInfo: [
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
        books: [
          {
            id: 1,
            title: 'Дизайн привычных вещей',
            rate: 4.9,
            author: 'Дон Норман',
            image: image1,
            book_filter: 'old',
          },
          {
            id: 2,
            title: 'Дизайн мышление',
            rate: 4,
            author: 'Тим Браун',
            image: image2,
            book_filter: 'present',
          },
          {
            id: 3,
            title: 'Рисовый штурм',
            rate: 3.9,
            author: 'Майкл Микалко',
            image: image3,
            book_filter: 'future',
          },
          {
            id: 4,
            title: 'О шрифте',
            rate: 4.3,
            author: 'Эрик Шпикерманн',
            image: image4,
            book_filter: 'old',
          },
        ],
        discussions: [
          {
            id: 1,
            user: {
              name: 'Иван',
              surname: 'Иванов',
              avatar: avatar,
            },
            discussion_tag: '“Дизайн привычных вещей” Дон Норман',
            title: 'Какие принципы из книги наиболее полезны?',
            creation_time: new Date().toUTCString(),
            description:
              'Какие принципы и идеи из книги вы считаете наиболее полезными для веб-дизайна? Было бы интересно услышать мнение других участников!',
            members: [
              {
                name: 'Иван',
                surname: 'Иванов',
                avatar: avatar,
              },
              {
                name: 'Иван',
                surname: 'Артемов',
                avatar: avatar,
              },
            ],
            messages: [
              {
                id: 1,
                user: {
                  name: 'Иван',
                  surname: 'Артемов',
                  avatar: avatar,
                },
                message:
                  'Также в книге много примеров того, как использовать принципы эргономики и психологии в дизайне, что также может быть полезным при создании сайтов и приложений. В целом, я считаю, что любая книга о дизайне может дать ценные идеи и вдохновение для работы.',
                likes: 123,
                replyes: 123,
                message_date: new Date().toUTCString(),
              },
            ],
          },
          {
            id: 2,
            user: {
              name: 'Иван',
              surname: 'Иванов',
              avatar: avatar,
            },
            title: 'Какие принципы из книги наиболее полезны?',
            creation_time: new Date().toUTCString(),
            discussion_tag: '“Дизайн мышление” Тим браун',
            description:
              'Какие принципы и идеи из книги вы считаете наиболее полезными для веб-дизайна? Было бы интересно услышать мнение других участников!',
            members: [
              {
                name: 'Иван',
                surname: 'Иванов',
                avatar: avatar,
              },
              {
                name: 'Иван',
                surname: 'Артемов',
                avatar: avatar,
              },
            ],
            messages: [
              {
                id: 1,
                user: {
                  name: 'Иван',
                  surname: 'Артемов',
                  avatar: avatar,
                },
                message:
                  'Также в книге много примеров того, как использовать принципы эргономики и психологии в дизайне, что также может быть полезным при создании сайтов и приложений. В целом, я считаю, что любая книга о дизайне может дать ценные идеи и вдохновение для работы.',
                likes: 123,
                replyes: 123,
                message_date: new Date().toUTCString(),
              },
            ],
          },
          {
            id: 3,
            user: {
              name: 'Иван',
              surname: 'Иванов',
              avatar: avatar,
            },
            title: 'Какие принципы из книги наиболее полезны?',
            creation_time: new Date().toUTCString(),
            discussion_tag: '“Дизайн привычных вещей” Дон Норман',
            description:
              'Какие принципы и идеи из книги вы считаете наиболее полезными для веб-дизайна? Было бы интересно услышать мнение других участников!',
            members: [
              {
                name: 'Иван',
                surname: 'Иванов',
                avatar: avatar,
              },
              {
                name: 'Иван',
                surname: 'Артемов',
                avatar: avatar,
              },
            ],
            messages: [
              {
                id: 1,
                user: {
                  name: 'Иван',
                  surname: 'Артемов',
                  avatar: avatar,
                },
                message:
                  'Также в книге много примеров того, как использовать принципы эргономики и психологии в дизайне, что также может быть полезным при создании сайтов и приложений. В целом, я считаю, что любая книга о дизайне может дать ценные идеи и вдохновение для работы.',
                likes: 123,
                replyes: 123,
                message_date: new Date().toUTCString(),
              },
            ],
          },
          {
            id: 4,
            user: {
              name: 'Иван',
              surname: 'Иванов',
              avatar: avatar,
            },
            title: 'Какие принципы из книги наиболее полезны?',
            creation_time: new Date().toUTCString(),
            discussion_tag: '“Дизайн привычных вещей” Дон Норман',
            description:
              'Какие принципы и идеи из книги вы считаете наиболее полезными для веб-дизайна? Было бы интересно услышать мнение других участников!',
            members: [
              {
                name: 'Иван',
                surname: 'Иванов',
                avatar: avatar,
              },
              {
                name: 'Иван',
                surname: 'Артемов',
                avatar: avatar,
              },
            ],
            messages: [
              {
                id: 1,
                user: {
                  name: 'Иван',
                  surname: 'Артемов',
                  avatar: avatar,
                },
                message:
                  'Также в книге много примеров того, как использовать принципы эргономики и психологии в дизайне, что также может быть полезным при создании сайтов и приложений. В целом, я считаю, что любая книга о дизайне может дать ценные идеи и вдохновение для работы.',
                likes: 123,
                replyes: 123,
                message_date: new Date().toUTCString(),
              },
            ],
          },
        ],
        pols: [
          {
            id: 1,
            isFinished: false,
            title: 'Выбираем формат встречи',
            description: 'Выбираем формат первой майской встречи',
            date: new Date().toUTCString(),
            votes_count: 5,
            vote_variants: [
              {
                id: 1,
                title: 'Онлайн 15.05',
              },
              { id: 2, title: 'Оффлайн 16.05' },
            ],
          },
          {
            id: 2,
            isFinished: true,
            title: 'Выбираем следующую книгу!',
            description: 'Выбираем книгу мая.',
            date: new Date().toUTCString(),
            votes_count: 10,
            vote_variants: [
              {
                id: 1,
                title: '“Эмоциональный веб-дизайн” Майк Монтейро',
                vote_percent: 30,
              },
              { id: 2, title: '«Ководство» Артемий Лебедев', vote_percent: 30 },
            ],
          },
          {
            id: 3,
            isFinished: true,
            title: 'Выбираем следующую книгу!',
            description: 'Выбираем книгу мая.',
            date: new Date().toUTCString(),
            votes_count: 10,
            vote_variants: [
              {
                id: 1,
                title: '“Эмоциональный веб-дизайн” Майк Монтейро',
                vote_percent: 30,
              },
              { id: 2, title: '«Ководство» Артемий Лебедев', vote_percent: 30 },
            ],
          },
        ],
        meetings: [
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
            meeting_date: new Date(2023, 6, 17).toUTCString(),
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
            id: 3,
            title: 'Дизайн привычных вещей',
            title_tag: '“Дизайн привычных вещей” Дон Норман',
            meeting_date: new Date(2023, 6, 17).toUTCString(),
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
        books: [
          {
            id: 1,
            title: 'Дизайн привычных вещей',
            rate: 4.9,
            author: 'Дон Норман',
            image: image1,
            book_filter: 'old',
          },
          {
            id: 2,
            title: 'Дизайн мышление',
            rate: 4,
            author: 'Тим Браун',
            image: image2,
            book_filter: 'present',
          },
          {
            id: 3,
            title: 'Рисовый штурм',
            rate: 3.9,
            author: 'Майкл Микалко',
            image: image3,
            book_filter: 'future',
          },
          {
            id: 4,
            title: 'О шрифте',
            rate: 4.3,
            author: 'Эрик Шпикерманн',
            image: image4,
            book_filter: 'old',
          },
        ],
        discussions: [
          {
            id: 1,
            user: {
              name: 'Иван',
              surname: 'Иванов',
              avatar: avatar,
            },
            discussion_tag: '“Дизайн привычных вещей” Дон Норман',
            title: 'Какие принципы из книги наиболее полезны?',
            creation_time: new Date().toUTCString(),
            description:
              'Какие принципы и идеи из книги вы считаете наиболее полезными для веб-дизайна? Было бы интересно услышать мнение других участников!',
            members: [
              {
                name: 'Иван',
                surname: 'Иванов',
                avatar: avatar,
              },
              {
                name: 'Иван',
                surname: 'Артемов',
                avatar: avatar,
              },
            ],
            messages: [
              {
                id: 1,
                user: {
                  name: 'Иван',
                  surname: 'Артемов',
                  avatar: avatar,
                },
                message:
                  'Также в книге много примеров того, как использовать принципы эргономики и психологии в дизайне, что также может быть полезным при создании сайтов и приложений. В целом, я считаю, что любая книга о дизайне может дать ценные идеи и вдохновение для работы.',
                likes: 123,
                replyes: 123,
                message_date: new Date().toUTCString(),
              },
            ],
          },
          {
            id: 2,
            user: {
              name: 'Иван',
              surname: 'Иванов',
              avatar: avatar,
            },
            title: 'Какие принципы из книги наиболее полезны?',
            creation_time: new Date().toUTCString(),
            discussion_tag: '“Дизайн мышление” Тим браун',
            description:
              'Какие принципы и идеи из книги вы считаете наиболее полезными для веб-дизайна? Было бы интересно услышать мнение других участников!',
            members: [
              {
                name: 'Иван',
                surname: 'Иванов',
                avatar: avatar,
              },
              {
                name: 'Иван',
                surname: 'Артемов',
                avatar: avatar,
              },
            ],
            messages: [
              {
                id: 1,
                user: {
                  name: 'Иван',
                  surname: 'Артемов',
                  avatar: avatar,
                },
                message:
                  'Также в книге много примеров того, как использовать принципы эргономики и психологии в дизайне, что также может быть полезным при создании сайтов и приложений. В целом, я считаю, что любая книга о дизайне может дать ценные идеи и вдохновение для работы.',
                likes: 123,
                replyes: 123,
                message_date: new Date().toUTCString(),
              },
            ],
          },
          {
            id: 3,
            user: {
              name: 'Иван',
              surname: 'Иванов',
              avatar: avatar,
            },
            title: 'Какие принципы из книги наиболее полезны?',
            creation_time: new Date().toUTCString(),
            discussion_tag: '“Дизайн привычных вещей” Дон Норман',
            description:
              'Какие принципы и идеи из книги вы считаете наиболее полезными для веб-дизайна? Было бы интересно услышать мнение других участников!',
            members: [
              {
                name: 'Иван',
                surname: 'Иванов',
                avatar: avatar,
              },
              {
                name: 'Иван',
                surname: 'Артемов',
                avatar: avatar,
              },
            ],
            messages: [
              {
                id: 1,
                user: {
                  name: 'Иван',
                  surname: 'Артемов',
                  avatar: avatar,
                },
                message:
                  'Также в книге много примеров того, как использовать принципы эргономики и психологии в дизайне, что также может быть полезным при создании сайтов и приложений. В целом, я считаю, что любая книга о дизайне может дать ценные идеи и вдохновение для работы.',
                likes: 123,
                replyes: 123,
                message_date: new Date().toUTCString(),
              },
            ],
          },
          {
            id: 4,
            user: {
              name: 'Иван',
              surname: 'Иванов',
              avatar: avatar,
            },
            title: 'Какие принципы из книги наиболее полезны?',
            creation_time: new Date().toUTCString(),
            discussion_tag: '“Дизайн привычных вещей” Дон Норман',
            description:
              'Какие принципы и идеи из книги вы считаете наиболее полезными для веб-дизайна? Было бы интересно услышать мнение других участников!',
            members: [
              {
                name: 'Иван',
                surname: 'Иванов',
                avatar: avatar,
              },
              {
                name: 'Иван',
                surname: 'Артемов',
                avatar: avatar,
              },
            ],
            messages: [
              {
                id: 1,
                user: {
                  name: 'Иван',
                  surname: 'Артемов',
                  avatar: avatar,
                },
                message:
                  'Также в книге много примеров того, как использовать принципы эргономики и психологии в дизайне, что также может быть полезным при создании сайтов и приложений. В целом, я считаю, что любая книга о дизайне может дать ценные идеи и вдохновение для работы.',
                likes: 123,
                replyes: 123,
                message_date: new Date().toUTCString(),
              },
            ],
          },
        ],
        pols: [
          {
            id: 1,
            isFinished: false,
            title: 'Выбираем формат встречи',
            description: 'Выбираем формат первой майской встречи',
            date: new Date().toUTCString(),
            votes_count: 5,
            vote_variants: [
              {
                id: 1,
                title: 'Онлайн 15.05',
              },
              { id: 2, title: 'Оффлайн 16.05' },
            ],
          },
          {
            id: 2,
            isFinished: true,
            title: 'Выбираем следующую книгу!',
            description: 'Выбираем книгу мая.',
            date: new Date().toUTCString(),
            votes_count: 10,
            vote_variants: [
              {
                id: 1,
                title: '“Эмоциональный веб-дизайн” Майк Монтейро',
                vote_percent: 30,
              },
              { id: 2, title: '«Ководство» Артемий Лебедев', vote_percent: 30 },
            ],
          },
          {
            id: 3,
            isFinished: true,
            title: 'Выбираем следующую книгу!',
            description: 'Выбираем книгу мая.',
            date: new Date().toUTCString(),
            votes_count: 10,
            vote_variants: [
              {
                id: 1,
                title: '“Эмоциональный веб-дизайн” Майк Монтейро',
                vote_percent: 30,
              },
              { id: 2, title: '«Ководство» Артемий Лебедев', vote_percent: 30 },
            ],
          },
        ],
        meetings: [
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
            meeting_date: new Date(2023, 6, 17).toUTCString(),
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
            id: 3,
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
                birth_date: new Date(2023, 6, 17).toUTCString(),
                role: 2,
              },
            ],
            description:
              'Обсудим знаменитую книгу Дона Нормана о том как создавать интуитивный дизайн, который нравится людям.',
            meeting_type: 'online',
          },
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
        books: [
          {
            id: 1,
            title: 'Дизайн привычных вещей',
            rate: 4.9,
            author: 'Дон Норман',
            image: image1,
            book_filter: 'old',
          },
          {
            id: 2,
            title: 'Дизайн мышление',
            rate: 4,
            author: 'Тим Браун',
            image: image2,
            book_filter: 'present',
          },
          {
            id: 3,
            title: 'Рисовый штурм',
            rate: 3.9,
            author: 'Майкл Микалко',
            image: image3,
            book_filter: 'future',
          },
          {
            id: 4,
            title: 'О шрифте',
            rate: 4.3,
            author: 'Эрик Шпикерманн',
            image: image4,
            book_filter: 'old',
          },
        ],
        discussions: [
          {
            id: 1,
            user: {
              name: 'Иван',
              surname: 'Иванов',
              avatar: avatar,
            },
            discussion_tag: '“Дизайн привычных вещей” Дон Норман',
            title: 'Какие принципы из книги наиболее полезны?',
            creation_time: new Date().toUTCString(),
            description:
              'Какие принципы и идеи из книги вы считаете наиболее полезными для веб-дизайна? Было бы интересно услышать мнение других участников!',
            members: [
              {
                name: 'Иван',
                surname: 'Иванов',
                avatar: avatar,
              },
              {
                name: 'Иван',
                surname: 'Артемов',
                avatar: avatar,
              },
            ],
            messages: [
              {
                id: 1,
                user: {
                  name: 'Иван',
                  surname: 'Артемов',
                  avatar: avatar,
                },
                message:
                  'Также в книге много примеров того, как использовать принципы эргономики и психологии в дизайне, что также может быть полезным при создании сайтов и приложений. В целом, я считаю, что любая книга о дизайне может дать ценные идеи и вдохновение для работы.',
                likes: 123,
                replyes: 123,
                message_date: new Date().toUTCString(),
              },
            ],
          },
          {
            id: 2,
            user: {
              name: 'Иван',
              surname: 'Иванов',
              avatar: avatar,
            },
            title: 'Какие принципы из книги наиболее полезны?',
            creation_time: new Date().toUTCString(),
            discussion_tag: '“Дизайн мышление” Тим браун',
            description:
              'Какие принципы и идеи из книги вы считаете наиболее полезными для веб-дизайна? Было бы интересно услышать мнение других участников!',
            members: [
              {
                name: 'Иван',
                surname: 'Иванов',
                avatar: avatar,
              },
              {
                name: 'Иван',
                surname: 'Артемов',
                avatar: avatar,
              },
            ],
            messages: [
              {
                id: 1,
                user: {
                  name: 'Иван',
                  surname: 'Артемов',
                  avatar: avatar,
                },
                message:
                  'Также в книге много примеров того, как использовать принципы эргономики и психологии в дизайне, что также может быть полезным при создании сайтов и приложений. В целом, я считаю, что любая книга о дизайне может дать ценные идеи и вдохновение для работы.',
                likes: 123,
                replyes: 123,
                message_date: new Date().toUTCString(),
              },
            ],
          },
          {
            id: 3,
            user: {
              name: 'Иван',
              surname: 'Иванов',
              avatar: avatar,
            },
            title: 'Какие принципы из книги наиболее полезны?',
            creation_time: new Date().toUTCString(),
            discussion_tag: '“Дизайн привычных вещей” Дон Норман',
            description:
              'Какие принципы и идеи из книги вы считаете наиболее полезными для веб-дизайна? Было бы интересно услышать мнение других участников!',
            members: [
              {
                name: 'Иван',
                surname: 'Иванов',
                avatar: avatar,
              },
              {
                name: 'Иван',
                surname: 'Артемов',
                avatar: avatar,
              },
            ],
            messages: [
              {
                id: 1,
                user: {
                  name: 'Иван',
                  surname: 'Артемов',
                  avatar: avatar,
                },
                message:
                  'Также в книге много примеров того, как использовать принципы эргономики и психологии в дизайне, что также может быть полезным при создании сайтов и приложений. В целом, я считаю, что любая книга о дизайне может дать ценные идеи и вдохновение для работы.',
                likes: 123,
                replyes: 123,
                message_date: new Date().toUTCString(),
              },
            ],
          },
          {
            id: 4,
            user: {
              name: 'Иван',
              surname: 'Иванов',
              avatar: avatar,
            },
            title: 'Какие принципы из книги наиболее полезны?',
            creation_time: new Date().toUTCString(),
            discussion_tag: '“Дизайн привычных вещей” Дон Норман',
            description:
              'Какие принципы и идеи из книги вы считаете наиболее полезными для веб-дизайна? Было бы интересно услышать мнение других участников!',
            members: [
              {
                name: 'Иван',
                surname: 'Иванов',
                avatar: avatar,
              },
              {
                name: 'Иван',
                surname: 'Артемов',
                avatar: avatar,
              },
            ],
            messages: [
              {
                id: 1,
                user: {
                  name: 'Иван',
                  surname: 'Артемов',
                  avatar: avatar,
                },
                message:
                  'Также в книге много примеров того, как использовать принципы эргономики и психологии в дизайне, что также может быть полезным при создании сайтов и приложений. В целом, я считаю, что любая книга о дизайне может дать ценные идеи и вдохновение для работы.',
                likes: 123,
                replyes: 123,
                message_date: new Date().toUTCString(),
              },
            ],
          },
        ],
        pols: [
          {
            id: 1,
            isFinished: false,
            title: 'Выбираем формат встречи',
            description: 'Выбираем формат первой майской встречи',
            date: new Date().toUTCString(),
            votes_count: 5,
            vote_variants: [
              {
                id: 1,
                title: 'Онлайн 15.05',
              },
              { id: 2, title: 'Оффлайн 16.05' },
            ],
          },
          {
            id: 2,
            isFinished: true,
            title: 'Выбираем следующую книгу!',
            description: 'Выбираем книгу мая.',
            date: new Date().toUTCString(),
            votes_count: 10,
            vote_variants: [
              {
                id: 1,
                title: '“Эмоциональный веб-дизайн” Майк Монтейро',
                vote_percent: 30,
              },
              { id: 2, title: '«Ководство» Артемий Лебедев', vote_percent: 30 },
            ],
          },
          {
            id: 3,
            isFinished: true,
            title: 'Выбираем следующую книгу!',
            description: 'Выбираем книгу мая.',
            date: new Date().toUTCString(),
            votes_count: 10,
            vote_variants: [
              {
                id: 1,
                title: '“Эмоциональный веб-дизайн” Майк Монтейро',
                vote_percent: 30,
              },
              { id: 2, title: '«Ководство» Артемий Лебедев', vote_percent: 30 },
            ],
          },
        ],
        meetings: [
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
            meeting_date: new Date(2023, 6, 17).toUTCString(),
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
            id: 3,
            title: 'Дизайн привычных вещей',
            title_tag: '“Дизайн привычных вещей” Дон Норман',
            meeting_date: new Date(2023, 6, 17).toUTCString(),
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
        books: [
          {
            id: 1,
            title: 'Дизайн привычных вещей',
            rate: 4.9,
            author: 'Дон Норман',
            image: image1,
            book_filter: 'old',
          },
          {
            id: 2,
            title: 'Дизайн мышление',
            rate: 4,
            author: 'Тим Браун',
            image: image2,
            book_filter: 'present',
          },
          {
            id: 3,
            title: 'Рисовый штурм',
            rate: 3.9,
            author: 'Майкл Микалко',
            image: image3,
            book_filter: 'future',
          },
          {
            id: 4,
            title: 'О шрифте',
            rate: 4.3,
            author: 'Эрик Шпикерманн',
            image: image4,
            book_filter: 'old',
          },
        ],
        discussions: [
          {
            id: 1,
            user: {
              name: 'Иван',
              surname: 'Иванов',
              avatar: avatar,
            },
            discussion_tag: '“Дизайн привычных вещей” Дон Норман',
            title: 'Какие принципы из книги наиболее полезны?',
            creation_time: new Date().toUTCString(),
            description:
              'Какие принципы и идеи из книги вы считаете наиболее полезными для веб-дизайна? Было бы интересно услышать мнение других участников!',
            members: [
              {
                name: 'Иван',
                surname: 'Иванов',
                avatar: avatar,
              },
              {
                name: 'Иван',
                surname: 'Артемов',
                avatar: avatar,
              },
            ],
            messages: [
              {
                id: 1,
                user: {
                  name: 'Иван',
                  surname: 'Артемов',
                  avatar: avatar,
                },
                message:
                  'Также в книге много примеров того, как использовать принципы эргономики и психологии в дизайне, что также может быть полезным при создании сайтов и приложений. В целом, я считаю, что любая книга о дизайне может дать ценные идеи и вдохновение для работы.',
                likes: 123,
                replyes: 123,
                message_date: new Date().toUTCString(),
              },
            ],
          },
          {
            id: 2,
            user: {
              name: 'Иван',
              surname: 'Иванов',
              avatar: avatar,
            },
            title: 'Какие принципы из книги наиболее полезны?',
            creation_time: new Date().toUTCString(),
            discussion_tag: '“Дизайн мышление” Тим браун',
            description:
              'Какие принципы и идеи из книги вы считаете наиболее полезными для веб-дизайна? Было бы интересно услышать мнение других участников!',
            members: [
              {
                name: 'Иван',
                surname: 'Иванов',
                avatar: avatar,
              },
              {
                name: 'Иван',
                surname: 'Артемов',
                avatar: avatar,
              },
            ],
            messages: [
              {
                id: 1,
                user: {
                  name: 'Иван',
                  surname: 'Артемов',
                  avatar: avatar,
                },
                message:
                  'Также в книге много примеров того, как использовать принципы эргономики и психологии в дизайне, что также может быть полезным при создании сайтов и приложений. В целом, я считаю, что любая книга о дизайне может дать ценные идеи и вдохновение для работы.',
                likes: 123,
                replyes: 123,
                message_date: new Date().toUTCString(),
              },
            ],
          },
          {
            id: 3,
            user: {
              name: 'Иван',
              surname: 'Иванов',
              avatar: avatar,
            },
            title: 'Какие принципы из книги наиболее полезны?',
            creation_time: new Date().toUTCString(),
            discussion_tag: '“Дизайн привычных вещей” Дон Норман',
            description:
              'Какие принципы и идеи из книги вы считаете наиболее полезными для веб-дизайна? Было бы интересно услышать мнение других участников!',
            members: [
              {
                name: 'Иван',
                surname: 'Иванов',
                avatar: avatar,
              },
              {
                name: 'Иван',
                surname: 'Артемов',
                avatar: avatar,
              },
            ],
            messages: [
              {
                id: 1,
                user: {
                  name: 'Иван',
                  surname: 'Артемов',
                  avatar: avatar,
                },
                message:
                  'Также в книге много примеров того, как использовать принципы эргономики и психологии в дизайне, что также может быть полезным при создании сайтов и приложений. В целом, я считаю, что любая книга о дизайне может дать ценные идеи и вдохновение для работы.',
                likes: 123,
                replyes: 123,
                message_date: new Date().toUTCString(),
              },
            ],
          },
          {
            id: 4,
            user: {
              name: 'Иван',
              surname: 'Иванов',
              avatar: avatar,
            },
            title: 'Какие принципы из книги наиболее полезны?',
            creation_time: new Date().toUTCString(),
            discussion_tag: '“Дизайн привычных вещей” Дон Норман',
            description:
              'Какие принципы и идеи из книги вы считаете наиболее полезными для веб-дизайна? Было бы интересно услышать мнение других участников!',
            members: [
              {
                name: 'Иван',
                surname: 'Иванов',
                avatar: avatar,
              },
              {
                name: 'Иван',
                surname: 'Артемов',
                avatar: avatar,
              },
            ],
            messages: [
              {
                id: 1,
                user: {
                  name: 'Иван',
                  surname: 'Артемов',
                  avatar: avatar,
                },
                message:
                  'Также в книге много примеров того, как использовать принципы эргономики и психологии в дизайне, что также может быть полезным при создании сайтов и приложений. В целом, я считаю, что любая книга о дизайне может дать ценные идеи и вдохновение для работы.',
                likes: 123,
                replyes: 123,
                message_date: new Date().toUTCString(),
              },
            ],
          },
        ],
        pols: [
          {
            id: 1,
            isFinished: false,
            title: 'Выбираем формат встречи',
            description: 'Выбираем формат первой майской встречи',
            date: new Date().toUTCString(),
            votes_count: 5,
            vote_variants: [
              {
                id: 1,
                title: 'Онлайн 15.05',
              },
              { id: 2, title: 'Оффлайн 16.05' },
            ],
          },
          {
            id: 2,
            isFinished: true,
            title: 'Выбираем следующую книгу!',
            description: 'Выбираем книгу мая.',
            date: new Date().toUTCString(),
            votes_count: 10,
            vote_variants: [
              {
                id: 1,
                title: '“Эмоциональный веб-дизайн” Майк Монтейро',
                vote_percent: 30,
              },
              { id: 2, title: '«Ководство» Артемий Лебедев', vote_percent: 30 },
            ],
          },
          {
            id: 3,
            isFinished: true,
            title: 'Выбираем следующую книгу!',
            description: 'Выбираем книгу мая.',
            date: new Date().toUTCString(),
            votes_count: 10,
            vote_variants: [
              {
                id: 1,
                title: '“Эмоциональный веб-дизайн” Майк Монтейро',
                vote_percent: 30,
              },
              { id: 2, title: '«Ководство» Артемий Лебедев', vote_percent: 30 },
            ],
          },
        ],
        meetings: [
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
            meeting_date: new Date(2023, 6, 17).toUTCString(),
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
            id: 3,
            title: 'Дизайн привычных вещей',
            title_tag: '“Дизайн привычных вещей” Дон Норман',
            meeting_date: new Date(2023, 6, 17).toUTCString(),
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
      },
    ],
  } as initialStateType,
  reducers: {
    // присоединение к клубу. Функция принимает структуру клуба и пользователя
    // структура клуба просто добавляется в массив myClubs, а структура юзера используется
    // для того, чтобы добавить его в поле member в структуре всех клубов и общей страницы клуба.
    // Находим нужный клуб по id и потом в массив добавляем нашего пользователя

    connetToClub: (
      state,
      { payload }: PayloadAction<{ club: BookClubType; user: UserFullInfoType }>
    ) => {
      state.myClubs.push(payload.club);
      state.fullBookClubInfo = state.fullBookClubInfo.map((el) => {
        if (el.id === payload.club.id) {
          el.members.push(payload.user);
        }

        return el;
      });

      state.clubs = state.clubs.map((el) => {
        if (el.id === payload.club.id) {
          el.members.push(payload.user);
        }

        return el;
      });
    },

    // выход из клуба. Работа аналогична функции добавления, тольк здесь мы с помощью filter наоборот убираем данныее из масивов

    leaveFromClub: (
      state,
      { payload }: PayloadAction<{ user: UserFullInfoType; id: number }>
    ) => {
      state.myClubs = state.myClubs.filter((el) => el.id !== payload.id);
      state.fullBookClubInfo = state.fullBookClubInfo.map((el) => {
        if (el.id === payload.id) {
          el.members = el.members.filter((elem) => elem.id !== payload.user.id);
        }

        return el;
      });

      state.clubs = state.clubs.map((el) => {
        if (el.id === payload.id) {
          el.members = el.members.filter((elem) => elem.id !== payload.user.id);
        }

        return el;
      });
    },

    // Получение отфилтрованных книг по фильтру (читали ранее и тд). Функция принимает id клуба и фильтр
    // после того, как мы нашли клуб, находим только те элементы, у которых фильтр равен тому, что мы передали ранее

    getFilteredBooks: (
      state,
      { payload }: PayloadAction<{ filter: string; id: number }>
    ) => {
      state.filtered_data = state.fullBookClubInfo.filter((el) => {
        if (el.id === payload.id) {
          el.books = el.books.filter(
            (book) => book.book_filter === payload.filter
          );
        }

        return el;
      });
    },

    // Добавление новых сообщений в обсуждение. В качестве входных параметров у нас выступает id клуба
    // id обсуждения и модель нового сообщения. В начале мы находим нужный клуб, потом нужное обсуждение и в массив сообщений
    // добавляем новое сообщение

    addMessageToDiscuussion: (
      state,
      {
        payload,
      }: PayloadAction<{
        club_id: number;
        discussion_id: number;
        message: DiscussionMessageType;
      }>
    ) => {
      console.log(payload);

      state.fullBookClubInfo = state.fullBookClubInfo.map((el) => {
        if (el.id === payload.club_id) {
          el.discussions = el.discussions.map((elem) => {
            if (elem.id === payload.discussion_id) {
              payload.message.id =
                elem.messages[elem.messages.length - 1].id + 1;
              elem.messages.push(payload.message);
            }

            return elem;
          });
        }

        return el;
      });
    },
  },
});

// экспортируем все функции, чтобы их можно было использовать в других файлах

export const {
  connetToClub,
  leaveFromClub,
  getFilteredBooks,
  addMessageToDiscuussion,
} = booksClubSlice.actions;

export default booksClubSlice.reducer;
