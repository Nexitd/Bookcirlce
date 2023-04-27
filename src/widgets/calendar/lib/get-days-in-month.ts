export const getDaysInMonth = (date: any) => {
  const month = date.getMonth();
  const year = date.getFullYear();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const days = [];
  
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(new Date(year, month, i));
  }

  return days;
};
