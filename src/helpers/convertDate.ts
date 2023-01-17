export const convertedDate = (date: string) => {
  const currentDate = new Date(date)
    .toLocaleDateString('en-us', { year: 'numeric', month: 'long', day: 'numeric' });

  const splitedDate = currentDate.split(',');

  return `${splitedDate[0]}th, ${splitedDate[1]}`;
};
