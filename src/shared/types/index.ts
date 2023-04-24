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
  notification_type: 'new' | 'old';
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
};

// Stream
export type StreamItemMessageType = {
  id?: number;
  name: string;
  surname: string;
  message: string;
};
