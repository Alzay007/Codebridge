export const slicedText = (str: string) => {
  if (str !== null) {
    return str.length > 100 ? str.slice(0, 100) + "..." : str;
  }
};