import { createSlice } from '@reduxjs/toolkit';
import { BookCardType, BookTags, BookType } from 'shared/types';
import img1 from 'assets/images/books/pic1.png';
import img2 from 'assets/images/books/pic2.png';
import img3 from 'assets/images/books/pic3.png';
import img4 from 'assets/images/books/pic4.png';

type initialStateType = {
  books: BookType[];
  book_cards: BookCardType[];
};

// начальные данные books - книги целиком, book_cards - массив с данными только для краточек книги 

export const bookSlice = createSlice({
  name: 'book',
  initialState: {
    books: [
      {
        id: 1,
        image: img1,
        description:
          'Норман рассматривает обычные ошибки пользователей и предлагает дизайнерам различные способы предотвратить их. Он объясняет основные требования пользователей и знакомит читателя с классическими ошибками дизайнеров.',
        rate: 4.9,
        author: 'Дон Норман',
        title: 'Дизайн привычных вещей',
        book_number: 'ISBN: 978-5-00195-363-0',
        book_tags: [
          BookTags.design,
          BookTags.creative_thinking,
          BookTags.creativity,
        ],
      },
      {
        id: 2,
        image: img2,
        title: 'Дизайн мышление',
        rate: 4,
        author: 'Тим Браун',
        description:
          'Дизайн-мышление — это фундамент по-настоящему инновационной компании и важнейшее деловое качество ее лидера. Кто знает, быть может в следующей книге Брауна вы прочтете историю собственного успеха? Все в ваших руках!',
        book_number: 'ISBN: 978-5-00195-363-0',
        book_tags: [BookTags.design, BookTags.business, BookTags.creativity],
      },
      {
        id: 3,
        title: 'Рисовый штурм',
        rate: 3.9,
        author: 'Майкл Микалко',
        image: img3,
        description:
          'Майкл Микалко, один из ведущих экспертов по креативности в мире, в своей книге собрал и систематизировал стратегии творческого мышления. Вы узнаете об уникальных техниках и упражнениях, развивающих мыслительные способности, а также найдете множество интересных задач, игр и головоломок на нестандартное мышление. Примеры творческих прорывов из истории, изменивших наш мир, вдохновят вас на практическое применение этих методов и помогут вам активизировать ваше творческое «я».',
        book_number: 'ISBN: 978-5-00195-363-0',
        book_tags: [
          BookTags.design,
          BookTags.creative_thinking,
          BookTags.creativity,
        ],
      },
      {
        id: 4,
        title: 'О шрифте',
        rate: 4.3,
        author: 'Эрик Шпикерманн',
        image: img4,
        book_number: 'ISBN: 978-5-00195-363-0',
        description:
          'Шрифт сопровождает нас везде: на упаковках продуктов, вывесках, экранах телевизоров и смартфонов. Немецкий дизайнер Эрик Шпикерманн научит разбираться в тонкостях типографики и общаться с помощью этого неотъемлемого элемента нашей жизни более эффективно.',
        book_tags: [
          BookTags.design,
          BookTags.creative_thinking,
          BookTags.creativity,
        ],
      },
    ],
    book_cards: [
      {
        id: 1,
        title: 'Дизайн привычных вещей',
        rate: 4.9,
        author: 'Дон Норман',
        image: img1,
      },
      {
        id: 2,
        title: 'Дизайн мышление',
        rate: 4,
        author: 'Тим Браун',
        image: img2,
      },
      {
        id: 3,
        title: 'Рисовый штурм',
        rate: 3.9,
        author: 'Майкл Микалко',
        image: img3,
      },
      {
        id: 4,
        title: 'О шрифте',
        rate: 4.3,
        author: 'Эрик Шпикерманн',
        image: img4,
      },
    ],
  } as initialStateType,
  reducers: {},
});

export default bookSlice.reducer;
