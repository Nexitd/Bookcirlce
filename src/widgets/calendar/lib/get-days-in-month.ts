export const getDaysInMonth = (date: any) => {
  // месяц
  const month = date.getMonth();
  // год
  const year = date.getFullYear();
  // дней в месяцк
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const days = [];

  for (let i = 1; i <= daysInMonth; i++) {
    days.push(new Date(year, month, i));
  }

  return days;
};
