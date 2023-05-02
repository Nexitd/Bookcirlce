import { ReactNode } from 'react';

// Sidebar types

export type SidebarItemsType = {
  id: number;
  title: string;
  children: SidebarItemsType[];
  to: string;
  icon: ReactNode;
};

// User and account types

export type UserFullInfoType = {
  id: number;
  name: string;
  surname: string;
  birth_date: Date | string;
  avatar: string;
  email: string;
  sex: 'мужской' | 'женский';
  role: number;
};

export type UserAuthDataType = {
  email: string;
  password: string;
};

type obj = {
  [key: number]: 'guest' | 'member' | 'moder';
};

export const ACCOUNT_TYPE: obj = {
  0: 'guest',
  1: 'member',
  2: 'moder',
};

export type UserRegistrationDataType = Pick<
  UserFullInfoType,
  'email' | 'name' | 'surname' | 'birth_date'
> & { role: 0 | 1 | 2; password: string };

// Notification types

export type NotificationType = {
  id: number;
  title: string;
  description: string;
  date: any;
  club: string;
  notification_type: string;
  notification_category: 'new_user' | 'broadcast' | 'survey';
};

// Meet Types

export type MeetType = {
  id: number;
  members: UserFullInfoType[];
  meeting_date: Date | string;
  title: string;
  description: string;
  title_tag: string;
  meeting_type: 'online' | 'offline';
};

// Books Clubs types

export enum BookClubCategoriesTypeDefinition {
  art = 'Художественные',
  psychology = 'Психология',
  business = 'Бизнес',
  self_development = 'Саморазвитие',
  programming = 'Программирование',
  design = 'Дизайн',
  scientific = 'Научная',
  literature = 'Художественная литература',
}

export type BookClubType = {
  id: number;
  title: string;
  image: string;
  address: string;
  meeting_type: 'online' | 'offline';
  category: BookClubCategoriesTypeDefinition[];
  members: UserFullInfoType[];
  description: string;
  books: (BookCardType & { date: Date | string })[];
};

export type FullBookClubInfoType = {
  id: number;
  title: string;
  image: string;
  address: string;
  meeting_type: 'online' | 'offline';
  category: BookClubCategoriesTypeDefinition[];
  members: UserFullInfoType[];
  description: string;
  books: (BookCardType & { date: Date | string })[];
  meetings: MeetType[];
  discussions: DiscussionType[];
  pols: PolType[];
};

// Stream

export type StreamType = {
  id: number;
  streamTitle: string;
  messages: (StreamItemMessageType & { id: number })[];
  members: UserFullInfoType[];
  isGoing: boolean;
};

export type StreamItemMessageType = {
  name: string;
  surname: string;
  message: string;
};

// Book

export enum BookGenre {
  foreign_literature = 'Зарубежная литература',
  fantasy = 'Фэнтези',
  roman = 'Роман',
  russian_literature = 'Русская литература',
  detective = 'Детектив',
  fantastic = 'Фантастика',
  poem = 'Поэма',
}

export enum BookCategory {
  art = 'Художественная',
  psychology = 'Психология',
  business = 'Бизнес',
  self_development = 'Саморазвитие',
  programming = 'Программирование',
  design = 'Дизайн',
  scientific = 'Научная',
}

export enum BookTags {
  design = 'Дизайн',
  creativity = 'Креативность',
  creative_thinking = 'Творческое мышление',
  business = 'Бизнес',
}

export type BookType = {
  id: number;
  image: string;
  title: string;
  description: string;
  rate: number;
  author: string;
  book_number: string;
  book_tags: BookTags[];
  book_filter: string;
};

export type BookCardType = Pick<
  BookType,
  'image' | 'author' | 'title' | 'rate' | 'book_filter'
> & { id: number };

// Discuussion

export type DiscussionMessageType = {
  id: number;
  message_date: Date | string;
  message: string;
  likes: number;
  replyes: number;
  user: Pick<UserFullInfoType, 'name' | 'surname' | 'avatar'>;
};

export type DiscussionType = {
  id: number;
  title: string;
  description: string;
  messages: DiscussionMessageType[];
  user: Pick<UserFullInfoType, 'name' | 'surname' | 'avatar'>;
  creation_time: Date | string;
  discussion_tag: string;
  members: Pick<UserFullInfoType, 'name' | 'surname' | 'avatar'>[];
};

// Pols

export type PolVoteType = {
  id: number;
  title: string;
  vote_percent?: number;
};

export type PolType = {
  id: number;
  title: string;
  date: Date | string;
  votes_count: number;
  description: string;
  vote_variants: PolVoteType[];
  isFinished: boolean;
};
