export const formattedDate = (date: string) => {
  const currentDate = new Date(date).toLocaleString('en', {
    dateStyle: 'long',
  });

  const splitedDate = currentDate.split(',');

  return `${splitedDate[0]}th, ${splitedDate[1]}`;
};
