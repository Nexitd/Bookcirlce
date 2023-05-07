// это логика для того типа слайдеров, где может скролиться один блок, в котором находится три блока
export const dataSlice = (arr: any[], chunkSize: number) => {
  const data = [];

  for (let i = 0; i < arr.length; i += chunkSize) {
    const chunk = arr.slice(i, i + chunkSize);
    data.push(chunk);
  }

  const res = data.map((el) => {
    return <div className="slice__container">{el}</div>;
  });

  return res;
};
